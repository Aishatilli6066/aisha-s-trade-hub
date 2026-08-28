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
            I work with businesses when the stakes are real: capital on the line, unverified
            suppliers, unforgiving paperwork. My role is to reduce that risk with independent
            verification, commercial judgment and practical execution — grounded in live
            transactions across commodity exports, OEM and private-label manufacturing, and custom
            machinery procurement.
          </p>

          <div className="mt-8 rounded-xl border border-accent/30 bg-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Aisha Usman &amp; ASMAN Prime Hub
            </p>
            <p className="mt-3 text-base leading-relaxed text-text/85">
              You work with me directly for strategy, advisory and judgment. Corporate execution —
              sourcing, exports, logistics, buyer representation — is delivered through ASMAN Prime
              Hub Global Services Limited, the registered company I founded.
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
