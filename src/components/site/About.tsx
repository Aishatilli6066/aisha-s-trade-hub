import { Link } from "@tanstack/react-router";
import { FadeIn } from "./FadeIn";

const expertise = [
  "Supplier Due Diligence",
  "Commodity Export Structuring",
  "Procurement Strategy",
  "Form M & NXP Compliance",
  "NAQS Quarantine Guidance",
  "True Landed Cost Modeling",
  "Private Label OEM Sourcing",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-surface border-b border-text/10"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Executive Profile &amp; Governance
          </p>
          <h2
            id="about-title"
            className="mt-2 font-display text-2xl font-bold text-text sm:text-4xl"
          >
            Independent Judgment Backed by Live Trade Execution
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-text/70 sm:text-sm">
            International Trade Consultant · Global Sourcing Specialist · Export Strategist
          </p>

          <p className="mt-6 text-sm leading-relaxed text-text/85 sm:text-base">
            Businesses consult me when capital is on the line, counterparties are unverified, and
            trade paperwork leaves no margin for error. Having structured cross-border transactions
            across agricultural commodity exports, OEM manufacturing, and industrial machinery
            procurement, I know where deals fail — and what it costs to find out after money moves.
          </p>

          {/* Dual-Entity Governance Clarity */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-accent/40 bg-bg p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-gold-deep">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <h3 className="font-display text-sm font-bold text-text">
                  Aisha Usman — Personal Advisory
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text/80">
                You work with me personally for independent risk assessment, trade strategy,
                contract review, and unbiased commercial judgment before funds are committed.
              </p>
            </div>

            <div className="rounded-xl border border-accent/40 bg-bg p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-gold-deep">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </span>
                <h3 className="font-display text-sm font-bold text-text">
                  ASMAN Prime Hub — Corporate Execution
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text/80">
                Operational execution — on-the-ground supplier verification, commodity procurement,
                export documentation, and logistics — is delivered through ASMAN Prime Hub Global
                Services Limited (CAC &amp; NEPC registered).
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Key Practice Areas
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {expertise.map((e) => (
              <li
                key={e}
                className="rounded-full border border-text/15 bg-bg px-3.5 py-1.5 text-xs font-medium text-text/85"
              >
                {e}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-text/10 pt-5">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-deep underline-offset-4 hover:underline"
            >
              Read Trade &amp; Sourcing Field Notes
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
