const WHATSAPP = "https://wa.me/2347042322970";
const EMAIL = "aishau6066@gmail.com";
const FACEBOOK = "https://www.facebook.com/share/1bDmXqM44K/";
const LINKEDIN = "https://www.linkedin.com/in/liaisha-usman-consultant";
const INSTAGRAM = "https://www.instagram.com/aisha_usman6066";
const X_URL = "https://x.com/Aishaweb3a";

type SocialProps = {
  href: string;
  label: string;
  brandClass: string;
  children: React.ReactNode;
};

const SocialLink = ({ href, label, brandClass, children }: SocialProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-text transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${brandClass}`}
  >
    {children}
  </a>
);

export function Footer() {
  return (
    <footer className="border-t border-accent pb-20 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted">© 2025 Aisha Usman. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SocialLink href={WHATSAPP} label="Message Aisha on WhatsApp" brandClass="hover:border-[#25D366] hover:text-[#25D366]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.5 3.5A11.5 11.5 0 003.6 18.3L2 22l3.8-1.6A11.5 11.5 0 1020.5 3.5zm-8.5 18a9.5 9.5 0 01-4.8-1.3l-.3-.2-2.2.9.9-2.1-.2-.4A9.5 9.5 0 1112 21.5zm5.4-7.1c-.3-.1-1.7-.8-2-.9s-.5-.2-.6.2-.7.9-.9 1.1-.3.2-.6.1a7.9 7.9 0 01-2.3-1.4 8.6 8.6 0 01-1.6-2c-.2-.3 0-.5.1-.7l.4-.5.3-.5a.5.5 0 000-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-1 2.3 5.3 5.3 0 001.1 2.8 12 12 0 004.6 4 5.4 5.4 0 003.3.7 2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.3-.2-.6-.3z" />
            </svg>
          </SocialLink>
          <SocialLink href={`mailto:${EMAIL}`} label="Email Aisha" brandClass="hover:border-accent hover:text-accent">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 7 9-7" />
            </svg>
          </SocialLink>
          <SocialLink href={LINKEDIN} label="Aisha on LinkedIn" brandClass="hover:border-[#0A66C2] hover:text-[#0A66C2]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9z" />
            </svg>
          </SocialLink>
          <SocialLink href={INSTAGRAM} label="Aisha on Instagram" brandClass="hover:border-[#E4405F] hover:text-[#E4405F]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </SocialLink>
          <SocialLink href={FACEBOOK} label="Aisha on Facebook" brandClass="hover:border-[#1877F2] hover:text-[#1877F2]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46H17V4.4c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.81 1.38-3.81 3.91V10.5H8.5v3h2.41V21z" />
            </svg>
          </SocialLink>
          <SocialLink href={X_URL} label="Aisha on X" brandClass="hover:border-white hover:text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.83l-5.34-6.98L4.7 22H1.44l8.03-9.18L1 2h7l4.83 6.39zM17.07 20.13h1.8L7.03 3.77H5.1z" />
            </svg>
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
