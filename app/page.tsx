import { Nav, Footer } from "@/components/Nav";
import HeroVideo from "@/components/HeroVideo";
import Experience from "@/components/Experience";
import Funding from "@/components/Funding";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <HeroVideo />
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" /> AN AMERICAN MOTORCYCLE SIMULATOR
              IN THE MAKING
            </div>
            <h1>
              The next apex
              <br />
              is <em>virtual.</em>
            </h1>
            <p>
              The lean. The control. The full-body commitment.
              <br />
              Help us bring the feeling of racing a motorcycle home.
            </p>
            <div className="hero-actions">
              <a className="button red" href="#funding">
                BACK THE BUILD <span>↗</span>
              </a>
              <a className="button outline" href="#machine">
                MEET THE MACHINE <span>↓</span>
              </a>
            </div>
            <div className="hero-specs">
              <span>PHYSICAL LEAN</span>
              <span>STEERING FEEDBACK</span>
              <span>VR REQUIRED</span>
            </div>
          </div>
          <div className="hero-side">MS—01 / FROM CONCEPT TO CORNER</div>
          <div className="hero-bottom">
            <span>
              REAL RIDING IS A WHOLE-BODY EXPERIENCE.
              <br />
              <b>YOUR SIMULATOR SHOULD BE, TOO.</b>
            </span>
            <span className="footage-credit">
              Racetrack inspiration footage
              <br />
              Not a MotoSIM demonstration
            </span>
          </div>
          <aside className="hero-joke" aria-label="Not French! Just very American!">
            <span>Not French!<br />Just very American!</span>
            <svg viewBox="0 0 240 140" fill="none" aria-hidden="true">
              <path d="M142 55 C172 77 173 101 153 129 M124 111 Q139 122 153 129 Q174 119 187 108" />
            </svg>
          </aside>
        </section>
        <div className="tricolor">
          <span />
          <span />
          <span />
        </div>
        <div className="ticker">
          <span>BUILT AROUND THE RIDER</span>
          <b>✦</b>
          <span>ENGINEERED FOR THE FEEL</span>
          <b>✦</b>
          <span>AMERICAN AMBITION</span>
          <b>✦</b>
          <span>THE NEXT GENERATION OF SIM RACING</span>
        </div>
        <section id="vision" className="vision section-pad">
          <div className="section-top">
            <span className="eyebrow">01 / THE OPPORTUNITY</span>
            <span className="micro">TWO WHEELS. A DIFFERENT DIMENSION.</span>
          </div>
          <div className="vision-grid">
            <h2>
              You don’t just
              <br />
              steer a bike.
              <br />
              <em>
                You become
                <br />
                part of it.
              </em>
            </h2>
            <div className="vision-copy">
              <p className="large-copy">
                Car simulators put you in the seat.
                <br />
                MotoSIM aims to bring your whole body into the race.
              </p>
              <p>
                Look through the corner. Load the controls. Move your weight.
                Commit to the lean. In VR, those physical inputs could make
                motorcycle simulation feel even more immersive.
              </p>
              <p>
                Our opportunity is focused: an accessible consumer rig that
                combines supported physical lean, motorcycle controls, useful
                steering feedback, and a repeatable setup. Existing motorcycle
                simulators prove the category exists. Now we need to prove our
                place in it.
              </p>
              <a className="text-link" href="/plan#market">
                Explore the market research ↗
              </a>
              <div className="vision-stat">
                <strong>&lt;$2K</strong>
                <div>
                  CONSUMER RIG TARGET
                  <small>
                    Design objective · PC, headset and software extra
                    <br />
                    Production cost and retail price not yet validated
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="machine" className="machine section-pad">
          <div className="section-top">
            <span className="eyebrow">02 / MEET MS—01</span>
            <span className="micro">FEEL FIRST. FAIRINGS LATER.</span>
          </div>
          <div className="machine-head">
            <h2>
              It doesn’t need to
              <br />
              look like a bike.
              <br />
              <em>It needs to feel like one.</em>
            </h2>
            <p>
              The first prototype strips away the bodywork and focuses on what
              matters: your contact points, your inputs, and the way the rig
              responds.
            </p>
          </div>
          <Experience />
          <div className="feature-grid">
            {[
              [
                "01",
                "Lean into it.",
                "A supported physical lean mechanism, with engineered stops and a secure mounting position. Lean range and rider limits will be set by engineering tests.",
              ],
              [
                "02",
                "Make every input count.",
                "Race-style seating, knee contact, throttle, clutch, front and rear brake, and foot shifting. Steering feedback is a core feasibility gate.",
              ],
              [
                "03",
                "Put the world around you.",
                "A PC-connected VR headset is required for the intended product experience. Frame timing, comfort, tracking and game compatibility must be measured.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span className="feature-no">{n} /</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <p className="fine">
            Interactive concept visualization. This is not a working hardware
            demonstration, validated lean range, or final industrial design.
            Hardware has not yet been built.
          </p>
        </section>
        <section className="safety section-pad">
          <div className="safety-number">
            27<span>×</span>
            <small>
              ALMOST 27× THE FATALITY RATE
              <br />
              PER MILE VS. CAR OCCUPANTS
            </small>
            <a
              href="https://www.nhtsa.gov/road-safety/motorcycles"
              target="_blank"
              rel="noreferrer"
            >
              NHTSA · 2024 U.S. data ↗
            </a>
          </div>
          <div>
            <span className="eyebrow">03 / BEYOND THE LAP TIME</span>
            <h2>
              More repetition.
              <br />
              <em>A bigger purpose.</em>
            </h2>
            <p>
              We want riders to rehearse coordinated inputs and build
              familiarity before taking skills onto a real motorcycle. The
              ambition is better riding habits through deliberate practice.
            </p>
            <p>
              That ambition needs evidence. MotoSIM has not demonstrated
              improved road safety, real-world skill transfer, or correct muscle
              memory. A simulator cannot reproduce sustained cornering forces,
              and misleading feedback could teach the wrong response.
            </p>
            <a className="text-link" href="/plan#validation">
              See how we’ll test the training hypothesis ↗
            </a>
            <p className="fine">
              An entertainment prototype first. Never a substitute for certified
              rider instruction, protective equipment, or supervised real-world
              practice.
            </p>
          </div>
        </section>
        <section className="speedtrap section-pad">
          <div className="section-top">
            <span className="eyebrow">04 / A REAL-WORLD STARTING POINT</span>
            <a
              className="micro"
              href="https://www.speedtrapracing.com/"
              target="_blank"
              rel="noreferrer"
            >
              VISIT SPEED TRAP RACING ↗
            </a>
          </div>
          <div className="speedtrap-grid">
            <div className="speedtrap-art">
              <span>
                FROM THE
                <br />
                SIM FLOOR.
              </span>
              <strong>
                SPEED
                <br />
                TRAP<span>RACING</span>
              </strong>
              <div className="race-line" />
              <small>LAKEWOOD, OHIO / SIM RACING, FOOD & COMMUNITY</small>
            </div>
            <div>
              <h2>
                We’ve seen what
                <br />
                <em>simulation unlocks.</em>
              </h2>
              <p>
                Speed Trap Racing brings connected car simulators, live
                leaderboards, food, and group racing together in an operating
                venue. It shows how physical racing experiences can become a
                social destination.
              </p>
              <p>
                MotoSIM takes inspiration from that experience: accessible first
                sessions, repeatable challenges, and a community that comes back
                for the next lap. A body-driven motorcycle experience could take
                that immersion further.
              </p>
              <p className="fine">
                Speed Trap is an operating reference, not evidence of MotoSIM
                demand. No revenue, profitability, customer-count or formal
                pilot commitment is claimed.
              </p>
              <a
                className="text-link"
                href="https://www.speedtrapracing.com/"
                target="_blank"
                rel="noreferrer"
              >
                See the venue in action ↗
              </a>
            </div>
          </div>
        </section>
        <section id="roadmap" className="roadmap section-pad">
          <div className="section-top">
            <span className="eyebrow">05 / THE PATH TO THE GRID</span>
            <span className="micro">EVIDENCE RELEASES THE NEXT STAGE</span>
          </div>
          <h2>
            Build. Measure.
            <br />
            <em>Earn the next lap.</em>
          </h2>
          <div className="roadmap-grid">
            {[
              [
                "01",
                "ENGINEERING FOUNDATION",
                "In hand",
                "Research register, software workbench, telemetry bridge source and concept geometry. Software checks are complete; physical behavior is untested.",
              ],
              [
                "02",
                "BENCH & PHYSICAL PROTOTYPE",
                "Seeking funding",
                "Confirm supplier prices, release engineering drawings, prove steering shutdown behavior, then assemble the supported-lean rig.",
              ],
              [
                "03",
                "RIDER EVALUATION",
                "After bench approval",
                "A planned 12-rider comparison measures control consistency, comfort, setup and perceived fidelity. This is a feasibility study, not proof of safer riding.",
              ],
              [
                "04",
                "PILOT & PRODUCTION",
                "Separate funding gate",
                "Validate demand and unit economics, resolve IP and compliance, qualify suppliers, and plan service. No production date is promised.",
              ],
            ].map(([n, title, status, copy]) => (
              <article key={n}>
                <div className="roadmap-line">
                  <span>{n}</span>
                  <i />
                </div>
                <span className="roadmap-status">{status}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="/plan">
            READ THE FULL BUSINESS PLAN ↗
          </a>
        </section>
        <section className="usa section-pad">
          <div className="usa-flag" aria-hidden="true">
            <span>
              ✦ ✦ ✦<br />✦ ✦ ✦<br />✦ ✦ ✦
            </span>
          </div>
          <div>
            <span className="eyebrow">
              AMERICAN INGENUITY. RIDER-FIRST AMBITION.
            </span>
            <h2>
              Our goal:
              <br />
              <em>“Proudly made in the USA.”</em>
            </h2>
            <p>
              We’re developing MotoSIM from Park City, Utah, with a plan to work
              with U.S. engineers and fabricators. The current component plan
              includes imported electronics. Final origin labeling will follow
              verified sourcing and manufacturing—not ambition alone.
            </p>
          </div>
        </section>
        <Funding />
        <Contact />
        <section className="faq section-pad">
          <span className="eyebrow">BEFORE YOU BACK THE BUILD</span>
          <h2>The questions that matter.</h2>
          {[
            [
              "Is this the first motorcycle simulator?",
              "No—we’re not the first on the scene. We’re building to be the BEST on the scene: combining the fun of racing with the skill and whole-body commitment of riding. Our approach brings physical motorcycle controls and supported lean together with established racing software like MotoGP, the game. The ambition is simple: a blast to play, with a reason to keep getting better.",
            ],
            [
              "Will MotoSIM be playable in MotoGP, the game?",
              "That’s the goal: a fully playable MotoGP experience with MotoSIM. We want to build on established racing software, so you can focus on the fun, the competition and developing your control skills. MotoGP is a priority compatibility target. Exact game versions, control mapping, steering feedback and the VR setup still need prototype testing; this is planned support, not verified compatibility or a claim that MotoGP provides native VR.",
            ],
            [
              "Does a contribution buy a simulator?",
              "No. Contributions support experimental development and include only the stated digital or community benefits. They are not hardware preorders, equity investments, charitable gifts, or guarantees of production.",
            ],
            [
              "Will MotoSIM teach me to ride safely?",
              "That has not been established. Our initial study tests usability and simulation fidelity. Real-world training claims require a separate controlled transfer study. Always use qualified rider instruction.",
            ],
            [
              "What do I need to use it?",
              "The intended experience requires a compatible PC and PC-connected VR headset, plus supported simulation software. Specific headsets, games, control modes and performance requirements remain subject to testing.",
            ],
            [
              "What happens if the prototype costs more?",
              "The $9,530.06 prototype estimate includes contingency but contractor costs are not confirmed. We stop before commitments exceed the $10,000 cap, report the gap, and revise scope or funding. Production and a VR headset budget are separate.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
