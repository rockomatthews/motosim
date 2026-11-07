import { Nav, Footer } from "@/components/Nav";
import { stripe } from "@/lib/server";
import { CAMPAIGN } from "@/lib/campaign.mjs";
export const dynamic = "force-dynamic";
export default async function Thanks({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  let verified = false,
    test = false;
  const client = stripe();
  if (
    client &&
    session_id &&
    /^cs_(test_|live_)?[a-zA-Z0-9]+$/.test(session_id)
  ) {
    try {
      const session = await client.checkout.sessions.retrieve(session_id);
      verified =
        session.payment_status === "paid" &&
        session.metadata?.campaign === CAMPAIGN;
      test = !session.livemode;
    } catch {}
  }
  return (
    <>
      <Nav />
      <main className="document section-pad">
        <span className="eyebrow">THE NEXT LAP</span>
        <h1>
          {verified
            ? test
              ? "Test checkout complete."
              : "You’re part of the build."
            : "Let’s verify your contribution."}
        </h1>
        <p>
          {verified
            ? test
              ? "This was a Stripe test payment. No real funding was collected."
              : "Stripe confirms your contribution. Thank you for supporting MotoSIM. Keep your Stripe receipt; we will use the checkout email to coordinate your tier benefits."
            : "We have not confirmed a paid MotoSIM checkout for this visit. Check your Stripe receipt or contact Rob before retrying a payment."}
        </p>
        <a className="button red" href="/#funding">
          RETURN TO THE BUILD ↗
        </a>
        <a className="text-link" href="mailto:rob@rocketship.codes">
          Contact Rob about your contribution ↗
        </a>
      </main>
      <Footer />
    </>
  );
}
