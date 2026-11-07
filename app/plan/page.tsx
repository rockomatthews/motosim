import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import Economics from "@/components/Economics";
export const metadata: Metadata = {
  title: "The business plan",
  description:
    "MotoSIM’s evidence-led consumer motorcycle simulator business plan: competition, engineering, $10,000 prototype funding, financial assumptions and validation gates.",
};
const sources = [
  [
    "S01",
    "NHTSA — Motorcycle Safety",
    "https://www.nhtsa.gov/road-safety/motorcycles",
    "2024 U.S. fatalities and relative per-mile risk. Context for the problem; no evidence of MotoSIM efficacy.",
  ],
  [
    "S02",
    "Moto Trainer — manufacturer",
    "https://motorbikesimulator.com/",
    "Live manufacturer offering and applications. Confirms an existing commercial category; no independent testing performed.",
  ],
  [
    "S03",
    "LeanGP — home simulator catalog",
    "https://leangp.com/en/product-category/home/",
    "Manufacturer listed €1,899 at review. Not a delivered U.S. quote; availability, tax, shipping and performance unverified.",
  ],
  [
    "S04",
    "Trak Racer — TRZ motorbike racing simulator",
    "https://trakracer.com/products/trz-motorbike-racing-simulator",
    "Manufacturer markets a motorcycle simulator. Benchmark candidate; no hands-on evaluation or current delivered price verified.",
  ],
  [
    "S05",
    "MOZA — motorcycle handlebar announcement",
    "https://us.mozaracing.com/pages/moto-gp",
    "Manufacturer describes handlebar design, riding modes and compatibility. Page uses a “Notify Me” flow; delivery not independently verified.",
  ],
  [
    "S06",
    "Westerhof et al. — Evaluation of a Motorcycle Simulator (2019)",
    "https://arendschwab.com/assets/pdf/westerhof2019evaluation.pdf",
    "Full paper reviewed. 16 recruited licensed riders; 14 completed the path-following experiment. A high-end motion system, not a test of MotoSIM.",
  ],
  [
    "S07",
    "Hatakeyama et al. — Steering input form (2025)",
    "https://www.jstage.jst.go.jp/article/mej/12/5/12_25-00135/_article",
    "Publisher abstract reviewed. Compares simulation input formulations; not consumer hardware validation or a training-transfer trial.",
  ],
  [
    "S08",
    "GP Bikes — official telemetry example source",
    "https://www.gp-bikes.com/downloads/gpb_example.c",
    "Official SDK source inspected in earlier engineering work. Real Windows loading, input/feedback behavior and VR performance remain to be tested.",
  ],
  [
    "S09",
    "MOZA — emergency stop modes",
    "https://us.mozaracing.com/pages/estop-switch",
    "Component-level engineering lead from earlier procurement review. Manufacturer behavior must be verified on the actual purchased revision.",
  ],
  [
    "S10",
    "Speed Trap Racing — operating venue",
    "https://www.speedtrapracing.com/",
    "Live public site: connected car simulators, sessions, restaurant, leaderboards and group events. Does not establish MotoSIM demand or profitability.",
  ],
  [
    "S11",
    "FTC — Complying with the Made in USA Standard",
    "https://www.ftc.gov/business-guidance/resources/complying-made-usa-standard",
    "U.S. origin-claim guidance. Final assembly alone does not establish an unqualified U.S.-made claim.",
  ],
  [
    "S12",
    "Pexels — motorcycle racing footage by Harvey Tan Villarino",
    "https://www.pexels.com/video/exciting-motorcycle-racing-at-outdoor-track-30338723/",
    "Homepage inspiration footage. No featured person or brand endorsement is implied.",
  ],
  [
    "S13",
    "Pexels — license",
    "https://www.pexels.com/license/",
    "Stock-media use and endorsement restrictions. Original MotoSIM marks and concept geometry are separately created.",
  ],
];
function S({ n }: { n: number }) {
  return (
    <a href={`#S${String(n).padStart(2, "0")}`}>
      [S{String(n).padStart(2, "0")}]
    </a>
  );
}
export default function Plan() {
  return (
    <>
      <Nav />
      <main>
        <header className="document section-pad plan-header">
          <span className="eyebrow">
            MOTOSIM / INVESTOR & SUPPORTER BRIEF / NOVEMBER 7, 2026
          </span>
          <h1>
            A real plan.
            <br />
            For a new kind
            <br />
            of <em>racing feeling.</em>
          </h1>
          <p>
            A compact consumer motorcycle simulator built around supported
            physical lean, steering feedback, motorcycle controls, and required
            VR. First, prove the ride. Then, earn the right to scale.
          </p>
          <nav className="plan-index" aria-label="Business plan sections">
            {[
              ["thesis", "The thesis"],
              ["market", "Market & competitors"],
              ["engineering", "The product"],
              ["validation", "Validation"],
              ["commercial", "Business model"],
              ["economics", "Unit economics"],
              ["capital", "Use of funds"],
              ["execution", "Execution"],
              ["risks", "Risks"],
              ["sources", "Sources"],
            ].map(([id, label]) => (
              <a href={`#${id}`} key={id}>
                {label} ↘
              </a>
            ))}
          </nav>
          <a className="button red" href="/#funding">
            BACK THE PROTOTYPE ↗
          </a>
        </header>
        <div className="plan-body section-pad">
          <section id="thesis" className="plan-section">
            <span className="eyebrow">01 / EXECUTIVE THESIS</span>
            <h2>
              Consumer scale.
              <br />
              <em>Motorcycle feel.</em>
            </h2>
            <p>
              Sim racing has taught consumers to expect physical controls,
              feedback and repeatable practice. A motorcycle demands another
              layer: the rider’s body is part of the control system. MotoSIM’s
              product hypothesis is that a supported roll-and-pitch controller
              with consistent race-style contact points can make PC VR racing
              more compelling than a handheld controller, at a consumer price.
            </p>
            <p>
              The intended customer is an existing rider or motorcycle sim
              enthusiast who already has, or is willing to buy, a suitable PC
              and VR headset. Our initial use case is entertainment and
              deliberate input practice. A future training product is possible
              only if separate research supports real-world transfer.
            </p>
            <div className="plan-columns">
              <div>
                <h3>What exists today</h3>
                <p>
                  A local software workbench, calibration and recording tools, a
                  research register, telemetry bridge source, reference
                  fault-control code, concept geometry, a supplier RFQ package
                  and an unquoted prototype procurement plan. This is
                  engineering preparation, not completed physical hardware.
                </p>
              </div>
              <div>
                <h3>What this raise buys</h3>
                <p>
                  A $10,000 first-stage campaign to resolve feasibility,
                  commission reviewed mechanical/electrical work, and progress
                  through staged prototype gates. The earlier $9,530.06 estimate
                  covered the supported-roll baseline. Front/back pitch and
                  rider-position-aware braking/acceleration cues expand that
                  scope; a complete two-axis build now needs revised design,
                  quotes and a reconciled funding plan.
                </p>
              </div>
            </div>
            <p className="callout">
              The investment case is a testable product opportunity—not a “first
              ever” claim, a proven training intervention, a hardware preorder,
              or a promise of investor returns. Equity and strategic investment
              discussions happen separately with Rob.
            </p>
          </section>
          <section id="market" className="plan-section">
            <span className="eyebrow">02 / THE MARKET</span>
            <h2>
              The category exists.
              <br />
              <em>The opening is specific.</em>
            </h2>
            <p>
              The premise that there is no commercial motorcycle simulator is
              incorrect. Multiple manufacturers market motorcycle simulation
              hardware. That competition validates activity in the category
              while raising the bar for differentiation. A website listing
              proves neither shipment nor customer satisfaction; hands-on
              benchmarks are a required next step. <S n={2} /> <S n={3} />{" "}
              <S n={4} />
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Alternative</th>
                    <th>What the primary source shows</th>
                    <th>Implication for MotoSIM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Moto Trainer <S n={2} />
                    </td>
                    <td>
                      Commercial motorcycle-simulator applications and rider
                      demonstrations.
                    </td>
                    <td>
                      Benchmark realistic contact points and installation. Do
                      not claim to invent the category.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      LeanGP <S n={3} />
                    </td>
                    <td>
                      A home simulator listed at €1,899, before independently
                      verified U.S. delivery costs.
                    </td>
                    <td>
                      Direct consumer-price competition. Measure setup,
                      footprint, controls and service expectations.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      TRZ / Trak Racer <S n={4} />
                    </td>
                    <td>
                      A home-oriented motorbike simulator product listing.
                    </td>
                    <td>
                      Compare physical lean and control mapping with the same
                      tasks and riders.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      MOZA <S n={5} />
                    </td>
                    <td>
                      Announced motorcycle handlebars with riding modes and
                      listed game support; notification flow at review.
                    </td>
                    <td>
                      An established car-sim ecosystem can enter the segment.
                      Component access may help, but is not a moat.
                    </td>
                  </tr>
                  <tr>
                    <td>Gamepad + PC VR</td>
                    <td>
                      The low-complexity baseline for our proposed evaluation.
                    </td>
                    <td>
                      Must justify floor space, effort, cost and setup with a
                      demonstrably better experience.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Beachhead before a market-size headline</h3>
            <p>
              We are not treating every motorcyclist as a buyer or quoting a
              speculative market-research CAGR as demand. The initial reachable
              audience is a narrowly recruited group of motorcycle sim users,
              local riders, track-day communities and VR enthusiasts. The test
              is willingness to use, recommend, and eventually pay for a known
              experience at a stated price.
            </p>
            <ul>
              <li>
                <b>Discovery target:</b> 30 structured interviews split between
                riders, existing sim users and venue operators; record current
                equipment, unmet needs, space and price constraints.
              </li>
              <li>
                <b>Experience gate:</b> a planned 12-rider feasibility study
                after hardware approval, with documented dropouts and negative
                results.
              </li>
              <li>
                <b>Demand gate:</b> aim for 100 consented expressions of
                interest with budget and equipment fit, then seek paid pilot
                commitments only after product scope, terms and costs are clear.
                These are future goals; no leads or orders are claimed.
              </li>
              <li>
                <b>Expansion:</b> home enthusiasts first; venues, clubs and
                instruction partners only after duty-cycle, maintenance and
                training limitations are resolved.
              </li>
            </ul>
            <p>
              The proposed differentiation is the integrated rider
              experience—supported lean, usable feedback, calibration and
              serviceable construction. These are hypotheses, not a currently
              proven competitive advantage or patent position.
            </p>
          </section>
          <section id="engineering" className="plan-section">
            <span className="eyebrow">03 / PRODUCT & ENGINEERING</span>
            <h2>
              Build the interface.
              <br />
              <em>Validate the feeling.</em>
            </h2>
            <p>
              The initial prototype does not need a full motorcycle shell. It
              needs a coherent racing posture: saddle, knee support, pegs,
              handlebars, progressive brake feel, throttle return, clutch and
              gear controls. The product target now includes two physical axes:
              left/right roll and front/back pitch, with rider-position-aware
              braking and acceleration cues. The platform must support the rider
              throughout its reviewed operating envelope.
            </p>
            <h3>Make braking and acceleration matter</h3>
            <p>
              The intended sensation is demanding: braking should create a
              convincing forward-load cue, and acceleration a rearward-load cue,
              so coordinated body preparation matters alongside throttle and
              brake technique. The owner’s goal is that a poorly prepared rider
              feels the consequence of abrupt inputs. Physical support and
              controlled motion must keep that sensation within an independently
              reviewed envelope; actual ejection is a failure condition.
            </p>
            <p>
              Cue design must use the virtual vehicle’s measured acceleration
              and state, not assume that throttle position always means
              acceleration. Track chassis roll, chassis pitch and rider
              fore/aft/lateral motion separately. Rider-position mismatch must
              never command forces beyond the approved envelope. Posture
              coaching and virtual riding outcomes can communicate errors while
              physical intensity remains bounded. This is a research
              requirement, not an implemented controller or proven training
              method.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Subsystem</th>
                    <th>Proposed route</th>
                    <th>Release gate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Roll, pitch & structure</td>
                    <td>
                      Re-scope the supported frame for left/right roll and
                      front/back pitch, with guards, independent stops and a
                      mounting lock. Motion mechanism and actuation remain to be
                      selected.
                    </td>
                    <td>
                      Reviewed combined-axis loads, stability, fatigue, pinch
                      protection, rider support and operating envelope. Re-quote
                      the frame before fabrication.
                    </td>
                  </tr>
                  <tr>
                    <td>Longitudinal motion cues</td>
                    <td>
                      Investigate controlled braking/acceleration pitch cues,
                      rider fore/aft sensing and adjustable intensity.
                    </td>
                    <td>
                      Validate cue direction, timing, bounded motion/forces,
                      game-data loss, power-loss behavior and an independent
                      stop for every powered axis before any rider test.
                    </td>
                  </tr>
                  <tr>
                    <td>Steering feedback</td>
                    <td>
                      Investigate the previously selected MOZA R9 V3 component
                      route, with independent steering support.
                    </td>
                    <td>
                      Supported interface, force/angle limits, stale-command
                      behavior and deliberate rearm proven on hardware.{" "}
                      <S n={9} />
                    </td>
                  </tr>
                  <tr>
                    <td>Controls & sensing</td>
                    <td>
                      Native USB controls plus independent logging of steering
                      effort, chassis roll/pitch and rider lateral/fore-aft
                      motion.
                    </td>
                    <td>
                      Calibrated axes, repeatable device identity and measured
                      timing. No double-counting lean and rider motion.
                    </td>
                  </tr>
                  <tr>
                    <td>Simulation</td>
                    <td>
                      One Windows title first; GP Bikes telemetry source is the
                      starting integration lead.
                    </td>
                    <td>
                      Actual in-game input semantics, assistance settings,
                      feedback and telemetry verified by version. SDK existence
                      is insufficient. <S n={8} />
                    </td>
                  </tr>
                  <tr>
                    <td>VR</td>
                    <td>
                      Required PC-connected headset; validate one
                      headset/runtime configuration before expanding support.
                    </td>
                    <td>
                      Frame-time stability, tracking origin,
                      horizon/physical-roll/pitch relationship and comfort
                      evaluated.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Why “lean” is not a complete dynamics model</h3>
            <p>
              Real motorcycles couple speed, steering torque, steering angle,
              tire forces, roll and rider motion. Mapping a lean sensor to a
              virtual lean target does not automatically recreate
              countersteering. The 2025 steering-input paper examines different
              simulation formulations; its abstract is useful evidence that the
              chosen control formulation matters, not a ready-made haptics
              implementation. <S n={7} />
            </p>
            <p>
              A home rig cannot recreate sustained lateral or longitudinal
              acceleration merely by tilting. Full physical tilt without
              corresponding forces can create misleading cues. We must tune
              support, limited motion and VR presentation together, and publish
              the limitations rather than equating visual lean angle with
              physical fidelity. The motorcycle simulator research informs
              motion-cue experiments, but does not validate this proposed
              two-axis consumer implementation. <S n={6} />
            </p>
            <h3>Keep v1 narrow</h3>
            <p>
              Use an existing simulation engine, one validated hardware
              configuration, and serviceable bought-in components where
              appropriate. Avoid a proprietary physics engine, decorative
              bodywork, multi-game support promises, and production tooling
              before the core ride is established. Required VR is a product
              requirement; the earlier $9,530.06 hardware plan did not include a
              headset or PC, or the newly requested pitch/motion-control scope.
              Those costs and the target retail price must be revisited before a
              full-system commitment.
            </p>
          </section>
          <section id="validation" className="plan-section">
            <span className="eyebrow">04 / EVIDENCE BEFORE CLAIMS</span>
            <h2>
              Fun is measurable.
              <br />
              <em>Safety must be earned.</em>
            </h2>
            <p>
              NHTSA reports 6,228 U.S. motorcyclist fatalities in 2024, and an
              almost 27-fold per-mile fatality rate relative to passenger-car
              occupants. That establishes the seriousness of the safety problem.
              It does not establish that a racing simulator reduces it.{" "}
              <S n={1} />
            </p>
            <p>
              Westerhof and colleagues evaluated a sophisticated motion
              simulator using licensed riders. Motion improved several
              path-following and subjective measures under that study’s
              conditions; the contribution of body tracking was less clear.
              Sixteen people were recruited, and 14 completed the path-following
              experiment. The apparatus and small, selected sample limit
              generalization. It was not a trial showing that MotoSIM or a
              consumer leaning rig reduces road crashes. <S n={6} />
            </p>
            <ol>
              <li>
                <b>Unoccupied bench first.</b> Confirm boot-disabled behavior,
                independent stop, travel limits, loss of USB/game/telemetry,
                stale commands, reconnect and deliberate rearm. Complete
                mechanical/electrical review before a rider mounts.
              </li>
              <li>
                <b>Fidelity and comfort study.</b> Target 12 riders across
                experience levels. Counterbalance condition order, provide equal
                familiarization, use the same tasks, record sickness and stop
                requests, and preserve all adverse observations.
              </li>
              <li>
                <b>Compare with a baseline.</b> Measure against gamepad/VR and,
                where practical, alternative rig configurations. Track task
                errors, input smoothness, completion, setup time, workload,
                perceived fidelity and preference. Record game/version/settings
                and raw signal units.
              </li>
              <li>
                <b>Make a feasibility decision.</b> Proposed gates: no
                unresolved safety faults; repeatable calibration after
                reconnect; at least 10 of 12 riders complete a short session
                without a safety or comfort stop; documented preference evidence
                worth a larger trial. These thresholds are planning choices, not
                clinical efficacy standards.
              </li>
              <li>
                <b>Separate real-world transfer.</b> Only after the product is
                stable, design a qualified-instructor-led, controlled study with
                pre/post real-world tasks, retention testing, sufficient sample
                size and adverse-event monitoring. Repeated laps alone cannot
                prove transferable skill or correct muscle memory.
              </li>
            </ol>
            <p className="callout">
              Until evidence supports more: describe MotoSIM as an experimental
              entertainment system. Do not advertise injury reduction, certified
              rider training, correct countersteering, or safer road riding as
              demonstrated outcomes.
            </p>
          </section>
          <section id="commercial" className="plan-section">
            <span className="eyebrow">05 / BUSINESS MODEL & DISTRIBUTION</span>
            <h2>
              One great rig.
              <br />
              <em>A durable rider relationship.</em>
            </h2>
            <div className="plan-columns">
              <div>
                <h3>Initial revenue hypothesis</h3>
                <p>
                  Direct-to-consumer hardware with a design target below $2,000
                  for the rig, excluding PC, VR headset and game licenses.
                  Target retail used in the model: $1,999. Sell only after
                  supply, warranty, delivery and support obligations are
                  defined. Optional serviceable accessories could follow; no
                  recurring subscription is needed to justify the initial
                  purchase.
                </p>
              </div>
              <div>
                <h3>Later opportunities</h3>
                <p>
                  Commercial-duty venue packages and maintenance, paid
                  setup/support, and evidence-supported instruction
                  partnerships. These require separate costs, rights and
                  operating limits. We do not count future software
                  subscriptions, licensing fees or training revenue in the
                  initial hardware case.
                </p>
              </div>
            </div>
            <h3>Go to market in sequence</h3>
            <ol>
              <li>
                Publish measured prototype progress and recruit research
                participants through rider clubs, sim communities and direct
                interviews. Obtain opt-in before marketing emails.
              </li>
              <li>
                Run controlled demonstrations with a clearly labeled
                experimental rig. Collect setup, comfort and price feedback; do
                not use donations as a proxy for product-market fit.
              </li>
              <li>
                Confirm a small paid pilot only after cost, compliance, support
                and refund terms are ready. Establish packaging, assembly
                guides, calibration profiles, spare parts and failure triage.
              </li>
              <li>
                Scale direct sales based on actual return rates, repair costs,
                margins and customer referrals. Explore retail distribution only
                after distributor margin fits the economics.
              </li>
            </ol>
            <h3>An operating reference: Speed Trap Racing</h3>
            <p>
              Speed Trap Racing’s public venue combines connected car
              simulators, live timing, session booking, restaurant service and
              group events. It is a concrete example of simulation as a social
              experience and an inspiration for onboarding and repeat sessions.
              Its success here means an operating, publicly accessible
              experience—not a claimed financial result. No MotoSIM pilot
              agreement, customer conversion, revenue or profitability is
              established. <S n={10} />
            </p>
            <h3>Defensibility must be built</h3>
            <p>
              Potential strengths are calibration quality, measured rider
              feedback, simple setup, serviceability and a trusted community.
              Bought-in actuators are available to competitors. Conduct
              name/trademark clearance, freedom-to-operate and licensing review
              before commercial commitments. Our original racing-inspired
              wordmark does not indicate MotoGP affiliation.
            </p>
          </section>
          <section id="economics" className="plan-section">
            <span className="eyebrow">06 / THE ECONOMICS</span>
            <h2>
              Targets are useful.
              <br />
              <em>Quotes are better.</em>
            </h2>
            <p>
              The one-off prototype cost is not a production bill of materials.
              Production hardware needs design-for-manufacture, assembly labor,
              packaging, inbound logistics, quality control, warranty reserve
              and supplier-backed costs. The slider’s delivered-cost input
              should include those costs; omitted items reduce actual margin.
            </p>
            <Economics />
            <p>
              Do not infer demand from the selectable unit count. The model
              intentionally has no claimed TAM, growth rate, valuation or return
              multiple. Paid acquisition, payment processing, returns,
              insurance, tax and fixed operating costs must be modeled
              separately before a commercial go/no-go decision.
            </p>
            <p>
              A proposed production target is at least 35% hardware gross margin
              at $1,999 retail before selling and fixed costs. That means a
              delivered unit-cost ceiling near $1,299. This is a management
              objective derived from price and margin, not an achieved or quoted
              cost.
            </p>
          </section>
          <section id="capital" className="plan-section">
            <span className="eyebrow">07 / USE OF FUNDS</span>
            <h2>
              The first $10,000.
              <br />
              <em>A baseline to revise.</em>
            </h2>
            <p>
              The selected engineering plan, dated October 25, 2026, allocates
              $9,530.06 against a $10,000 prototype cash cap. It includes
              contractor spending ceilings, not accepted supplier quotations.
              Seven tailored RFQs were sent in the earlier engineering work; no
              accepted quote or confirmed delivered total is represented here.
              This website does not publish private supplier correspondence.
            </p>
            <p className="callout">
              Scope update, November 7: the figures below are the earlier
              supported-roll baseline, not the cost of the newly requested
              two-axis system. Pitch mechanics, any added actuation, motion
              control, rider fore/aft sensing, combined-axis review and
              validation have not been quoted. The $10,000 campaign is an
              initial funding milestone; complete-system cost, schedule and
              affordability remain open until the revised design and quotes are
              reconciled.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Earlier baseline allocation</th>
                    <th>USD</th>
                    <th>Basis & limits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Catalog hardware",
                      "$900.06",
                      "Prior catalog-based estimate; refresh availability and delivered prices before buying.",
                    ],
                    [
                      "Custom hardware",
                      "$2,850.00",
                      "Frame, controls, harness and inhibit packages; unquoted ceilings.",
                    ],
                    [
                      "Engineering",
                      "$2,500.00",
                      "Mechanical and electrical review and commissioning allowances.",
                    ],
                    [
                      "Validation",
                      "$980.00",
                      "Initial evaluation and test-access allowances; actual arrangements unresolved.",
                    ],
                    [
                      "Delivery & tax",
                      "$800.00",
                      "Allowance including freight/tax/FX; not a checkout quote.",
                    ],
                    [
                      "Contingency",
                      "$1,500.00",
                      "Retained reserve for identified uncertainties.",
                    ],
                  ].map(([a, b, c]) => (
                    <tr key={a}>
                      <td>{a}</td>
                      <td>{b}</td>
                      <td>{c}</td>
                    </tr>
                  ))}
                  <tr className="total">
                    <td>Earlier baseline subtotal</td>
                    <td>$9,530.06</td>
                    <td>
                      $469.94 baseline headroom; no demonstrated allowance for
                      the new pitch scope.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>What the campaign total means</h3>
            <p>
              The public meter measures gross paid campaign contributions less
              refunds and disputed charges; it does not deduct Stripe fees or
              campaign benefit costs. Therefore $10,000 on the meter does not
              equal $10,000 of spendable prototype cash. Before commitments,
              reconcile net available cash and reduce scope or secure separate
              funds if fees or incentives create a gap. Never spend the same
              reserve twice.
            </p>
            <h3>Excluded from this first stage</h3>
            <p>
              PC and required VR headset, founder labor, production tooling,
              inventory, formal compliance testing, IP/legal work, product
              insurance, a real-world training-transfer study and broad
              commercialization. Headset access, participant arrangements and
              any additional operating expenses must be funded or supplied
              before testing proceeds.
            </p>
            <h3>Release money against evidence</h3>
            <ol>
              <li>
                Refresh the feasibility review and obtain accepted, itemized
                engineering/fabrication quotes before non-refundable
                commitments.
              </li>
              <li>
                Buy the minimum hardware for unoccupied interface and shutdown
                tests. If supported interfaces cannot satisfy the safety
                requirements within budget, pause and report the design/funding
                gap.
              </li>
              <li>
                Release fabrication only after reviewed drawings, complete
                assembly scope and a commitment ledger fit the cap.
              </li>
              <li>
                Proceed to rider evaluation only after physical acceptance.
                Publish a milestone report, including failed tests and any
                unused or redirected funds.
              </li>
            </ol>
            <p>
              Supporter benefits are deliberately digital/community-based so
              donations do not create an implied hardware delivery commitment.
              This campaign is not escrowed or all-or-nothing. It may spend
              contributions before reaching the goal. See the{" "}
              <a href="/terms">contribution and cancellation policy</a>.
            </p>
          </section>
          <section id="execution" className="plan-section">
            <span className="eyebrow">08 / TEAM, OPERATIONS & TIMING</span>
            <h2>
              Small team.
              <br />
              <em>Explicit responsibilities.</em>
            </h2>
            <p>
              Rob Matthews is the project contact in Park City, Utah. The
              engineering plan calls for independent mechanical design and load
              review, electrical/actuator safety expertise,
              fabrication/machining, and qualified rider evaluation. Supplier
              outreach is not an appointment; no contracted engineering team or
              endorsement is claimed.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Stage after usable funding</th>
                    <th>Planning window</th>
                    <th>Exit evidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Feasibility & quoting</td>
                    <td>Weeks 1–4</td>
                    <td>
                      Accepted scopes, current prices, interface feasibility,
                      named reviewers and updated cash plan.
                    </td>
                  </tr>
                  <tr>
                    <td>Bench integration</td>
                    <td>Weeks 5–8</td>
                    <td>
                      Actual Windows/game/actuator records; independent stop and
                      fault behavior demonstrated.
                    </td>
                  </tr>
                  <tr>
                    <td>Fabrication & acceptance</td>
                    <td>Weeks 9–14</td>
                    <td>
                      Reviewed drawings, complete rig, load/stability checks,
                      defined operating limits.
                    </td>
                  </tr>
                  <tr>
                    <td>Initial rider evaluation</td>
                    <td>Weeks 15–18</td>
                    <td>
                      Consent, complete results, adverse observations, costs and
                      feasibility decision.
                    </td>
                  </tr>
                  <tr>
                    <td>Commercialization proposal</td>
                    <td>After evaluation</td>
                    <td>
                      Revised product scope, quoted unit economics,
                      compliance/IP plan and separate capital requirement.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These are sequencing assumptions, not promised delivery dates.
              Supplier lead times, redesign, funding timing, hardware access and
              independent review may extend them. Publish quarterly development
              updates while funded work is active, with a report at each gate.
            </p>
            <h3>U.S. manufacturing ambition</h3>
            <p>
              Our goal is a product we can describe as “proudly made in the
              USA.” The present plan seeks U.S. engineering and fabrication and
              includes imported electronic components. Final origin claims will
              follow a documented supplier/material/process review. The FTC’s
              unqualified U.S.-origin standard is not met merely by local
              assembly. <S n={11} />
            </p>
          </section>
          <section id="risks" className="plan-section">
            <span className="eyebrow">09 / THE RISKS WORTH FUNDING AROUND</span>
            <h2>
              Know the hard parts.
              <br />
              <em>Build through them.</em>
            </h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Risk</th>
                    <th>Why it matters</th>
                    <th>Decision rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Control fidelity</td>
                    <td>
                      Wrong input mapping or feedback may feel convincing while
                      teaching an incorrect response.
                    </td>
                    <td>
                      Validate signs, timing and task behavior; withhold
                      transfer claims.
                    </td>
                  </tr>
                  <tr>
                    <td>Physical injury & motion sickness</td>
                    <td>
                      Moving structures, powered steering, mounting and VR
                      occlusion create hazards.
                    </td>
                    <td>
                      Independent review, guarded limits, shutdown proof,
                      supervision and immediate stop criteria before riders.
                    </td>
                  </tr>
                  <tr>
                    <td>Component/SDK access</td>
                    <td>
                      Closed actuator firmware and changing games can constrain
                      safe integration.
                    </td>
                    <td>
                      No assumed watchdog or compatibility; stop or redesign if
                      supported interfaces fail.
                    </td>
                  </tr>
                  <tr>
                    <td>Cost overrun</td>
                    <td>
                      Custom work is unquoted; fees, shipping and scope can
                      erase headroom.
                    </td>
                    <td>
                      Accepted prices and one commitment ledger before purchase;
                      no commitments above available cash.
                    </td>
                  </tr>
                  <tr>
                    <td>Weak consumer demand</td>
                    <td>
                      A compelling render may not translate into a product worth
                      its cost or floor space.
                    </td>
                    <td>
                      Interviews, hands-on comparisons and explicit price
                      feedback before inventory.
                    </td>
                  </tr>
                  <tr>
                    <td>Production & support</td>
                    <td>
                      Duty cycle, noise, fit, packaging and repairs may
                      undermine margin.
                    </td>
                    <td>
                      Pilot reliability/service data, supplier quality plans and
                      realistic reserves before scale.
                    </td>
                  </tr>
                  <tr>
                    <td>Rights & origin claims</td>
                    <td>
                      Names, mechanisms, games, software bundles and U.S.-origin
                      marketing require review.
                    </td>
                    <td>
                      Clearance, licensing and verified sourcing before
                      commercial representations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="callout">
              A successful first stage is a defensible decision: proceed with
              measured evidence, redesign around a known gap, or stop before
              committing more capital. A stopped prototype with honest results
              is better evidence than an unsupported production promise.
            </p>
            <a className="button red" href="/#contact">
              DISCUSS FUNDING OR PARTNERSHIP ↗
            </a>
          </section>
          <section id="sources" className="plan-section">
            <span className="eyebrow">10 / RESEARCH & ASSUMPTIONS</span>
            <h2>
              The evidence
              <br />
              <em>behind the ambition.</em>
            </h2>
            <p>
              Public manufacturer, research, government and venue sources were
              reviewed for this brief on November 7, 2026, except S08–S09 which
              are carried engineering leads from October 24–25 and must be
              rechecked on hardware. The budget and prototype status come from
              the project’s earlier engineering package. Prices and product
              pages are time-sensitive. No hands-on competitor test, accepted
              supplier quote, or MotoSIM rider result is available.
            </p>
            <p>
              Evidence levels are kept separate: public source fact, project
              preparation, management assumption and future validation. The
              newer 2026 repeated-route paper identified in earlier research was
              inaccessible during this review and is not used to make an
              efficacy claim.
            </p>
            <ul className="source-list">
              {sources.map(([id, title, url, note]) => (
                <li id={id} key={id}>
                  <b>
                    {id} / {title}
                  </b>
                  <a href={url} target="_blank" rel="noreferrer">
                    Read primary source ↗
                  </a>
                  <small>{note}</small>
                </li>
              ))}
            </ul>
            <p>
              Images of real racing are inspiration footage, not a working
              MotoSIM demonstration. The 3D model is a purpose-built concept
              illustration. Financial scenarios are calculations on adjustable
              assumptions, not forecasts. The site is designed for printing this
              brief from your browser.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
