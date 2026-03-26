# Kaporta Group — Enhancement & Improvement Prompts

> **Project:** Kaporta Investment Sierra Leone Limited — Construction & Logistics Website
> **Tech Stack:** Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript
> **Live URL:** https://kaporta.vercel.app/
> **Repository:** GitHub (auto-deploys to Vercel on push to `main`)
> **Last Updated:** March 2026

---

## Table of Contents

- [Changelog — What Has Been Implemented](#changelog--what-has-been-implemented)
- [Phase 1: Critical Fixes (Recently Completed)](#phase-1-critical-fixes-recently-completed)
- [Phase 2: Production Readiness](#phase-2-production-readiness)
  - [2.1 Database Integration](#21-database-integration)
  - [2.2 File Upload to Cloud Storage](#22-file-upload-to-cloud-storage)
  - [2.3 Testing Framework Setup](#23-testing-framework-setup)
  - [2.4 CI/CD Pipeline (GitHub Actions)](#24-cicd-pipeline-github-actions)
  - [2.5 Resend Email Domain Verification](#25-resend-email-domain-verification)
  - [2.6 Replace Placeholder Images](#26-replace-placeholder-images)
  - [2.7 Image Optimization & CDN](#27-image-optimization--cdn)
- [Phase 3: Feature Enhancements](#phase-3-feature-enhancements)
  - [3.1 Refactor Pages to Use UI Component Library](#31-refactor-pages-to-use-ui-component-library)
  - [3.2 Dark Mode](#32-dark-mode)
  - [3.3 Multi-language Support (English / Krio / French)](#33-multi-language-support-english--krio--french)
  - [3.4 Advanced Blog System](#34-advanced-blog-system)
  - [3.5 Testimonial Submission Form](#35-testimonial-submission-form)
  - [3.6 Project Gallery with Lightbox](#36-project-gallery-with-lightbox)
  - [3.7 Team Member Detail Pages](#37-team-member-detail-pages)
  - [3.8 Service Comparison Table](#38-service-comparison-table)
  - [3.9 FAQ Page with Accordion](#39-faq-page-with-accordion)
  - [3.10 Social Sharing Buttons](#310-social-sharing-buttons)
  - [3.11 Accessibility Enhancements](#311-accessibility-enhancements)
  - [3.12 Performance Optimization](#312-performance-optimization)
- [Phase 4: Advanced Features](#phase-4-advanced-features)
  - [4.1 Admin Dashboard](#41-admin-dashboard)
  - [4.2 Client Portal](#42-client-portal)
  - [4.3 Payment Gateway (Stripe + Mobile Money)](#43-payment-gateway-stripe--mobile-money)
  - [4.4 CMS Integration (Sanity or Contentful)](#44-cms-integration-sanity-or-contentful)
  - [4.5 Real-time Notifications (WebSocket or SSE)](#45-real-time-notifications-websocket-or-sse)
  - [4.6 Advanced Analytics Dashboard](#46-advanced-analytics-dashboard)
  - [4.7 A/B Testing Framework](#47-ab-testing-framework)
  - [4.8 reCAPTCHA / hCaptcha Integration](#48-recaptcha--hcaptcha-integration)
- [Phase 5: Growth & Scale](#phase-5-growth--scale)
  - [5.1 Multi-site Architecture](#51-multi-site-architecture)
  - [5.2 API Documentation (Swagger/OpenAPI)](#52-api-documentation-swaggeropenapi)
  - [5.3 Automated Backup Strategy](#53-automated-backup-strategy)
  - [5.4 Load Testing](#54-load-testing)
  - [5.5 SEO Monitoring & Reporting](#55-seo-monitoring--reporting)
  - [5.6 Social Media Auto-posting](#56-social-media-auto-posting)
- [Environment Setup Guide](#environment-setup-guide)
- [Feature Comparison: CybitSolutions vs Kaporta](#feature-comparison-cybitsolutions-vs-kaporta)

---

## Changelog — What Has Been Implemented

### Commit `2fa658d` — Backend APIs, UI Components, Search, Chat, SEO, Security, Analytics

**Backend API Routes (4 endpoints):**
- `POST /api/contact` — Contact form submissions with Zod validation, rate limiting, honeypot spam detection
- `POST /api/quote` — Request a Quote with file upload support (multipart/form-data)
- `POST /api/newsletter` — Newsletter email signups
- `POST /api/career-apply` — Job applications with resume upload

**Supporting Libraries:**
- `src/lib/validations.ts` — Zod schemas for all form types
- `src/lib/rate-limit.ts` — In-memory IP-based rate limiting (5 req / 15 min)
- `src/lib/email.ts` — Resend integration for transactional emails

**UI Component Library (9 components in `src/components/ui/`):**
- `Button.tsx` — Primary (yellow), secondary (green), outline, ghost variants
- `Card.tsx` — Reusable card with header, content, footer slots
- `Badge.tsx` — Status badges and category tags
- `Input.tsx`, `Textarea.tsx`, `Select.tsx` — Styled form controls
- `SectionHeading.tsx` — Consistent section headers with subtitle
- `Skeleton.tsx` — Loading skeleton shapes
- `index.ts` — Barrel export

**Search & Chat:**
- `src/components/search/SearchModal.tsx` — Global Cmd/Ctrl+K search across services, projects, blog, careers
- `src/components/chat/ChatWidget.tsx` — FAQ-based chat widget with keyword matching and WhatsApp escalation

**SEO & PWA:**
- `src/app/sitemap.ts` — Dynamic XML sitemap for all 18+ pages
- `src/app/robots.ts` — Crawler directives, disallows `/api/`
- `src/app/manifest.ts` — PWA web app manifest with Kaporta branding

**Error Handling & Loading:**
- `src/app/error.tsx` — Global error boundary with retry
- `src/app/not-found.tsx` — Branded 404 page
- `src/app/loading.tsx` — Global loading skeleton
- `src/app/services/loading.tsx`, `projects/loading.tsx`, `blog/loading.tsx` — Section-specific skeletons

**Security:**
- `next.config.ts` — Security headers (CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy)

**Analytics:**
- `@vercel/analytics` and `@vercel/speed-insights` integrated in `src/app/layout.tsx`

**Social Media:**
- Footer social links updated from placeholder `#` to actual WhatsApp, Facebook, LinkedIn URLs

### Commit `1b2582d` — Logo Enlargement & Expanded Prompts

- Enlarged Kaporta logo in Header and Footer
- Added comprehensive suggested prompts (Section 18) in `kaporta-prompts.md`

### Commit `27b1055` — Logo Addition

- Added Kaporta Group logo to Header and Footer components

### Commit `038ee0d` — Initial Build

- Complete 18-page website with all 6 service domains
- Header with mega-menu navigation, Footer with company info
- Homepage with hero, services preview, stats, featured projects, testimonials, CTA
- All service pages with dynamic `[slug]` routing
- Projects portfolio with filtering
- Blog system with categories and individual post pages
- Careers page with job listings and internships subpage
- Testimonials page with client reviews
- Quote request, Contact, and Payment pages
- Privacy Policy, Terms, Accessibility statement pages

### Current Dependencies (package.json)

```
next 16.2.1, react 19.2.4, tailwindcss 4, typescript 5
framer-motion 12.38.0, lucide-react 0.577.0
zod 4.3.6, react-hook-form 7.71.2, @hookform/resolvers 5.2.2
resend 6.9.4, @vercel/analytics 2.0.1, @vercel/speed-insights 2.0.0
clsx 2.1.1, tailwind-merge 3.5.0
```

---

## Phase 1: Critical Fixes (Recently Completed)

These items were implemented in the most recent development session. They are listed here for reference so future work does not duplicate them.

### 1.1 Form-to-API Connection
**Status:** DONE — API routes created at `/api/contact`, `/api/quote`, `/api/newsletter`, `/api/career-apply`

### 1.2 Client-side Form Validation
**Status:** DONE — `react-hook-form` + `zod` installed; schemas in `src/lib/validations.ts`

### 1.3 Newsletter Signup Component
**Status:** DONE — `src/components/ui/NewsletterForm.tsx`

### 1.4 Floating WhatsApp Button
**Status:** DONE — `src/components/ui/WhatsAppButton.tsx`

### 1.5 Breadcrumb Navigation with JSON-LD
**Status:** DONE — `src/components/ui/Breadcrumbs.tsx`

### 1.6 Google Maps Embed
**Status:** DONE — `src/components/ui/GoogleMap.tsx`

### 1.7 Framer Motion Animations
**Status:** DONE — `src/components/animations/FadeIn.tsx`, `StaggerChildren.tsx`, `CountUp.tsx`, `AnimatedSection.tsx`

### 1.8 JSON-LD Structured Data
**Status:** DONE — Organization, LocalBusiness, Service, WebSite, Breadcrumb schemas

### 1.9 Middleware (API Rate Limiting)
**Status:** DONE — `src/lib/rate-limit.ts` (in-memory, applied in API route handlers)

### 1.10 .env.example Documentation
**Status:** DONE — `.env.example` file created

### 1.11 Career Application Form Page
**Status:** PARTIAL — API route exists at `/api/career-apply`, but no dedicated `/careers/apply/[slug]` page yet

---

## Phase 2: Production Readiness

### 2.1 Database Integration

| Field | Value |
|-------|-------|
| **Priority** | Critical |
| **Complexity** | Complex |
| **Dependencies** | None |
| **Expected Output** | `src/lib/db.ts`, `src/lib/schema.ts`, migration SQL files, updated API routes |

**Prompt:**
```
Set up database integration for the Kaporta Group website using Vercel Postgres (or Supabase as fallback).

CURRENT STATE:
- 4 API routes exist: /api/contact, /api/quote, /api/newsletter, /api/career-apply
- They use in-memory storage (submissions lost on redeploy)
- Rate limiting is in-memory (resets on cold start)
- Zod validation schemas exist in src/lib/validations.ts

TASKS:
1. Install @vercel/postgres (or @neondatabase/serverless for Neon)
2. Create src/lib/db.ts — Database connection utility with connection pooling
3. Create src/lib/schema.ts — TypeScript types matching database tables
4. Create database migration SQL:
   - contact_submissions: id, name, email, phone, organization, service_interest, message, source_page, honeypot, ip_address, status (new/read/replied), created_at, updated_at
   - quote_requests: id, name, email, phone, company, service_type, project_description, budget_range, timeline, file_urls[], status (new/reviewed/quoted/accepted/declined), created_at, updated_at
   - newsletter_subscribers: id, email, subscribed_at, unsubscribed_at, status (active/unsubscribed)
   - job_applications: id, job_slug, name, email, phone, cover_letter, resume_url, status (new/reviewed/shortlisted/rejected), created_at, updated_at
   - rate_limits: ip_address, endpoint, request_count, window_start (for persistent rate limiting)
5. Update all 4 API routes to write to database instead of in-memory arrays
6. Update src/lib/rate-limit.ts to use database-backed rate limiting
7. Add GET endpoints (protected) for admin data retrieval
8. Create .env.example entries for DATABASE_URL / POSTGRES_URL

Keep all existing Zod validation and email integration intact.
Test with: npm run build (zero errors expected)
```

---

### 2.2 File Upload to Cloud Storage

| Field | Value |
|-------|-------|
| **Priority** | Critical |
| **Complexity** | Medium |
| **Dependencies** | 2.1 Database Integration |
| **Expected Output** | `src/lib/storage.ts`, updated quote and career-apply routes |

**Prompt:**
```
Add cloud file upload support to the Kaporta Group website for quote requests (project documents) and career applications (resumes).

CURRENT STATE:
- /api/quote and /api/career-apply accept multipart/form-data
- Files are referenced but not actually stored anywhere persistent

TASKS:
1. Install @vercel/blob (recommended) or aws-sdk/client-s3
2. Create src/lib/storage.ts:
   - uploadFile(file: File, folder: string) => Promise<{ url: string; filename: string }>
   - deleteFile(url: string) => Promise<void>
   - Validate file types: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (max 10MB)
   - Generate unique filenames with timestamps
   - Organize by folder: /quotes/, /resumes/
3. Update /api/quote/route.ts:
   - Parse multipart form data
   - Upload attached files to cloud storage
   - Store file URLs in database (from 2.1)
   - Include file links in admin notification email
4. Update /api/career-apply/route.ts:
   - Upload resume to cloud storage
   - Store resume URL in database
   - Include resume link in admin notification email
5. Add file size and type validation (both client-side and server-side)
6. Add BLOB_READ_WRITE_TOKEN to .env.example
7. Create a reusable FileUpload component at src/components/ui/FileUpload.tsx:
   - Drag and drop zone
   - File type/size validation display
   - Upload progress indicator
   - Remove file button

Test with: npm run build (zero errors expected)
```

---

### 2.3 Testing Framework Setup

| Field | Value |
|-------|-------|
| **Priority** | High |
| **Complexity** | Complex |
| **Dependencies** | None |
| **Expected Output** | `vitest.config.ts`, `playwright.config.ts`, `tests/` directory, test scripts in package.json |

**Prompt:**
```
Set up a comprehensive testing framework for the Kaporta Group website.

CURRENT STATE:
- Zero tests exist
- No testing dependencies installed
- Project uses Next.js 16 + React 19 + TypeScript

TASKS:

1. Unit Testing — Vitest + React Testing Library:
   - npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react
   - Create vitest.config.ts with jsdom environment, path aliases matching tsconfig
   - Create tests/setup.ts for testing-library matchers
   - Write tests for:
     a) src/lib/utils.ts — cn() utility function
     b) src/lib/validations.ts — All Zod schemas (valid + invalid inputs)
     c) src/lib/rate-limit.ts — Rate limiter behavior
     d) src/components/ui/Button.tsx — Renders variants, handles clicks, disabled state
     e) src/components/ui/Badge.tsx — Renders with different variants
     f) src/components/ui/Input.tsx — Handles value changes, displays errors
     g) src/components/ui/NewsletterForm.tsx — Form submission, validation
     h) src/components/layout/Header.tsx — Navigation renders, mobile menu toggle
     i) src/data/services.ts — Data integrity (all slugs unique, required fields present)
     j) src/data/navigation.ts — Navigation structure validity

2. E2E Testing — Playwright:
   - npm install -D @playwright/test
   - Create playwright.config.ts (Chrome, Firefox, mobile Safari)
   - Write E2E tests:
     a) Homepage loads, all sections visible
     b) Navigation: click Services dropdown, navigate to service page
     c) Mobile menu: open, navigate, close
     d) Contact form: fill fields, submit, verify success message
     e) Quote form: fill fields, attach file, submit
     f) Blog: navigate to blog list, click post, verify content loads
     g) Search: open Cmd+K modal, type query, see results, navigate
     h) Careers: view job listing, click apply
   - Accessibility checks with @axe-core/playwright on every page

3. Add scripts to package.json:
   - "test": "vitest"
   - "test:ui": "vitest --ui"
   - "test:coverage": "vitest run --coverage"
   - "test:e2e": "playwright test"
   - "test:e2e:ui": "playwright test --ui"

4. Create tests/ directory structure:
   - tests/unit/ — Unit tests
   - tests/e2e/ — Playwright E2E tests
   - tests/setup.ts — Test setup

Test with: npm run build && npm test (all pass)
```

---

### 2.4 CI/CD Pipeline (GitHub Actions)

| Field | Value |
|-------|-------|
| **Priority** | High |
| **Complexity** | Medium |
| **Dependencies** | 2.3 Testing Framework |
| **Expected Output** | `.github/workflows/ci.yml`, `.github/workflows/dependency-audit.yml` |

**Prompt:**
```
Set up GitHub Actions CI/CD pipeline for the Kaporta Group website.

CURRENT STATE:
- No CI/CD exists
- Vercel auto-deploys on push to main (this should continue)
- Testing framework from Phase 2.3 should be in place

TASKS:

1. Create .github/workflows/ci.yml:
   Trigger: Push to main, all pull requests
   Jobs:
   - quality-checks:
     a) Checkout code
     b) Setup Node.js 20 with npm cache
     c) Install dependencies (npm ci)
     d) TypeScript type check (npx tsc --noEmit)
     e) ESLint lint (npm run lint)
     f) Unit tests (npm test -- --run)
     g) Build verification (npm run build)
     h) Upload build artifacts

   - e2e-tests (depends on quality-checks):
     a) Install Playwright browsers
     b) Start dev server in background
     c) Run Playwright tests
     d) Upload test results and screenshots on failure

   - lighthouse (depends on quality-checks):
     a) Run Lighthouse CI against build
     b) Assert performance >= 80, accessibility >= 90, SEO >= 90, best-practices >= 85
     c) Upload Lighthouse reports

2. Create .github/workflows/dependency-audit.yml:
   Trigger: Weekly (cron: '0 9 * * 1')
   - Run npm audit
   - Create GitHub issue if vulnerabilities found

3. Add Dependabot config (.github/dependabot.yml):
   - Weekly npm dependency updates
   - Prefix commit messages with "chore(deps):"
   - Max 5 open PRs at a time

4. Add status badges to README (if one exists)

Test with: Verify YAML syntax is valid, npm run build succeeds
```

---

### 2.5 Resend Email Domain Verification

| Field | Value |
|-------|-------|
| **Priority** | High |
| **Complexity** | Simple |
| **Dependencies** | None (manual steps) |
| **Expected Output** | Verified email sending, updated .env.example |

**Prompt:**
```
Document and implement Resend email verification for the Kaporta Group website.

CURRENT STATE:
- Resend is installed and integrated in src/lib/email.ts
- API routes call sendEmail() on form submission
- No RESEND_API_KEY configured in production yet
- Email sending silently fails without API key (forms still return success)

MANUAL STEPS (do these in Resend dashboard):
1. Sign up at https://resend.com
2. Add and verify sending domain (or use onboarding@resend.dev for testing)
3. Generate API key with "Sending access" permission
4. In Vercel dashboard → Settings → Environment Variables:
   - Add RESEND_API_KEY=re_xxxxx (Production + Preview)
   - Add ADMIN_EMAIL=kaportaq1@gmail.com (Production + Preview)

AUTOMATED TASKS:
1. Update src/lib/email.ts:
   - Add proper error logging when RESEND_API_KEY is missing
   - Add email template for each form type with Kaporta branding:
     a) Contact form confirmation (to user)
     b) Contact form notification (to admin)
     c) Quote request confirmation (to user)
     d) Quote request notification (to admin with details)
     e) Newsletter welcome email (to subscriber)
     f) Job application confirmation (to applicant)
     g) Job application notification (to admin)
   - HTML email templates with:
     - Kaporta Group logo
     - Deep blue (#002F5D) header
     - Construction yellow (#F5A623) accents
     - Footer with company contact info
     - Mobile-responsive layout
2. Update .env.example with all email-related variables
3. Add email preview route at /api/email-preview (dev only) for template testing

Test with: npm run build (zero errors)
```

---

### 2.6 Replace Placeholder Images

| Field | Value |
|-------|-------|
| **Priority** | High |
| **Complexity** | Medium |
| **Dependencies** | None |
| **Expected Output** | `public/images/` directory with subdirectories, updated page components |

**Prompt:**
```
Replace all gradient/placeholder images across the Kaporta Group website with professional stock photos or AI-generated construction imagery.

CURRENT STATE:
- All images use CSS gradient backgrounds as placeholders
- No actual image files in public/images/
- Next.js Image component is available but not used for content images

TASKS:
1. Create directory structure:
   - public/images/hero/ — Homepage and page hero backgrounds
   - public/images/services/ — One image per service (6 total)
   - public/images/projects/ — Project showcase photos (at least 6)
   - public/images/team/ — Leadership team headshots (placeholder silhouettes)
   - public/images/blog/ — Blog post featured images (at least 4)
   - public/images/about/ — Company history and office photos

2. For each placeholder, add a real image using Next.js Image component:
   - Homepage hero: Wide construction site panorama (1920x800)
   - Service cards: Relevant photo for each of the 6 services
   - Project cards: Completed project photos
   - Team members: Professional headshot placeholders (400x400)
   - Blog posts: Industry-relevant images (800x450)
   - About page: Office/team/equipment photos

3. Implementation:
   - Use next/image with proper width, height, alt text
   - Add blurDataURL for loading placeholders (generate small base64 blur)
   - Set priority={true} for above-fold hero images
   - Lazy load all below-fold images (default behavior)
   - Ensure all images have descriptive alt text for accessibility

4. Optimize images:
   - All source images should be WebP or AVIF format
   - Keep file sizes under 200KB for photos, 50KB for thumbnails
   - Use responsive sizes with srcSet

NOTE: If real photos are not available, use high-quality placeholder images
from Unsplash (construction, mining, logistics themes) with proper attribution,
or create colored placeholder SVGs that match the brand.

Test with: npm run build (zero errors), verify images render on all pages
```

---

### 2.7 Image Optimization & CDN

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Simple |
| **Dependencies** | 2.6 Replace Placeholder Images |
| **Expected Output** | Updated `next.config.ts`, optimized image pipeline |

**Prompt:**
```
Configure advanced image optimization for the Kaporta Group website.

CURRENT STATE:
- next.config.ts exists with security headers
- No image optimization configuration beyond Next.js defaults

TASKS:
1. Update next.config.ts — Image configuration:
   - Add formats: ['image/avif', 'image/webp']
   - Configure deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048]
   - Configure imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
   - Add remotePatterns for any external image sources (Unsplash, Cloudinary, etc.)
   - Set minimumCacheTTL: 60 (seconds)

2. Generate favicon set from Kaporta logo:
   - public/favicon.ico (multi-size: 16x16, 32x32, 48x48)
   - public/icon-192.png, public/icon-512.png (for PWA manifest)
   - public/apple-touch-icon.png (180x180)
   - Update src/app/layout.tsx metadata with favicon references

3. Create Open Graph image:
   - public/og-image.png (1200x630)
   - Kaporta Group branding, tagline, construction imagery
   - Reference in layout.tsx metadata as default OG image

4. Install @next/bundle-analyzer (dev dependency):
   - Add "analyze" script: "ANALYZE=true next build"
   - Create bundle analysis config in next.config.ts

Test with: npm run build (zero errors)
```

---

## Phase 3: Feature Enhancements

### 3.1 Refactor Pages to Use UI Component Library

| Field | Value |
|-------|-------|
| **Priority** | High |
| **Complexity** | Complex |
| **Dependencies** | None (UI components already exist) |
| **Expected Output** | Updated page files across all 18 pages |

**Prompt:**
```
Refactor all Kaporta Group pages to use the reusable UI component library instead of raw HTML elements.

CURRENT STATE:
- 9 UI components exist in src/components/ui/: Button, Card, Badge, Input, Textarea, Select, SectionHeading, Skeleton, NewsletterForm
- Most pages use raw HTML: <button>, <input>, <div> with inline Tailwind classes
- Styling is inconsistent across pages

TASKS:
Systematically replace raw HTML with UI components on every page:

1. src/app/contact/page.tsx:
   - Replace <input> with <Input>, <textarea> with <Textarea>, <select> with <Select>
   - Replace <button> with <Button variant="primary">
   - Wrap form sections in <Card>
   - Add <SectionHeading> for page sections

2. src/app/quote/page.tsx:
   - Same form component replacements
   - Add FileUpload component for attachments
   - Use <Badge> for service type selection

3. src/app/services/page.tsx and src/app/services/[slug]/page.tsx:
   - Replace service cards with <Card> component
   - Use <Badge> for service categories
   - Use <Button> for CTAs

4. src/app/projects/page.tsx:
   - Replace project cards with <Card>
   - Use <Badge> for project categories and status
   - Use <Button> for filter tabs

5. src/app/careers/page.tsx and careers/internships/page.tsx:
   - Replace job listing cards with <Card>
   - Use <Badge> for job type (Full-time, Internship)
   - Use <Button> for "Apply Now" actions

6. src/app/blog/page.tsx and src/app/blog/[slug]/page.tsx:
   - Replace blog cards with <Card>
   - Use <Badge> for categories and tags
   - Use <Button> for "Read More" links

7. src/app/testimonials/page.tsx:
   - Replace testimonial cards with <Card>
   - Use <Badge> for client industry

8. src/app/about/page.tsx, about/leadership/page.tsx, about/certifications/page.tsx:
   - Use <Card> for team member cards
   - Use <Badge> for certifications
   - Use <SectionHeading> throughout

9. src/app/page.tsx (Homepage):
   - Replace all section headings with <SectionHeading>
   - Replace all cards with <Card>
   - Replace all buttons with <Button>

10. Add <Breadcrumbs> component to all subpages (about/*, services/*, blog/*, careers/*)

RULES:
- Do NOT change page layout or content — only swap HTML elements for components
- Maintain all existing functionality
- Preserve all Tailwind utility classes for layout (grid, flex, padding, margin)
- Test each page after modification

Test with: npm run build (zero errors), visually verify all pages
```

---

### 3.2 Dark Mode

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Medium |
| **Dependencies** | 3.1 Refactor Pages (recommended but not required) |
| **Expected Output** | Theme context, toggle component, updated globals.css, updated components |

**Prompt:**
```
Add dark mode support to the Kaporta Group website with system preference detection and manual toggle.

CURRENT STATE:
- No dark mode support
- Brand colors defined in globals.css @theme block
- All pages use light backgrounds (soft-white, white, deep-blue for heroes)

TASKS:
1. Create src/context/ThemeContext.tsx:
   - ThemeProvider component wrapping children
   - useTheme() hook returning { theme, toggleTheme, setTheme }
   - Three modes: 'light', 'dark', 'system'
   - Detect system preference via matchMedia('(prefers-color-scheme: dark)')
   - Persist choice in localStorage under 'kaporta-theme'
   - Apply 'dark' class to <html> element
   - Prevent flash of wrong theme (inline script in layout.tsx)

2. Update src/app/globals.css:
   - Add dark mode color tokens:
     - Dark background: #0F1419
     - Dark card: #1A1F26
     - Dark text: #E8EAED
     - Dark secondary text: #9AA0A6
     - Keep accent colors (construction-yellow, forest-green) consistent
   - Use Tailwind CSS v4 dark: variant for all color utilities

3. Create src/components/ui/ThemeToggle.tsx:
   - Sun/Moon icon toggle button
   - Three-state selector (Light / System / Dark) on click
   - Accessible: aria-label, keyboard navigation
   - Smooth icon transition animation

4. Update src/components/layout/Header.tsx:
   - Add ThemeToggle to header utility area (near search button)

5. Update all UI components for dark mode:
   - Button: dark hover states
   - Card: dark background, border adjustments
   - Input, Textarea, Select: dark backgrounds, light text, focus ring
   - Badge: dark-appropriate color variants
   - SectionHeading: dark text color

6. Update page sections:
   - Hero sections: adjust overlay opacity for dark mode
   - Stats bars: dark background variant
   - Footer: dark background (already dark, ensure contrast)
   - CTA sections: adjust for dark backgrounds

7. Wrap app in ThemeProvider in src/app/layout.tsx

Test with: npm run build (zero errors), toggle between modes, verify all pages
```

---

### 3.3 Multi-language Support (English / Krio / French)

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Complex |
| **Dependencies** | None |
| **Expected Output** | `src/i18n/`, locale files, updated layout, language switcher |

**Prompt:**
```
Add internationalization (i18n) to the Kaporta Group website supporting English, Krio, and French.

CURRENT STATE:
- All content is hardcoded in English across page.tsx files and data files
- No i18n library installed
- Next.js App Router in use

TASKS:
1. Install next-intl:
   - npm install next-intl

2. Create locale files in src/i18n/messages/:
   - en.json — English (default, copy all existing text)
   - kr.json — Krio translations
   - fr.json — French translations
   - Structure: { "common": { "nav": {}, "footer": {}, "cta": {} }, "home": {}, "about": {}, "services": {}, "contact": {}, ... }

3. Configure next-intl with App Router:
   - Create src/i18n/request.ts — getRequestConfig
   - Create src/i18n/routing.ts — defineRouting with locales and defaultLocale
   - Create src/middleware.ts — Locale detection middleware
   - Update next.config.ts with createNextIntlPlugin

4. Update routing structure:
   - Move src/app/* pages to src/app/[locale]/*
   - Update all internal links to include locale prefix
   - Default locale (en) can optionally skip prefix

5. Create src/components/ui/LanguageSwitcher.tsx:
   - Dropdown showing: English, Krio, French
   - Flag icons or language code labels
   - Preserves current page path when switching
   - Add to Header utility area

6. Add hreflang tags to all pages:
   - <link rel="alternate" hreflang="en" href="..." />
   - <link rel="alternate" hreflang="fr" href="..." />
   - <link rel="alternate" hreflang="x-default" href="..." />

7. Update sitemap.ts to include all locale variants

8. Translate key content (at minimum):
   - Navigation labels
   - Page titles and hero text
   - CTA buttons
   - Form labels and placeholder text
   - Footer content
   - Error messages

Test with: npm run build (zero errors), navigate between languages
```

---

### 3.4 Advanced Blog System

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Medium |
| **Dependencies** | None |
| **Expected Output** | MDX support, blog enhancements, new components |

**Prompt:**
```
Enhance the Kaporta Group blog system with MDX support and advanced features.

CURRENT STATE:
- Blog data in src/data/blog-posts.ts (static TypeScript objects)
- Blog list at /blog with category filtering
- Individual posts at /blog/[slug]
- Basic text content, no rich formatting

TASKS:
1. Add MDX support:
   - npm install @next/mdx @mdx-js/loader @mdx-js/react
   - Create src/app/blog/[slug]/mdx-components.tsx for custom styling
   - Support: headings, code blocks, tables, blockquotes, images, callouts
   - Syntax highlighting for code blocks with rehype-pretty-code

2. Create blog enhancement components in src/components/blog/:
   - TableOfContents.tsx — Auto-generated from headings, sticky sidebar, active section highlight
   - ReadingTime.tsx — Estimate based on word count (e.g., "5 min read")
   - ShareButtons.tsx — Share on Facebook, LinkedIn, WhatsApp, Twitter, copy link
   - RelatedPosts.tsx — 2-3 related posts based on category matching
   - AuthorCard.tsx — Author info with photo, bio, social links
   - BlogSearch.tsx — Search/filter within blog posts

3. Add blog features:
   - Category pages at /blog/category/[category]
   - Tag system with tag cloud
   - Pagination (6 posts per page) if post count grows
   - RSS feed at /blog/feed.xml (src/app/blog/feed.xml/route.ts)
   - Previous/Next post navigation at bottom of each post

4. Update src/data/blog-posts.ts:
   - Add readingTime field (auto-calculated)
   - Add tags array field
   - Add author field referencing team data

5. Add Blog JSON-LD schema (Article type) to individual post pages

Test with: npm run build (zero errors), verify blog pages render correctly
```

---

### 3.5 Testimonial Submission Form

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Simple |
| **Dependencies** | 2.1 Database Integration |
| **Expected Output** | Testimonial form component, API route, updated testimonials page |

**Prompt:**
```
Add a testimonial submission form to the Kaporta Group website allowing clients to submit reviews.

CURRENT STATE:
- Testimonials page at /testimonials displays static data from src/data/testimonials.ts
- No way for clients to submit new testimonials

TASKS:
1. Create POST /api/testimonials/route.ts:
   - Accept: name, company, role, rating (1-5 stars), testimonial text, project reference (optional), photo upload (optional)
   - Zod validation schema in src/lib/validations.ts
   - Store in database (pending approval status)
   - Send admin notification email
   - Rate limit: 1 submission per IP per hour

2. Create src/components/forms/TestimonialForm.tsx:
   - Name, company, role fields
   - Star rating selector (clickable stars)
   - Testimonial text area (min 20 chars, max 500 chars)
   - Optional project reference dropdown
   - Optional photo upload
   - Honeypot spam field
   - Success confirmation message

3. Add testimonial form section to /testimonials page:
   - Place below existing testimonials
   - "Share Your Experience" heading
   - Brief instructions
   - The TestimonialForm component

4. Create approval workflow concept:
   - Submitted testimonials have status: 'pending'
   - Only 'approved' testimonials display on the public page
   - (Admin dashboard in Phase 4 will manage approval)

Test with: npm run build (zero errors)
```

---

### 3.6 Project Gallery with Lightbox

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Medium |
| **Dependencies** | 2.6 Replace Placeholder Images |
| **Expected Output** | Lightbox component, updated project pages |

**Prompt:**
```
Add image gallery with lightbox functionality to Kaporta Group project pages.

CURRENT STATE:
- Projects at /projects show cards with single placeholder images
- Individual project detail view exists
- No gallery or lightbox functionality

TASKS:
1. Update src/data/projects.ts:
   - Add images[] array to each project (gallery of 4-8 images)
   - Add fields: completionDate, client, location, duration, budget (optional)

2. Create src/components/ui/Lightbox.tsx:
   - Full-screen overlay with dark background
   - Image display with zoom controls
   - Left/right arrow navigation (keyboard + click)
   - Image counter (3 of 8)
   - Close button (X) and Escape key
   - Swipe gesture support for mobile (using framer-motion)
   - Preload adjacent images
   - Body scroll lock when open
   - Accessible: focus trap, aria-labels, role="dialog"

3. Create src/components/ui/ImageGallery.tsx:
   - Responsive grid layout (2 cols mobile, 3 cols tablet, 4 cols desktop)
   - Thumbnail images with hover overlay
   - Click to open lightbox at selected image
   - Optional: masonry layout variant

4. Update project detail display:
   - Add ImageGallery below project description
   - Show project metadata (client, location, duration, completion date)
   - Add "View Gallery" button if images exist

5. Add loading skeletons for gallery images

Test with: npm run build (zero errors), verify lightbox on project pages
```

---

### 3.7 Team Member Detail Pages

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Simple |
| **Dependencies** | None |
| **Expected Output** | `src/app/about/leadership/[slug]/page.tsx`, updated team data |

**Prompt:**
```
Add individual detail pages for each Kaporta Group leadership team member.

CURRENT STATE:
- Team members displayed on /about/leadership in a card grid
- Data in src/data/team.ts
- No individual team member pages

TASKS:
1. Update src/data/team.ts:
   - Add slug field to each team member
   - Add bio (full biography, 2-3 paragraphs)
   - Add education[] array
   - Add certifications[] array
   - Add yearsExperience number
   - Add socialLinks: { linkedin?, email? }

2. Create src/app/about/leadership/[slug]/page.tsx:
   - Hero section with photo and name/role
   - Full biography section
   - Education and certifications
   - Years of experience highlight
   - Social/contact links
   - "Back to Team" navigation
   - JSON-LD Person schema
   - Dynamic metadata (title, description, OG image)

3. Update /about/leadership/page.tsx:
   - Make team member cards clickable (link to detail page)
   - Add "View Profile" button on hover

4. Generate static params for all team member slugs

Test with: npm run build (zero errors), navigate to individual team pages
```

---

### 3.8 Service Comparison Table

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Simple |
| **Dependencies** | None |
| **Expected Output** | Comparison table component, updated services page |

**Prompt:**
```
Add a service comparison table to the Kaporta Group services page.

CURRENT STATE:
- 6 service domains listed on /services
- Individual service pages at /services/[slug]
- No way to compare services side by side

TASKS:
1. Update src/data/services.ts:
   - Add comparison features to each service:
     - availability: 'available' | 'on-request' | 'coming-soon'
     - typical_timeline: string (e.g., "2-4 weeks")
     - starting_price: string (e.g., "Contact for quote")
     - equipment_provided: boolean
     - consultation_included: boolean
     - project_management: boolean
     - safety_compliance: boolean
     - warranty: string

2. Create src/components/ui/ComparisonTable.tsx:
   - Responsive table with service names as columns
   - Feature rows with check/cross/dash icons
   - Sticky first column (feature names) on horizontal scroll
   - Mobile: transform to stacked cards or horizontal scroll
   - Highlight column on hover
   - "Request Quote" button at bottom of each column

3. Add comparison section to /services page:
   - "Compare Our Services" heading
   - ComparisonTable component
   - Below the service cards grid

4. Make table accessible:
   - Proper <table>, <thead>, <tbody>, <th>, <td> markup
   - scope attributes on headers
   - aria-label on the table

Test with: npm run build (zero errors)
```

---

### 3.9 FAQ Page with Accordion

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Simple |
| **Dependencies** | None |
| **Expected Output** | `src/app/faq/page.tsx`, `src/data/faqs.ts`, accordion component |

**Prompt:**
```
Create a searchable FAQ page with accordion sections for the Kaporta Group website.

TASKS:
1. Create src/data/faqs.ts:
   - Categories: General, Services, Quotes & Pricing, Projects, Careers, Payment
   - 5-8 Q&A pairs per category (30-40 total)
   - Fields: id, category, question, answer (supports basic HTML/markdown)
   - Example questions:
     General: "Where is Kaporta Group located?", "What areas do you serve?"
     Services: "What quarrying services do you offer?", "Do you provide equipment rental?"
     Quotes: "How do I request a quote?", "How long does a quote take?"
     Projects: "What types of projects has Kaporta completed?"
     Careers: "How do I apply for a job?", "Do you offer internships?"
     Payment: "What payment methods do you accept?"

2. Create src/components/ui/Accordion.tsx:
   - Single item: question (trigger), answer (collapsible content)
   - Smooth height animation (framer-motion AnimatePresence)
   - Chevron icon rotation on open/close
   - Only one item open at a time per category (optional)
   - Accessible: <button> trigger, aria-expanded, aria-controls, role="region"
   - Keyboard: Enter/Space to toggle

3. Create src/app/faq/page.tsx:
   - Hero section matching site pattern
   - Search input at top: filter FAQs by keyword (searches question + answer text)
   - Category tabs/buttons for filtering
   - Accordion sections organized by category
   - "Still have questions?" CTA at bottom linking to /contact
   - JSON-LD FAQPage schema for SEO
   - Breadcrumbs

4. Add FAQ link to navigation in src/data/navigation.ts
5. Generate metadata for SEO

Test with: npm run build (zero errors), verify search filtering works
```

---

### 3.10 Social Sharing Buttons

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Simple |
| **Dependencies** | None |
| **Expected Output** | ShareButtons component, updated blog and project pages |

**Prompt:**
```
Add social sharing buttons to blog posts and project pages on the Kaporta Group website.

TASKS:
1. Create src/components/ui/ShareButtons.tsx:
   - Props: url, title, description (optional)
   - Share buttons for: Facebook, LinkedIn, WhatsApp, X (Twitter)
   - Copy link button with "Copied!" toast notification
   - Use native share API on mobile (navigator.share) with fallback
   - Icons from lucide-react
   - Horizontal row layout
   - Accessible labels on each button

2. Add ShareButtons to:
   - src/app/blog/[slug]/page.tsx — Below the post title and at the bottom
   - src/app/projects/page.tsx — On each project card (share icon)

3. Share URLs:
   - Facebook: https://www.facebook.com/sharer/sharer.php?u={url}
   - LinkedIn: https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}
   - WhatsApp: https://wa.me/?text={title}%20{url}
   - X/Twitter: https://twitter.com/intent/tweet?url={url}&text={title}

4. Ensure Open Graph meta tags are set properly on shared pages:
   - og:title, og:description, og:image, og:url
   - twitter:card, twitter:title, twitter:description, twitter:image

Test with: npm run build (zero errors), verify share links open correctly
```

---

### 3.11 Accessibility Enhancements

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Medium |
| **Dependencies** | None |
| **Expected Output** | Updated components, accessibility utility, skip links |

**Prompt:**
```
Enhance accessibility across the Kaporta Group website beyond current WCAG 2.1 AA compliance.

CURRENT STATE:
- Semantic HTML landmarks used (main, nav, section, article)
- Alt text on images
- Basic keyboard navigation works
- No skip links, no focus management, no screen reader announcements for dynamic content

TASKS:
1. Add skip navigation link:
   - Visible on focus at top of every page
   - "Skip to main content" linking to #main-content
   - Style: absolute positioned, shown on focus

2. Focus management:
   - Focus trap in: mobile menu, search modal, chat widget, lightbox
   - Return focus to trigger element when modals close
   - Visible focus indicators on all interactive elements (2px outline)
   - Use :focus-visible for keyboard-only focus styles

3. Screen reader improvements:
   - Add aria-live="polite" region for:
     - Form submission success/error messages
     - Search result count updates
     - Filter result count changes
   - Announce page transitions (usePathname + screen reader announcement)
   - Replace "Read More" links with "Read more about {title}"
   - Replace "Learn More" links with "Learn more about {service}"
   - Add sr-only text where icons are used without labels

4. Keyboard navigation:
   - Arrow key navigation in dropdown menus
   - Escape key closes all overlays (already done for some)
   - Tab order follows visual layout on all pages
   - Enter/Space activates all interactive elements

5. Create src/components/ui/VisuallyHidden.tsx:
   - Screen-reader-only text component
   - Use throughout site for icon-only buttons

6. Color contrast verification:
   - Ensure all text meets 4.5:1 contrast ratio (AA)
   - Ensure large text meets 3:1 ratio
   - Check construction-yellow (#F5A623) on white backgrounds — may need darker variant for text

7. Add prefers-reduced-motion support:
   - Disable all framer-motion animations when user prefers reduced motion
   - Create useReducedMotion() hook

Test with: npm run build (zero errors), keyboard-only navigation test on all pages
```

---

### 3.12 Performance Optimization

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Medium |
| **Dependencies** | 2.7 Image Optimization |
| **Expected Output** | Updated next.config.ts, dynamic imports, font optimization |

**Prompt:**
```
Optimize the Kaporta Group website for Core Web Vitals performance scores.

CURRENT STATE:
- Next.js 16 with default build optimization
- Tailwind CSS v4 with full utility classes
- framer-motion loaded on every page
- All components statically imported
- Fonts loaded via next/font

TASKS:
1. Bundle optimization:
   - Install @next/bundle-analyzer as dev dependency
   - Add analyze script to package.json
   - Dynamic import heavy components:
     - ChatWidget (only load after user interaction or 5s delay)
     - SearchModal (only load when Cmd+K pressed or search clicked)
     - GoogleMap (only load on contact page with Intersection Observer)
     - Lightbox (only load when gallery image clicked)
   - Tree-shake lucide-react: import individual icons not the whole library
     (already done if using named imports — verify)

2. Font optimization:
   - Ensure fonts use display: 'swap'
   - Preload critical fonts (Poppins for headings)
   - Consider subsetting Poppins to Latin + Latin Extended only

3. Lazy loading:
   - Wrap below-fold sections with dynamic(() => import(...), { ssr: false })
   - Use Intersection Observer for animation triggers (already done with framer-motion)
   - Defer non-critical CSS (chat widget styles, etc.)

4. Caching headers in next.config.ts:
   - Static assets: Cache-Control: public, max-age=31536000, immutable
   - HTML pages: Cache-Control: public, max-age=0, must-revalidate
   - API routes: Cache-Control: no-store

5. Preconnect to external origins:
   - Google Fonts (if used externally)
   - Vercel Analytics endpoints
   - Google Maps embed domain

6. Add resource hints to layout.tsx:
   - dns-prefetch for third-party domains
   - preconnect for critical third-party resources

7. Measure with Lighthouse:
   - Target: Performance >= 90, Accessibility >= 95, SEO >= 95, Best Practices >= 90

Test with: npm run build (zero errors), compare bundle size before/after
```

---

## Phase 4: Advanced Features

### 4.1 Admin Dashboard

| Field | Value |
|-------|-------|
| **Priority** | High |
| **Complexity** | Complex |
| **Dependencies** | 2.1 Database Integration |
| **Expected Output** | `src/app/admin/` pages, auth setup, dashboard components |

**Prompt:**
```
Build a lightweight admin dashboard for managing Kaporta Group website submissions and content.

TASKS:
1. Authentication with NextAuth.js:
   - npm install next-auth @auth/core
   - Credentials provider (email + password)
   - Create src/app/api/auth/[...nextauth]/route.ts
   - Create src/lib/auth.ts — Auth configuration
   - Initial admin user: kaportaq1@gmail.com (password set via env var)
   - Session management with JWT tokens
   - Protected route middleware for /admin/*

2. Dashboard pages:
   a) /admin — Overview dashboard:
      - Total submissions count by type
      - Unread submissions count (highlighted)
      - Recent activity feed (last 10 submissions)
      - Quick stats cards: contacts, quotes, applications, subscribers

   b) /admin/contacts — Contact submissions:
      - Table: name, email, date, status (new/read/replied)
      - Click to view full submission details
      - Mark as read/replied
      - Reply via email (triggers Resend)
      - Delete submission
      - Export to CSV

   c) /admin/quotes — Quote requests:
      - Table: name, company, service, date, status
      - Status workflow: new → reviewed → quoted → accepted/declined
      - View attached files
      - Internal notes field

   d) /admin/applications — Job applications:
      - Table: name, position, date, status
      - Status: new → reviewed → shortlisted → interviewed → hired/rejected
      - View resume (link to cloud storage)
      - Internal notes

   e) /admin/subscribers — Newsletter subscribers:
      - List with subscribe date
      - Export to CSV
      - Unsubscribe action

3. Admin UI components (src/components/admin/):
   - AdminLayout.tsx — Sidebar navigation, header with user info
   - DataTable.tsx — Sortable, filterable table component
   - StatusBadge.tsx — Color-coded status badges
   - StatsCard.tsx — Dashboard metric card

4. Add ADMIN_PASSWORD_HASH to .env.example

Test with: npm run build (zero errors)
```

---

### 4.2 Client Portal

| Field | Value |
|-------|-------|
| **Priority** | Future |
| **Complexity** | Complex |
| **Dependencies** | 4.1 Admin Dashboard, 2.1 Database, 2.2 File Upload |
| **Expected Output** | `src/app/portal/` pages, client auth, project tracking |

**Prompt:**
```
Build a client portal for Kaporta Group project tracking and communication.

TASKS:
1. Client authentication:
   - Extend NextAuth.js with client role
   - Admin creates client accounts (from admin dashboard)
   - Client login at /portal/login
   - Password reset via email

2. Client portal pages:
   a) /portal — Client dashboard:
      - Active projects overview
      - Recent updates and messages
      - Quick links to documents and invoices

   b) /portal/projects — Project list:
      - Cards showing each client's projects
      - Status indicator (Planning, In Progress, On Hold, Completed)
      - Progress percentage bar

   c) /portal/projects/[id] — Project detail:
      - Project timeline with milestones
      - Progress photos gallery (chronological)
      - Shared documents (drawings, reports, invoices)
      - Communication thread (messages between client and project manager)
      - Status updates feed

   d) /portal/documents — Document library:
      - All shared documents across projects
      - Filter by project, type (invoice, report, drawing)
      - Download functionality

   e) /portal/invoices — Payment history:
      - Invoice list with status (pending, paid, overdue)
      - Link to /payment for outstanding invoices

3. Database tables:
   - clients: id, name, email, company, phone, password_hash, status
   - client_projects: id, client_id, project_name, description, status, progress, start_date, end_date
   - project_milestones: id, project_id, title, status, due_date, completed_date
   - project_documents: id, project_id, name, type, file_url, uploaded_by, uploaded_at
   - project_messages: id, project_id, sender_id, sender_role, message, created_at
   - project_photos: id, project_id, image_url, caption, taken_at

4. Real-time updates:
   - New message notification
   - Project status change notification
   - Document upload notification

Test with: npm run build (zero errors)
```

---

### 4.3 Payment Gateway (Stripe + Mobile Money)

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Complex |
| **Dependencies** | 2.1 Database Integration |
| **Expected Output** | Payment routes, Stripe integration, updated payment page |

**Prompt:**
```
Make the Kaporta Group /payment page functional with Stripe and mobile money support.

CURRENT STATE:
- /payment page exists with placeholder content
- No payment processing functionality

TASKS:
1. Stripe integration:
   - npm install stripe @stripe/stripe-js @stripe/react-stripe-js
   - Create src/lib/stripe.ts — Stripe client initialization
   - Create POST /api/payment/create-intent/route.ts — Create PaymentIntent
   - Create POST /api/payment/webhook/route.ts — Handle Stripe webhooks
   - Support currencies: USD, SLE (Sierra Leonean Leone)

2. Update /payment page (src/app/payment/page.tsx):
   - Invoice number lookup field
   - Payment amount input (pre-filled from invoice if found)
   - Currency selector (USD / SLE)
   - Stripe Elements embedded payment form
   - Card, Apple Pay, Google Pay support
   - Payment confirmation page with receipt

3. Alternative payment methods section:
   - Bank transfer details (copy-to-clipboard for account info):
     - Bank name, account number, sort code, SWIFT/BIC
     - Reference format instructions
   - Mobile money instructions:
     - Orange Money: Dial *144# → Send Money → Enter number
     - Africell Money: Dial *134# → Send Money → Enter number
     - Kaporta mobile money number displayed prominently

4. Database:
   - payments table: id, invoice_number, amount, currency, method, stripe_payment_id, status, client_email, created_at
   - Send payment confirmation email on success

5. Security:
   - Stripe webhook signature verification
   - HTTPS-only payment page
   - No card data stored server-side (Stripe handles PCI compliance)

6. Environment variables:
   - STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET

Test with: npm run build (zero errors)
```

---

### 4.4 CMS Integration (Sanity or Contentful)

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Complex |
| **Dependencies** | None |
| **Expected Output** | CMS schema, content migration, updated data fetching |

**Prompt:**
```
Integrate Sanity CMS to replace static TypeScript data files in the Kaporta Group website.

CURRENT STATE:
- Content stored in static TypeScript files:
  - src/data/services.ts (6 services)
  - src/data/projects.ts (project portfolio)
  - src/data/team.ts (leadership team)
  - src/data/testimonials.ts (client reviews)
  - src/data/blog-posts.ts (blog articles)
  - src/data/jobs.ts (career listings)
- Updating content requires code changes and redeployment

TASKS:
1. Set up Sanity:
   - npm install next-sanity @sanity/image-url @sanity/vision
   - Initialize Sanity project: npx sanity@latest init
   - Create Sanity Studio at /admin/studio (or separate studio app)

2. Define Sanity schemas (sanity/schemas/):
   - service.ts — name, slug, description, icon, features[], image
   - project.ts — title, slug, category, description, images[], client, location, completionDate, featured
   - teamMember.ts — name, slug, role, bio, photo, education[], certifications[], socialLinks
   - testimonial.ts — name, company, role, rating, text, photo, project reference, approved
   - blogPost.ts — title, slug, author (ref), category, tags[], publishedAt, body (Portable Text), featuredImage, excerpt
   - job.ts — title, slug, department, type, location, description, requirements[], benefits[], status

3. Create src/lib/sanity.ts:
   - Sanity client configuration
   - Image URL builder
   - GROQ query functions for each content type

4. Migrate existing content:
   - Script to import current TypeScript data into Sanity (sanity/migrate.ts)
   - Map all fields from current data structure to Sanity schema

5. Update data fetching in pages:
   - Replace static imports with Sanity GROQ queries
   - Use ISR (Incremental Static Regeneration) with revalidate: 60
   - Fallback to static data if Sanity is unreachable

6. Configure webhook for on-demand revalidation:
   - POST /api/revalidate/route.ts — Triggered by Sanity webhook on content change
   - Revalidate specific pages based on content type

7. Environment variables:
   - NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN

Test with: npm run build (zero errors), verify content loads from Sanity
```

---

### 4.5 Real-time Notifications (WebSocket or SSE)

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Medium |
| **Dependencies** | 4.1 Admin Dashboard |
| **Expected Output** | SSE endpoint, notification components, admin notification bell |

**Prompt:**
```
Add real-time notifications to the Kaporta Group admin dashboard using Server-Sent Events (SSE).

TASKS:
1. Create GET /api/admin/notifications/stream/route.ts:
   - SSE endpoint that streams new submission events
   - Events: new_contact, new_quote, new_application, new_subscriber
   - Include submission summary in event data
   - Keep-alive ping every 30 seconds
   - Authentication required (admin session check)

2. Create src/components/admin/NotificationBell.tsx:
   - Bell icon in admin header
   - Unread count badge (red dot with number)
   - Dropdown showing recent notifications
   - Click to navigate to relevant admin page
   - Mark as read on click
   - "Mark all as read" button
   - Sound notification option (toggle in settings)

3. Create src/hooks/useNotifications.ts:
   - Custom hook connecting to SSE stream
   - Reconnect on connection loss
   - Store notifications in state
   - Browser notification permission request
   - Desktop push notification on new submission (when tab is not active)

4. Database:
   - admin_notifications table: id, type, title, message, link, read, created_at

5. Trigger notifications from existing API routes:
   - When /api/contact receives submission → create notification
   - When /api/quote receives submission → create notification
   - When /api/career-apply receives submission → create notification

Test with: npm run build (zero errors)
```

---

### 4.6 Advanced Analytics Dashboard

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Complex |
| **Dependencies** | 4.1 Admin Dashboard, 2.1 Database |
| **Expected Output** | Analytics page, chart components, tracking utilities |

**Prompt:**
```
Build an analytics dashboard page within the Kaporta Group admin area.

TASKS:
1. Install chart library:
   - npm install recharts (lightweight, React-native charts)

2. Create tracking utilities (src/lib/analytics.ts):
   - trackPageView(page, referrer, userAgent)
   - trackEvent(name, properties)
   - Store in database: page_views table, events table

3. Create middleware for automatic page view tracking:
   - Log each page visit: path, timestamp, referrer, country (from IP), device type
   - Exclude admin pages and API routes
   - Batch inserts for performance

4. Create /admin/analytics page:
   a) Overview cards:
      - Total page views (today, this week, this month)
      - Unique visitors
      - Average session duration (estimated)
      - Bounce rate (single page visits)

   b) Charts (using recharts):
      - Page views over time (line chart, 7/30/90 day range)
      - Top pages bar chart
      - Traffic sources pie chart
      - Device breakdown (mobile/desktop/tablet) donut chart
      - Submissions over time (contact, quotes, applications)

   c) Tables:
      - Top 10 most visited pages
      - Recent visitor log (page, time, referrer, device)
      - Form conversion rates (views vs submissions)

5. Create src/components/admin/charts/:
   - LineChart.tsx — Time series chart
   - BarChart.tsx — Horizontal/vertical bar chart
   - PieChart.tsx — Pie/donut chart
   - StatsCard.tsx — Metric with trend indicator

6. Add date range picker for filtering analytics data

Test with: npm run build (zero errors)
```

---

### 4.7 A/B Testing Framework

| Field | Value |
|-------|-------|
| **Priority** | Future |
| **Complexity** | Medium |
| **Dependencies** | 4.6 Analytics Dashboard |
| **Expected Output** | A/B testing utility, variant components |

**Prompt:**
```
Create a lightweight A/B testing framework for the Kaporta Group website.

TASKS:
1. Create src/lib/ab-testing.ts:
   - defineExperiment(name, variants[])
   - getVariant(experimentName, userId) — Deterministic variant assignment based on cookie/ID
   - trackConversion(experimentName, variantName)
   - Store assignment in cookie (kaporta_ab_{experiment})

2. Create src/components/ui/ABTest.tsx:
   - <ABTest experiment="hero-cta" variants={{ A: <ButtonA />, B: <ButtonB /> }} />
   - Renders assigned variant for current user
   - Tracks impressions automatically

3. Define initial experiments:
   a) hero-cta: Test "Request a Quote" vs "Get Started Today" button text
   b) contact-form-layout: Test single-column vs two-column form layout
   c) service-card-style: Test icon-left vs icon-top card layout

4. Create /admin/experiments page:
   - List all active experiments
   - Show variant distribution and conversion rates
   - Statistical significance calculator
   - Start/stop experiments
   - Declare winner and apply globally

5. Database:
   - experiments: id, name, status, variants[], created_at
   - experiment_assignments: experiment_id, visitor_id, variant, assigned_at
   - experiment_conversions: experiment_id, variant, conversion_type, converted_at

Test with: npm run build (zero errors)
```

---

### 4.8 reCAPTCHA / hCaptcha Integration

| Field | Value |
|-------|-------|
| **Priority** | Medium |
| **Complexity** | Simple |
| **Dependencies** | None |
| **Expected Output** | CAPTCHA component, updated form pages, updated API routes |

**Prompt:**
```
Add CAPTCHA protection to all Kaporta Group website forms to prevent automated spam.

CURRENT STATE:
- Honeypot fields exist on API routes
- Rate limiting exists
- No CAPTCHA verification

TASKS:
1. Choose and install hCaptcha (privacy-friendly, free):
   - npm install @hcaptcha/react-hcaptcha

2. Create src/components/ui/CaptchaWidget.tsx:
   - Wrapper around hCaptcha component
   - Handles token generation
   - Loading state
   - Error state with retry
   - Accessible: proper labeling

3. Create src/lib/captcha.ts:
   - verifyCaptchaToken(token: string) => Promise<boolean>
   - Server-side verification against hCaptcha API
   - Timeout handling

4. Add CaptchaWidget to all forms:
   - Contact form (/contact)
   - Quote request form (/quote)
   - Career application form
   - Testimonial submission form (if implemented)
   - Newsletter signup (optional — may hurt conversion)

5. Update all API routes to verify CAPTCHA token:
   - /api/contact — require valid token
   - /api/quote — require valid token
   - /api/career-apply — require valid token
   - Return 403 if token invalid

6. Environment variables:
   - NEXT_PUBLIC_HCAPTCHA_SITE_KEY
   - HCAPTCHA_SECRET_KEY

7. Fallback: If CAPTCHA is not configured (env vars missing), allow submission
   with just honeypot + rate limiting (current behavior)

Test with: npm run build (zero errors)
```

---

## Phase 5: Growth & Scale

### 5.1 Multi-site Architecture

| Field | Value |
|-------|-------|
| **Priority** | Future |
| **Complexity** | Complex |
| **Dependencies** | All Phase 2-3 items |
| **Expected Output** | Shared component package, monorepo structure |

**Prompt:**
```
Restructure Kaporta Group and CybitSolutions into a monorepo with shared component library.

CONTEXT:
- CybitSolutions (cs-website) and Kaporta Group share the same tech stack:
  Next.js 16, React 19, Tailwind CSS v4, TypeScript
- Both have similar components: Header, Footer, Button, Card, Badge, Input, etc.
- Both have similar patterns: hero sections, contact forms, blog, careers

TASKS:
1. Set up Turborepo monorepo:
   - npx create-turbo@latest
   - Structure:
     apps/
       kaporta/        — Kaporta Group website
       cybitsolutions/ — CybitSolutions website
     packages/
       ui/             — Shared UI component library
       config/         — Shared ESLint, TypeScript, Tailwind configs
       utils/          — Shared utility functions
       types/          — Shared TypeScript types

2. Extract shared components to packages/ui/:
   - Button, Card, Badge, Input, Textarea, Select
   - SectionHeading, Skeleton, Breadcrumbs
   - ShareButtons, Accordion, Lightbox
   - Each component accepts theme prop for brand-specific styling

3. Extract shared utilities to packages/utils/:
   - cn() merge utility
   - formatDate, formatPhone
   - Rate limiter, email sender (configurable)
   - Validation schemas (base schemas, extended per site)

4. Configure Turborepo:
   - turbo.json with build, lint, test pipelines
   - Shared caching
   - Parallel builds

5. Update CI/CD for monorepo:
   - Build affected packages only
   - Shared test pipeline

Benefits: Single source of truth for shared code, consistent updates across sites,
reduced duplication, faster feature development for future sites.

Test with: turbo build (both sites build successfully)
```

---

### 5.2 API Documentation (Swagger/OpenAPI)

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Simple |
| **Dependencies** | 2.1 Database Integration |
| **Expected Output** | OpenAPI spec file, documentation page |

**Prompt:**
```
Create API documentation for all Kaporta Group backend endpoints.

CURRENT ENDPOINTS:
- POST /api/contact
- POST /api/quote
- POST /api/newsletter
- POST /api/career-apply

TASKS:
1. Create src/app/api/docs/openapi.json:
   - OpenAPI 3.0 specification
   - Document all endpoints with request/response schemas
   - Include Zod schema descriptions
   - Authentication requirements for admin endpoints
   - Rate limiting documentation
   - Error response formats

2. Create /api/docs page:
   - Install swagger-ui-react or use Scalar
   - Interactive API documentation
   - Try-it-out functionality
   - Authentication token input

3. Add response schema documentation for each endpoint:
   - Success responses (200, 201)
   - Validation errors (400)
   - Rate limit errors (429)
   - Server errors (500)

Test with: npm run build (zero errors)
```

---

### 5.3 Automated Backup Strategy

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Simple |
| **Dependencies** | 2.1 Database Integration |
| **Expected Output** | Backup script, GitHub Action for scheduled backups |

**Prompt:**
```
Set up automated database backup for the Kaporta Group website.

TASKS:
1. Create scripts/backup-db.ts:
   - Connect to production database
   - Export all tables to JSON format
   - Timestamp each backup file
   - Upload to cloud storage (Vercel Blob or S3)
   - Retain last 30 daily backups, last 12 weekly backups

2. Create .github/workflows/backup.yml:
   - Schedule: Daily at 2:00 AM UTC
   - Run backup script
   - Send notification on failure (GitHub issue or email)

3. Create scripts/restore-db.ts:
   - Accept backup file path
   - Validate backup integrity
   - Restore tables from JSON
   - Dry-run mode (preview what would be restored)

4. Document backup/restore procedures in comments

Test with: Run backup script locally against dev database
```

---

### 5.4 Load Testing

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Simple |
| **Dependencies** | None |
| **Expected Output** | Load test scripts, performance baseline |

**Prompt:**
```
Set up load testing for the Kaporta Group website.

TASKS:
1. Install k6 or use Artillery:
   - npm install -D artillery

2. Create tests/load/ directory with test scripts:
   a) homepage-load.yml — 100 concurrent users hitting homepage
   b) api-contact.yml — 50 concurrent form submissions
   c) navigation-flow.yml — Simulated user journey (home → services → contact → submit)
   d) search-load.yml — 30 concurrent search queries

3. Define performance thresholds:
   - Homepage: p95 response time < 500ms
   - API routes: p95 response time < 1000ms
   - Error rate: < 1%
   - Throughput: > 100 requests/second

4. Add load test script to package.json:
   - "test:load": "artillery run tests/load/homepage-load.yml"

5. Create performance baseline report template

Test with: Run against local dev server to verify scripts work
```

---

### 5.5 SEO Monitoring & Reporting

| Field | Value |
|-------|-------|
| **Priority** | Low |
| **Complexity** | Medium |
| **Dependencies** | 4.1 Admin Dashboard |
| **Expected Output** | SEO monitoring utilities, admin reporting page |

**Prompt:**
```
Set up SEO monitoring and reporting for the Kaporta Group website.

TASKS:
1. Create /admin/seo page:
   - List all pages with their meta title, description, OG image status
   - Flag pages with missing or too-long meta descriptions
   - Flag pages without OG images
   - Show sitemap coverage (pages in sitemap vs total pages)

2. Create src/lib/seo-audit.ts:
   - Crawl all site pages and extract:
     - Title tag (flag if > 60 chars or missing)
     - Meta description (flag if > 160 chars or missing)
     - H1 count (flag if != 1)
     - Image alt text coverage
     - Internal/external link count
     - JSON-LD schema presence
   - Return audit report as JSON

3. Integrate Google Search Console API (optional):
   - Show top search queries
   - Click-through rates
   - Index coverage
   - Crawl errors

4. Create automated weekly SEO report:
   - Pages indexed count
   - Top performing pages
   - Issues to fix
   - Send via email to admin

5. Add SEO score to each page's admin view

Test with: npm run build (zero errors)
```

---

### 5.6 Social Media Auto-posting

| Field | Value |
|-------|-------|
| **Priority** | Future |
| **Complexity** | Medium |
| **Dependencies** | 3.4 Blog System, 4.4 CMS Integration |
| **Expected Output** | Social posting utility, webhook handler |

**Prompt:**
```
Set up automatic social media posting when new blog posts are published on the Kaporta Group website.

TASKS:
1. Create src/lib/social-posting.ts:
   - postToFacebook(title, excerpt, url, imageUrl) — Facebook Graph API
   - postToLinkedIn(title, excerpt, url, imageUrl) — LinkedIn API
   - shareToWhatsApp(title, url) — Generate shareable WhatsApp link

2. Create POST /api/webhooks/new-post/route.ts:
   - Triggered when new blog post is published (via CMS webhook or manual trigger)
   - Auto-post to configured social platforms
   - Include featured image, title, excerpt, and link
   - Rate limit: max 1 post per platform per hour

3. Create /admin/social page:
   - Connect/disconnect social accounts
   - Preview post before publishing
   - Manual trigger to share existing posts
   - Posting history log

4. Environment variables:
   - FACEBOOK_PAGE_ACCESS_TOKEN
   - LINKEDIN_ACCESS_TOKEN
   - Social platform app IDs and secrets

5. Fallback: If social tokens not configured, skip auto-posting silently

Test with: npm run build (zero errors)
```

---

## Environment Setup Guide

### Required Environment Variables

```bash
# ============================================
# Kaporta Group — Environment Variables
# ============================================
# Copy this to .env.local for local development
# Add all variables to Vercel dashboard for production

# --- Email Service (Resend) ---
RESEND_API_KEY=re_xxxxx                    # Required for form email notifications
ADMIN_EMAIL=kaportaq1@gmail.com            # Admin notification recipient

# --- Database ---
DATABASE_URL=postgresql://...              # Vercel Postgres or Neon connection string
# OR
POSTGRES_URL=postgresql://...              # Vercel Postgres pooled connection

# --- File Storage ---
BLOB_READ_WRITE_TOKEN=vercel_blob_...      # Vercel Blob for file uploads

# --- Payments (Stripe) ---
STRIPE_SECRET_KEY=sk_live_...              # Stripe secret key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_... # Stripe publishable key (client-side)
STRIPE_WEBHOOK_SECRET=whsec_...            # Stripe webhook signature secret

# --- CAPTCHA ---
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=...          # hCaptcha site key (client-side)
HCAPTCHA_SECRET_KEY=...                    # hCaptcha secret key (server-side)

# --- CMS (Sanity) ---
NEXT_PUBLIC_SANITY_PROJECT_ID=...          # Sanity project ID
NEXT_PUBLIC_SANITY_DATASET=production      # Sanity dataset name
SANITY_API_TOKEN=...                       # Sanity API token (server-side)

# --- Authentication (Admin) ---
NEXTAUTH_URL=https://kaporta.vercel.app    # Site URL for NextAuth
NEXTAUTH_SECRET=...                        # Random 32+ char string for JWT encryption
ADMIN_PASSWORD_HASH=...                    # bcrypt hash of admin password

# --- Analytics (Optional) ---
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXX      # Google Analytics 4 (optional)
SENTRY_DSN=https://...@sentry.io/...       # Sentry error tracking (optional)

# --- Social Media (Optional) ---
FACEBOOK_PAGE_ACCESS_TOKEN=...             # Facebook Graph API
LINKEDIN_ACCESS_TOKEN=...                  # LinkedIn API
```

### Vercel Configuration Steps

1. **Connect GitHub repo** — Already done (auto-deploys on push to `main`)
2. **Add environment variables** — Vercel Dashboard > Settings > Environment Variables
3. **Configure custom domain** — Vercel Dashboard > Settings > Domains
   - Add `kaportagroup.com` or `kaporta.sl`
   - Configure DNS records as instructed by Vercel
4. **Enable Vercel Analytics** — Vercel Dashboard > Analytics > Enable
5. **Configure Vercel Postgres** (if using):
   - Vercel Dashboard > Storage > Create Database > Postgres
   - Connection string auto-added to environment variables
6. **Configure Vercel Blob** (if using):
   - Vercel Dashboard > Storage > Create Store > Blob
   - Token auto-added to environment variables

### Local Development Setup

```bash
# 1. Clone the repository
git clone <repo-url> kaporta-group
cd kaporta-group

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (minimum: RESEND_API_KEY)

# 4. Start development server
npm run dev
# Open http://localhost:3000

# 5. Run linting
npm run lint

# 6. Run production build
npm run build

# 7. Run tests (after Phase 2.3)
npm test
npm run test:e2e
```

---

## Feature Comparison: CybitSolutions vs Kaporta

| Feature | CybitSolutions | Kaporta Group | Parity |
|---------|---------------|---------------|--------|
| **Framework** | Next.js 16 + React 19 | Next.js 16 + React 19 | Equal |
| **Styling** | Tailwind CSS v4 + tokens | Tailwind CSS v4 + tokens | Equal |
| **TypeScript** | Yes | Yes | Equal |
| **Pages** | 42 pages | 18 pages | CS has more (GovCon scope) |
| **Reusable Components** | 26 components | 9 UI + 4 animation + 3 layout = 16 | CS ahead |
| **Navigation** | Mega-menu with 6 sections | Mega-menu with 6 sections | Equal |
| **Backend API Routes** | Missing | 4 endpoints (contact, quote, newsletter, career) | Kaporta ahead |
| **Email Integration** | Missing | Resend (configured) | Kaporta ahead |
| **Form Validation** | Missing | Zod schemas + react-hook-form | Kaporta ahead |
| **Rate Limiting** | Missing | In-memory rate limiter | Kaporta ahead |
| **Database** | Missing | Missing | Equal (both need) |
| **Global Search** | Cmd+K search modal | Cmd+K search modal | Equal |
| **Chat Widget** | FAQ-based chat | FAQ-based chat + WhatsApp escalation | Kaporta ahead |
| **Sitemap** | sitemap.ts | sitemap.ts | Equal |
| **Robots.txt** | robots.ts | robots.ts | Equal |
| **PWA Manifest** | manifest.ts | manifest.ts | Equal |
| **Error Pages** | Missing | error.tsx + not-found.tsx + loading skeletons | Kaporta ahead |
| **Security Headers** | Missing | CSP, HSTS, X-Frame, etc. | Kaporta ahead |
| **Analytics** | Missing | Vercel Analytics + Speed Insights | Kaporta ahead |
| **Framer Motion** | Missing | FadeIn, StaggerChildren, CountUp, AnimatedSection | Kaporta ahead |
| **WhatsApp Button** | N/A | Floating WhatsApp button | Kaporta only |
| **Breadcrumbs** | Missing | Breadcrumbs with JSON-LD | Kaporta ahead |
| **Google Maps** | Missing | Google Maps embed component | Kaporta ahead |
| **Newsletter Signup** | Missing | Newsletter form component | Kaporta ahead |
| **Dark Mode** | Missing | Missing | Equal (both need) |
| **i18n** | Missing | Missing | Equal (both need) |
| **Testing** | No tests | No tests | Equal (both need) |
| **CI/CD** | No GitHub Actions | No GitHub Actions | Equal (both need) |
| **CMS** | Static data files | Static data files | Equal |
| **Payment** | Placeholder page | Placeholder page | Equal |
| **Admin Dashboard** | Missing | Missing | Equal (both need) |
| **Image Optimization** | WebP/AVIF configured | Basic only | CS ahead |

### Parity Summary

- **Kaporta is ahead in:** Backend APIs, email integration, form validation, rate limiting, error handling, security headers, analytics, animations, WhatsApp, breadcrumbs, Google Maps, newsletter
- **CybitSolutions is ahead in:** Total page count (42 vs 18), reusable components (26 vs 16), image optimization
- **Both need:** Database, testing, CI/CD, dark mode, i18n, CMS, payment gateway, admin dashboard

### Recommended Next Steps for CybitSolutions Parity

To bring CybitSolutions up to Kaporta's level, run these prompts against the CS codebase:
1. Backend API routes (contact, partner, newsletter)
2. Error handling (error.tsx, not-found.tsx, loading skeletons)
3. Security headers in next.config.ts
4. Vercel Analytics + Speed Insights
5. Framer Motion animations
6. Form validation with Zod + react-hook-form
7. Breadcrumb navigation

---

> **End of Enhancement Playbook**
> This document should be updated as features are implemented. Move completed items from their phase section to the Changelog at the top.
