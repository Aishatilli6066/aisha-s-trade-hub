import { Link } from "@tanstack/react-router";
import { FadeIn } from "./FadeIn";


const expertise = [
  "Supplier verification",
  "Procurement strategy",
  "Export structuring",
  "Trade documentation guidance",
  "Commodity sourcing",
  "International market access",
  "Business growth through global trade",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">About</p>
          <h2 id="about-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Why Businesses Work With Me
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-text/70">
            International Trade Consultant · Global Sourcing Specialist · Export Strategist
          </p>

          <p className="mt-8 text-base leading-relaxed text-text/85 sm:text-lg">
            I work with businesses when the stakes are real: capital is on the line, suppliers are
            unverified, paperwork is unforgiving, and the wrong decision is expensive. My role is to
            reduce that risk — bringing independent verification, commercial judgment, and practical
            trade execution to importers, exporters, manufacturers, and procurement teams operating
            across borders.
          </p>

          <p className="mt-6 text-base leading-relaxed text-text/85 sm:text-lg">
            Based in Kano, Nigeria, I advise businesses across Asia, Africa, the Middle East, and
            Europe. My work is grounded in live transactions: commodity exports, OEM and
            private-label manufacturing, custom machinery procurement, and the supplier verification
            that holds it all together.
          </p>

          <div className="mt-8 rounded-xl border border-accent/30 bg-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Aisha Usman &amp; ASMAN Prime Hub
            </p>
            <p className="mt-3 text-base leading-relaxed text-text/90">
              Aisha Usman is the founder and lead trade strategist at ASMAN Prime Hub Global
              Services Limited.
            </p>
            <p className="mt-3 text-base leading-relaxed text-text/85">
              The Aisha Usman name represents advisory, personal expertise, and thought leadership —
              strategy sessions, independent judgment, and published insight. ASMAN Prime Hub Global
              Services Limited handles corporate execution: sourcing, exports, logistics, and buyer
              representation delivered under a registered company structure.
            </p>
          </div>


          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Areas of Expertise
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {expertise.map((e) => (
              <li
                key={e}
                className="rounded-full border border-text/15 bg-bg px-4 py-2 text-sm text-text/85"
              >
                {e}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-text/10 pt-6">
            <p className="text-sm leading-relaxed text-text/85">
              Explore practical insights on sourcing, export transactions, supplier verification and
              international trade.
            </p>
            <Link
              to="/blog"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
            >
              Read Trade Insights
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
