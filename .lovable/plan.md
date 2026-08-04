# Full Site Audit — Aisha Usman Trade Consulting

No code was changed. Everything below is verified against the running preview and the current source.

Preview: https://id-preview--fd6b4182-dfe4-4773-b2f7-16d272d7f603.lovable.app

## Executive summary

The site is in good shape structurally. All 11 tested routes return 200, the four service forms are genuinely distinct, the email workflow is real (server-side, real attachments, correct Reply-To, separate client confirmation, success only after owner delivery, retry preserves data), and all four Flutterwave links are unique and correctly mapped. No mailto submission wording remains anywhere.

The weaknesses are not technical plumbing — they are trust, legal, contrast and discoverability gaps: there is no privacy policy, no terms/refund page, no FAQ, no contact section on the homepage, no robots.txt, a sitemap with no domain, gold-on-white text that fails contrast, and no spam/rate protection on a public endpoint that sends email and accepts 18 MB of files.

## Verified working (leave alone)

- Routes: `/`, `/consultation`, `/request/global-sourcing`, `/request/commodity-buyer-representation`, `/request/business-plan`, `/blog`, `/blog/$slug`, `/sitemap.xml`, `/rss.xml` all return 200.
- Four distinct forms in `src/lib/forms/specs.ts` — consultation 8 steps, sourcing 7, commodity 7, business plan 6, each with service-specific questions (Incoterms and session questions for consultation; tech specs, branding, MOQ for sourcing; commodity grades and logistics for commodity; funding and market plan for business plan). No copy-paste questionnaire.
- Email workflow in `src/routes/api/public/submit-request.ts`: owner mail to `aishau6066@gmail.com`, `Reply-To` = client, real MIME attachments, client confirmation is non-fatal, 502 + Retry on owner failure, draft preserved. Live send verified end to end (HTTP 200 with attachment).
- Payment links, all unique, in `src/lib/discovery.ts`: consultation `dpfjpkic7pmw`, sourcing `wkqkjka4juf2`, commodity `mhyg1mc9xzr0`, business plan `vxbmaha2nvyr`. No automatic Flutterwave verification and no automatic Cal.com redirect anywhere in the codebase.
- Form UX: progress bar with `role="progressbar"`, Back/Next, per-field errors, localStorage restore, manual Save/Clear draft, 4 consent checkboxes gating submit, 44px+ tap targets, skip link on the homepage, single `<main>`, no layout overflow on a 390px viewport.

## Critical — fix now

1. **No privacy policy, terms, or refund/cancellation page.** The forms collect names, emails, WhatsApp numbers, company data, supplier documents and payment receipts, and the consent checkbox references data use — with nothing to link to. This is the biggest trust and legal gap on the site. Needs `/privacy`, `/terms` (incl. non-refundable discovery fee, rescheduling, advisory-outcome disclaimer, document confidentiality and retention) and links in the footer and on every form.
2. **Public email endpoint has no abuse protection.** `src/routes/api/public/submit-request.ts` is unauthenticated, sends two emails per call and accepts up to 18 MB. Anyone can script it into a mail-flood or fill the inbox. Needs at minimum a honeypot field + minimum time-on-form check, a simple per-IP throttle, and a duplicate-submission guard (the same reference submitted twice currently sends twice).
3. **`/robots.txt` returns 404** — there is no `public/` directory at all. Crawlers get the SPA 404 shell.
4. **`sitemap.xml` emits relative URLs.** `BASE_URL = ""` in `src/routes/sitemap[.]xml.ts`, so every `<loc>` is `/blog/...`. Sitemaps require absolute URLs; the file is currently invalid to search engines.
5. **Gold text on white fails WCAG contrast.** `--color-accent: #D4AF37` on `#FFFFFF` is roughly 1.9:1. It is used for every section eyebrow, the "Submit a Service Request" hero button, form step labels and required asterisks. `--color-gold-deep: #A8851C` already exists and is used in exactly one place — it should carry all gold-on-white text.

## High impact

6. **No contact section on the homepage.** `Contact.tsx` (211 lines, mailto-based) is dead code and is not rendered by `src/routes/index.tsx`. There is no email, phone, location or response-time promise anywhere except tiny footer icons. Add a real contact block with response time, or delete the dead component.
7. **No FAQ.** The three highest-friction questions — why a fee before work, what a discovery fee buys, what happens if no supplier is found — are answered nowhere on the page. This is the cheapest conversion win available.
8. **Sequencing contradiction between pricing and the forms.** `Pricing.tsx` says "Your request is submitted only after payment succeeds" and the consultation flow chip says "Pay $250" first, but in all four forms the payment step is the second-to-last step. Pick one order and make the pricing copy, flow chips and step order agree.
9. **Case studies claim numbers with no verification framing.** "approximately 50% below the client's initial sourcing estimate" and "below several comparable market quotations" are unsupported and read as sales copy. Either add the basis (compared against what, when) or soften. Two of the five (sesame 300 MT, CFR India) are near-duplicates and could merge, leaving four stronger studies.
10. **The Aisha / ASMAN Prime Hub relationship is still ambiguous.** The nav logo is ASMAN Prime Hub with `alt=""`, the hero photo caption says "Founder of ASMAN Prime Hub", the JSON-LD uses `asmanprimehub.com` IDs, and the site is otherwise first person. A one-line statement near the top plus a consistent logo alt would settle it.
11. **Consultation form is very long.** Step 4 alone has 18 optional fields (product, port, packaging, specs, certs, Incoterm, payment method…). For a $250 advisory call this is heavy. Recommend conditional display driven by the "Consultation Focus" answer, or explicitly marking that step "optional — skip anything not relevant".
12. **No `og:image` on any route and `twitter:card: summary` only.** Shared links render as bare text. A single branded 1200×630 image would fix every route.

## Medium priority

13. `/request/bogus` returns HTTP 200, renders the not-found panel, and logs a React error to the console. It should return a real 404 status.
14. Nav logo `alt=""` treats the brand mark as decorative; screen readers get nothing but the `aria-label` on the wrapper. Give the image a real alt.
15. The homepage `og:url` and canonical are `/` (relative). Search guidance for this project expects the absolute `https://kanos-trade-hub.lovable.app`. Same for the JSON-LD `@id` values, which point at a different domain.
16. Client-side file validation checks size but not extension — only the server rejects a `.exe`. The user gets a round-trip failure instead of an instant message.
17. Consultation and request routes are `noindex,follow` (correct) but are not excluded from the sitemap logic by name — they happen to be absent. Worth an explicit comment so a future edit does not add them.
18. `email` and `whatsapp` are collected on all four forms, and `company` twice on some. Not wrong, but the duplicate "Payment date / reference / email" block could be shortened with better inline help.
19. Blog posts have no `Article` JSON-LD or author/date schema, and no internal links from the homepage to relevant posts — the blog is currently isolated from the conversion path.
20. `Process.tsx`, `WhyWorkWithMe.tsx` and `WhoIWorkWith.tsx` cover overlapping ground (10 "why" cards, 5 process cards, 4 audience cards in sequence). Card fatigue in the middle of the page; consider compressing to two sections.

## Nice to have

21. Deliverables and timelines are not stated per service ("what you get and when") — a short bullet list per pricing card would reduce pre-payment questions.
22. No visible response-time promise ("replies within 24 hours on business days").
23. Success screen offers WhatsApp only; a "back to homepage" link would help.
24. Hero photo is a PNG loaded eagerly at up to 400px — a WebP would cut the largest asset on the page.
25. Draft restore message only shows on step 0; if a user returns mid-form they get no notice.
26. Blog has 7 posts but no category filter surfaced from the homepage, and no newsletter or follow-up CTA at the end of a post.

## Change now vs leave alone

**Change now:** privacy/terms/refund pages, endpoint abuse protection, robots.txt, absolute sitemap URLs, gold contrast token swap, FAQ, contact block, pricing/flow sequencing wording.

**Leave alone:** the email pipeline, the four form specs, the payment link map, draft handling, manual-verification wording, and the overall page order. These are correct and working, and editing them risks regression for no gain.

## Technical notes

- Files most implicated: `src/styles.css` (contrast token), `src/routes/sitemap[.]xml.ts` (BASE_URL), `src/routes/api/public/submit-request.ts` (abuse protection, dedupe), `src/routes/index.tsx` (contact/FAQ sections), `src/components/site/Pricing.tsx` (sequencing copy), `src/components/site/CaseStudies.tsx` (claim framing), `src/components/site/Nav.tsx` (logo alt), `src/routes/__root.tsx` (og:image, absolute canonical, JSON-LD IDs), `src/components/site/Contact.tsx` (dead code).
- Production build and typecheck currently pass; the only console errors observed are the intentional 404 for the missing robots.txt and the not-found throw on an invalid service slug.

Tell me which of these you want implemented and I will do them in priority order.
