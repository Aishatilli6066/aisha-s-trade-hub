import { FadeIn } from "./FadeIn";

const cases = [
  {
    title: "Custom-Made Industrial Machine Sourcing",
    need: "Client required a custom-built industrial machine to exact operational specifications unavailable locally.",
    action:
      "Identified and vetted overseas manufacturers, coordinated technical specifications, negotiated commercial terms, and managed the supplier selection process.",
    outcome:
      "Verified manufacturer secured at 50% below initial cost estimates, with a confirmed production timeline and export logistics plan.",
  },
  {
    title: "Private Label Product Development",
    need: "Client wanted to launch a branded product line with reliable manufacturing and scalable growth potential.",
    action:
      "Sourced and evaluated private-label manufacturers, structured packaging options, and developed a launch roadmap.",
    outcome:
      "Manufacturing partnership secured supporting a projected 200–500% ROI model with a clear concept-to-market pathway.",
  },
  {
    title: "Agro-Commodity Sourcing for Egypt Herbal Buyer",
    need: "Egypt-based herbal company required consistent agro-commodity supply at competitive landed costs.",
    action:
      "Sourced and verified Nigerian suppliers and structured pricing and logistics terms.",
    outcome:
      "Product secured at 30% below prevailing market prices with a repeatable sourcing framework established.",
  },
  {
    title: "Sesame Export to China — 300MT",
    need: "Verified Chinese buyer seeking bulk Sortex White Sesame.",
    action:
      "Structured a 300MT export opportunity, drafted MoU documentation, and coordinated transaction preparation.",
    outcome:
      "MoU signed and transaction progressed from inquiry stage to active execution.",
  },
  {
    title: "CFR Export Offer to India",
    need: "Buyer required a competitive CFR offer for Sortex White Sesame.",
    action: "Prepared a complete export offer backed by a verified supplier.",
    outcome:
      "Full export proposal delivered within 48 hours, maintaining buyer engagement and transaction momentum.",
  },
];

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-text">{label}</div>
      <p className="mt-1 text-sm leading-relaxed text-text/85">{text}</p>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Selected Engagements
          </p>
          <h2 id="work-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Trade Outcomes I&rsquo;ve Delivered
          </h2>
          <p className="mt-4 text-base text-text/80 sm:text-lg">
            Real client engagements. Measurable results.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <FadeIn key={c.title}>
              <article className="h-full rounded-lg border border-text/10 border-l-4 border-l-accent bg-surface p-6">
                <h3 className="font-display text-xl font-semibold text-text">{c.title}</h3>
                <Row label="Need" text={c.need} />
                <Row label="Action" text={c.action} />
                <Row label="Outcome" text={c.outcome} />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
