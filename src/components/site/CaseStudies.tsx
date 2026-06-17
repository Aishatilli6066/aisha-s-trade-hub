import { FadeIn } from "./FadeIn";

const cases = [
  {
    title: "Sesame Export to China",
    need: "Verified Chinese buyer for bulk sesame.",
    action:
      "Structured a 300 MT sesame export deal to Dalian, China with documentation and MoU drafting.",
    outcome: "Deal formally initiated with signed MoU.",
  },
  {
    title: "CFR Export Offer to India",
    need: "Competitive offer for Sortex White Sesame.",
    action: "Prepared USD 2,050/MT CFR offer with verified supplier backing.",
    outcome: "Professional export offer delivered within 48 hours.",
  },
  {
    title: "OEM Fabric Sourcing",
    need: "Custom-logo African wax print fabric.",
    action: "Sourced verified OEM manufacturer and coordinated sampling.",
    outcome:
      "Client connected to qualified manufacturer with approved sample process underway.",
  },
  {
    title: "Custom-Made Industrial Machine Sourcing",
    need: "A client required a custom-built industrial machine manufactured to specific operational and production requirements that could not be sourced off-the-shelf locally.",
    action:
      "Identified qualified overseas manufacturers, coordinated technical specifications, evaluated production capabilities, negotiated commercial terms, and managed communication between the client and manufacturer throughout the sourcing process.",
    outcome:
      "Client was connected with a verified manufacturer capable of producing the machine according to the required specifications, with a clear production roadmap, pricing structure, and export logistics plan established.",
  },
  {
    title: "Private Label Product Development",
    need: "A client wanted to develop and launch a branded product line under their own label with reliable manufacturing support and a scalable growth strategy.",
    action:
      "Identified qualified private-label manufacturers, evaluated production capabilities, coordinated product and packaging options, and structured a sourcing and launch roadmap aligned with the client's business objectives.",
    outcome:
      "Client received access to verified manufacturing partners, product development options, branding support recommendations, and a clear pathway from concept to market-ready product.",
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
          <h2 id="work-title" className="font-display text-3xl font-bold text-text sm:text-5xl">
            Deals I've Structured
          </h2>
          <p className="mt-4 text-base text-text/80 sm:text-lg">
            Real engagements. Real outcomes.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
