import { stripe, siteOrigin, validOrigin, readBody } from "@/lib/server";
import { CAMPAIGN, validateContribution } from "@/lib/campaign.mjs";
export async function POST(request: Request) {
  if (!validOrigin(request))
    return Response.json(
      { error: "Please contribute from the MotoSIM website." },
      { status: 403 },
    );
  const client = stripe();
  if (!client || process.env.FUNDING_ENABLED !== "true")
    return Response.json(
      {
        error:
          "Online contributions are not open yet. Contact Rob to support the prototype.",
      },
      { status: 503 },
    );
  try {
    const body = await readBody(request);
    const tier = validateContribution(body);
    if (!tier)
      return Response.json(
        {
          error:
            "Choose a contribution tier and accept the contribution terms.",
        },
        { status: 400 },
      );
    if (
      typeof body.requestId !== "string" ||
      !/^[\da-f-]{36}$/i.test(body.requestId)
    )
      return Response.json(
        { error: "Please refresh and try again." },
        { status: 400 },
      );
    const origin = siteOrigin(request);
    const session = await client.checkout.sessions.create(
      {
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: tier.amount,
              product_data: {
                name: `MotoSIM — ${tier.name}`,
                description:
                  "Prototype development contribution. No hardware, equity, tax deduction, or guaranteed delivery.",
              },
            },
            quantity: 1,
          },
        ],
        metadata: { campaign: CAMPAIGN, tier: tier.id },
        payment_intent_data: {
          metadata: { campaign: CAMPAIGN, tier: tier.id },
        },
        success_url: `${origin}/thanks?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/?checkout=cancelled#funding`,
        custom_text: {
          submit: {
            message:
              "Supports experimental development. Includes digital/community recognition only. See MotoSIM contribution terms.",
          },
        },
      },
      { idempotencyKey: `motosim-${tier.id}-${body.requestId}` },
    );
    return Response.json({ url: session.url });
  } catch {
    return Response.json(
      {
        error:
          "We could not start checkout. No payment was taken here. Please try again or contact Rob.",
      },
      { status: 502 },
    );
  }
}
