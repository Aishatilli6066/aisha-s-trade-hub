export type DiscoveryTrack = "sourcing" | "commodity" | "businessplan";

export const DISCOVERY_TRACKS: Record<
  DiscoveryTrack,
  { label: string; fee: string; feeAmount: number; blurb: string }
> = {
  sourcing: {
    label: "Global Sourcing & Procurement",
    fee: "$100",
    feeAmount: 100,
    blurb:
      "Complete your product and procurement requirements, pay the non-refundable $100 Project Discovery Fee, then submit your payment reference and receipt. Payments are verified manually, and the fee is credited toward your final professional service fee if you proceed.",
  },
  commodity: {
    label: "Agricultural Commodity Buyer Representation",
    fee: "$150",
    feeAmount: 150,
    blurb:
      "Complete your commodity requirements, pay the non-refundable $150 Project Discovery Fee, then submit your payment reference and receipt. Payments are verified manually, and the fee is credited toward your final professional service fee if you proceed.",
  },
  businessplan: {
    label: "Import & Export Business Plan Development",
    fee: "$100",
    feeAmount: 100,
    blurb:
      "Complete your business plan requirements, pay the non-refundable $100 Project Discovery Fee, then submit your payment reference and receipt. Payments are verified manually, and the fee is credited toward your final professional service fee if you proceed.",
  },
};

export const TRACK_EVENT = "asman:select-track";

export function selectTrack(track: DiscoveryTrack) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(TRACK_EVENT, { detail: track }));
}

// ============================================================================
// FLUTTERWAVE PAYMENT LINKS — LIVE
// ----------------------------------------------------------------------------
// Payments are verified MANUALLY. There is no automatic verification and no
// automatic scheduling anywhere in this flow. After paying, the client returns
// to the site, enters the Flutterwave payment reference and uploads the
// receipt, and the request is reviewed by hand.
// ============================================================================
export const CONSULTATION_PAYMENT_LINK = "https://flutterwave.com/pay/dpfjpkic7pmw";

// Dedicated Flutterwave link for the Import & Export Business Plan service.
// Never reuse the Global Sourcing link here.
export const BUSINESS_PLAN_PAYMENT_LINK = "https://flutterwave.com/pay/vxbmaha2nvyr";

export const DISCOVERY_PAYMENT_LINKS: Record<DiscoveryTrack, string> = {
  sourcing: "https://flutterwave.com/pay/wkqkjka4juf2",
  commodity: "https://flutterwave.com/pay/mhyg1mc9xzr0",
  businessplan: BUSINESS_PLAN_PAYMENT_LINK,
};

export function isPaymentConfigured(track: DiscoveryTrack) {
  return DISCOVERY_PAYMENT_LINKS[track].trim().length > 0;
}

// Draft storage key — keeps requirements safely in the browser while the
// client is away on the payment provider's page.
export const DRAFT_STORAGE_KEY = "asman:service-request-draft";

// Process labels (kept in one place so pricing cards and the forms match).
export const CONSULTATION_STEPS = [
  "Pay $250",
  "Complete Questionnaire",
  "Submit Payment Reference & Receipt",
  "Manual Verification",
  "Scheduling Link Sent",
];

export const DONE_FOR_YOU_STEPS = [
  "Complete Requirements",
  "Pay Discovery Fee",
  "Submit Reference & Receipt",
  "Manual Payment Verification",
  "Project Review",
  "Written Proposal",
  "Accept Proposal & Pay Balance",
  "Kickoff",
];

// Where completed questionnaires and paid requests are sent.
export const CONTACT_EMAIL = "aishau6066@gmail.com";
export const WHATSAPP_NUMBER = "2347042322970";
