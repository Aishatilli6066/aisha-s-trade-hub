export type DiscoveryTrack = "sourcing" | "commodity";

export const DISCOVERY_TRACKS: Record<
  DiscoveryTrack,
  { label: string; fee: string; feeAmount: number; blurb: string }
> = {
  sourcing: {
    label: "Global Sourcing & Procurement",
    fee: "$100",
    feeAmount: 100,
    blurb:
      "Complete your product and procurement requirements, then pay the non-refundable $100 Project Discovery Fee. Your request is submitted only after payment succeeds, and the fee is credited toward your final professional service fee if you proceed.",
  },
  commodity: {
    label: "Agricultural Commodity Buyer Representation",
    fee: "$150",
    feeAmount: 150,
    blurb:
      "Complete your commodity requirements, then pay the non-refundable $150 Project Discovery Fee. Your request is submitted only after payment succeeds, and the fee is credited toward your final professional service fee if you proceed.",
  },
};

export const TRACK_EVENT = "asman:select-track";

export function selectTrack(track: DiscoveryTrack) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(TRACK_EVENT, { detail: track }));
}

// ============================================================================
// PAYMENT PROVIDER CONFIGURATION
// ----------------------------------------------------------------------------
// Replace the empty strings below with a live hosted payment link (Paystack,
// Flutterwave, Stripe Payment Link, etc.) for each discovery fee. As long as a
// value is empty, the UI shows a "payment provider not connected" state and
// never marks a request as paid or submitted.
//
// Example:
//   sourcing:  "https://paystack.shop/pay/asman-discovery-100",
//   commodity: "https://paystack.shop/pay/asman-discovery-150",
// ============================================================================
export const DISCOVERY_PAYMENT_LINKS: Record<DiscoveryTrack, string> = {
  sourcing: "",
  commodity: "",
};

export function isPaymentConfigured(track: DiscoveryTrack) {
  return DISCOVERY_PAYMENT_LINKS[track].trim().length > 0;
}

// Draft storage key — keeps requirements safely in the browser while the
// client is away on the payment provider's page.
export const DRAFT_STORAGE_KEY = "asman:service-request-draft";

// Process labels (kept in one place so pricing cards and the form match).
export const CONSULTATION_STEPS = ["Pay", "Complete Questionnaire", "Schedule Session"];

export const DONE_FOR_YOU_STEPS = [
  "Complete Requirements",
  "Pay Discovery Fee",
  "Submit Paid Request",
  "Project Review",
  "Written Proposal",
  "Accept Proposal & Pay Balance",
  "Kickoff",
];
