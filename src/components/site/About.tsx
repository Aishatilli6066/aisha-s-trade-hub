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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</p>
          <h2 id="about-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Why Businesses Work With Aisha Usman
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-text/70">
            International Trade Consultant · Global Sourcing Specialist · Export Strategist
          </p>

          <p className="mt-8 text-base leading-relaxed text-text/85 sm:text-lg">
            Clients work with Aisha when the stakes are real: capital is on the line, suppliers
            are unverified, paperwork is unforgiving, and the wrong decision is expensive. Her
            role is to reduce that risk — bringing independent verification, commercial judgment,
            and practical trade execution to importers, exporters, manufacturers, and
            procurement teams operating across borders.
          </p>

          <p className="mt-6 text-base leading-relaxed text-text/85 sm:text-lg">
            Based in Kano, Nigeria and advising businesses across Asia, Africa, the Middle East,
            and Europe, Aisha founded ASMAN Prime Hub to give international trade clients a
            trusted advisor — not a middleman. The work is grounded in live transactions:
            commodity exports, OEM and private-label manufacturing, custom machinery
            procurement, and the supplier verification that holds it all together.
          </p>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
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
        </FadeIn>
      </div>
    </section>
  );
}
