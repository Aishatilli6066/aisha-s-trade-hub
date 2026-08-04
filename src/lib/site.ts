/**
 * Canonical public origin for the site. Used for canonical links, og:url,
 * sitemap.xml, robots.txt and JSON-LD @id values.
 */
export const SITE_URL = "https://www.aishausman.com";

/** Absolute 1200x630 social preview image (served from /public). */
export const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

export function absUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Legal / policy routes, linked from the footer and every form. */
export const POLICY_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/payment-policy", label: "Payment & Refund Policy" },
] as const;
