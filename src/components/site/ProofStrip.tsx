import { FadeIn } from "./FadeIn";

const pillars = [
  "International sourcing expertise",
  "Verified supplier network",
  "Cross-border transaction support",
  "Commercial negotiation",
  "OEM manufacturing",
  "Supplier verification",
  "Documentation guidance",
  "Professional trade advisory",
];

export function ProofStrip() {
  return (
    <section aria-label="Trust and expertise" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Trust
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-text sm:text-4xl">
            What clients rely on me for
          </h2>
        </FadeIn>
        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <FadeIn key={p}>
              <li className="flex items-start gap-3 rounded-lg border border-text/10 bg-bg p-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span className="text-sm font-medium text-text/85">{p}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
