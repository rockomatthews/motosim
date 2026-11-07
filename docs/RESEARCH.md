# Research brief — November 7, 2026

The investor-facing plan with clickable citations is implemented at `/plan`. This file records scope and confidence for future edits.

## Prior work incorporated

The user explicitly requested the earlier motorcycle-simulator chat. Its recent turn and the local engineering README, research report and selected buy plan were reviewed. Public site content uses a summary of project preparation, the $9,530.06 unquoted plan, $10,000 cap, under-$2,000 consumer target, supported lean, steering feedback and the planned 12-rider feasibility study. Private supplier messages, addresses, source firmware and engineering files were not copied to this public repository. Seven RFQs were previously sent; no accepted quotation or current reply status was verified here.

## Primary public evidence reviewed

1. NHTSA motorcycle safety: https://www.nhtsa.gov/road-safety/motorcycles — current 2024 data, 6,228 fatalities and almost 27× relative per-mile fatality risk. Establishes context, not product efficacy.
2. Moto Trainer: https://motorbikesimulator.com/ — existing commercial simulator offering.
3. LeanGP home category: https://leangp.com/en/product-category/home/ — €1,899 list price at review. Not a verified delivered quote.
4. TRZ: https://trakracer.com/products/trz-motorbike-racing-simulator — existing home-oriented manufacturer offering.
5. MOZA: https://us.mozaracing.com/pages/moto-gp — announced handlebars, modes and title support; “Notify Me” flow at review. No shipment or compatibility testing by us.
6. Westerhof et al. 2019: https://arendschwab.com/assets/pdf/westerhof2019evaluation.pdf — full text, high-end motion/VR system, 16 recruited and 14 completing path-following; performance/subjective findings cannot establish consumer product training transfer.
7. Hatakeyama et al. 2025: https://www.jstage.jst.go.jp/article/mej/12/5/12_25-00135/_article — publisher abstract only; steering-input formulation matters. No implementation or efficacy claim derived from unreviewed methods.
8. Speed Trap: https://www.speedtrapracing.com/ — operating venue, car simulators, leaderboards, restaurant and groups. Financial/visitor metrics not supplied.
9. FTC origin guidance: https://www.ftc.gov/business-guidance/resources/complying-made-usa-standard — imports mean local assembly is not proof of an unqualified origin claim.
10. Pexels page/license listed in ASSETS.md — website use permitted, no endorsement implication.

Carried forward but not newly hardware-verified: official GP Bikes SDK and MOZA emergency-stop modes. The newer MDPI repeated-route paper from the previous research was inaccessible (429); not relied on for claims. The prior 24-record evidence register is a lead corpus, not newly revalidated systematic-review evidence.

## Management assumptions, not research facts

- $1,999 target retail; 35% target gross margin; $1,299 approximate delivered-cost ceiling derived from those targets.
- $75,000 illustrative fixed launch costs in the scenario calculator, not a requested funding amount or vendor estimate.
- 30 discovery interviews, 100 qualified expressions of interest, 12 initial riders; no achieved counts claimed.
- Planning weeks after funding and proposed exit criteria; not promised delivery dates.
- U.S. manufacturing ambition and digital supporter-benefit schedule; final sourcing and owner fulfillment pending.

## Implementation documentation consulted

Official Next.js App Router/route handler docs, Theatre.js core/sequences docs, Stripe Checkout and PaymentIntent API references, and Resend send-email/idempotency docs. No secrets or third-party code samples with credentials are included.

## Product scope revision — November 7, 2026

The owner now requires left/right roll AND front/back pitch, with rider-position-aware braking and acceleration cues. The desired experience is physically demanding and makes abrupt inputs and poor body preparation consequential. Controlled forces/travel, rider support, adjustable intensity and independent stop behavior for every powered axis are design requirements; actual ejection is a failure condition. No hardware control or actuator implementation was added by this website change.

The earlier $9,530.06 supported-roll budget is a historical baseline, not a quote or complete cost for this expanded scope. Pitch mechanics, additional actuation if selected, motion-control integration, fore/aft sensing, combined-axis review and validation require revised scope and quotes. The $10,000 campaign remains a first funding milestone rather than a confirmed complete-system build price. The sub-$2,000 retail target also needs reassessment.

The 3D illustration now includes independent roll/pitch controls and cinematic pitch motion. Its numeric slider ranges are visual offsets only, not proposed hardware ratings or safe operating settings. Final mechanism, motion limits and actuation remain unselected. The underlying private engineering package was not modified or fabricated.

The previously cited Westerhof paper was reopened for this revision. It discusses motion axes and cueing in a higher-end research apparatus; it does not validate this consumer mechanism, rider-position feedback policy, or real-world training outcomes.
