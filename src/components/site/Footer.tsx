const WHATSAPP = "https://wa.me/2347042322970";
const EMAIL = "aishau6066@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-accent pb-20 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted">© 2025 Aisha Usman. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Aisha on WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.5 3.5A11.5 11.5 0 003.6 18.3L2 22l3.8-1.6A11.5 11.5 0 1020.5 3.5zm-8.5 18a9.5 9.5 0 01-4.8-1.3l-.3-.2-2.2.9.9-2.1-.2-.4A9.5 9.5 0 1112 21.5zm5.4-7.1c-.3-.1-1.7-.8-2-.9s-.5-.2-.6.2-.7.9-.9 1.1-.3.2-.6.1a7.9 7.9 0 01-2.3-1.4 8.6 8.6 0 01-1.6-2c-.2-.3 0-.5.1-.7l.4-.5.3-.5a.5.5 0 000-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-1 2.3 5.3 5.3 0 001.1 2.8 12 12 0 004.6 4 5.4 5.4 0 003.3.7 2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.3-.2-.6-.3z" />
            </svg>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email Aisha"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 7 9-7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
