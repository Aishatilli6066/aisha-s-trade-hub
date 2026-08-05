import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section, List } from "@/components/site/LegalPage";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

const TITLE = "Terms of Service — Aisha Usman Trade Consulting";
const DESC =
  "The terms governing advisory, sourcing and business plan engagements with Aisha Usman, including scope, client responsibilities, confidentiality and limitation of liability.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/terms` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="4 August 2026"
      intro="These terms apply when you start an advisory engagement, submit a service request, or engage Aisha Usman for advisory or done-for-you trade work. Submitting a form on this website means you accept them."
    >
      <Section heading="1. Nature of the service">
        <p>
          Aisha Usman provides professional advisory and trade support services: strategy
          trade strategy advisory, supplier research and verification, sourcing and procurement coordination,
          agricultural commodity buyer representation, and import and export business plan
          development. The service is advisory and coordinative in nature. It is not legal advice,
          tax advice, financial or investment advice, customs brokerage, or a regulated financial
          service.
        </p>
        <p>
          Strategic advisory is delivered personally by Aisha Usman. Sourcing, export coordination
          and transaction execution are carried out through ASMAN Prime Hub Global Services Limited.
        </p>
      </Section>

      <Section heading="2. No guarantee of outcome">
        <p>
          Fees are charged for professional time, judgement and work product — not for a result.
          Nothing on this website or in any engagement is a guarantee that:
        </p>
        <List
          items={[
            "A suitable supplier, manufacturer or buyer will be found.",
            "A transaction, contract or shipment will be completed.",
            "Financing, credit, funding or investment will be obtained.",
            "A particular price, margin, lead time or profit will be achieved.",
            "A licence, certification or regulatory approval will be granted.",
            "A business plan will result in funding, approval or commercial success.",
          ]}
        />
        <p>
          Where a project is assessed as not commercially feasible, that finding is itself part of
          the work delivered and is communicated honestly.
        </p>
      </Section>

      <Section heading="3. Your responsibilities">
        <List
          items={[
            "Provide accurate, complete and lawful information and documents.",
            "Tell the consultant promptly if your requirements, budget or timeline change.",
            "Make your own final commercial, legal, financial and tax decisions, taking independent professional advice where appropriate.",
            "Satisfy yourself before transferring funds to any supplier, buyer or third party. Payments to third parties are made at your own discretion and risk.",
            "Comply with the import, export, sanctions and licensing rules that apply to you.",
          ]}
        />
        <p>
          Recommendations are based on the information you supply. Incomplete or inaccurate
          information will affect the quality and usefulness of the outcome.
        </p>
      </Section>

      <Section heading="4. Scope of work">
        <p>
          Each engagement has a defined scope. For the advisory, the scope is the questionnaire and
          document review, the written strategic assessment and three business days of limited
          clarification support. For done-for-you services,
          the scope is set out in the written proposal issued after your discovery fee has been
          verified.
        </p>
        <p>Unless expressly included in your written proposal, the following are charged separately:</p>
        <List
          items={[
            "Supplier sourcing beyond the agreed number of suppliers or product lines.",
            "Extended market research, competitor analysis or feasibility studies.",
            "Costing models, landed-cost build-ups and pricing analysis.",
            "Negotiation on your behalf and ongoing supplier management.",
            "Document preparation, contract drafting support and compliance paperwork.",
            "Logistics coordination, inspection arrangement and transaction execution.",
            "Pitch decks, financial models or additional revisions beyond those agreed.",
          ]}
        />
        <p>
          Professional fees never include third-party costs: the cost of goods, freight, insurance,
          inspections, laboratory testing, customs duties, taxes, certifications, registration or
          licensing fees.
        </p>
      </Section>

      <Section heading="5. Fees and payment">
        <p>
          Fees, discovery fees, refund treatment and verification are set out in the{" "}
          <a
            href="/payment-policy"
            className="font-semibold text-gold-deep underline-offset-2 hover:underline"
          >
            Payment, Refund and Cancellation Policy
          </a>
          , which forms part of these terms. Payments are verified manually. No session is scheduled
          and no project work begins before verification.
        </p>
      </Section>

      <Section heading="6. Confidentiality">
        <p>
          Information and documents you share are treated as confidential and are used only to
          assess and deliver your requested service. Client identities are not disclosed in case
          studies or published material. Where a project requires contact with a supplier, buyer or
          service provider, only the details needed for that step are shared.
        </p>
        <p>
          You agree to treat proposals, supplier information, pricing and other material provided to
          you as confidential, and not to disclose it to competitors or to use it to bypass the
          engagement.
        </p>
      </Section>

      <Section heading="7. Intellectual property">
        <p>
          Business plans, written recommendations, proposals, research summaries, templates and
          other deliverables are prepared for your business and for your internal use. On full
          payment of the agreed fee, you may use them freely for your own business purposes. Unless
          otherwise agreed in writing, underlying methodologies, frameworks, templates and know-how
          remain the property of the consultant, and deliverables may not be resold, republished or
          distributed as a commercial product.
        </p>
        <p>Website content, text and design remain the property of their owner.</p>
      </Section>

      <Section heading="8. Acceptable use">
        <p>You agree not to use this website or its forms to:</p>
        <List
          items={[
            "Submit false, fraudulent or misleading information, or forged payment evidence.",
            "Upload malicious files or attempt to interfere with the website or its email delivery.",
            "Send automated, bulk or repeated submissions.",
            "Pursue any unlawful activity, including sanctioned, restricted or prohibited goods.",
            "Harvest content or contact details for marketing purposes.",
          ]}
        />
        <p>
          Submissions that appear automated, duplicated or fraudulent may be rejected without
          notice, and an engagement may be declined or terminated where misuse is identified.
        </p>
      </Section>

      <Section heading="9. Limitation of liability">
        <p>
          Services are provided with reasonable professional care and skill. To the extent permitted
          by law, liability for any single engagement is limited to the fees you actually paid for
          that engagement, and does not extend to indirect or consequential losses such as lost
          profit, lost opportunity, or losses arising from the acts, defaults or insolvency of a
          supplier, buyer, carrier or other third party. Nothing in these terms limits liability
          where it cannot lawfully be limited, including for fraud.
        </p>
      </Section>

      <Section heading="10. Termination">
        <p>
          Either party may end an engagement in writing. Work properly performed up to that point,
          and any discovery fee already applied to completed assessment work, remains payable. The
          Payment Policy governs what is refundable.
        </p>
      </Section>

      <Section heading="11. Governing law">
        <p>
          These terms are governed by the laws of the Federal Republic of Nigeria, where the
          consultant is based and registered. The parties will first attempt to resolve any dispute
          in good faith through direct discussion. Where an engagement involves a written proposal
          or contract that specifies a different governing law or dispute procedure, that document
          takes precedence for that engagement.
        </p>
      </Section>

      <Section heading="12. Changes">
        <p>
          These terms may be updated from time to time. The version published on this page at the
          time you submit a form is the version that applies to that submission.
        </p>
      </Section>
    </LegalPage>
  );
}
