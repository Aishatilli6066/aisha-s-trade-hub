# Aisha Usman — Personal Brand Site

A single-page, fully static personal brand site for Aisha Usman (International Trade Consultant, Kano, Nigeria). All content, links, colors, and copy come from your spec verbatim — no placeholders.

## Scope & portability

The project's shell is React + Tailwind + TanStack Router (file-based routing). I'll keep everything client-side and static: no loaders, no server functions, no env vars, no API calls, no DB, no auth. The output is a standard SPA that builds to static assets and runs anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages). No Next.js APIs are used.

Note on "pure React": the existing template uses TanStack Router for the route shell. Removing it would mean rebuilding the bootstrap. The page itself will be plain React + Tailwind components rendered inside the existing `/` route — functionally identical to a pure React app for your purposes and equally portable.

## File changes

- `src/routes/__root.tsx` — add Google Fonts `<link>` tags (Playfair Display + Inter) and update root `head()` meta (title, description, keywords, og:*, geo.*, ICBM) per your SEO block.
- `src/routes/index.tsx` — replace placeholder with the full landing page (composed of section components below).
- `src/styles.css` — register `--font-display: "Playfair Display"`, `--font-sans: "Inter"`, and brand color tokens (`--color-bg #0A0A0F`, `--color-surface #14141C`, `--color-accent #C8963E`, `--color-text #E8E2D5`, `--color-muted #7A7A8A`) inside `@theme` so utilities like `bg-bg`, `text-accent`, `font-display` work.
- `src/components/site/` — new folder with one file per section for clarity:
  - `Nav.tsx` — sticky header, desktop links, hamburger sheet on mobile, WhatsApp CTA, smooth scroll.
  - `Hero.tsx` — name + role block, headline, subheadline, body, two CTAs, decorative SVG trade-route arc (animated once, static after; respects `prefers-reduced-motion`).
  - `ProofStrip.tsx` — five stat blocks on `#14141C`.
  - `Services.tsx` — 8-card responsive grid, each with inline SVG icon, title, description, WhatsApp inquiry link.
  - `Process.tsx` — three-step "How We Work Together".
  - `CaseStudies.tsx` — three cards with gold left border and Need / Action / Outcome.
  - `About.tsx` — bio block.
  - `Contact.tsx` — WhatsApp + Email displayed prominently (no form, no scheduler).
  - `Footer.tsx` — copyright + inline SVG WhatsApp/Email icon links, 1px gold top border.
  - `MobileCta.tsx` — fixed bottom bar (mobile only), gold background, 48px min height.
  - `FadeIn.tsx` — small wrapper using IntersectionObserver for subtle fade-in; no-op when `prefers-reduced-motion: reduce`.

## Accessibility

- Skip-to-main-content link as the first focusable element.
- Semantic landmarks: `<header>`, `<nav>`, `<main id="main">`, `<section>`, `<article>`, `<footer>`.
- Single `<h1>` in Hero; logical heading order.
- All icon-only links/buttons get `aria-label`; decorative SVGs get `aria-hidden`.
- Visible focus rings using gold accent.
- Mobile menu is a keyboard-accessible disclosure (Esc to close, focus management).
- Color pairs verified for ≥4.5:1: text `#E8E2D5` on `#0A0A0F` and `#14141C`; gold `#C8963E` used for headings/accents (large text) and as background with `#0A0A0F` foreground on the mobile CTA.
- All anchor links scroll smoothly via `scroll-behavior: smooth` on `html`, disabled under reduced motion.

## Motion

- Single `FadeIn` IntersectionObserver wrapper, 400ms opacity+translate, runs once per element.
- Hero arc: CSS `stroke-dasharray` draw-in on mount, then static. Under reduced motion, render the final state immediately.
- No parallax, no autoplay, no bounce.

## Links (used verbatim)

- WhatsApp: `https://wa.me/2347042322970`
- Email: `mailto:aishau6066@gmail.com`
- Anchors: `#services`, `#work`, `#contact`, plus `#about`.

## Out of scope

No backend, no Lovable Cloud, no analytics, no form handling, no calendar/scheduler, no og:image generation (none specified; safer to omit than ship a generic one).

## Verification

After build I'll open the preview at mobile (390×844) and a desktop width to confirm layout, sticky nav, mobile CTA bar, and reduced-motion fallback render correctly.
