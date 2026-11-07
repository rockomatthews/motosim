# MotoSIM roll + pitch prototype — MS-P1-RP1

Updated November 7, 2026. **Conditional cash plan: $9,870 including $1,000 contingency; $130 unallocated under $10,000.** No physical assembly, accepted custom quote, approved load envelope or occupied test exists yet. This replaces the October 25 passive-roll/powered-steering procurement route for the next prototype. It is a feasibility demonstrator, not a production unit or proven rider-training device.

## Selected hardware architecture

Use a **DOF Reality H2 full-platform roll/pitch base**, with a compact, low-mass bolt-on motorcycle contact-point bridge. Saddle, knee pads, pegs and handlebars must move together. The manufacturer’s US listing was $2,499 plus a $691 country-level US freight estimate at review. Factory drive/control hardware and an SRS base license are included; the custom bridge needs written manufacturer acceptance. [H2 source](https://dofreality.com/product/racing/motion-racing-rig-2-axis-hero-h2/)

The bridge carries a real twist throttle, progressive front/rear brake mechanisms, clutch, shifter and **passive centered/damped steering with independent angle/force measurement**. Use the earlier two USB load-cell control boards and sensor electronics where suitable. Four torso-distance sensors distinguish left/right and fore/aft rider movement relative to the moving rig. They are coaching/logging sensors, never safety interlocks. The headset’s relative pose is additional evidence after motion compensation is validated.

There is no second roll cradle stacked on top of H2. There is no new DIY motor power stage. Powered R9 steering is deferred: keep the riding contact points and input measurement, avoid paying for another motor, coupling and integration in the first two-axis build. This intentionally gives up active steering-force realism to fund the requested roll/pitch experiment.

The rider still shifts their body left/right and fore/aft. Rider-relative sensors can supply an intentional lean channel after game mapping is verified; the game then supplies motion feedback. Do not treat the motor-following chassis angle as an independent player input. H2 is a driven platform, not a freely balancing motorcycle: how much it permits voluntary movement and resists the rider must be established with the manufacturer. This milestone does not promise authentic countersteering or unconstrained bike balance.

Do not substitute a cheaper seat-only mover without a new design review. Moving the rider while leaving bars/pegs fixed changes the rider-load problem. Compare the manufacturer’s [full-platform and seat-mover categories](https://dofreality.com/compare-motion-simulators/). Buying a commercial car platform does not establish that a straddled motorcycle assembly is an approved use.

## Creating braking and acceleration feel

The achievable effect is a **brief, coordinated weight-transfer cue**, supported by VR, real brake resistance, throttle response and physical contact with the saddle/knee pads/pegs. A compact two-axis rig cannot reproduce sustained longitudinal acceleration or the full balance dynamics of a motorcycle.

| Event | Proposed cue | Rider feedback |
|---|---|---|
| Brake onset/release | A small, bounded pitch transient, then a slow return toward neutral as travel permits | Progressive lever/pedal force, visual deceleration and measured torso preparation |
| Acceleration onset/release | An opposite-direction longitudinal cue, likewise bounded and washed out | Throttle position, visual acceleration and measured torso preparation |
| Cornering | Limited physical roll, blended with the game’s larger virtual lean | Separate physical roll, virtual lean, steering input and rider lean in the log |
| Poor preparation/abrupt input | Same approved motion envelope; optional coaching indication | Log or cue the mismatch; never amplify motion as punishment |

**Do not simply wire “brake = nose down” and “throttle = nose up.”** Bike attitude, pitch angular acceleration and gravity’s component along the saddle are different cues. For a gravity-based forward load sensation, a forward slope contributes a forward component; the initial angular transient can create a different sensation at the head. Visual suspension dive alone therefore does not establish the correct platform command. An engineer must assess the resultant at the rider’s actual head/contact locations, set axis signs and blend/filter the cues. Large game lean angles are not commanded one-to-one to the platform.

Commission the factory motion software first using a supported game, with one owner of each motion output. Verify available channels and filters before commissioning any custom cue layer. Prefer actual vehicle acceleration telemetry; deriving acceleration from speed requires validated timing, filtering and axis interpretation. Brake/throttle position alone is not measured acceleration, particularly during traction loss, coasting or gear shifts.

No force, angle, speed, jerk or rider-weight operating limit is specified here. Those follow the reviewed combined-axis load/stability analysis and unoccupied measurements. Rider sensing must never enable or increase hazardous motion. The target is convincing feedback with controlled support, not near-ejection. Simulator posture coaching is not yet validated real-road instruction.

## Budget and scope

Amounts are spending ceilings unless explicitly identified as a current catalog listing. Prices checked November 7; checkout, exchange, import and shop totals remain open. Detailed scope and provenance are in [roll-pitch-budget.json](../public/downloads/motosim-roll-pitch-budget.json).

<!-- budget-table:start -->
| ID | Allocation | USD | Basis |
|---|---|---:|---|
| RP01 | DOF Reality H2 full-platform roll/pitch | $2,499 | Current US catalog listing; not a delivered quote |
| RP02 | H2 freight to United States | $691 | Manufacturer country-level shipping estimate; ZIP quote pending |
| RP03 | Controls and independent rider sensing | $500 | Ceiling based on retained October catalog lines plus added sensors; refresh prices |
| RP04 | Bolt-on motorcycle bridge and passive steering | $850 | Unquoted complete fabrication ceiling |
| RP05 | Harness, guarding and shutdown integration | $600 | Unquoted complete installed ceiling |
| RP06 | Mechanical/electrical review and commissioning | $1,800 | Unquoted fixed-scope service ceiling |
| RP07 | PC VR headset and wired Link cable | $430 | Quest 3S 128 GB $349.99 plus Meta Link cable $79.99, rounded up; runtime test required |
| RP08 | Motion compensation and tracking fallback | $180 | $19.99 first-year SRS Premium listing plus $160.01 fallback allowance |
| RP09 | Game licenses and software allowance | $120 | Spending allowance; game versions/compatibility unproven |
| RP10 | Bench consumables and four-rider feasibility pilot | $300 | Expense allowance, not recruited participants |
| RP11 | Tax, imports, other deliveries and currency fees | $900 | Allowance; no tax/duty rate or landed quote assumed |
| RP12 | Ring-fenced revision contingency | $1,000 | Reserved cash |
| | **Planned total, including reserve** | **$9,870** | Conditional ceilings |
| | Unallocated headroom | $130 | Cap $10,000 |
<!-- budget-table:end -->

The $900 tax/import/other-delivery line is additional to the separately counted $691 H2 freight. It is an allowance, not a tariff calculation. Obtain destination-specific Park City, UT 84060 totals, including brokerage and who is importer of record. The cap requires at least $9,870 **net available cash**, after any campaign fees and reward costs paid elsewhere.

The $850 fabrication package must include all labor, contact surfaces, passive column, adapter and control mechanisms. The $600 harness/guard/shutdown package includes installation; the $1,800 review/commissioning package includes calibrated tools and is split $900 mechanical / $900 electrical, software and commissioning. These are demanding unquoted caps. They become credible only if qualified suppliers accept the complete scopes. Founder implementation labor is excluded, not silently described as paid engineering. Do not buy a pile of parts and assume remaining fabrication labor is free.

Controls allowance detail: retain previous B04–B16 lines ($443.06 historical planning subtotal), add two fore/aft VL53L1X sensors ($29.90), two pots for pitch/steering angle ($1.90), and two branch leads ($1.90): $476.76, leaving $23.24 under $500 for sensor spares/price movement. Refresh each supplier price; the figures inherited from October are not newly confirmed quotes. Structural overload paths bypass the load cells and pots.

The $430 headset/cable cap rounds up current [Quest 3S 128 GB $349.99](https://www.meta.com/quest/quest-3s/) and [Meta Link cable $79.99](https://www.meta.com/quest/accessories/link-cable/). It assumes an existing suitable Windows gaming PC. If a compatible headset/cable is already available, the cash need falls to **$9,440**; preserve the $1,000 reserve. A new gaming PC does not fit this plan.

## Software, VR and game acceptance

Start with GP Bikes: [SRS’s current game list](https://www.simracingstudio.com/pc-games) names GP Bikes and Moto GP 2018. That does not demonstrate current MotoGP editions’ motion telemetry, native VR, control semantics or force feedback. Use the $120 game allowance for GP Bikes first and a separate MotoGP control-mapping experiment. Do not market a current MotoGP motion/VR result until observed on the exact version. Input-driven motion is an unvalidated fallback, not equivalent to physics telemetry.

[SRS IntelliComp](https://simracingstudio.freshdesk.com/support/solutions/articles/35000264496-intellicomp-motion-compensation-setup-compensation-setup) supports DOF Reality platforms and uses OpenVR or OpenXR motion compensation without a physical tracker. Budget the [$19.99/year Premium add-on](https://www.simracingstudio.com/product-page/premium-subscription) in the $180 compensation allocation. The remaining $160.01 is a fallback allowance, not a tracker quote. If the older [WitMotion route](https://simracingstudio.freshdesk.com/support/solutions/articles/35000209208-openvr-motion-compensation-setup) is required, verify the specified RS232 sensor, USB cable and mount, not a similarly named TTL model. Subscription renewal is a later operating expense.

Use a confirmed PC VR runtime path for the chosen GP Bikes/headset versions; headset purchase is conditional on that test. Compensation must remove platform movement without removing the rider’s voluntary fore/aft/side movement. Measure the pivot-to-head offsets, check neutral alignment, cable clearance, image drift and latency; software-estimated motion may differ from actual motion under load. Record Windows, game, headset, Link, runtime, SRS and compensation versions. SRS currently specifies [Windows 11 x64 or newer](https://www.simracingstudio.com/download).

## Procurement and acceptance gates

1. **Feasibility before hardware.** Within RP06, first commission a capped $300 review slice, leaving $1,500 of that line. Obtain manufacturer written acceptance of the motorcycle attachment, mounting points, total moving mass, rider range, center of gravity, asymmetric bar/peg loads and mounting/dismounting. Do not modify the factory drivetrain or rely on marketing payload numbers as an engineering envelope. If the manufacturer declines, stop and redesign; the budget does not price a different platform.
2. **Firm scope and landed price.** Obtain accepted itemized quotes for RP04–RP06 and full delivery/tax totals. Include support/guard design, access to test space and appropriate coverage. A new premises or insurance cost requires a funded scope decision before occupied tests. Reconcile all commitments in one ledger. No RFQ has been sent for this revision and no purchase is authorized by this document.
3. **Unoccupied structural acceptance.** Engineer checks combined roll/pitch extremes, off-center rider surrogates, braking/bar/peg loads, overturning, single failures, mounting lock, guarded crush zones, cable loops and power-off support. The assembly must remain supported without active balancing. Do not invent an automotive belt or powered harness on a straddled saddle; engineer any retention/exit arrangement.
4. **Unoccupied control acceptance.** Test accessible stop, stale telemetry, frozen game, USB disconnect, loss of power, software restart, controller reconnect and unintended command steps. Document how motion is inhibited and how deliberate rearm works through supported factory interfaces. Power loss must not cause collapse or unexpected return motion. A game crash must not leave an old sustained command active. If this cannot be achieved within the cap, no occupied release.
5. **VR and cue acceptance.** Start from the lowest engineer-approved envelope with surrogates, confirm cue signs and washout, and measure actual movement under load. Verify independent physical motion versus rider input, rather than mapping motor-following angle back into game steering and creating a feedback loop.
6. **Small supervised pilot only after release.** Four experienced riders at $40 each, with consent, defined stop criteria, an observer and the approved envelope. Compare static VR versus bounded roll/pitch; collect cue direction recognition, comfort, controllability and posture-signal quality. This pilot cannot establish training transfer or the previous 12-rider study outcomes.

## What changes from the old plan

| Earlier route | Revised first milestone |
|---|---|
| Passive supported roll, powered R9 steering | Powered roll + pitch, passive instrumented steering |
| Bespoke roll frame/pivot/springs/dampers | Commercial complete two-axis drivetrain, custom contact-point bridge |
| Headset excluded | Headset + wired PC link included |
| $2,500 engineering, $1,500 contingency | $1,800 narrowed review/commissioning cap, $1,000 contingency |
| 12-rider repeated evaluation | Four-rider feasibility pilot; full study deferred |

Powered steering, tactile shaker/amp, wind, active belts, surge, yaw, heave, cosmetic bodywork, a new PC, production tooling, compliance, legal work and a training-transfer trial are outside this milestone. The commercial platform also does not substantiate a $1,999 retail product or an unqualified US-made claim.

## If quotes are high

The $130 unallocated margin is small; the reserve is not an upgrade fund. A $300 landed-cost increase raises the plan to $10,170 if the full $1,000 reserve is preserved. Do not call that under budget. First use confirmed compatible owned VR equipment if available, simplify nonstructural adjustability/finish, or obtain an accepted lower-cost complete fabrication quote. Do not remove stops, guards, review or fault acceptance. If full scopes still exceed the cap, retain the software/unoccupied milestone and return with the explicit funding gap before committing. Optional tactile feedback can be quoted later; no unpriced amplifier, PSU or mounting is assumed included.
