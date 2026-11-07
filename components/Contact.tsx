"use client";
import { useRef, useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState(""),
    [busy, setBusy] = useState(false);
  const requestId = useRef("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const b = Object.fromEntries(new FormData(form));
    requestId.current ||= crypto.randomUUID();
    setBusy(true);
    setStatus("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...b,
          consent: b.consent === "on",
          requestId: requestId.current,
        }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error);
      setStatus(
        "Message submitted to Rob. Thank you for being part of the next lap.",
      );
      form.reset();
      requestId.current = "";
    } catch (e) {
      setStatus(
        e instanceof Error
          ? e.message
          : "Unable to submit. Please email rob@rocketship.codes.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <section id="contact" className="contact section-pad">
      <div>
        <span className="eyebrow">07 / GET ON THE GRID</span>
        <h2>
          Great machines
          <br />
          start with
          <br />
          <em>good people.</em>
        </h2>
        <p>
          Investors. Engineers. Riders. Partners.
          <br />
          Let’s build something worth leaning into.
        </p>
        <a className="text-link" href="mailto:rob@rocketship.codes">
          rob@rocketship.codes ↗
        </a>
        <div className="contact-location">PARK CITY, UTAH / UNITED STATES</div>
      </div>
      <form onSubmit={submit}>
        <div className="form-two">
          <label>
            Your name
            <input
              name="name"
              required
              minLength={2}
              maxLength={100}
              placeholder="First and last name"
              autoComplete="name"
            />
          </label>
          <label>
            Email address
            <input
              name="email"
              required
              type="email"
              maxLength={254}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </label>
        </div>
        <label>
          I’m interested in
          <select name="interest">
            <option>Funding</option>
            <option>Engineering</option>
            <option>Rider testing</option>
            <option>Press</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Tell us what you have in mind
          <textarea
            name="message"
            required
            minLength={15}
            maxLength={5000}
            rows={4}
            placeholder="An idea, a question, a way to move MotoSIM forward…"
          />
        </label>
        <div className="honeypot" aria-hidden="true">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <label className="check">
          <input type="checkbox" name="consent" required />
          <span>
            I agree to have my details sent to Rob to respond to this inquiry.{" "}
            <a href="/terms#privacy">Privacy details</a>.
          </span>
        </label>
        <button className="button white" disabled={busy}>
          {busy ? "SENDING…" : "SEND YOUR MESSAGE ↗"}
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}
