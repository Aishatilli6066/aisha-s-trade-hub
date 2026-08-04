import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FadeIn } from "@/components/site/FadeIn";
import { MultiStepForm } from "@/components/site/MultiStepForm";
import type { FormSpec } from "@/lib/forms/types";

export function FormPage({ spec }: { spec: FormSpec }) {
  return (
    <div className="min-h-dvh bg-bg font-sans text-text antialiased">
      <Nav />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {spec.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            {spec.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/80 sm:text-lg">
            {spec.intro}
          </p>
        </FadeIn>
        <div className="mt-10">
          <MultiStepForm spec={spec} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
