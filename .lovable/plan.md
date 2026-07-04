
# Website Optimization Plan — Aisha Usman

This is a large multi-section refactor. Below is the exact scope I will execute. Confirm or edit before I start so we don't spend cycles on the wrong direction.

## 1. Brand identity (site-wide)
- Primary identity: **Aisha Usman — International Trade Consultant**. ASMAN Prime Hub becomes "the firm I founded", mentioned in About + footer only.
- Update: Nav logo/wordmark, `__root.tsx` title/site_name, per-route SEO titles/descriptions, OG tags, footer, ARIA labels, JSON-LD (`Person` schema at root, `ProfessionalService` referencing ASMAN Prime Hub on About).

## 2. Hero (`Hero.tsx`)
- Rewrite headline + subhead around: global sourcing, supplier verification, trade execution, OEM, risk reduction, cross-border procurement.
- Reduce CTAs to two only: **Primary — Chat on WhatsApp**, **Secondary — Request a Proposal** (scrolls to `#service-request`). Remove Book Consultation and Upwork from hero.

## 3. Navigation (`Nav.tsx`)
- Personal wordmark + logo. Active-link highlight via `activeProps`/`data-status`. Tighten spacing, larger mobile tap targets (min 44×44), improved focus rings. WhatsApp remains the header CTA.

## 4. Services (`Services.tsx`)
- Rewrite each service card with four labeled blocks: **Who it's for · Problem solved · How I execute · Business outcome**. Each card ends with a WhatsApp CTA link.

## 5. Replace generic sections with the Trade Execution Framework
- Repurpose `Process.tsx` as **The Trade Execution Framework** (5 numbered steps as specified). Premium consulting layout — numbered rail, generous whitespace, subtle divider lines, no motion beyond existing FadeIn.
- Retire `WhyWorkWithMe.tsx` from the homepage (kept in repo but not rendered) and replace with a compact **Trust** strip (8 short authority chips: International sourcing expertise, Verified supplier network, Cross-border transaction support, Commercial negotiation, OEM manufacturing, Supplier verification, Documentation guidance, Professional trade advisory).

## 6. Case Studies (`CaseStudies.tsx`)
- Rewrite the 5 engagements (300MT Sesame → China, CFR White Sesame → India, OEM Fabric Sourcing, Industrial Machine Sourcing, Private Label Product Development) as executive case studies: **Challenge · Actions · Execution · Outcome · Metrics**. Metrics rendered as large numeric callouts; placeholders (e.g. `—`) where a number is missing so they can be filled later.

## 7. New "Field Notes" homepage section
- New component `FieldNotes.tsx` sourcing latest 3 posts from `src/lib/blog.ts`. Card = image, title, excerpt, "Read article". Section CTA: **View All Articles → /blog**.

## 8. Pricing block
- Keep existing $250 / $500 payment links + Calendly booking flow untouched (per prior turns). Only copy/spacing polish for consistency.

## 9. Footer + Upwork
- Move Upwork link from Hero into Footer (and About page). Footer identity switches to Aisha Usman with "Founder, ASMAN Prime Hub" beneath.

## 10. SEO
- Per-route `head()` on `/`, `/blog`, `/blog/$slug`, `/booking` with unique title, description, og:title, og:description, og:type, canonical. Target keywords woven naturally: International Trade Consultant, Import Export Consultant, Global Sourcing Consultant, Supplier Verification, OEM Manufacturing, International Procurement, Trade Advisory, Cross-border Trade.
- Root JSON-LD: `Person` (Aisha Usman) + `ProfessionalService` (ASMAN Prime Hub, founder = Aisha). Article JSON-LD stays on blog posts.
- Image `alt` audit; internal linking from Field Notes → posts and About → services.

## 11. Accessibility + mobile
- One `<main>` per route (already true). Add `aria-current="page"` via active link. Ensure icon-only buttons have `aria-label`. Bump mobile tap targets. Verify heading order (single H1 per page). Replace any low-contrast utilities with theme tokens.

## 12. Performance
- Preload hero image on `/` via `head().links`. Ensure below-the-fold images use `loading="lazy"`. No new heavy deps.

## 13. Copy tone
- Executive, confident, restrained. Strip marketing hype across Hero, Services, Framework, Case Studies, Trust, Footer.

## Files touched (create/edit)
```
src/routes/__root.tsx                (SEO defaults + JSON-LD + site_name)
src/routes/index.tsx                 (section order, Field Notes, drop WhyWorkWithMe)
src/routes/blog.tsx, blog.$slug.tsx  (SEO titles/desc/canonical)
src/routes/booking.tsx               (SEO noindex + polish)
src/components/site/Nav.tsx          (personal brand + active state + a11y)
src/components/site/Hero.tsx         (rewrite + CTA reduction)
src/components/site/Services.tsx     (rewrite cards)
src/components/site/Process.tsx      (Trade Execution Framework)
src/components/site/CaseStudies.tsx  (executive rewrite + metrics)
src/components/site/ProofStrip.tsx   (Trust chips replacement)
src/components/site/About.tsx        (personal-first, ASMAN as founded firm, Upwork link)
src/components/site/Footer.tsx       (rebrand + Upwork)
src/components/site/FieldNotes.tsx   (NEW)
```

## Out of scope (unless you say otherwise)
- No visual redesign, color/theme change, or font swap — keep existing design language.
- No new dependencies, no backend changes, no Stripe/Calendly rework.
- No blog post content rewrites.

Reply **"go"** to execute all of the above, or tell me which sections to skip or change first.
