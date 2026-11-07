"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { tiers } from "@/lib/campaign.mjs";
const Bar = dynamic(() => import("./RigScene"), { ssr: false });
type FundingState = {
  amount: number | null;
  goal: number;
  backers: number | null;
  enabled: boolean;
  status: string;
  updatedAt?: string;
};
const money = (c: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(c / 100);
export default function Funding() {
  const [state, setState] = useState<FundingState>({
    amount: null,
    goal: 1000000,
    backers: null,
    enabled: false,
    status: "loading",
  });
  const [selected, setSelected] = useState("founder"),
    [consent, setConsent] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const requestId = useRef("");
  useEffect(() => {
    const controller = new AbortController();
    const load = () =>
      fetch("/api/funding", { signal: controller.signal })
        .then((r) => r.json())
        .then(setState)
        .catch(() => {
          if (!controller.signal.aborted)
            setState((s) => ({ ...s, status: "unavailable" }));
        });
    load();
    const timer = setInterval(load, 60000);
    if (
      new URLSearchParams(window.location.search).get("checkout") ===
      "cancelled"
    )
      setError("Checkout cancelled. You have not completed a contribution.");
    return () => {
      controller.abort();
      clearInterval(timer);
    };
  }, []);
  async function checkout() {
    setBusy(true);
    setError("");
    requestId.current ||= crypto.randomUUID();
    try {
      const r = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tier: selected,
          consent,
          requestId: requestId.current,
        }),
      });
      const data = await r.json();
      if (!r.ok || !data.url)
        throw new Error(data.error || "Unable to open checkout.");
      const url = new URL(data.url);
      if (url.hostname !== "checkout.stripe.com")
        throw new Error("Invalid checkout destination.");
      window.location.assign(url.toString());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not open checkout.");
      setBusy(false);
    }
  }
  const pct =
    state.amount === null
      ? 0
      : Math.min(100, (state.amount / state.goal) * 100);
  return (
    <section id="funding" className="funding section-pad">
      <div className="section-top">
        <span className="eyebrow">06 / THE FIRST $10,000</span>
        <span className="micro">SMALL START. REAL MILESTONES.</span>
      </div>
      <div className="funding-intro">
        <h2>
          Put the first
          <br />
          <em>lap in motion.</em>
        </h2>
        <div>
          <p>
            Your contribution helps turn engineering work into a physical
            prototype. This first campaign funds feasibility and staged
            development toward roll, pitch and rider-aware feedback. The
            expanded motion scope needs revised engineering and quotes before a
            complete build is committed.
          </p>
          <a className="text-link" href="/plan#capital">
            Read the use-of-funds plan ↗
          </a>
        </div>
      </div>
      <div className="fund-meter">
        <div className="fund-numbers">
          <div>
            <strong>{state.amount === null ? "—" : money(state.amount)}</strong>
            <span>
              {state.amount === null
                ? "Verified total not available"
                : state.status === "test"
                  ? "TEST PAYMENTS — NOT REAL FUNDING"
                  : "Net contributions · refunds/disputes excluded"}
            </span>
          </div>
          <div>
            <strong>{money(state.goal)}</strong>
            <span>Prototype campaign target</span>
          </div>
        </div>
        <Bar funding progress={pct / 100} />
        <div className="meter-base">
          <span>
            {state.amount === null
              ? "Campaign connection pending"
              : `${pct.toFixed(1)}% FUNDED · ${state.backers} CONTRIBUTIONS`}
          </span>
          <span>
            {state.status === "live"
              ? "STRIPE VERIFIED · UPDATES EVERY 60S"
              : state.status === "test"
                ? "STRIPE TEST MODE"
                : state.status === "unavailable"
                  ? "TOTAL TEMPORARILY UNAVAILABLE"
                  : "PRE-LAUNCH"}
          </span>
        </div>
        <div
          className="sr-only"
          role="progressbar"
          aria-label="Prototype campaign funding"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={state.amount === null ? undefined : pct}
          aria-valuetext={
            state.amount === null
              ? "Funding total not yet available"
              : `${pct}% funded`
          }
        />
      </div>
      <div className="tiers">
        {tiers.map((tier, i) => (
          <button
            className={`tier ${selected === tier.id ? "selected" : ""}`}
            key={tier.id}
            onClick={() => {
              setSelected(tier.id);
              requestId.current = "";
            }}
            aria-pressed={selected === tier.id}
          >
            <div className="tier-top">
              <span>
                0{i + 1} / {tier.name}
              </span>
              <span className="radio-dot" />
            </div>
            <strong>{money(tier.amount)}</strong>
            <h3>{tier.title}</h3>
            <ul>
              {tier.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <span className="tier-select">
              {selected === tier.id ? "SELECTED" : "SELECT THIS TIER"} ↗
            </span>
          </button>
        ))}
      </div>
      <div className="checkout-row">
        <div>
          <label className="check">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span>
              I understand this supports experimental development. No hardware,
              equity, tax deduction, or delivery date is included. I accept the{" "}
              <a href="/terms">contribution terms</a>.
            </span>
          </label>
          <p className="fine">
            Incentives are digital and community benefits, planned within 30
            days for the badge and 90 days for the first briefing/walkthrough.
            No purchase priority or test ride is promised.
          </p>
        </div>
        <button
          className="button red"
          disabled={busy || !consent || !state.enabled}
          onClick={checkout}
        >
          {busy
            ? "OPENING STRIPE…"
            : state.enabled
              ? "CONTINUE TO STRIPE ↗"
              : "CONTRIBUTIONS OPENING SOON"}
        </button>
      </div>
      {!state.enabled && (
        <p className="funding-note">
          Online contributions are not open yet.{" "}
          <a href="#contact">Contact Rob about backing the build ↗</a>
        </p>
      )}
      {error && (
        <p className="form-status" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
