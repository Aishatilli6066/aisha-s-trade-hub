import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

const WHATSAPP = "https://wa.me/2347042322970";

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-accent"
  >
    {children}
  </svg>
);

const services = [
  {
    title: "Global Product Sourcing",
    desc: "Identify, evaluate, and secure the right product from the right supplier across China, Asia, and beyond at a price that works.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </Icon>
    ),
  },
  {
    title: "Supplier Verification",
    desc: "Independent verification of manufacturer credentials, factory status, and trade history before any commitment is made.",
    icon: (
      <Icon>
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </Icon>
    ),
  },
  {
    title: "Landed Cost Analysis",
    desc: "A complete cost breakdown covering product price, freight, duties, customs clearance, and final delivery.",
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10M7 13h6M7 17h4" />
      </Icon>
    ),
  },
  {
    title: "OEM/ODM Coordination",
    desc: "End-to-end management of custom manufacturing from specification and sampling through production and quality inspection.",
    icon: (
      <Icon>
        <path d="M3 21V8l5-3 5 3v13" />
        <path d="M13 21V11l4-2 4 2v10" />
        <path d="M3 21h18" />
      </Icon>
    ),
  },
  {
    title: "Agricultural Commodity Export",
    desc: "Structured export of Nigerian agricultural commodities including sesame, ginger, hibiscus, moringa, and groundnuts with full documentation support.",
    icon: (
      <Icon>
        <path d="M12 2c3 4 3 8 0 12-3-4-3-8 0-12z" />
        <path d="M12 14c-4 0-7 3-7 7M12 14c4 0 7 3 7 7" />
      </Icon>
    ),
  },
  {
    title: "Trade Documentation",
    desc: "Preparation and review of Form M, Form NXP, NAQS phytosanitary certificates, packing lists, shipping instructions, and export paperwork.",
    icon: (
      <Icon>
        <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </Icon>
    ),
  },
  {
    title: "Import & Export Business Consulting",
    desc: "Strategic guidance for businesses entering or scaling in international trade, including market assessment, supplier sourcing, trade route evaluation, and operational planning.",
    icon: (
      <Icon>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </Icon>
    ),
  },
  {
    title: "Private Label Product Development",
    desc: "Launch your own branded product line through trusted private-label partners — from product selection and manufacturer sourcing to packaging, branding, compliance, and production planning across skincare, wellness, and consumer goods.",
    icon: (
      <Icon>
        <path d="M20 7L12 3 4 7v10l8 4 8-4V7z" />
        <path d="M4 7l8 4 8-4M12 11v10" />
      </Icon>
    ),
  },
  {
    title: "Import & Export Business Plan Development",
    desc: "Professional business plans built around actual budget, trade goals, target markets, supplier strategy, regulatory requirements, and realistic execution.",
    icon: (
      <Icon>
        <path d="M4 4h12l4 4v12a0 0 0 010 0H4z" />
        <path d="M16 4v4h4M8 13h8M8 17h5" />
      </Icon>
    ),
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <h2 id="services-title" className="font-display text-3xl font-bold text-text sm:text-5xl">
            Services
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/80 sm:text-lg">
            Comprehensive trade support — from sourcing and supplier verification to deal
            structuring, documentation, and building the business behind the trade.
          </p>
        </FadeIn>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.title}>
              <FadeIn>
                <article className="flex h-full flex-col rounded-lg border border-white/5 bg-surface p-6 transition-colors hover:border-accent/40">
                  <div className="mb-4">{s.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-text">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text/75">{s.desc}</p>
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Hi Aisha, I'd like to ask about ${s.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    aria-label={`Inquire about ${s.title} on WhatsApp`}
                  >
                    Inquire on WhatsApp <span aria-hidden="true">→</span>
                  </a>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
