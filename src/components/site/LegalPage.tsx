import type { ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-bg font-sans text-text antialiased">
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">{eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-text sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text/80 sm:text-lg">{intro}</p>
        <p className="mt-3 text-xs uppercase tracking-wider text-muted">Last updated: {updated}</p>
        <div className="mt-10 space-y-10">{children}</div>

        <div className="mt-14 rounded-xl border border-accent/40 bg-surface p-6">
          <h2 className="font-display text-lg font-bold text-text">Questions about this policy?</h2>
          <p className="mt-2 text-sm leading-relaxed text-text/85">
            Email{" "}
            <a
              href="mailto:aishau6066@gmail.com"
              className="font-semibold text-gold-deep underline-offset-2 hover:underline"
            >
              aishau6066@gmail.com
            </a>{" "}
            or message +234 704 232 2970 on WhatsApp. Responses are typically sent within one
            business day.
          </p>
        </div>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-text sm:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text/85 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
