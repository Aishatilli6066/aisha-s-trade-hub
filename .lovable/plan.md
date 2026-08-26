# Audit & Update Plan — aishausman.com

Read-only audit. Nothing changed. Findings verified against current source.

## 1. Urgent fixes

1. **Wrong WhatsApp number in 8 places.** Every link and display still uses `2347042322970`. Correct number is `+2347084443626`. Occurrences: `src/lib/discovery.ts` (`WHATSAPP_NUMBER`), `Hero.tsx`, `Nav.tsx`, `Footer.tsx`, `MobileCta.tsx`, `Contact.tsx` (link + display), `LegalPage.tsx`, `src/lib/abuse-guard.server.ts`, `src/routes/api/public/submit-request.ts` (2 messages, incl. the client confirmation email), `src/lib/forms/specs.ts` (placeholder). Fix by pointing every one at a single exported constant instead of local copies.
2. **Pricing does not match the stated offer architecture.** Site shows Global Sourcing "From $500 / $100 discovery", Buyer Representation "From $750 / $150 discovery", Business Plan "From $500 / $100 discovery". Current positioning is $500 Global Sourcing/OEM coordination and $750 Buyer Representation as the service prices. Decide whether $500/$750 are fixed prices or floors, and whether the discovery-fee layer stays; then align `Pricing.tsx`, `discovery.ts`, `Faq.tsx` and the four Flutterwave links (the live links are $250/$100/$150/$100 — if prices change, the links must change too, otherwise clients pay the wrong amount).
3. **Unsupported statistics in the proof strip.** `5+ Years International Trade Experience`, `4 Continents — Clients Served`, `10+ Export Commodities`. None are verifiable by a visitor. Either confirm each with Aisha and keep, or replace with capability statements (the "Verified — International Supplier Network" tile is the safer pattern already in place).
4. **Advisory description drift.** Current offer is document/brief review + written action plan + **3-day WhatsApp follow-up**. The site says "three business days of limited clarification support" and "delivered by email or WhatsApp" — close, but it should name WhatsApp as the follow-up channel explicitly and state that calls happen only when necessary.
5. **CAC/NEPC framing.** No misleading personal-licence claim exists today in components (good). When registration is mentioned anywhere, it must be attributed to ASMAN Prime Hub Global Services Limited, never to Aisha personally, and never described as accreditation to advise.

## 2. Structural and copy updates

6. **Founder authority is thin above the fold.** Hero states what she does, not why she is credible. Add one factual credibility line (Founder, ASMAN Prime Hub Global Services Limited — CAC & NEPC registered; based in Kano, advising across Asia, Africa, Middle East, Europe).
7. **Section overload in the middle.** `WhoIWorkWith` (4 cards) + `WhyWorkWithMe` (10 cards) + `Process` (5 cards) run back to back. Compress to two sections; move "why" points into the About narrative.
8. **`Contact.tsx` is dead code** — 211 lines, mailto-based, not rendered anywhere the audit could confirm as reachable in the current order. Either render a real contact block (email, WhatsApp, response window, "written communication preferred; calls when necessary") or delete it.
9. **Communication preference is not stated anywhere.** Add a short line on the pricing and form pages: work is delivered in writing over email/WhatsApp; calls are arranged only when a matter genuinely needs one.
10. **Case-study claims.** Keep the softened outcome wording; add the basis of any comparison ("against quotations collected in <period>") or drop the comparison entirely. Merge the two near-duplicate sesame/CFR studies.
11. **Aisha vs ASMAN Prime Hub.** The About box and the FAQ both explain the split well; the nav still uses the ASMAN logo as the site mark with an Aisha alt text. Use a personal wordmark in the nav and keep the company logo inside the About block.
12. **No testimonials, logos or numbers should be invented** to fill the credibility gap. Use named, real transaction summaries only.

## 3. Suggested page architecture

```text
/                     Founder authority + offer overview + conversion path
/services             All four services, one page, deep detail
/advisory             $250 Strategy Advisory — its own indexable page
/about                Founder story, ASMAN Prime Hub relationship, expertise
/case-studies         Moved off the homepage, one page
/blog, /blog/$slug    Unchanged (7 posts)
/consultation         Advisory questionnaire (noindex)
/request/$service     Three done-for-you forms (noindex)
/privacy /terms /payment-policy   Unchanged
/contact              Written channels + response window
```
Rationale: the homepage currently carries 12 sections and every service; splitting `/advisory` and `/services` out gives each offer its own title, description and search entry, and shortens the homepage to a real conversion path.

## 4. Exact new homepage message hierarchy

1. **Eyebrow:** Founder, ASMAN Prime Hub Global Services Limited
2. **H1:** Helping Businesses Source, Trade and Expand Across International Markets
3. **Sub:** International Trade Consultant and Global Sourcing Specialist. I help importers, exporters and growing businesses verify suppliers, control procurement risk and structure international transactions.
4. **Credibility line:** Based in Kano, Nigeria. Working with clients across Asia, Africa, the Middle East and Europe. Execution delivered through ASMAN Prime Hub Global Services Limited (CAC and NEPC registered).
5. **Primary CTA:** Start a Strategy Advisory — $250
6. **Quiet secondary link:** Need execution instead? Explore done-for-you services →
7. **Below fold order:** Capabilities → Case studies → Services (4, with prices) → How I work → Pricing → About → Insights → FAQ → Contact
8. **Standing note near CTAs:** Written advisory over email and WhatsApp. Calls only when a matter requires one.

## 5. Technical, SEO and accessibility fixes

13. `public/robots.txt` disallows `/consultation` and `/request/` and points at `https://www.aishausman.com/sitemap.xml` — correct; keep in sync if routes are added.
14. Sitemap covers `/`, `/blog`, 3 legal pages and 7 posts. New routes from section 3 must be added, and the noindex form routes kept out.
15. Blog posts have no `Article` JSON-LD (author, datePublished, image) — add per-post; also add `BreadcrumbList` on post pages.
16. Homepage carries only `FAQPage` JSON-LD; `Person`, `Organization` and `Service` live in `__root.tsx`. Add `Service` entries with `offers`/price for each of the four services once prices are settled, and add `sameAs` for the real social profiles.
17. Only the homepage has `og:image`. Give `/blog/$slug` a per-post absolute `og:image` (the featured image) and add `og:image` to any new route.
18. `/request/<invalid>` returns HTTP 200 with a not-found panel plus a console error — should return a true 404 status.
19. Client-side upload validation checks size but not extension; a `.exe` only fails server-side after an 18 MB round trip.
20. Duplicate React key warning on the business-plan multi-file list when two uploads share a filename.
21. Gold-on-white contrast: `--color-gold-deep` is used correctly in the components read, but `--color-accent` (#D4AF37) still backs the primary button with dark text — verify 4.5:1 on any accent-on-white **text** that remains.
22. Hero photo is a large eager-loaded raster at up to 400px — ship a WebP.
23. Nav logo alt says "Aisha Usman — International Trade Consultant" while the image is the ASMAN mark; make image and alt agree (ties to item 11).

## Decisions needed before implementation

- Are $500 and $750 fixed prices or "from" floors, and does the discovery-fee stage remain?
- Which of the three proof statistics can be substantiated?
- Keep the multi-page architecture in section 3, or keep everything on the homepage?
