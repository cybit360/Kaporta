# CybitSolutions Website - Project Guide

## Overview
Professional GovCon (Government Contracting) website for CybitSolutions, a Veteran-Owned, Minority-Owned IT firm with 20+ years of government and commercial contracting experience.

## Tech Stack
- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 with custom @theme design tokens
- **Fonts:** Inter (headings), Source Sans 3 (body), JetBrains Mono (code)
- **Icons:** lucide-react
- **Utilities:** clsx + tailwind-merge via `cn()` in `src/lib/utils.ts`

## Brand Colors (Tailwind classes)
- `bg-navy` / `text-navy` — #0B1C2E (primary dark)
- `bg-slate` / `text-slate` — #1E2A38 (alt dark)
- `text-steel` — #5C6B7A (secondary text)
- `bg-cloud` — #F4F7FA (light background)
- `bg-accent-cyan` / `text-accent-cyan` — #13C0F5 (CTAs, links)
- `bg-accent-amber` / `text-accent-amber` — #FFC766 (highlights)

## Site Structure (6 main sections, 19 subpages)
1. **What We Do** → Services (10 domains), Past Performance, Capability Statements, Our Approach
2. **Who We Are** → About Us, Leadership, Social Impact
3. **Who We Serve** → Government, Commercial, Alliances & Certifications
4. **Insights** → News, Resource Library, Events & Webinars
5. **Careers** → Open Roles, Culture & Benefits, Testimonials
6. **Contact** → Contact/RFP, Partner With Us, Payment

## 10 Service Domains
1. Cybersecurity & Risk Management
2. Cloud Computing & Virtualization
3. Core IT Infrastructure, Networking & Operations
4. Software Development & DevOps
5. Data & Analytics
6. AI & Automation
7. Enterprise IT Services & Platforms
8. Digital Transformation & Government IT
9. Emerging & Next-Gen Technologies
10. Industry-Specific IT

## Conventions
- All pages use the hero-section-at-top pattern (dark navy bg with title)
- Use `card-hover` class for interactive cards
- CTA buttons use accent-cyan for primary actions
- Keep all content professional and aligned with federal prime contractor standards
- WCAG 2.2 AA accessibility throughout
- Use semantic HTML landmarks (main, nav, section, article)
- All images need alt text

## Key Commands
```bash
npm run dev     # Start dev server on port 3000
npm run build   # Production build
npm run lint    # Run ESLint
```

## Data Files
- `src/data/services.ts` — All 10 service domain content
- `src/data/case-studies.ts` — Case studies data
- `src/data/navigation.ts` — Menu structure
- `src/data/partners.ts` — Partner/certification logos
- `src/data/team.ts` — Leadership team
