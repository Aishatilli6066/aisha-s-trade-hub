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
  "Three business days of limited clarification support over WhatsApp or email",
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
      "The outcome is the right product from the right supplier at a landed cost that still leaves you a margin. I turn your requirement into a written specification, find manufacturers who can genuinely meet it, verify them independently before any payment, and pressure-test every quotation on true landed cost rather than unit price — so supplier risk is controlled and the shortlist is one you can defend to a board or lender.",
    includes: [
      "Written product specification built from your requirement",
      "Supplier and manufacturer identification across relevant markets",
      "Independent verification, due diligence and factory assessment support",
      "Quotation comparison on landed cost, MOQ, lead time and terms",
      "Price and commercial-term negotiation on your behalf",
      "Sample, inspection and quality-checkpoint coordination",
      "Ongoing factory communication through order placement",
    ],
    ctaLabel: "Scope My Sourcing Project",
    track: "sourcing",
  },
  {
    title: "Agricultural Commodity Buyer Representation",
    price: "From $750",
    discoveryFee: "$150",
    description:
      "Buy Nigerian agricultural commodities — sesame, ginger, hibiscus, moringa, groundnuts and related crops — without exposing your capital to unverified sellers, off-spec cargo or documentation failures. I represent you on the ground: sellers screened before money moves, quality held to the specification you signed off, and export paperwork checked so the shipment is not stopped at either end.",
    includes: [
      "Seller screening, verification and background checks",
      "Specification agreement and quality-parameter sign-off",
      "Third-party inspection and pre-shipment testing coordination",
      "Commercial negotiation, Incoterms and payment-structure guidance",
      "Packaging, labelling and container-loading oversight",
      "Export documentation and compliance checks before shipment",
      "Progress reporting through to export readiness",
    ],
    ctaLabel: "Scope My Commodity Purchase",
    track: "commodity",
  },
  {
    title: "Import & Export Business Plan Development",
    price: "From $500",
    discoveryFee: "$100",
    description:
      "A decision-ready commercial model, not a document you file away. Built on your actual products, target markets and capital position and costed with real landed-cost assumptions rather than optimistic margins — so you can see where the margin is, what compliance will cost, and whether the numbers justify proceeding. Written to stand up to a lender, investor or licensing authority, and structured so you can execute from it.",
    includes: [
      "Product, market and sourcing strategy with rationale",
      "Landed-cost model, pricing and margin analysis",
      "Financial projections over your chosen horizon",
      "Competitor and demand overview for the target market",
      "Licensing, compliance and documentation requirements",
      "Operations, logistics and payment-terms structure",
      "Phased implementation roadmap with milestones",
    ],
    ctaLabel: "Scope My Business Plan",
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
      <p
        aria-hidden={!open}
        className={`mt-2 overflow-hidden text-xs italic leading-relaxed text-muted transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </p>
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
              <span className="font-semibold text-text">Advisory</span> — evaluate the
              opportunity before you commit capital, or get a second opinion when the decision is
              already on the table.
            </p>
            <p className="text-sm leading-relaxed text-text/85 sm:text-base">
              <span className="font-semibold text-text">Done-for-you services</span> — the
              decision is made and I carry out the work. Scoped through a paid discovery stage and
              quoted in a written proposal before anything starts.
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
                Evaluate the Opportunity Before You Commit Capital
              </h4>
              <p className="mt-4 font-display text-5xl font-bold text-text">
                $250
                <span className="ml-1 text-base font-medium text-muted">USD</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                Structured asynchronous advisory engagement
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text/85 sm:text-base">
                A structured assessment of your proposed import or export opportunity — product
                and market viability, compliance requirements, cost structure, commercial
                soundness, key risks and the execution sequence I would follow — so the next
                commitment you make is an informed one.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text/75">
                International Trade Strategy Advisory — $250 USD. After payment is verified I
                review your questionnaire and documents and deliver a written strategic assessment
                with recommendations, risk observations and a next-step action plan, with
                voice-note explanations where useful, by email or WhatsApp.
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
                  Start My Advisory — Pay $250
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
            Not sure execution is the right next step yet? Start with the advisory, or{" "}
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
