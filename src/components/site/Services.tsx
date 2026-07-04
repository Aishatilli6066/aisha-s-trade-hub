import { FadeIn } from "./FadeIn";

const WHATSAPP = "https://wa.me/2347042322970";

const services = [
  {
    title: "Global Sourcing & Supplier Verification",
    who: "Importers, procurement teams, and product companies sourcing from Asia, Africa, or Europe.",
    problem:
      "Unverified suppliers, opaque factories, and inconsistent quotes expose capital before a single container ships.",
    how: "Supplier identification, independent verification, factory qualification, sample coordination, and commercial vetting before commitment.",
    outcome:
      "A shortlist of qualified, verified suppliers with defensible pricing and a documented paper trail.",
  },
  {
    title: "Import & Export Trade Structuring",
    who: "Exporters, trading houses, and businesses moving commodities, industrial goods, or finished products cross-border.",
    problem:
      "Weak transaction structure, wrong Incoterms, and poor documentation stall deals and erode margins.",
    how: "Deal structuring, Incoterms selection, pricing and payment terms, export documentation guidance, and inspection coordination.",
    outcome:
      "A commercially sound transaction that clears customs, protects payment, and reaches the buyer on schedule.",
  },
  {
    title: "OEM & Private Label Development",
    who: "Brand owners, distributors, and entrepreneurs launching branded product lines at scale.",
    problem:
      "Turning a product idea into a manufactured, branded, export-ready SKU is where most launches fail.",
    how: "Manufacturer sourcing, technical specification, packaging and MOQ negotiation, and production timeline management.",
    outcome:
      "A manufacturing partnership and launch roadmap that supports repeatable orders and healthy unit economics.",
  },
  {
    title: "Agricultural Commodity Export Advisory",
    who: "Nigerian aggregators, processors, and buyers of sesame, ginger, hibiscus, moringa, and related agro-commodities.",
    problem:
      "Global buyers demand consistent quality, credible offers, and export-grade documentation — most local suppliers cannot deliver all three.",
    how: "Supplier and buyer matching, CFR/FOB offer preparation, NXP/NAQS/phytosanitary guidance, and transaction shepherding.",
    outcome:
      "Verified counterparties, deliverable offers, and export transactions that move from inquiry to shipment.",
  },
  {
    title: "Procurement Risk Reduction & Negotiation",
    who: "Business owners and executives writing large purchase orders to overseas manufacturers.",
    problem:
      "Poor negotiation, hidden costs, and unverified counterparties are the single largest source of avoidable procurement loss.",
    how: "Landed-cost analysis, commercial negotiation on price and terms, red-flag review, and contract-stage advisory.",
    outcome:
      "Lower landed cost, cleaner commercial terms, and a materially reduced probability of a failed transaction.",
  },
  {
    title: "Custom Machinery & Industrial Sourcing",
    who: "Manufacturers and industrial buyers requiring specialised or custom-built equipment.",
    problem:
      "Custom industrial procurement is high-value, low-transparency, and unforgiving of supplier mistakes.",
    how: "Technical specification, overseas manufacturer identification, commercial negotiation, and export logistics planning.",
    outcome:
      "A verified manufacturer, a defensible price, and a delivery plan that fits the operating timeline.",
  },
];

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
        {label}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-text/85">{text}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Advisory Services
          </p>
          <h2 id="services-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            How I work with clients
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Six focused practice areas across international sourcing, trade execution, and
            manufacturing — delivered as a trusted advisor, not a middleman.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <article className="flex h-full flex-col rounded-xl border border-text/10 bg-bg p-8 transition-colors hover:border-accent/40">
                <h3 className="font-display text-2xl font-semibold text-text">{s.title}</h3>
                <Row label="Who it's for" text={s.who} />
                <Row label="Problem solved" text={s.problem} />
                <Row label="How I execute" text={s.how} />
                <Row label="Business outcome" text={s.outcome} />
                <div className="mt-6 pt-6 border-t border-text/10">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline underline-offset-4"
                  >
                    Discuss on WhatsApp
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
