import { FadeIn } from "./FadeIn";

const highlights = [
  "Supplier verification & sourcing",
  "Commodity export support",
  "OEM/ODM coordination",
  "Custom machinery procurement",
  "Private label development",
  "Import / export strategy",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-b border-text/10 bg-surface"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Engagements & Pricing
          </p>
          <h2
            id="pricing-title"
            className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl"
          >
            Engagements begin from <span className="text-accent">USD 250</span>
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn>
            <div className="space-y-5 text-base leading-relaxed text-text/85 sm:text-lg">
              <p>
                Every project is tailored to the client&rsquo;s objectives, transaction value,
                sourcing requirements, and level of support required.
              </p>
              <p>
                Whether you need supplier verification, global product sourcing, commodity export
                support, OEM/ODM manufacturing coordination, custom-made machinery procurement,
                private label product development, or a complete import/export business strategy
                &mdash; each engagement is carefully scoped to deliver practical and measurable
                results.
              </p>
              <p>
                For large-scale transactions, commodity contracts, manufacturing projects, and
                strategic trade advisory assignments, customized proposals are provided following
                an initial consultation.
              </p>
              <a
                href="#service-request"
                className="mt-4 inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Request a Proposal
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-xl border-2 border-accent/40 bg-bg p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-text">
                Starting point
              </p>
              <p className="mt-3 font-display text-5xl font-bold text-text">
                $250<span className="ml-1 text-base font-medium text-muted">USD</span>
              </p>
              <p className="mt-2 text-sm text-muted">
                Initial consultation & scoped advisory engagements.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-text/85">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
