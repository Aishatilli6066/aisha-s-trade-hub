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
      "Submit your product and procurement requirements, then pay the non-refundable $100 Project Discovery Fee. It is credited toward your final professional service fee if you proceed.",
  },
  commodity: {
    label: "Agricultural Commodity Buyer Representation",
    fee: "$150",
    feeAmount: 150,
    blurb:
      "Submit your commodity requirements, then pay the non-refundable $150 Project Discovery Fee. It is credited toward your final professional service fee if you proceed.",
  },
};

export const TRACK_EVENT = "asman:select-track";

export function selectTrack(track: DiscoveryTrack) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(TRACK_EVENT, { detail: track }));
}
