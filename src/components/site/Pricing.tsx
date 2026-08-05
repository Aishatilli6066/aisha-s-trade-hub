import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { CONSULTATION_PAYMENT_LINK, type DiscoveryTrack } from "@/lib/discovery";

// ============================================================================
// PAYMENTS — FLUTTERWAVE, MANUAL VERIFICATION
// ----------------------------------------------------------------------------
// Every payment on this site is verified BY HAND. After paying through the
// Flutterwave link, the client completes the relevant form on the site,
// enters the Flutterwave payment reference and uploads the receipt.
// Nothing is auto-verified: the advisory review begins only after the payment
// has been verified manually. There is no scheduling tool and no live call in
// this flow — the advisory is delivered in writing.
// ============================================================================

/** Each done-for-you service has its own dedicated multi-step request form. */
const TRACK_ROUTES: Record<DiscoveryTrack, string> = {
  sourcing: "/request/global-sourcing",
  commodity: "/request/commodity-buyer-representation",
  businessplan: "/request/business-plan",
};

const CONSULTATION_FLOW = [
  "Pay",
  "Questionnaire",
  "Verification",
  "Advisory Review",
  "Strategy Delivered",
  "Clarification Support",
];

const DFY_FLOW = [
  "Complete Requirements",
  "Pay Discovery Fee",
  "Review",
  "Proposal",
  "Kickoff",
];

const consultationIncludes = [
  "Pre-advisory questionnaire",
  "Review of relevant information and documents",
  "Written strategic assessment",
  "Personalized recommendations and action plan",
  "Voice-note explanations where useful",
  "Three business days of limited clarification support",
];

const CONSULTATION_EXCLUSIONS =
  "The advisory is limited to the submitted matter and clarification of the recommendations provided. It does not include supplier sourcing, extensive market research, document preparation, quotation development, negotiation, costing, logistics coordination or transaction management. These services are quoted separately. Advisory responses are provided during business hours within agreed response windows. This service does not provide continuous or unlimited live-chat access.";

const DISCOVERY_NOTE =
  "The Project Discovery Fee covers initial review, feasibility assessment, scope definition, risk identification and preparation of a tailored written proposal. It does not include project execution. If you proceed, the proposal states the remaining professional fee and payment terms.";

const DISCOVERY_EXCLUSIONS =
  "It does not include supplier sourcing, market research, negotiations, document preparation, logistics coordination or transaction execution, and it excludes the cost of goods, freight, inspections, customs duties, taxes, certifications and laboratory testing. Payment terms for trade transactions are confirmed in the proposal — TT: typically 50–60% deposit, with the balance paid before shipment, after inspection or against agreed documents, depending on the transaction. For larger or higher-risk deals an LC at sight may be recommended instead.";

type Service = {
  title: string;
  price: string;
  discoveryFee: string;
  description: string;
  includes: string[];
  ctaLabel: string;
  track: DiscoveryTrack;
};

const services: Service[] = [
  {
    title: "Global Sourcing and Procurement",
    price: "From $500",
    discoveryFee: "$100",
    description:
      "Product sourcing, supplier identification and verification, quotation comparison, price negotiation and procurement coordination for businesses buying internationally.",
    includes: [
      "Supplier identification and verification",
      "Quotation comparison and price negotiation",
      "Factory communication and procurement coordination",
    ],
    ctaLabel: "Complete Requirements — Sourcing",
    track: "sourcing",
  },
  {
    title: "Agricultural Commodity Buyer Representation",
    price: "From $750",
    discoveryFee: "$150",
    description:
      "End-to-end buyer representation for international companies sourcing Nigerian agricultural commodities — credible suppliers, verified quality, competitive pricing and export-ready documentation.",
    includes: [
      "Supplier screening, verification and quality checks",
      "Commercial negotiation and export compliance guidance",
      "Logistics coordination through export readiness",
    ],
    ctaLabel: "Complete Requirements — Commodity",
    track: "commodity",
  },
  {
    title: "Import & Export Business Plan Development",
    price: "From $500",
    discoveryFee: "$100",
    description:
      "An investor-ready import/export plan built around your target products, markets and capital position — including costing, compliance and financial projections.",
    includes: [
      "Market, product and sourcing strategy",
      "Landed cost, pricing and financial projections",
      "Compliance requirements and implementation roadmap",
    ],
    ctaLabel: "Complete Requirements — Business Plan",
    track: "businessplan",
  },
];

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-gold-deep"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function Stepper({ steps }: { steps: string[] }) {
  return (
    <ol className="flex w-full min-w-0 snap-x items-center gap-2 overflow-x-auto pb-1 text-[11px] font-semibold uppercase tracking-wider text-text/75 sm:flex-wrap">
      {steps.map((step, i) => (
        <li key={step} className="flex shrink-0 items-center gap-2">
          <span className="whitespace-nowrap rounded-full border border-text/15 bg-bg px-3 py-1.5">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="text-gold-deep">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function Details({ summary, children }: { summary: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-deep outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {summary}
        <span aria-hidden="true" className={open ? "rotate-45 transition-transform" : "transition-transform"}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && <p className="mt-2 text-xs italic leading-relaxed text-muted">{children}</p>}
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="border-b border-text/10 bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Services &amp; Engagement Options
          </p>
          <h2 id="pricing-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Work With Aisha
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-6">
            <p className="text-sm leading-relaxed text-text/85 sm:text-base">
              <span className="font-semibold text-text">Advisory</span> — a structured written
              advisory engagement for expert direction, problem-solving or a second opinion.
            </p>
            <p className="text-sm leading-relaxed text-text/85 sm:text-base">
              <span className="font-semibold text-text">Done-for-you services</span> — project
              engagements where I execute the work. These are scoped through a discovery fee and
              quoted in a written proposal before kickoff.
            </p>
          </div>
        </FadeIn>

        {/* ------------------------------ ADVISORY ------------------------- */}
        <FadeIn>
          <div id="advisory" className="mt-12 flex scroll-mt-24 items-center gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-deep">
              Advisory
            </h3>
            <span aria-hidden="true" className="h-px flex-1 bg-text/15" />
          </div>
        </FadeIn>


        <FadeIn>
          <article className="mt-6 grid min-w-0 gap-8 rounded-2xl border-2 border-accent/50 bg-surface p-6 shadow-md sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:p-10">
            <div className="min-w-0">
              <h4 className="font-display text-2xl font-bold text-text sm:text-3xl">
                International Trade Strategy Advisory
              </h4>
              <p className="mt-4 font-display text-5xl font-bold text-text">
                $250
                <span className="ml-1 text-base font-medium text-muted">USD</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                Structured asynchronous advisory engagement
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text/85 sm:text-base">
                A focused advisory engagement for clients who need expert direction on sourcing,
                importation, export strategy, supplier verification, pricing, logistics, payment
                terms or market entry.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text/75">
                After payment is verified, I review your questionnaire and documents and deliver a
                written strategic assessment with recommendations, risk observations and a
                next-step action plan — with voice-note explanations where useful. Everything is
                handled in writing by email or WhatsApp.
              </p>


              <div className="mt-6 min-w-0">
                <Stepper steps={CONSULTATION_FLOW} />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={CONSULTATION_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Pay $250 Securely
                </a>
                <a
                  href="/consultation"
                  className="inline-flex w-full items-center justify-center rounded-md px-2 py-3 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline sm:w-auto"
                >
                  Already paid? Complete the advisory questionnaire
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text">Includes</p>
              <ul className="mt-3 space-y-2 text-sm text-text/85">
                {consultationIncludes.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <Details summary="What is not included">{CONSULTATION_EXCLUSIONS}</Details>
            </div>
          </article>
        </FadeIn>

        {/* -------------------------- DONE-FOR-YOU -------------------------- */}
        <FadeIn>
          <div id="done-for-you" className="mt-16 flex scroll-mt-24 items-center gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-deep">
              Done-for-you Services
            </h3>
            <span aria-hidden="true" className="h-px flex-1 bg-text/15" />
          </div>
        </FadeIn>


        <FadeIn>
          <div className="mt-5">
            <Stepper steps={DFY_FLOW} />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-5 rounded-xl border border-text/15 bg-surface p-5">
            <p className="text-sm leading-relaxed text-text/85">{DISCOVERY_NOTE}</p>
            <Details summary="What the discovery fee does not cover">
              {DISCOVERY_EXCLUSIONS}
            </Details>
          </div>
        </FadeIn>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <article className="flex h-full flex-col rounded-2xl border border-text/15 bg-surface p-6 shadow-sm sm:p-8">
                <h4 className="font-display text-xl font-bold text-text sm:text-2xl">{s.title}</h4>
                <p className="mt-3 font-display text-3xl font-bold text-text">
                  {s.price}
                  <span className="ml-1 text-sm font-medium text-muted">USD</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  Project Discovery Fee {s.discoveryFee} — credited to your final fee
                </p>

                <p className="mt-4 text-sm leading-relaxed text-text/85">{s.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-text/85">
                  {s.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href={TRACK_ROUTES[s.track]}
                    className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90"
                  >
                    {s.ctaLabel}
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-text/70">
                    Final fee depends on scope and is confirmed in your written proposal.
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-8 text-sm text-muted">
            Need something tailored?{" "}
            <a
              href="/request/global-sourcing"
              className="font-semibold text-gold-deep underline-offset-2 hover:underline"
            >
              Request a written proposal
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
