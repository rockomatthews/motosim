import { Nav, Footer } from "@/components/Nav";
export const metadata = { title: "Contribution terms & privacy" };
export default function Terms() {
  return (
    <>
      <Nav />
      <main className="document section-pad terms">
        <span className="eyebrow">MOTOSIM / SUPPORTER INFORMATION</span>
        <h1>
          Clear terms.
          <br />
          <em>A shared starting line.</em>
        </h1>
        <p>
          Last updated November 7, 2026. Project contact: Rob Matthews, Park
          City, Utah, United States. Email{" "}
          <a href="mailto:rob@rocketship.codes">rob@rocketship.codes</a>.
          Questions about business funding, partnerships or these terms should
          go directly to Rob.
        </p>
        <h2>What your contribution supports</h2>
        <p>
          Contributions fund experimental motorcycle-simulator development,
          including engineering review, component testing, fabrication and
          initial evaluation. MotoSIM is at the pre-hardware stage. Technical
          feasibility, final cost, real-world training benefit and production
          are unproven.
        </p>
        <p>
          A contribution is not a simulator purchase, reservation, equity
          investment, loan, charitable contribution or tax-deductible gift. No
          hardware, financial return, production date, riding instruction,
          physical test session or delivery priority is included. The campaign
          is not all-or-nothing or escrowed. Funds may be used before the target
          is reached.
        </p>
        <h2>Digital and community benefits</h2>
        <ul>
          <li>
            <b>$25 Pit crew:</b> a digital founding-supporter badge and
            quarterly prototype progress emails.
          </li>
          <li>
            <b>$100 Founding rider:</b> Pit crew benefits, invitations to online
            design briefings and optional recognition on a digital founders
            wall.
          </li>
          <li>
            <b>$500 Apex partner:</b> Founding rider benefits, one private
            30-minute virtual build walkthrough and optional recognition in the
            prototype build report.
          </li>
        </ul>
        <p>
          Planned fulfillment: badge within 30 days of payment; first progress
          update, briefing invitation or walkthrough scheduling within 90 days.
          Briefings are shared online events; the walkthrough is a virtual
          project update, not confidential access or technical consulting.
          Timing may change with development; contact Rob for status or if a
          stated benefit is unavailable. Public recognition is opt-in. These
          benefits do not guarantee continued development or successful
          production.
        </p>
        <h2>Changes, cancellation and refunds</h2>
        <p>
          Development can change, pause or fail. Contributions may be spent on
          work that does not produce a finished simulator. Quarterly updates are
          planned while funded development is active. Material scope changes or
          a decision to stop will be explained to supporters.
        </p>
        <p>
          You may request cancellation and a refund within 14 days of payment by
          emailing Rob with your Stripe receipt reference. Refunds after that
          period are considered case by case, including where promised
          digital/community benefits cannot be provided. Applicable consumer
          rights are unaffected. Refunds are made to the original payment
          method; processing time depends on Stripe and your bank.
        </p>
        <p>
          If the project is discontinued, Rob will report completed spending and
          the treatment of remaining uncommitted contributions, with refund
          requests considered before any unrelated use. There is no guarantee
          that already spent development funds can be recovered. No recurring
          charge is created by these contribution tiers.
        </p>
        <h2>Funding totals</h2>
        <p>
          The meter counts successful USD campaign payments less refunds and
          disputed charges, as reported by Stripe. It excludes unrelated
          payments and does not count abandoned checkouts. Test-mode totals are
          labeled. Totals may lag, and processor fees are not deducted from the
          displayed amount. The $10,000 campaign target is a gross contribution
          target; spendable cash may be lower.
        </p>
        <h2 id="privacy">Privacy & contact requests</h2>
        <p>
          The contact form asks for your name, email, area of interest and
          message, plus consent to send them to Rob for a reply. Resend
          processes the message for delivery to rob@rocketship.codes. Do not
          submit sensitive personal information. A contact inquiry does not
          subscribe you to marketing.
        </p>
        <p>
          Stripe processes card details on its hosted checkout; MotoSIM does not
          receive your full card number. Stripe’s payment record includes your
          contribution tier, receipt email and payment status. Rob uses these to
          reconcile contributions, respond to issues and coordinate supporter
          benefits. Contribution-tier progress emails are part of the stated
          benefit; you can opt out by contacting Rob. Public recognition
          requires separate opt-in.
        </p>
        <p>
          Hosting and service providers may process technical request logs for
          delivery, security and troubleshooting. Form messages are retained in
          Rob’s mailbox as needed to handle the inquiry and associated business
          records; payment records are retained as required for accounting and
          applicable obligations. To request access, correction or deletion,
          email Rob. Some transaction records may need to be retained.
        </p>
        <p>
          Your music mute preference is saved locally in your browser. The site includes locally hosted stock racing media, locally hosted
          Barlow fonts and a 3D concept. This build does not install marketing
          analytics, advertising pixels or a newsletter subscription. External
          sites have their own privacy policies.
        </p>
        <h2>Product & brand notices</h2>
        <p>
          The product is an experimental entertainment concept and is not
          certified rider training. VR, moving hardware and powered controls
          require defined safety limits and independent review. Real-world
          instruction and protective equipment remain essential.
        </p>
        <p>
          MotoSIM uses the project’s supplied racing-inspired mark. MotoSIM has no
          claimed affiliation, license or endorsement from MotoGP, Dorna, MOZA,
          competing manufacturers, depicted riders or stock-media brands.
          Product names identify sources or research candidates only.
        </p>
        <a className="button red" href="/#funding">
          BACK TO THE CAMPAIGN ↗
        </a>
      </main>
      <Footer />
    </>
  );
}
