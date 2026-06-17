const WHATSAPP = "https://wa.me/2347042322970";

export function MobileCta() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-50 flex min-h-12 items-center justify-center bg-accent px-4 text-sm font-semibold text-text shadow-lg md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      style={{ minHeight: 48 }}
    >
      Message me on WhatsApp →
    </a>
  );
}
