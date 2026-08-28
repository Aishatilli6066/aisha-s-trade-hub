import { POLICY_LINKS } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

import { WHATSAPP_URL as WHATSAPP } from "@/lib/discovery";
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
    className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-text/15 text-text transition-colors hover:bg-text/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${brandClass}`}
  >
    {children}
  </a>
);

export function Footer() {
  return (
    <footer className="border-t border-accent pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-bold text-text">Aisha Usman</p>
            <p className="mt-1 text-sm text-text/80">
              International Trade Consultant | Global Sourcing Specialist | Export Strategist
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Based in Kano, Nigeria. Working internationally. Advisory is delivered personally by
              Aisha Usman; corporate sourcing and trade execution are handled through ASMAN Prime
              Hub Global Services Limited.
            </p>
          </div>
          <nav aria-label="Site" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:justify-items-end">
            {[
              { href: "/#services", label: "Services" },
              { href: "/#pricing", label: "Pricing" },
              { href: "/blog", label: "Blog" },
              { href: "/#faq", label: "FAQ" },
              { href: "/#contact", label: "Contact" },
              { href: `mailto:${EMAIL}`, label: "Email" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-text/80 underline-offset-2 transition-colors hover:text-gold-deep hover:underline"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-text/10 px-4 py-8 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted">© 2026 Aisha Usman. All rights reserved.</p>
          <nav aria-label="Legal" className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start">
            {POLICY_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium text-muted underline-offset-2 transition-colors hover:text-gold-deep hover:underline"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <SocialLink href={WHATSAPP} label="Message Aisha on WhatsApp" brandClass="hover:border-[#25D366] hover:text-[#25D366]">
            <WhatsAppIcon size={18} />
          </SocialLink>
          <SocialLink href={`mailto:${EMAIL}`} label="Email Aisha" brandClass="hover:border-accent hover:text-gold-deep">
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
          <SocialLink href={X_URL} label="Aisha on X" brandClass="hover:border-text hover:text-text">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.83l-5.34-6.98L4.7 22H1.44l8.03-9.18L1 2h7l4.83 6.39zM17.07 20.13h1.8L7.03 3.77H5.1z" />
            </svg>
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}
