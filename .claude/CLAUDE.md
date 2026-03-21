# Kaporta Group Website - Project Guide

## Overview
Professional Government Construction & Logistics website for Kaporta Investment Sierra Leone Limited (Kaporta Group), a multi-service construction and logistics company with 15+ years of experience operating in West Africa with headquarters in Sierra Leone. Founded in 2008.

## Tech Stack
- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 with custom @theme design tokens
- **Fonts:** Poppins (headings), Inter (body), JetBrains Mono (code)
- **Icons:** lucide-react
- **Utilities:** clsx + tailwind-merge via `cn()` in `src/lib/utils.ts`

## Brand Colors (Tailwind classes)
- `bg-deep-blue` / `text-deep-blue` — #002F5D (primary, trust & stability)
- `bg-construction-yellow` / `text-construction-yellow` — #F5A623 (energy & progress)
- `bg-forest-green` / `text-forest-green` — #27AE60 (CTA buttons, growth)
- `bg-charcoal` / `text-charcoal` — #1A1A2E (dark backgrounds)
- `bg-concrete-gray` / `text-concrete-gray` — #6E6E6E (secondary text)
- `bg-soft-white` / `text-soft-white` — #FAFAFA (light background)
- `bg-white` — #FFFFFF (clean sections)

## Site Structure (10 primary pages, 19+ subpages)
1. **Home** — Hero, services preview, why choose us, featured projects, testimonials, CTA
2. **About Us** → Company History (Mission & Vision), Leadership Team, Certifications & Partnerships
3. **Services** → Quarrying & Mining, Concrete Production, Haulage & Logistics, Civil Engineering & Construction, Power & Energy Solutions, Equipment Rental
4. **Projects** → Infrastructure, Commercial Construction, Government Projects
5. **Careers** → Current Openings, Internship & Training Programs
6. **Testimonials** — Client reviews and submission form
7. **Blog / Insights** → Industry News, Sustainability & CSR, Company Updates
8. **Request a Quote** — Full RFQ form with file upload
9. **Contact Us** — Contact form, map, phone, email, social media
10. **Payment** — Invoice payment info (backend)

## 6 Service Domains
1. Quarrying & Mining
2. Concrete Production
3. Haulage & Logistics
4. Civil Engineering & Construction
5. Power & Energy Solutions
6. Equipment Rental

## Company Contact Info
- **Phone:** +232 78341012 / +232 76573577 / +232 76692210
- **Email:** kaportaq1@gmail.com
- **Address:** Benguema Firing Range, Waterloo, Freetown, Sierra Leone
- **Hours:** Mon–Sat: 8:00am–6:00pm
- **Social:** WhatsApp, Facebook, LinkedIn

## Conventions
- All pages use the hero-section-at-top pattern (deep blue bg with title)
- Use `card-hover` class for interactive cards
- CTA buttons use construction-yellow or forest-green
- Keep all content professional, aligned with West African construction industry standards
- WCAG 2.1 AA accessibility throughout
- Use semantic HTML landmarks (main, nav, section, article)
- All images need alt text
- Mobile-first responsive design

## Key Commands
```bash
npm run dev     # Start dev server on port 3000
npm run build   # Production build
npm run lint    # Run ESLint
```

## Data Files
- `src/data/services.ts` — All 6 service domain content
- `src/data/projects.ts` — Project/case study data
- `src/data/navigation.ts` — Menu structure
- `src/data/team.ts` — Leadership team
- `src/data/testimonials.ts` — Client testimonials
- `src/data/blog-posts.ts` — Blog article data
- `src/data/jobs.ts` — Career listings

## SEO
- **Homepage Title:** Kaporta Investment Sierra Leone Limited | Construction & Logistics Experts Since 2008
- **Meta Description:** Kaporta Investment Sierra Leone Limited provides construction, haulage, quarrying, power, and equipment rental services across Sierra Leone and West Africa.
- **Target Keywords:** Sierra Leone construction company, logistics services Sierra Leone, quarry supply Sierra Leone, civil engineering Sierra Leone
- **Schema:** LocalBusiness + Service schema for each offering
