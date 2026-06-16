import { FadeIn } from "./FadeIn";

const points = [
  {
    title: "Verified Supplier Network",
    description: "Every supplier is screened, verified, and documented before a single dollar moves.",
  },
  {
    title: "CAC & NEPC Compliant",
    description: "Fully registered in Nigeria with CAC and NEPC — paperwork handled from start to finish.",
  },
  {
    title: "International Trade Experience",
    description: "Years of hands-on sourcing, export coordination, and factory audits across Asia, Africa, the Middle East, and Europe.",
  },
  {
    title: "End-to-End Support",
    description: "From supplier search to landed cost analysis to final delivery — you stay informed, not overwhelmed.",
  },
  {
    title: "Transparent Communication",
    description: "No surprises, no hidden fees. Clear timelines, real numbers, and honest status updates every step of the way.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section id="why" aria-labelledby="why-title" className="bg-bg border-b border-white/5">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <h2
            id="why-title"
            className="font-display text-3xl font-bold text-text sm:text-4xl"
          >
            Why Work With Me
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-white/10 bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <h3 className="font-display text-lg font-semibold text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text/80">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
