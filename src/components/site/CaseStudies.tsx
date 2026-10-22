import { FadeIn } from "./FadeIn";

const cases = [
  {
    title: "Structuring a 300 MT Sesame Export Opportunity",
    corridor: "Nigeria ➔ China",
    sector: "Agro-Commodity MoU",
    need: "Verified Chinese buyer seeking bulk Sortex White Sesame under strict commercial timeline.",
    action:
      "Structured the 300MT export opportunity, drafted comprehensive MoU documentation, and coordinated transaction preparation.",
    outcome:
      "Advanced from buyer inquiry to structured commercial discussions and draft MoU preparation — fully structured transaction preparation with risk safeguards.",
  },
  {
    title: "Agro-Commodity Sourcing for Egypt Herbal Buyer",
    corridor: "Nigeria ➔ Egypt",
    sector: "Agro-Commodity Sourcing",
    need: "Egypt-based herbal company required consistent agro-commodity supply at competitive landed costs.",
    action: "Sourced and verified Nigerian suppliers and structured pricing and logistics terms.",
    outcome:
      "Verified Nigerian supply options, pricing comparisons, and logistics terms delivered for the buyer's commercial evaluation.",
  },
  {
    title: "Custom-Made Industrial Machine Sourcing",
    corridor: "Asia ➔ Israel",
    sector: "Custom Procurement",
    need: "Client required a custom-built industrial machine to exact operational specifications unavailable locally.",
    action:
      "Identified and vetted overseas manufacturers, coordinated technical specifications, negotiated commercial terms, and managed the supplier selection process.",
    outcome:
      "Overseas manufacturer selected against the required technical specifications, with negotiated commercial terms below the client's initial sourcing estimate.",
  },
  {
    title: "Private Label Product Development",
    corridor: "Global Sourcing ➔ West Africa",
    sector: "OEM & Brand Structuring",
    need: "Client wanted to launch a branded product line with reliable manufacturing and scalable growth potential.",
    action:
      "Sourced and evaluated private-label manufacturers, structured packaging options, and developed a launch roadmap.",
    outcome:
      "Manufacturing shortlist, packaging direction, and concept-to-market roadmap delivered, providing a defined basis for production planning and launch.",
  },
  {
    title: "CFR Export Offer to India",
    corridor: "Nigeria ➔ India",
    sector: "Export Structuring",
    need: "Buyer required a competitive CFR offer for Sortex White Sesame under tight delivery timelines.",
    action: "Prepared a complete export offer backed by a verified supplier.",
    outcome:
      "Full export proposal delivered within 48 hours, maintaining buyer engagement and transaction momentum.",
  },
];

export function CaseStudies() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-b border-text/10 bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                Selected Engagements
              </p>
              <h2
                id="work-title"
                className="mt-2 font-display text-2xl font-bold text-text sm:text-4xl"
              >
                Trade &amp; Sourcing Case Studies
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-text/80">
              Real assignments and what the client walked away with — verified options, defensible
              numbers, and decisions they could act on.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <FadeIn key={c.title}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-text/15 bg-surface p-6 shadow-sm transition-all hover:border-accent">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold">
                    <span className="rounded bg-bg px-2.5 py-1 text-gold-deep border border-accent/30">
                      {c.sector}
                    </span>
                    <span className="text-muted font-medium">{c.corridor}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-text">{c.title}</h3>

                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-muted">
                        The Need
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-text/85">{c.need}</p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gold-deep">
                        The Action
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-text/85">{c.action}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-lg border border-accent/40 bg-bg p-3.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-text">
                    Verified Outcome
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-text/90 font-medium">
                    {c.outcome}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
