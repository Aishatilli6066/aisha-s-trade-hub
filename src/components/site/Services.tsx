import { FadeIn } from "./FadeIn";

type Path = {
  eyebrow: string;
  title: string;
  summary: string;
  who: string[];
  included: string[];
  notIncluded: string[];
  start: { label: string; href: string };
  startNote: string;
};

const paths: Path[] = [
  {
    eyebrow: "Path 1 — Advisory",
    title: "International Trade Strategy Advisory",
    summary:
      "A structured written assessment of your sourcing, import or export plan before you commit capital. You send the full picture; I return a considered strategic opinion, the risks I can see, and the sequence I would follow.",
    who: [
      "You are deciding whether a product, supplier or market is worth pursuing",
      "You have quotes or a supplier in hand and want an independent read before paying",
      "You are entering a new import or export market and need the route mapped",
      "You want senior judgement, not execution or introductions",
    ],
    included: [
      "Review of your submitted brief, quotes, specifications and documents",
      "Written strategic assessment with clear recommendations",
      "Risk observations across supplier, pricing, payment and documentation",
      "A next-step action plan in the order I would run it",
      "Voice-note explanations where written detail is not enough",
      "Three business days of limited clarification support after delivery",
    ],
    notIncluded: [
      "Supplier identification, negotiation or factory coordination",
      "Buyer or seller introductions from my network",
      "Ongoing project management or transaction handling",
      "Legal, tax, customs-broking or financial-advice services",
    ],
    start: { label: "Start a Strategy Advisory", href: "#advisory" },
    startNote: "$250 USD · pay first, then complete the advisory questionnaire.",
  },
  {
    eyebrow: "Path 2 — Done-for-you",
    title: "Sourcing, Procurement & Buyer Representation",
    summary:
      "Hands-on execution where I run the process for you — identifying and verifying suppliers, coordinating manufacturing or commodity supply, and holding the commercial detail together until the transaction is structured.",
    who: [
      "You have decided to move and need the work carried out, not advised on",
      "You need suppliers or manufacturers found, screened and verified",
      "You are buying agricultural commodities and need representation on the ground",
      "You need OEM/ODM, private-label or custom machinery procurement coordinated",
    ],
    included: [
      "Supplier and manufacturer identification against your written specification",
      "Independent verification, due diligence and factory assessment support",
      "Quotation collection, comparison and landed-cost breakdown",
      "Sample, inspection and quality-checkpoint coordination",
      "Commercial terms, Incoterms and payment-structure guidance",
      "Documentation and export-readiness support through the transaction",
    ],
    notIncluded: [
      "Guaranteed pricing, guaranteed volumes or guaranteed supplier acceptance",
      "Freight forwarding, customs clearance or insurance as a licensed provider",
      "Financing, escrow or holding client funds",
      "Work commenced before the discovery fee is verified",
    ],
    start: { label: "Request a Written Proposal", href: "#done-for-you" },
    startNote:
      "Begins with a paid project discovery, credited toward the final engagement fee.",
  },
];

const supporting = [
  "Landed Cost Analysis",
  "OEM/ODM Coordination",
  "Trade Documentation Support",
  "Import & Export Consulting",
  "Private Label Development",
  "Custom Machinery Procurement",
  "Business Plan Development",
];

function CheckList({ items, tone }: { items: string[]; tone: "yes" | "no" }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-text/85">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`mt-0.5 shrink-0 ${tone === "yes" ? "text-gold-deep" : "text-text/35"}`}
          >
            {tone === "yes" ? <path d="M5 12l5 5L20 7" /> : <path d="M6 6l12 12M18 6L6 18" />}
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface border-b border-text/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Advisory Services
          </p>
          <h2 id="services-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Two ways to work with me
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Advisory when you need judgement before committing capital. Done-for-you when the
            decision is made and the work has to be carried out properly.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {paths.map((p) => (
            <FadeIn key={p.title}>
              <article className="flex h-full flex-col rounded-xl border-2 border-accent/40 bg-bg p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  {p.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-text">{p.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text/85">{p.summary}</p>

                <div className="mt-7">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-text/60">
                    Who it's for
                  </h4>
                  <CheckList items={p.who} tone="yes" />
                </div>

                <div className="mt-7">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-text/60">
                    What's included
                  </h4>
                  <CheckList items={p.included} tone="yes" />
                </div>

                <div className="mt-7">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-text/60">
                    What's not included
                  </h4>
                  <CheckList items={p.notIncluded} tone="no" />
                </div>

                <div className="mt-8 border-t border-text/10 pt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-text/60">
                    How to start
                  </h4>
                  <p className="mt-2 text-sm text-text/75">{p.startNote}</p>
                  <a
                    href={p.start.href}
                    className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
                  >
                    {p.start.label}
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-12 rounded-xl border border-text/10 bg-bg p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Supporting Expertise
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supporting.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-text/85">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
