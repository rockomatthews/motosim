"use client";
import { useState } from "react";
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="brand" href="/" aria-label="MotoSIM home">
        <img src="/logo.svg" alt="MotoSIM" width="190" height="40" />
      </a>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="main-nav"
      >
        {open ? "CLOSE −" : "MENU +"}
      </button>
      <nav
        id="main-nav"
        className={open ? "open" : ""}
        aria-label="Main navigation"
        onClick={() => setOpen(false)}
      >
        <a href="/#machine">The machine</a>
        <a href="/plan">The business plan</a>
        <a href="/#roadmap">The roadmap</a>
        <a className="nav-cta" href="/#funding">
          BACK THE BUILD ↗
        </a>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <a className="brand" href="/" aria-label="MotoSIM home">
        <img src="/logo.svg" alt="MotoSIM" width="180" height="38" />
      </a>
      <p>FEEL THE LEAN. FUND THE FUTURE.</p>
      <div>
        <a href="/plan#sources">Research & sources</a>
        <a href="/terms">Terms & privacy</a>
        <a href="mailto:rob@rocketship.codes">Contact ↗</a>
      </div>
      <small>
        © {new Date().getFullYear()} MotoSIM · An independent concept by Rob
        Matthews. No affiliation with MotoGP or its rights holders.
      </small>
    </footer>
  );
}
