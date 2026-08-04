import { useState } from "react";
import { FadeIn } from "./FadeIn";

export const FAQS = [
  {
    q: "How do I know which service I need?",
    a: "If you need direction — market choice, product viability, pricing structure, supplier strategy or how to start — book the International Trade Strategy Consultation. If you already know what you want and need it executed, start with the Project Discovery Fee for Global Sourcing, Agricultural Commodity Buyer Representation or Import & Export Business Plan Development. If you are unsure, message me on WhatsApp and I will point you to the right one before you pay anything.",
  },
  {
    q: "Why do I pay before the consultation instead of after?",
    a: "Because preparation starts before we meet. Your questionnaire and documents are reviewed in advance so the session opens with substance rather than discovery questions. Paying first also reserves the time slot. This is a working session, not a sales call.",
  },
  {
    q: "What is a Project Discovery Fee and is it an extra charge?",
    a: "It is the first paid stage of a done-for-you project: assessment of your requirements, a feasibility and risk review, scope definition, and a written proposal with the final fee and timeline. It is not an extra charge — if you accept the proposal and proceed, the discovery fee is credited in full against the final project fee.",
  },
  {
    q: "What happens after I submit a form and pay?",
    a: "Payments are verified manually, normally within one business day. For consultations, a private scheduling link is sent to you by email or WhatsApp once payment is confirmed. For done-for-you services, scope and feasibility review begins and your written proposal follows. There is no automatic verification and no public booking link, so submitting a form alone does not confirm a booking.",
  },
  {
    q: "Are the fees refundable?",
    a: "Fees become non-refundable once review or preparation has begun, because that is what the fee pays for. If payment has been received but no work has started, a refund request is considered in good faith. Duplicate payments are refunded. Full detail is in the Payment, Refund, Rescheduling and Cancellation Policy.",
  },
  {
    q: "Can I reschedule my consultation?",
    a: "Yes — once at no charge, with at least 24 hours' notice. Shorter notice is accommodated where the time can be reused. A no-show without notice is treated as delivered, though you still receive a written summary based on your questionnaire.",
  },
  {
    q: "Do you guarantee that a supplier will be found or a deal will close?",
    a: "No, and any consultant who does should worry you. Fees pay for professional work, judgement and honest findings. If a project is not commercially feasible, I tell you plainly and explain why — that finding is itself part of the value, and it is usually cheaper than discovering it after you have committed funds.",
  },
  {
    q: "Is the final project fee the same as the price shown on the site?",
    a: "The prices shown are starting points. The final fee depends on product complexity, supplier location, quantity, verification requirements and overall scope. It is always confirmed in writing in your proposal before the main engagement begins. Nothing beyond the discovery fee is charged until you accept that proposal.",
  },
  {
    q: "Is my business information kept confidential?",
    a: "Yes. Your documents, supplier details, pricing and specifications are used only to assess and deliver your requested service, and client identities are never disclosed in case studies. Where a project requires contacting a supplier, buyer or inspection body, only the details needed for that step are shared.",
  },
  {
    q: "What is the difference between Aisha Usman and ASMAN Prime Hub?",
    a: "Aisha Usman is the consultant you work with directly — strategy, advisory and judgement. ASMAN Prime Hub Global Services Limited is the registered company through which sourcing, export coordination and transaction execution are carried out. One relationship, with a registered company standing behind the execution side.",
  },
  {
    q: "Which countries and clients do you work with?",
    a: "Clients across Africa, Asia, the Middle East and Europe — importers, exporters, manufacturers, procurement teams, e-commerce brands and entrepreneurs building private-label lines. Sessions are held by video, and project communication runs over email and WhatsApp.",
  },
  {
    q: "How do I pay, and is my card safe?",
    a: "Payments are made through Flutterwave using the secure link for your chosen service. Card details are entered on Flutterwave's own platform and never touch this website. All that is submitted here is the payment reference and your receipt, used for manual verification.",
  },
] as const;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-text/10 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            Before you book
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-text sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text/80">
            Straight answers on fees, discovery, verification and what you can reasonably expect.
            Anything not covered here, ask me directly before you pay.
          </p>
        </FadeIn>

        <FadeIn>
          <ul className="mt-10 divide-y divide-text/10 border-y border-text/10">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-start justify-between gap-4 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="font-display text-base font-semibold text-text sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-gold-deep transition-transform ${isOpen ? "rotate-45" : ""}`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    hidden={!isOpen}
                    className="pb-6 pr-8 text-sm leading-relaxed text-text/85 sm:text-base"
                  >
                    {item.a}
                  </div>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
