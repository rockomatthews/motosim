import { stripe } from "@/lib/server";
import { CAMPAIGN, GOAL_CENTS, netContribution } from "@/lib/campaign.mjs";
export const revalidate = 60;
export async function GET() {
  const client = stripe();
  const base = {
    goal: GOAL_CENTS,
    enabled: !!client && process.env.FUNDING_ENABLED === "true",
  };
  if (!client)
    return Response.json({
      ...base,
      amount: null,
      backers: null,
      status: "not-connected",
    });
  try {
    let amount = 0,
      backers = 0;
    // PaymentIntent is the durable ledger: retries cannot count the same payment twice.
    // Expanded charges allow refunds and disputes to be removed from the public total.
    for await (const intent of client.paymentIntents.list({
      limit: 100,
      created: { gte: Number(process.env.CAMPAIGN_START || 1794009600) },
      expand: ["data.latest_charge"],
    })) {
      if (intent.metadata.campaign !== CAMPAIGN) continue;
      const net = netContribution(intent);
      amount += net;
      if (net > 0) backers++;
    }
    return Response.json(
      {
        ...base,
        amount,
        backers,
        status: process.env.STRIPE_SECRET_KEY?.includes("_test_")
          ? "test"
          : "live",
        updatedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      },
    );
  } catch {
    return Response.json(
      { ...base, amount: null, backers: null, status: "unavailable" },
      { status: 503 },
    );
  }
}
