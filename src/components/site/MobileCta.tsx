import { WhatsAppIcon } from "./icons";

const WHATSAPP = "https://wa.me/2347084443626";

export function MobileCta() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-accent px-4 py-3 text-sm font-semibold text-text shadow-lg md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      style={{ minHeight: 48, paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon size={18} />
      <span>Message me on WhatsApp</span>
    </a>
  );
}
