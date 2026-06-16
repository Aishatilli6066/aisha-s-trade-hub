import { FadeIn } from "./FadeIn";

const stats = [
  { value: "68+", label: "Clients Served" },
  { value: "200+", label: "Verified Suppliers" },
  { value: "4+", label: "Years in Trade" },
  { value: "8", label: "Services Offered" },
  { value: "CAC + NEPC", label: "Registered & Compliant" },
];

export function ProofStrip() {
  return (
    <section aria-label="Proof points" className="bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 gap-x-6 px-4 py-14 sm:px-6 md:grid-cols-5">
        {stats.map((s) => (
          <FadeIn key={s.label} className="text-center md:text-left">
            <div className="font-display text-2xl font-bold text-accent sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted sm:text-sm">
              {s.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
