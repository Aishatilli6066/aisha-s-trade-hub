import { FadeIn } from "./FadeIn";

type Metric = { value: string; label: string };
type CaseStudy = {
  title: string;
  sector: string;
  challenge: string;
  actions: string;
  execution: string;
  outcome: string;
  metrics: Metric[];
};

const cases: CaseStudy[] = [
  {
    title: "300 MT Sesame Export to China",
    sector: "Agricultural Commodity Export",
    challenge:
      "A verified Chinese buyer required bulk Sortex-grade white sesame at export scale from Nigeria, with a structured, bankable transaction path.",
    actions:
      "Structured the 300 MT opportunity end-to-end, matched a qualified Nigerian supplier, and drafted the MoU governing the commercial terms.",
    execution:
      "Prepared the transaction package, coordinated supplier alignment, and shepherded the deal from inquiry through MoU signature into active execution.",
    outcome:
      "MoU signed and the transaction progressed from inquiry stage into live execution with both counterparties committed.",
    metrics: [
      { value: "300 MT", label: "Contracted volume" },
      { value: "Signed", label: "MoU status" },
      { value: "2", label: "Verified counterparties" },
    ],
  },
  {
    title: "CFR White Sesame Offer to India",
    sector: "Commodity Export Structuring",
    challenge:
      "An Indian buyer required a competitive CFR offer for Sortex white sesame from a credible Nigerian supplier — under a tight response window.",
    actions:
      "Prepared a complete export offer, quality specification, and commercial terms backed by a verified supplier.",
    execution:
      "Delivered the full CFR proposal within 48 hours, maintaining buyer engagement and preserving deal momentum through the evaluation window.",
    outcome:
      "Deliverable, defensible offer submitted on schedule — the buyer stayed engaged and the transaction remained live rather than dropped.",
    metrics: [
      { value: "48h", label: "Offer turnaround" },
      { value: "CFR", label: "Incoterm structured" },
      { value: "1", label: "Verified supplier attached" },
    ],
  },
  {
    title: "OEM Fabric Sourcing for a Brand Buyer",
    sector: "OEM Manufacturing",
    challenge:
      "A brand client needed reliable OEM fabric supply meeting a specific technical specification, at commercially viable MOQs and lead times.",
    actions:
      "Sourced overseas OEM manufacturers, evaluated technical capability, and negotiated commercial terms.",
    execution:
      "Ran the supplier shortlist through specification match, factory qualification, and pricing negotiation before recommending a manufacturing partner.",
    outcome:
      "Manufacturing partnership secured against spec, unlocking a repeatable OEM sourcing channel for the client's brand pipeline.",
    metrics: [
      { value: "OEM", label: "Manufacturing model" },
      { value: "Spec-matched", label: "Technical fit" },
      { value: "—", label: "Unit-cost reduction" },
    ],
  },
  {
    title: "Custom Industrial Machine Sourcing",
    sector: "Industrial Procurement",
    challenge:
      "The client required a custom-built industrial machine to exact operational specifications that could not be met locally.",
    actions:
      "Identified and vetted overseas manufacturers, coordinated technical specifications, negotiated commercial terms, and managed supplier selection.",
    execution:
      "Ran a full procurement cycle — from spec through supplier shortlist, price negotiation, production timeline confirmation, and export logistics planning.",
    outcome:
      "Verified manufacturer secured with a confirmed production timeline and export logistics plan — at a materially reduced procurement cost.",
    metrics: [
      { value: "−50%", label: "vs. initial cost estimates" },
      { value: "1", label: "Verified manufacturer" },
      { value: "Confirmed", label: "Production timeline" },
    ],
  },
  {
    title: "Private Label Product Line Development",
    sector: "Private Label Development",
    challenge:
      "A client wanted to launch a branded product line with reliable manufacturing and a credible scale-up path — not a hobby project.",
    actions:
      "Sourced and evaluated private-label manufacturers, structured packaging options, and built a launch roadmap from concept to market.",
    execution:
      "Qualified the manufacturing partner against spec, negotiated packaging and MOQ, and defined the go-to-market runway.",
    outcome:
      "Manufacturing partnership secured supporting a projected 200–500% ROI model, with a documented concept-to-market pathway.",
    metrics: [
      { value: "200–500%", label: "Projected ROI model" },
      { value: "1", label: "Qualified manufacturer" },
      { value: "Documented", label: "Launch roadmap" },
    ],
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

export function CaseStudies() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-b border-text/10 bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Selected Engagements
          </p>
          <h2 id="work-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Trade outcomes delivered
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Real client engagements across commodity export, OEM manufacturing, and industrial
            procurement — with measurable commercial results.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <FadeIn key={c.title}>
              <article className="flex h-full flex-col rounded-xl border border-text/10 border-l-4 border-l-accent bg-surface p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {c.sector}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-text sm:text-2xl">
                  {c.title}
                </h3>

                <Row label="Business challenge" text={c.challenge} />
                <Row label="Actions" text={c.actions} />
                <Row label="Execution" text={c.execution} />
                <Row label="Business outcome" text={c.outcome} />

                <dl className="mt-6 grid grid-cols-3 gap-3 rounded-lg border border-text/10 bg-bg p-4">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-wider text-text/60">
                        {m.label}
                      </dt>
                      <dd className="mt-1 font-display text-lg font-bold leading-tight text-accent sm:text-xl">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
