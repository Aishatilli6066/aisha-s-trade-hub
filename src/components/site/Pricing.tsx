import { FadeIn } from "./FadeIn";
import {
  selectTrack,
  CONSULTATION_STEPS,
  DONE_FOR_YOU_STEPS,
  CONSULTATION_PAYMENT_LINK,
} from "@/lib/discovery";

// ============================================================================
// PAYMENTS — FLUTTERWAVE, MANUAL VERIFICATION
// ----------------------------------------------------------------------------
// Every payment on this site is verified BY HAND. After paying through the
// Flutterwave link, the client completes the relevant form on the site,
// enters the Flutterwave payment reference and uploads the receipt.
// Nothing is auto-verified and nothing is auto-scheduled: the Cal.com
// scheduling link for the consultation is sent by email/WhatsApp only after
// the payment has been verified manually.
// ============================================================================

const FEE_NOTE =
  "Final professional fee depends on product complexity, supplier location, quantity, verification requirements and project scope.";

const PROCESS_STEPS = DONE_FOR_YOU_STEPS;

const DISCOVERY_COVERS =
  "The Project Discovery Fee covers initial project review, feasibility assessment, scope definition, risk identification, and preparation of a tailored written proposal.";

const DISCOVERY_EXCLUDES =
  "It does not include supplier sourcing, market research, negotiations, document preparation, logistics coordination, or transaction execution.";




type Service = {
  title: string;
  price: string;
  discoveryFee: string;
  discoveryIntro: string;
  description: string;
  includes: string[];
  bestFor?: string;
  disclaimer?: string;
  ctaLabel: string;
  track: "sourcing" | "commodity";
};

const services: Service[] = [
  {
    title: "Global Sourcing and Procurement",
    price: "Starting from $500",
    discoveryFee: "$100",
    discoveryIntro:
      "You complete your project requirements, then pay the non-refundable $100 Project Discovery Fee. Your request is submitted only after payment succeeds. The $100 is credited toward your final professional service fee if you proceed with the engagement.",

    description:
      "A comprehensive sourcing and procurement engagement for businesses ready to purchase products internationally — covering product requirements, specifications, quality standards, budget, destination market and timeline before work begins.",
    includes: [
      "Product sourcing",
      "Supplier identification",
      "Supplier verification",
      "Supplier quotation comparison",
      "Price negotiation",
      "Factory communication",
      "Procurement coordination",
      "Ongoing sourcing support",
    ],
    bestFor:
      "Businesses requiring hands-on support for sourcing, procurement, and manufacturing coordination.",
    disclaimer:
      "This professional service fee covers sourcing and procurement support only. It does not include the cost of goods, shipping, inspections, customs duties, taxes, certifications, laboratory testing, or any other third-party expenses.",
    ctaLabel: "Complete Requirements — Sourcing",
    track: "sourcing",
  },
  {
    title: "Agricultural Commodity Buyer Representation",
    price: "Starting from $750",
    discoveryFee: "$150",
    discoveryIntro:
      "You complete your commodity requirements, then pay the non-refundable $150 Project Discovery Fee. Your request is submitted only after payment succeeds. The $150 is credited toward your final professional service fee if you proceed with the engagement.",

    description:
      "End-to-end buyer representation for international companies sourcing agricultural commodities from Nigeria. I act as your sourcing partner throughout procurement — ensuring credible suppliers, competitive pricing, and compliance with your quality, documentation and logistics requirements.",
    includes: [
      "Dedicated buyer representation",
      "End-to-end agricultural commodity sourcing",
      "Supplier identification, screening, and verification",
      "Quality assessment and compliance verification",
      "Commercial price negotiation",
      "Export documentation and compliance guidance",
      "Logistics and shipment coordination",
      "Procurement management through export readiness",
      "Ongoing transaction support and communication",
    ],
    bestFor:
      "Importers, distributors, manufacturers, wholesalers, and procurement teams sourcing Nigerian agricultural commodities — sesame seeds, hibiscus flowers, dry ginger, gum arabic, cashew kernels, coconut shell charcoal, soybeans, shea products, and other export-ready commodities.",
    disclaimer:
      "This professional service fee covers buyer representation and sourcing support only. It does not include the cost of goods, freight, inspections, customs duties, taxes, certifications, laboratory testing, or any other third-party expenses.",
    ctaLabel: "Complete Requirements — Commodity",
    track: "commodity",
  },
  {
    title: "Import & Export Business Plan Development",
    price: "Starting from $500",
    discoveryFee: "$100",
    discoveryIntro:
      "You complete your business plan requirements, then pay the non-refundable $100 Project Discovery Fee and submit your Flutterwave payment reference and receipt. Payment is verified manually before project review begins. The $100 is credited toward your final professional service fee if you proceed with the engagement.",
    description:
      "A structured, investor-ready import and export business plan built around your target products, markets and capital position — covering market selection, sourcing and supply strategy, costing, compliance requirements, logistics model and financial projections.",
    includes: [
      "Import/export business model definition",
      "Target market and product selection analysis",
      "Sourcing and supply chain strategy",
      "Costing, pricing and landed cost modelling",
      "Regulatory, licensing and compliance requirements",
      "Logistics and shipping approach",
      "Financial projections and capital requirements",
      "Implementation roadmap and next steps",
    ],
    bestFor:
      "Entrepreneurs, startups and established businesses formalising an import or export operation, or preparing a plan for funding, licensing or internal approval.",
    disclaimer:
      "This professional service fee covers business plan development only. It does not include company registration, licensing fees, the cost of goods, shipping, inspections, customs duties, taxes, certifications, or any other third-party expenses.",
    ctaLabel: "Complete Requirements — Business Plan",
    track: "businessplan",
  },
];


const consultationIncludes = [
  "Consultation questionnaire completed after payment, before verification",
  "Review of the information and documents you submit in the questionnaire",
  "60-minute private video strategy session, scheduled after manual payment verification",
  "Written recommendations and next-step action plan",
  "Three business days of limited WhatsApp follow-up for clarification",
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
      className="mt-0.5 shrink-0 text-accent"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="border-b border-text/10 bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Engagements
          </p>
          <h2 id="pricing-title" className="mt-3 font-display text-3xl font-bold text-text sm:text-5xl">
            Work With Me
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Advisory is booked and paid directly. Done-for-you services are scoped first, then
            quoted in a written proposal before any payment is made.
          </p>
        </FadeIn>

        {/* ---------------------------------------------------------------- */}
        {/* ADVISORY                                                          */}
        {/* ---------------------------------------------------------------- */}
        <FadeIn>
          <div className="mt-14 flex items-center gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Advisory
            </h3>
            <span aria-hidden="true" className="h-px flex-1 bg-text/15" />
          </div>
        </FadeIn>

        <FadeIn>
          <article className="mt-6 grid gap-8 rounded-2xl border-2 border-accent/50 bg-surface p-8 shadow-md lg:grid-cols-[1.1fr_1fr] lg:p-10">
            <div>
              <h4 className="font-display text-2xl font-bold text-text sm:text-3xl">
                International Trade Strategy Consultation
              </h4>
              <p className="mt-4 font-display text-5xl font-bold text-text">
                $250
                <span className="ml-1 text-base font-medium text-muted">USD</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                60-minute private video session
              </p>
              <p className="mt-5 text-sm leading-relaxed text-text/85 sm:text-base">
                A private advisory engagement for businesses requiring expert direction on sourcing,
                importation, export strategy, supplier verification, pricing, logistics, payment
                terms or market entry.
              </p>

              <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wider text-text/75">
                {CONSULTATION_STEPS.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="rounded-full border border-text/15 bg-bg px-4 py-2">
                      {step}
                    </span>
                    {i < CONSULTATION_STEPS.length - 1 && (
                      <span aria-hidden="true" className="text-accent">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>

              <p className="mt-4 text-sm leading-relaxed text-text/85">
                You pay the $250 fee first through Flutterwave. You then complete the consultation
                questionnaire on this site, enter your Flutterwave payment reference and upload your
                receipt. Payments are verified manually — once verified, the Cal.com scheduling link
                for your 60-minute session is sent to you by email or WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  className="inline-flex w-full items-center justify-center rounded-md border border-text/20 px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent sm:w-auto"
                >
                  Already Paid — Complete Questionnaire
                </a>
              </div>
              <p className="mt-2 text-xs text-muted">
                Pay → Questionnaire → Payment reference &amp; receipt → Manual verification →
                Scheduling link sent
              </p>


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

              <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-text">
                  Follow-up support
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text/90">
                  Includes three business days of WhatsApp follow-up for brief clarification on
                  recommendations discussed during the consultation. New research, document
                  preparation, supplier sourcing, costing, negotiation or transaction management is
                  billed separately.
                </p>
              </div>

              <p className="mt-4 text-xs italic leading-relaxed text-muted">
                This consultation does not include supplier sourcing, extensive market research,
                document preparation, negotiation, costing development or transaction management.
                These services are quoted separately.
              </p>
            </div>
          </article>
        </FadeIn>

        {/* ---------------------------------------------------------------- */}
        {/* DONE-FOR-YOU SERVICES                                             */}
        {/* ---------------------------------------------------------------- */}
        <FadeIn>
          <div className="mt-20 flex items-center gap-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Done-For-You Services
            </h3>
            <span aria-hidden="true" className="h-px flex-1 bg-text/15" />
          </div>
        </FadeIn>

        <FadeIn>
          <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-wider text-text/75">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-text/15 bg-surface px-4 py-2">
                  {step}
                </span>
                {i < PROCESS_STEPS.length - 1 && (
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 rounded-xl border border-text/15 bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              What the Project Discovery Fee covers
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text/85">{DISCOVERY_COVERS}</p>
            <p className="mt-3 text-sm italic leading-relaxed text-muted">{DISCOVERY_EXCLUDES}</p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <article className="flex h-full flex-col rounded-2xl border border-text/15 bg-surface p-8 shadow-sm">
                <h4 className="font-display text-xl font-bold text-text sm:text-2xl">{s.title}</h4>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                  Professional service fee
                </p>
                <p className="mt-1 font-display text-3xl font-bold text-text sm:text-4xl">
                  {s.price}
                  <span className="ml-1 text-base font-medium text-muted">USD</span>
                </p>

                <div className="mt-4 rounded-lg border border-accent/40 bg-accent/10 p-4">
                  <p className="font-display text-lg font-bold text-text">
                    Project Discovery Fee: {s.discoveryFee}
                    <span className="ml-1 text-xs font-medium text-muted">USD</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text/90">{s.discoveryIntro}</p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text/85">{s.description}</p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                  Includes
                </p>
                <ul className="mt-3 space-y-2 text-sm text-text/85">
                  {s.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                {s.bestFor && (
                  <>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-text">
                      Best For
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text/85">{s.bestFor}</p>
                  </>
                )}

                <div className="mt-auto">
                  <a
                    href="#service-request"
                    onClick={() => selectTrack(s.track)}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text shadow-sm transition-opacity hover:opacity-90"
                  >
                    {s.ctaLabel}
                  </a>
                  <p className="mt-4 text-xs leading-relaxed text-text/70">{FEE_NOTE}</p>
                  {s.disclaimer && (
                    <p className="mt-3 text-xs italic leading-relaxed text-muted">{s.disclaimer}</p>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>


        <FadeIn>
          <p className="mt-10 text-sm text-muted">
            Need something tailored?{" "}
            <a
              href="#service-request"
              className="font-semibold text-accent underline-offset-2 hover:underline"
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
