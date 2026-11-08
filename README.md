# MotoSIM

An investor/supporter website built with Next.js App Router, React, TypeScript, Three.js and Theatre.js. The complete research-backed business plan is at `/plan`. This repository is separate from the private/local motorcycle engineering workbench.

## Run locally

Node.js 22 or newer:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3017. `npm run build`, `npm run typecheck`, and `npm test` verify the project. `npm start` serves the production build.

## Deploy on Vercel

Import this repository as a new Vercel project. Framework: Next.js. Root directory: repository root. Build: `npm run build`. No database is needed. Node: 22.x. The site builds with no credentials; both external integrations remain unconfigured until supplied.

Set environment variables in **Vercel → Project → Settings → Environment Variables**, then redeploy:

| Variable            | Purpose                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SITE_URL`          | Canonical HTTPS origin, without trailing slash. It must match the public host used for form submissions. Defaults to Vercel's production project URL when available. |
| `RESEND_API_KEY`    | Server-only, sending-scoped key for `rocketship.codes`. Never use a `NEXT_PUBLIC_` prefix.                                                                           |
| `CONTACT_FROM`      | `MotoSIM <motosim@rocketship.codes>`; sender domain must be verified in Resend.                                                                                      |
| `STRIPE_SECRET_KEY` | Server-only Stripe key. Start with test mode.                                                                                                                        |
| `FUNDING_ENABLED`   | Explicit `true` to enable contribution checkout. Default false; missing keys never simulate a successful payment.                                                    |
| `CAMPAIGN_START`    | UNIX seconds for first campaign payment. Default 1794009600 (November 7, 2026 UTC). Set at launch and keep stable.                                                   |

No keys were copied from other projects. The user requested prepared integrations only. No live charge or email was sent during development.

### Stripe flow

- `/api/checkout` selects one of three server-defined USD amounts ($25/$100/$500), validates contribution consent and origin, and creates a hosted, card-only Checkout Session. A client idempotency ID prevents duplicate sessions on retries for a tier.
- Checkout and PaymentIntent metadata use the `motosim-prototype-v1` campaign marker and selected tier.
- `/api/funding` reads PaymentIntents from the campaign start, counts successful USD campaign payments, and subtracts refunds/disputed charges. It uses Stripe's ledger, so a webhook database is unnecessary for this small first campaign. The endpoint is revalidated/cached for 60 seconds. It may not scale to a large Stripe account: migrate to a verified, idempotent webhook ledger before high volume.
- `/thanks` retrieves the Checkout Session server-side and confirms the campaign and paid status. A URL visit alone never claims a successful contribution. It exposes no donor personal information.
- No automated benefit fulfillment or public founders wall is implemented. Rob coordinates benefits manually using Stripe records and obtains separate opt-in for public recognition.
- The meter is net of refunds/disputes but **before processor fees**. This is explicitly disclosed; goal achievement is not net spendable cash.
- Test and live credentials use separate Stripe ledgers. Never include test totals as real funding.

### Activate and verify

1. Add test Stripe credentials and `FUNDING_ENABLED=true` in an isolated Vercel preview. Set `SITE_URL` to that preview's origin for the test. Confirm three tier amounts, a test-card success, cancelled checkout, an unpaid/forged success URL, a refund and an unrelated payment excluded from the meter.
2. Review the published contribution terms and actual benefit fulfillment plan before switching to live Stripe. Confirm the legal business/receipt identity in Stripe. This site makes no charity or tax-deduction claim.
3. Add a sending-scoped Resend key for `rocketship.codes` and make one authorized delivery test. Verify arrival at `rob@rocketship.codes` and Reply-To behavior. The connected account's `rocketship.codes` domain was verified/sending-enabled at the November 7 review; recheck when activating.
4. Apply a Vercel Firewall rate-limit rule for POST `/api/contact` and `/api/checkout` before public activation (for example, challenge or block excessive requests). Origin checks and a honeypot are present but are not durable bot/rate protection. The site currently has no credentials, so those endpoints fail closed.
5. Set production `SITE_URL`, use live credentials only in production, redeploy, and verify the live mode label without sending real money unless specifically authorized. Restrict previews to test keys or leave them unconfigured.

### Contact flow

The form validates name/email/interest/message length/consent, checks origin, uses a honeypot, fixes the recipient to `rob@rocketship.codes`, and sends plain text through Resend. User data is never inserted into HTML or the subject. Resend gets a stable idempotency key per inquiry attempt. The form reports API acceptance, not mailbox delivery. Without a key, it clearly reports unavailable and provides direct email.

## Visuals & accessibility

The supplied MotoSIM PNG wordmark; a handwritten tricolor joke and arrow; red/white/blue identity; a locally hosted racing video with poster and pause control; a custom procedural Three.js prototype; Theatre.js authored camera/rotation/lean keyframes scrubbed by scroll; interactive lean and assembly controls; and a 3D campaign progress bar. The model is a concept illustration, not engineering CAD.

Three.js loads client-side. Pixel ratio is capped. Hidden/offscreen scenes skip rendering and effects clean up on unmount. Reduced-motion preference pauses the background video and fixes the cinematic timeline. WebGL failure displays a text fallback; the full product details remain in HTML. Fonts are hosted locally.

## Research & content

See `docs/RESEARCH.md`, the cited sources on `/plan`, and `docs/ASSETS.md`. Competitors exist; the site does not claim to invent motorcycle simulation. Safer riding and muscle-memory transfer remain hypotheses. The $9,530.06 prototype budget is an earlier unquoted planning estimate, not a confirmed delivered cost. PC/VR and commercialization costs are excluded. U.S. manufacture is described as an ambition because the component plan includes imports.

## Deliberate limits

No hardware preorder, promised simulator delivery, investment return, training certification, invented Speed Trap revenue, supplier endorsement, live payment test, or sent email is claimed. The source contains no private engineering files, supplier correspondence, donor records or credentials. Contribution terms/benefits are proposed campaign operations for the owner to fulfill when payments are enabled.

## Background music

The supplied `renegadesOfFunk.mp3` is locally hosted and loops on the homepage at background volume. The mute button sits above Pause Film and remembers the visitor’s explicit mute preference. Playback is attempted on landing; when browser autoplay policy blocks sound, the first click/tap (or the Unmute Music button) starts it. Film playback and music are independent.

## Expanded motion target — November 7, 2026

The product now targets supported roll (left/right) and pitch (front/back), with rider-position-aware acceleration/braking cues. The website and business plan describe this as proposed, unvalidated scope. The 3D concept demonstrates both axes through visual controls; it sends no hardware commands. The previous $9,530.06 roll-only estimate does not price the expanded system. Revised engineering and quotes must reconcile motion hardware, sensing, safety review, budget and retail affordability before commitment.


## Revised prototype hardware plan — November 7, 2026

The current campaign budget is $20,000, including purchased VR, $6,000 founder development compensation (200 planned hours at $30/hour), $3,000 contractor engineering/commissioning, $2,000 contingency and $880 payment fees/campaign fulfillment. All funds are allocated. This supersedes the historical $9,870 and $9,530.06 plans above. The architecture remains commercial full-platform roll/pitch with passive instrumented steering and a four-rider pilot. An existing PC is assumed; powered steering and the full 12-rider study remain deferred. Custom quotes and manufacturer acceptance are open. See [the complete hardware plan](docs/ROLL-PITCH-PROTOTYPE.md) and `/plan#capital`. No order or revised RFQ has been sent.
