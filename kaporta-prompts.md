# Kaporta Group Website — Master Prompt Reference

This document contains all prompts used, in progress, and planned for building the Kaporta Group website. Use these prompts with Claude Code to build, modify, or extend any part of the site.

---

## Table of Contents
1. [Project Setup Prompts](#1-project-setup)
2. [Layout & Navigation Prompts](#2-layout--navigation)
3. [Homepage Prompts](#3-homepage)
4. [About Us Prompts](#4-about-us)
5. [Services Prompts](#5-services)
6. [Projects / Portfolio Prompts](#6-projects--portfolio)
7. [Careers Prompts](#7-careers)
8. [Testimonials Prompts](#8-testimonials)
9. [Blog / Insights Prompts](#9-blog--insights)
10. [Request a Quote Prompts](#10-request-a-quote)
11. [Contact Us Prompts](#11-contact-us)
12. [Payment Page Prompts](#12-payment-page)
13. [Legal Pages Prompts](#13-legal-pages)
14. [SEO & Performance Prompts](#14-seo--performance)
15. [Future Enhancement Prompts](#15-future-enhancements)
16. [Deployment Prompts](#16-deployment)

---

## 1. Project Setup

### Prompt Used: Initialize Project
```
Initialize a Next.js 14+ project with App Router, TypeScript, and Tailwind CSS v4 for a professional construction & logistics website called Kaporta Group (Kaporta Investment Sierra Leone Limited). Set up:
- Custom Tailwind theme with brand colors: Deep Blue #002F5D, Construction Yellow #F5A623, Forest Green #27AE60, Charcoal #1A1A2E, Concrete Gray #6E6E6E, Soft White #FAFAFA
- Google Fonts: Poppins (headings), Inter (body), JetBrains Mono (code)
- WCAG 2.1 AA accessibility defaults (focus states, skip links, semantic landmarks)
- Utility function cn() using clsx + tailwind-merge
- lucide-react for icons
```

### Prompt Used: Design Tokens
```
Configure Tailwind CSS v4 with @theme inline for Kaporta Group brand design system:
- Colors: deep-blue, construction-yellow, forest-green, charcoal, concrete-gray, soft-white with light/dark variants
- Font families: heading (Poppins), body (Inter), mono (JetBrains Mono)
- Custom animations: fade-in, slide-up, slide-in-right, count-up
- Card hover effect class, hero gradient class, section divider
- Ensure 4.5:1 color contrast ratio for accessibility
```

---

## 2. Layout & Navigation

### Prompt Used: Header
```
Build a professional construction company header for Kaporta Group with:
- Top utility bar with phone (+232 78341012), email (kaportaq1@gmail.com), business hours
- Deep blue utility bar background
- Main navigation with 8 items: Home, About Us, Services, Projects, Careers, Testimonials, Blog, Contact
- Dropdown menus for About Us (History, Leadership, Certifications), Services (6 domains), Careers (Openings, Internships)
- "Request a Quote" CTA button in construction yellow
- Logo: Yellow "K" badge + "Kaporta Group" text
- Sticky header
- Mobile hamburger menu with accordion navigation
Use Next.js Link, lucide-react icons, and Tailwind CSS.
```

### Prompt Used: Footer
```
Build a full enterprise footer for Kaporta Group:
- Multi-column layout: Company info + logo, Company links, Services links, Resources links
- Contact information: phone, email, address (Benguema Firing Range, Waterloo, Freetown), hours
- Social media icons: WhatsApp, Facebook, LinkedIn
- Bottom bar: Copyright, Privacy Policy, Terms of Use, Accessibility
- Dark charcoal background (#1A1A2E) with proper typography hierarchy
- Construction yellow accent color for section headings
```

### Future Prompt: Search Functionality
```
Add a global search feature to the Kaporta Group header:
- Search icon in the nav that opens a modal search overlay
- Client-side search across all page titles, services, and projects
- Display results grouped by category (Services, Projects, Blog)
- Keyboard shortcut Cmd+K / Ctrl+K to open search
```

---

## 3. Homepage

### Prompt Used: Hero Section
```
Build the Kaporta Group homepage hero section with:
- Full-width hero gradient background (deep blue to charcoal)
- Badge: "Trusted Since 2008 • Sierra Leone's Leading Constructor"
- Headline: "Building Sierra Leone's Future Through Strength & Innovation"
- Subheading: "Since 2008, Kaporta Investment Sierra Leone Limited has been a trusted partner in construction, logistics, and infrastructure development across West Africa."
- 2 CTAs: Request a Quote (construction yellow), View Our Projects (white outline)
- Stats bar below: 15+ Years, 100+ Projects, 50+ Clients, 500+ Jobs Created
```

### Prompt Used: Homepage Sections
```
Build these homepage sections for Kaporta Group:
1. Services Preview: 6 service cards (Quarrying, Concrete, Haulage, Civil Engineering, Power, Equipment) linking to individual pages
2. Why Choose Us: 3-column layout — Fully Certified Team, On-Time Delivery, 100% Local Commitment
3. Featured Projects: 3 project tiles (Freetown Highway, Waterloo Complex, Bo Bridge)
4. Testimonials Preview: 2 client testimonials on deep blue background with star ratings
5. CTA Banner: "Ready to Start Your Next Project?" with construction yellow background
```

### Future Prompt: Hero Video Background
```
Replace the homepage hero gradient with a looping construction site video:
- Stock video of construction workers, equipment, or quarry operations in Africa
- Dark overlay for text readability
- Fallback to gradient for slow connections
- Pause on mobile for performance
- Play/pause toggle for accessibility
```

### Future Prompt: Animated Stats Counter
```
Add animated number counters to the homepage stats bar:
- Count up from 0 to final value when section enters viewport
- Use Intersection Observer for scroll detection
- Smooth easing animation over 2 seconds
- Numbers: 15+ Years, 100+ Projects, 50+ Clients, 500+ Jobs
```

---

## 4. About Us

### Prompt Used: Company History
```
Build the About Us / Company History page for Kaporta Group:
- Hero: "About Kaporta Group" with subtitle
- Company overview with founding story (established January 2008)
- Mission: "To be the leading provider of comprehensive construction solutions in Sierra Leone"
- Vision: "To establish Kaporta Investment Sierra Leone Limited as a trusted name in construction, civil engineering, mining and manufacturing"
- Timeline from 2008 to present (6 milestones)
- Core Values: Quality, Integrity, Community, Innovation
- Quality & Safety commitment section
```

### Prompt Used: Leadership Team
```
Build the Leadership page with professional team member cards:
- Grid layout, 3 columns on desktop
- Each card: gradient photo placeholder, name, title, bio, certification badges
- 6 team members: CEO/Founder, COO, Head of Civil Engineering, Head of Logistics, Chief Engineer Power, Head of Finance
- Include professional bios mentioning Sierra Leone experience and certifications
```

### Prompt Used: Certifications & Partnerships
```
Build the Certifications & Partnerships page:
- Certifications grid: ISO 9001, Safety Compliance, Environmental Standards, Local Council Registration
- Strategic Partners list: Sierra Leone Roads Authority, Ministry of Works, UNDP, World Bank, African Development Bank, Freetown City Council
- "Become a Partner" CTA section
```

---

## 5. Services

### Prompt Used: Services Landing Page
```
Build the Services & Solutions landing page showing all 6 Kaporta Group service domains:
- Page hero: "Our Services" with subtitle about 6 specialized domains
- Grid of 6 cards, each with: icon, title, description, "Learn More" link
- Each card links to /services/[service-slug]
- CTA section: "Need a Custom Solution?" with Request a Quote button
- Use service data from src/data/services.ts
```

### Prompt Used: Individual Service Page (Dynamic Template)
```
Build a dynamic service detail page for Kaporta Group at /services/[slug]:
- Hero: Service icon + title + description
- Overview section with detailed content from data
- "What We Offer" features grid with check icons
- Key Benefits list
- Target Customers badges
- CTA: Service-specific call-to-action + Request a Quote + All Services buttons
- Generate static params for all 6 services
Apply to: quarrying-mining, concrete-production, haulage-logistics, civil-engineering, power-energy, equipment-rental
```

### Future Prompt: Service Comparison Matrix
```
Add an interactive comparison table to the Services landing page:
- Compare all 6 services side-by-side
- Columns: Service, Key Features, Target Customers, CTA
- Filter by customer type (Government, Commercial, NGO, Mining)
- Responsive table with horizontal scroll on mobile
```

---

## 6. Projects / Portfolio

### Prompt Used: Projects Page
```
Build the Projects / Portfolio page for Kaporta Group:
- Hero section with title
- Category filter buttons: All Projects, Infrastructure, Commercial, Government
- Project cards in 3-column grid, each with:
  - Gradient image placeholder
  - Category badge
  - Project title, location, timeline
  - Description, scope of work list
  - Outcome statement
  - Client testimonial (if available)
- 6 placeholder projects across Sierra Leone
```

### Future Prompt: Individual Project Pages
```
Convert each project into its own dedicated page:
- Full-page layout with hero image
- Before/After image comparison slider
- Detailed scope, challenges, solutions, outcomes
- Technology and materials used
- Related projects carousel
- Download case study as PDF
- Client testimonial prominently displayed
```

### Future Prompt: Project Map View
```
Add an interactive map view to the Projects page:
- Sierra Leone map with project location markers
- Click marker to see project details popup
- Toggle between map view and grid view
- Color-coded markers by project category
```

---

## 7. Careers

### Prompt Used: Current Openings
```
Build the Careers page for Kaporta Group:
- Hero: "Careers at Kaporta Group" with subtitle
- "Why Work With Us" section: Growth Opportunities, Meaningful Work, Learning Culture
- Current Openings list with: title, department, location, type badge, description, Apply button
- Placeholder roles: Civil Engineer, Heavy Equipment Operator, Logistics Coordinator, Electrical Power Engineer
- Equal Opportunity Employer statement
```

### Prompt Used: Internship Programs
```
Build the Internship & Training Programs page:
- Hero with title
- Programs: Engineering Internship, Technical Training, Management Development, Community Youth Program
- Each program: icon, title, description
- Apply Now CTA
```

### Future Prompt: Application Form
```
Build a dedicated job application form:
- Position selector (linked from job listing)
- Personal information fields
- Resume/CV upload
- Cover letter textarea
- Availability and salary expectations
- Equal opportunity demographic survey (optional)
- Confirmation email integration
```

---

## 8. Testimonials

### Prompt Used: Testimonials Page
```
Build the Testimonials page for Kaporta Group:
- Hero: "Testimonials" with subtitle "Trusted by Clients Across West Africa"
- Grid of 6 testimonial cards with:
  - Quote icon
  - Star rating
  - Client quote (italic)
  - Client name, role, organization
  - Project type badge
- "Share Your Experience" CTA section
- Data from src/data/testimonials.ts
```

### Future Prompt: Testimonial Carousel
```
Add an auto-playing testimonial carousel to the homepage:
- Smooth slide animation between testimonials
- Navigation dots and arrows
- Pause on hover
- Responsive: 1 card mobile, 2 cards tablet, 3 cards desktop
```

### Future Prompt: Video Testimonials
```
Add a video testimonials section:
- Video thumbnails with play button overlay
- Lightbox video player on click
- Client name and project type below each video
- Placeholder videos with gradient backgrounds
```

---

## 9. Blog / Insights

### Prompt Used: Blog Listing
```
Build the Blog & Insights page for Kaporta Group:
- Hero with title
- Category filter: All Posts, Industry News, Sustainability & CSR, Company Updates, Construction Tips
- Blog post cards in 3-column grid, each with:
  - Gradient image placeholder
  - Category badge
  - Title, excerpt, author, date, read time
  - "Read More" link
- Data from src/data/blog-posts.ts
```

### Prompt Used: Blog Post Detail
```
Build a dynamic blog post detail page at /blog/[slug]:
- Hero with back link, category badge, title, author, date, read time
- Article content area with placeholder text
- Back to All Posts link at bottom
- Generate static params from blog data
```

### Future Prompt: Blog System with MDX
```
Set up a full blog system using MDX:
- Create content/blog directory for .mdx files
- Frontmatter support: title, date, author, category, excerpt, image
- Dynamic [slug] page route with MDX rendering
- Category and tag filtering
- Related posts component
- Social sharing buttons
- Newsletter signup at bottom of each post
```

### Future Prompt: Newsletter Signup
```
Add a newsletter signup component:
- Email input with subscribe button
- Appears on blog pages and footer
- Mailchimp or Brevo integration
- Success/error states
- GDPR consent checkbox
```

---

## 10. Request a Quote

### Prompt Used: RFQ Form
```
Build the Request a Quote page for Kaporta Group:
- Hero with title and subtitle
- Comprehensive form with fields:
  - Full Name, Company Name, Email, Phone
  - Type of Service (dropdown: 6 services + Multiple + Other)
  - Project Description (textarea)
  - Budget Range (dropdown: Under $10K to Over $500K)
  - Project Location, Expected Timeline
  - File Upload (PDF, DOC, DWG, JPG, PNG)
- Submit button: "Submit Your Project for Review"
- Success state: "Thank you. A team member will respond within 1–2 business days."
- Form validation with required fields
```

### Future Prompt: Multi-step Quote Wizard
```
Convert the quote form into a multi-step wizard:
- Step 1: Service selection with visual cards
- Step 2: Project details (description, location, timeline)
- Step 3: Budget and specifications
- Step 4: Contact information and file uploads
- Progress bar showing current step
- Save progress to localStorage
- Review summary before submission
```

---

## 11. Contact Us

### Prompt Used: Contact Page
```
Build the Contact page for Kaporta Group:
- Hero with title
- 3-column layout: contact info sidebar + 2-column form
- Contact details: Phone (3 numbers), Email, Address (Benguema Firing Range, Waterloo, Freetown), Hours (Mon-Sat 8am-6pm)
- Social media buttons: WhatsApp, Facebook, LinkedIn
- Google Map placeholder for Benguema, Waterloo, Freetown
- Contact form: Full Name, Email, Phone, Company, Service Interest dropdown, Message
- Success state on submission
```

### Future Prompt: Google Maps Integration
```
Add interactive Google Maps embed:
- Show Kaporta Group HQ location in Benguema, Waterloo, Freetown
- Custom map marker with company logo
- Directions link
- Satellite/map view toggle
- Requires Google Maps API key configuration
```

### Future Prompt: WhatsApp Integration
```
Add floating WhatsApp chat button:
- Fixed position bottom-right
- Opens WhatsApp chat with predefined message
- Phone: +232 78341012
- Shows/hides based on business hours
- Mobile: opens WhatsApp app, Desktop: opens WhatsApp Web
```

---

## 12. Payment Page

### Prompt Used: Payment Info
```
Build the Payment page for Kaporta Group:
- Hero with title
- Bank Transfer details: Sierra Leone Commercial Bank, account info placeholder
- Invoice Payment section with reference instructions
- Payment Terms: Net 30, deposits for large projects, SLE/USD accepted
- Billing Contact section with email and phone
- Secure payment badge/shield icon
```

### Future Prompt: Online Payment Portal
```
Add online payment functionality:
- Stripe or PayStack payment integration
- Invoice number lookup
- Payment amount entry
- Card payment form with Stripe Elements
- Payment confirmation receipt
- Email notification on successful payment
```

---

## 13. Legal Pages

### Prompt Used: Legal Pages
```
Create professional legal pages for Kaporta Group:
1. Privacy Policy - Data collection, usage, security, contact
2. Terms of Use - Acceptance, website use, intellectual property, liability
3. Accessibility Statement - WCAG 2.1 AA commitment, features list, feedback
All with proper formatting, headings, and last-updated dates (March 2026).
```

### Future Prompt: Cookie Consent Banner
```
Add a cookie consent banner:
- Bottom banner with accept/decline buttons
- Cookie preference management
- Categories: Essential, Analytics, Marketing
- Persist preference in localStorage
- GDPR/privacy compliant
```

---

## 14. SEO & Performance

### Prompt Used: SEO Setup
```
Implement comprehensive SEO for Kaporta Group:
- Root layout metadata with title template: "%s | Kaporta Group"
- Default title: "Kaporta Group | Construction & Logistics Experts Since 2008"
- Meta description for every page
- OpenGraph tags for social sharing
- Keywords targeting: Sierra Leone construction, logistics, quarry, civil engineering
- Structured data ready (LocalBusiness, Service schemas)
```

### Future Prompt: Structured Data
```
Add JSON-LD structured data to Kaporta Group:
- LocalBusiness schema on homepage (name, address, phone, hours, geo coordinates)
- Service schema for each of the 6 service pages
- Project schema for case studies
- BreadcrumbList for navigation
- Organization schema with logo and social links
```

### Future Prompt: Sitemap & Robots
```
Generate dynamic sitemap and robots.txt:
- sitemap.xml listing all pages with priorities
- robots.txt allowing all crawlers
- Include blog posts, services, projects dynamically
- Set appropriate changefreq and priority values
- Add sitemap reference in robots.txt
```

### Future Prompt: Performance Optimization
```
Optimize Kaporta Group website performance:
- Next.js Image component with blur placeholders for all images
- Lazy loading for below-fold sections
- Font optimization with next/font (already using)
- Bundle analysis and code splitting
- Core Web Vitals optimization (LCP, FID, CLS)
- Preconnect to Google Fonts origin
```

---

## 15. Future Enhancements

### Animations & Micro-interactions
```
Add smooth animations to the Kaporta Group website:
- Fade-in on scroll for section headings and cards using Intersection Observer
- Stagger animation for grid items (services, projects, team)
- Counter animation for stat numbers on homepage
- Smooth page transitions
- Card hover lift and shadow animations
- Mobile nav slide-in animation
Keep animations subtle and professional — construction industry feel.
```

### Dark Mode Support
```
Add dark mode toggle to Kaporta Group:
- System preference detection
- Toggle button in header utility bar
- Adjusted color scheme: charcoal bg, lighter text, adjusted card backgrounds
- Construction yellow and forest green accents remain consistent
- Persist preference in localStorage
```

### Multi-language Support (i18n)
```
Add internationalization to Kaporta Group:
- Languages: English, Krio, French
- next-intl or next-i18next setup
- Language switcher in header utility bar
- Translated navigation and key content
- RTL not needed (no Arabic)
```

### Analytics & Tracking
```
Set up analytics for Kaporta Group:
- Google Analytics 4 (GA4) with first-party data
- Cookie consent banner integration
- Event tracking: CTA clicks, form submissions, service page views
- Conversion tracking for quote requests and contact form
- MonsterInsights or Google Tag Manager setup
```

### CMS Integration
```
Integrate a headless CMS (Sanity or Contentful) for:
- Blog posts and news articles
- Project case studies with images
- Job listings management
- Team member profiles
- Testimonials management
Set up content models, preview mode, and ISR (Incremental Static Regeneration).
```

### Image Gallery
```
Add a professional image gallery:
- Lightbox image viewer for project photos
- Before/After comparison slider
- Category filtering (Construction, Quarry, Logistics, Events)
- Lazy loading with blur placeholders
- Full-screen mode
- Touch/swipe support for mobile
```

### Client Portal (Phase 2)
```
Build a client portal for project tracking:
- Login/authentication system
- Project dashboard with status updates
- Document sharing (invoices, reports, drawings)
- Progress photos timeline
- Communication thread with project team
- Payment history and invoice management
```

---

## 16. Deployment

### Vercel Deployment
```
Set up Vercel deployment for Kaporta Group:
- Connect to GitHub repository
- Configure environment variables
- Set up custom domain (kaportagroup.com or kaporta.sl)
- Enable analytics
- Configure redirects and headers
- Set up preview deployments for PRs
```

### Alternative: Hostinger Deployment
```
Set up deployment on Hostinger (as mentioned in design docs):
- Export as static site using next export
- Configure Hostinger hosting plan
- Set up SSL certificate
- Configure DNS records
- Set up automatic deployments from GitHub
- Daily backups
```

---

## Quick Reference: Common Modifications

### Add a New Service
```
Add a new service "[Service Name]" to Kaporta Group:
1. Add data to src/data/services.ts with slug, title, icon, description, overview, benefits, customers, CTA, features
2. The dynamic route at src/app/services/[slug]/page.tsx will auto-render it
3. Add to navigation in src/data/navigation.ts
4. Add to footer links in src/data/navigation.ts footerLinks.services
```

### Add a New Project
```
Add a new project "[Project Name]" to the portfolio:
1. Add to src/data/projects.ts with: slug, title, location, category, client, timeline, description, scope, outcome, testimonial
2. The projects page will auto-render it with filtering
```

### Add a New Team Member
```
Add a new team member to the Leadership page:
1. Add to src/data/team.ts with: name, title, bio, certifications
2. Add photo to public/images/team/[name].jpg
3. The leadership page will auto-render from the data file
```

### Add a New Blog Post
```
Add a new blog post:
1. Add to src/data/blog-posts.ts with: slug, title, excerpt, category, author, date, readTime
2. The blog listing and detail pages will auto-render
3. For full content, integrate MDX or CMS (future enhancement)
```

### Add a New Job Listing
```
Add a new job listing:
1. Add to src/data/jobs.ts with: id, title, department, location, type, description, requirements
2. The careers page will auto-render the listing
```

### Update Contact Information
```
Update Kaporta Group contact details:
1. Header: src/components/layout/Header.tsx (utility bar)
2. Footer: src/components/layout/Footer.tsx (contact section)
3. Contact page: src/app/contact/page.tsx (sidebar)
4. CLAUDE.md in .claude folder (reference)
```

---

## 17. Post-Build Updates & Change Log

All prompts executed after the initial website build are tracked here chronologically.

### Update #1: Logo Integration (March 2026)
**Status:** Completed
```
Replace the placeholder "K" logo with the actual Kaporta Group logo on the website:
- Save the Kaporta company logo (excavator + mountains + "KAPORTA INVESTMENTS LLTD." text) as SVG at public/images/kaporta-logo.svg
- Update Header component (src/components/layout/Header.tsx):
  - Import Next.js Image component
  - Replace the yellow "K" box + text with <Image> tag referencing the logo
  - Set priority loading, responsive sizing (h-12 mobile, h-14 desktop)
- Update Footer component (src/components/layout/Footer.tsx):
  - Import Next.js Image component
  - Replace the yellow "K" box + text with <Image> tag
  - Apply brightness-0 invert CSS filter for white logo on dark background
- Ensure alt text: "Kaporta Investment Sierra Leone Limited"
- Verify build compiles successfully
```

### Update #2: Git Push All Updates (March 2026)
**Status:** Completed
```
Add all website files to git and push to GitHub:
- Stage all new and modified files
- Commit with descriptive message covering the full website build
- Push to origin/main at https://github.com/cybit360/Kaporta.git
```

### Update #3: Enlarge Logo & Push Suggested Prompts (March 2026)
**Status:** Completed
```
Make the Kaporta logo larger in both Header and Footer:
- Header: Increase nav height to h-20/lg:h-24, logo to h-16/lg:h-20 (width 220, height 80)
- Footer: Increase logo to h-20 (width 240, height 90)
- Push updated kaporta-prompts.md with all Section 18 suggested prompts to GitHub
- Note: Vercel is already integrated with GitHub — auto-deploys on push to main
```

---

## 18. Suggested Next Prompts

These are recommended prompts to run next to enhance the website. Since Vercel is already integrated with GitHub, every push to `main` auto-deploys.

### 18.1 Replace Placeholder Images
**Priority:** High
```
Replace all gradient placeholder images across the Kaporta Group website with real photos:
- Homepage hero: Construction site or quarry photo
- Service cards: Relevant photos for each of 6 services
- Project cards: Actual project completion photos
- Team member photos: Professional headshots
- Blog post images: Relevant industry photos
Store images in public/images/ with subfolders: /hero, /services, /projects, /team, /blog
Use Next.js Image component with blur placeholder data URLs for loading states.
```

### 18.2 Add Google Maps Embed
**Priority:** High
```
Replace the map placeholder on the Contact page with a real Google Maps embed:
- Embed iframe showing Benguema Firing Range, Waterloo, Freetown, Sierra Leone
- Responsive sizing
- Add a "Get Directions" link below the map
- Consider using @vis.gl/react-google-maps for interactive features
```

### 18.3 Add Floating WhatsApp Button
**Priority:** High
```
Add a floating WhatsApp chat button visible on all pages:
- Fixed position bottom-right corner
- Green WhatsApp icon with pulse animation
- Opens https://wa.me/23278341012 with predefined message
- Show tooltip on hover: "Chat with us on WhatsApp"
- Hide on scroll down, show on scroll up (optional)
- Add to root layout so it appears on every page
```

### 18.4 Connect Forms to Backend
**Priority:** Medium
```
Set up form handling for Kaporta Group website forms:
- Contact form → send to kaportaq1@gmail.com via Resend or Nodemailer
- Quote request form → send to kaportaq1@gmail.com with file attachments
- Create API routes at /api/contact and /api/quote
- Add form validation with Zod
- Rate limiting to prevent spam
- Add honeypot field for bot detection
- Success/error toast notifications
```

### 18.5 Vercel Configuration (Already Auto-Deploying)
**Priority:** Low — Vercel is already connected to GitHub and auto-deploys on push to main.
```
Fine-tune Vercel deployment settings for Kaporta Group:
- Configure custom domain (kaportagroup.com or kaporta.sl)
- Set up environment variables for API keys (Google Maps, email service)
- Enable Vercel Analytics and Web Vitals monitoring
- Configure redirects and security headers
- Review preview deployments for feature branches
- Test all pages and forms on production URL
```

### 18.6 Scroll Animations & Micro-interactions
**Priority:** Medium
```
Add smooth scroll-triggered animations to the Kaporta Group website:
- Fade-in on scroll for section headings and cards using Intersection Observer
- Stagger animation for grid items (services, projects, team cards)
- Counter animation for homepage stat numbers (15+ Years, 100+ Projects, etc.)
- Card hover lift and shadow depth animations
- Mobile nav slide-in animation
- Keep animations subtle and professional — construction industry feel
```

### 18.7 Structured Data & Advanced SEO
**Priority:** Medium
```
Add JSON-LD structured data to Kaporta Group for better search visibility:
- LocalBusiness schema on homepage (name, address, phone, hours, geo coordinates for Benguema, Waterloo)
- Service schema for each of the 6 service pages
- Project/CreativeWork schema for case studies
- BreadcrumbList for navigation hierarchy
- Organization schema with logo and social profile links
- Generate dynamic sitemap.xml and robots.txt
```

### 18.8 Dark Mode Support
**Priority:** Low
```
Add dark mode toggle to Kaporta Group:
- System preference detection with manual override
- Toggle button in header utility bar
- Adjusted color scheme: charcoal bg, lighter text, adjusted card backgrounds
- Construction yellow and forest green accents remain consistent
- Persist preference in localStorage
- Smooth transition between modes
```

### 18.9 Multi-language Support (English / Krio / French)
**Priority:** Low
```
Add internationalization to Kaporta Group:
- Languages: English (default), Krio, French
- next-intl setup with App Router
- Language switcher dropdown in header utility bar
- Translated navigation, service names, CTAs, and key page content
- Language detection from browser preferences
- SEO: hreflang tags for each language variant
```

### 18.10 Client Portal (Phase 2)
**Priority:** Future
```
Build a client portal for project tracking:
- Login/authentication system (NextAuth.js)
- Project dashboard with status updates and milestones
- Document sharing (invoices, reports, drawings)
- Progress photos timeline
- Communication thread with project team
- Payment history and invoice management
- Role-based access (admin, client, project manager)
```

---

## 18B. Full Site Audit — Missing Backend, Tools & Enhancements

> Based on comprehensive audit of both **CybitSolutions** (https://cs-website-six.vercel.app/) and **Kaporta Group** (https://kaporta.vercel.app/) codebases and live deployments — March 2026.

### Current Status Summary

| Category | CybitSolutions | Kaporta Group |
|----------|---------------|---------------|
| Frontend Framework | ✅ Next.js 16 + React 19 | ✅ Next.js 16 + React 19 |
| Styling & Theme | ✅ Tailwind CSS v4 + tokens | ✅ Tailwind CSS v4 + tokens |
| Components | ✅ 26 reusable components | ⚠️ 2 shared (Header/Footer), rest inline |
| Pages | ✅ 42 pages | ✅ 18 pages |
| SEO (sitemap/robots) | ✅ sitemap.ts + robots.ts | ❌ Missing |
| JSON-LD Schema | ❌ Not implemented | ❌ Not implemented |
| Forms | ⚠️ UI only (no backend) | ⚠️ UI only (no backend) |
| Email Integration | ❌ Missing | ❌ Missing |
| Backend / API Routes | ❌ Missing | ❌ Missing |
| Database | ❌ Missing | ❌ Missing |
| Authentication | ❌ Missing | ❌ Missing |
| Analytics | ❌ Missing | ❌ Missing |
| Error Handling | ❌ No error boundaries | ❌ No error boundaries |
| Testing | ❌ No tests | ❌ No tests |
| CI/CD Pipelines | ❌ No GitHub Actions | ❌ No GitHub Actions |
| Animations | ⚠️ CSS only | ⚠️ CSS only |
| Chat Widget | ✅ FAQ-based (CS only) | ❌ Missing |
| Global Search | ✅ Cmd+K search (CS only) | ❌ Missing |
| Dark Mode | ❌ Missing | ❌ Missing |
| PWA | ⚠️ manifest.ts exists (CS) | ❌ Missing |
| i18n | ❌ Missing | ❌ Missing |
| Payment Integration | ❌ Placeholder page | ❌ Placeholder page |
| CMS | ❌ Static data files | ❌ Static data files |
| Security Headers | ❌ Not configured | ❌ Not configured |
| Image Optimization | ⚠️ WebP/AVIF configured | ⚠️ Basic only |

---

### 18.11 Backend API Routes — Form Processing
**Priority:** Critical | **Applies to:** Both Sites
```
Create Next.js API routes to make all forms functional:

FOR KAPORTA GROUP:
- POST /api/contact — Handle contact form submissions
- POST /api/quote — Handle Request a Quote with file upload (multipart/form-data)
- POST /api/newsletter — Handle newsletter signups
- POST /api/career-apply — Handle job applications with resume upload

FOR CYBITSOLUTIONS:
- POST /api/contact — Handle contact/RFP form submissions
- POST /api/partner — Handle Partner With Us inquiries
- POST /api/newsletter — Handle newsletter signups

BOTH SITES:
- Input validation with Zod schema validation
- Rate limiting (max 5 submissions per IP per 15 minutes)
- CSRF protection
- Honeypot spam field (hidden field to catch bots)
- Server-side sanitization (prevent XSS)
- Success/error JSON responses
- Store submissions in database (see 18.12)
```

### 18.12 Database Integration
**Priority:** Critical | **Applies to:** Both Sites
```
Add database for form submissions and dynamic content:

Option A — Vercel Postgres (Recommended for Vercel hosting):
- npm install @vercel/postgres
- Tables: contact_submissions, quote_requests, newsletter_subscribers, job_applications
- Timestamps, status tracking (new/read/replied), IP logging

Option B — Supabase (Free tier, more features):
- npm install @supabase/supabase-js
- PostgreSQL with built-in auth, storage, realtime
- Row Level Security for admin access
- File storage for uploaded documents (quotes, resumes)

Option C — MongoDB Atlas (Free tier):
- npm install mongoose
- Flexible schema for varied form data
- Good for document-heavy storage

Schema for Kaporta quote_requests:
  - id, name, email, phone, company, service_type, project_description,
    budget_range, timeline, file_attachments[], status, created_at, updated_at

Schema for contact_submissions:
  - id, name, email, phone, organization, service_interest, message,
    source_page, status, created_at
```

### 18.13 Email Service Integration
**Priority:** Critical | **Applies to:** Both Sites
```
Integrate email service for form notifications and confirmations:

Option A — Resend (Recommended, free 100 emails/day):
- npm install resend
- Transactional emails on form submission
- HTML email templates with brand styling

Option B — SendGrid (free 100/day):
- npm install @sendgrid/mail

BOTH SITES — Implement:
1. Admin notification emails when forms are submitted
2. Auto-reply confirmation emails to users
3. Branded HTML email templates matching each site's design
4. Email for Kaporta: kaportaq1@gmail.com
5. Email for CybitSolutions: info@cybitsolutions.net
6. Quote request emails with attached files
7. Weekly digest email of new submissions (optional)

Environment variables needed:
  RESEND_API_KEY=re_xxxxx
  ADMIN_EMAIL=kaportaq1@gmail.com (Kaporta)
  ADMIN_EMAIL=info@cybitsolutions.net (CybitSolutions)
```

### 18.14 Analytics & Performance Monitoring
**Priority:** High | **Applies to:** Both Sites
```
Add analytics and monitoring to both websites:

1. Vercel Analytics (built-in, easiest):
   - npm install @vercel/analytics @vercel/speed-insights
   - Add <Analytics /> and <SpeedInsights /> to layout.tsx
   - Core Web Vitals tracking (LCP, FID, CLS)
   - Page view tracking, visitor counts, top pages

2. Google Analytics 4 (GA4) — optional, more detailed:
   - Create GA4 property for each site
   - Add gtag.js via next/script
   - Event tracking: form submissions, CTA clicks, service page views
   - Conversion goals: quote requests, contact form fills

3. Microsoft Clarity (free heatmaps):
   - Session recordings, heatmaps, click maps
   - User behavior insights
   - Zero performance impact

4. Error Monitoring — Sentry:
   - npm install @sentry/nextjs
   - Automatic error capture and stack traces
   - Performance tracing
   - Alert notifications on new errors
```

### 18.15 Error Handling & Loading States
**Priority:** High | **Applies to:** Both Sites
```
Add proper error handling and loading UI to both sites:

1. Error Boundaries:
   - src/app/error.tsx — Global error page with retry button
   - src/app/not-found.tsx — Custom 404 page (branded, with navigation back)
   - src/app/services/[slug]/error.tsx — Service page error handler
   - src/app/blog/[slug]/error.tsx — Blog post error handler

2. Loading States:
   - src/app/loading.tsx — Global loading skeleton
   - src/app/services/loading.tsx — Service grid skeleton
   - src/app/projects/loading.tsx — Project cards skeleton
   - src/app/blog/loading.tsx — Blog list skeleton
   - Skeleton components matching page layouts

3. Suspense Boundaries:
   - Wrap dynamic content in <Suspense> with skeleton fallbacks
   - Streaming SSR for data-heavy pages
```

### 18.16 Testing Framework
**Priority:** High | **Applies to:** Both Sites
```
Set up comprehensive testing for both websites:

1. Unit Testing — Vitest + React Testing Library:
   - npm install -D vitest @testing-library/react @testing-library/jest-dom
   - Test all form components (validation, submission, error states)
   - Test navigation data structure
   - Test utility functions (cn(), formatDate, etc.)
   - Test search functionality (CybitSolutions)

2. E2E Testing — Playwright:
   - npm install -D @playwright/test
   - Test critical user flows:
     a) Homepage → Service page → Contact form submission
     b) Navigation dropdown functionality
     c) Mobile menu open/close
     d) Quote form with file upload
     e) Blog category filtering
     f) Project portfolio filtering
   - Cross-browser testing (Chrome, Firefox, Safari)
   - Mobile viewport testing

3. Accessibility Testing:
   - npm install -D @axe-core/playwright
   - Automated WCAG 2.1 AA compliance checks on all pages
   - Tab order verification
   - Screen reader simulation tests

4. CI Integration:
   - Run tests on every pull request via GitHub Actions
   - Block merge if tests fail
   - Generate coverage reports
```

### 18.17 Component Library Extraction
**Priority:** High | **Applies to:** Kaporta (already done for CS)
```
Extract reusable components from Kaporta inline page code:

Currently most Kaporta content is inline in page.tsx files.
Extract into reusable components:

1. UI Components (src/components/ui/):
   - Button.tsx — Primary (yellow), secondary (green), outline, ghost variants
   - Card.tsx — Service card, project card, testimonial card, team card
   - Badge.tsx — Status badges, category tags
   - Input.tsx, Textarea.tsx, Select.tsx — Styled form inputs
   - SectionHeading.tsx — Consistent heading with optional subtitle
   - Skeleton.tsx — Loading skeleton shapes

2. Section Components (src/components/sections/):
   - HeroSection.tsx — Reusable hero with title, subtitle, CTA
   - StatsBar.tsx — Animated counter stats
   - CTASection.tsx — Call-to-action banner (yellow/green variants)
   - TestimonialCarousel.tsx — Auto-rotating testimonials
   - ServiceGrid.tsx — Service cards grid layout
   - ProjectGrid.tsx — Filterable project cards

3. Form Components (src/components/forms/):
   - ContactForm.tsx — Reusable contact form
   - QuoteForm.tsx — Multi-step quote request form
   - NewsletterForm.tsx — Email signup inline form

Benefits: Consistent styling, easier testing, faster page development
```

### 18.18 Security Hardening
**Priority:** High | **Applies to:** Both Sites
```
Add security headers and protections to both websites:

1. next.config.ts — Security Headers:
   - Content-Security-Policy (CSP)
   - X-Content-Type-Options: nosniff
   - X-Frame-Options: DENY
   - X-XSS-Protection: 1; mode=block
   - Referrer-Policy: strict-origin-when-cross-origin
   - Permissions-Policy: camera=(), microphone=(), geolocation=()
   - Strict-Transport-Security (HSTS)

2. middleware.ts — Rate Limiting & Protection:
   - Rate limit API endpoints (5 req/15min per IP)
   - Bot detection on form submissions
   - Request logging for audit trail

3. Form Security:
   - reCAPTCHA v3 or hCaptcha on all forms
   - Honeypot fields (hidden inputs to catch bots)
   - Input length limits
   - File upload type/size restrictions (PDF, DOC only, max 10MB)

4. Environment Variables:
   - .env.local for secrets (API keys, DB credentials)
   - Never commit .env files
   - Vercel Environment Variables for production
```

### 18.19 CI/CD Pipeline with GitHub Actions
**Priority:** Medium | **Applies to:** Both Sites
```
Set up GitHub Actions for automated quality checks:

.github/workflows/ci.yml:
  - Trigger: On push to main and all pull requests
  - Steps:
    1. Install dependencies (npm ci)
    2. TypeScript type checking (npx tsc --noEmit)
    3. ESLint linting (npm run lint)
    4. Unit tests (npm test)
    5. Build verification (npm run build)
    6. E2E tests against preview deployment
    7. Lighthouse CI audit (performance, accessibility, SEO scores)
    8. Bundle size check (fail if > threshold)

.github/workflows/dependency-audit.yml:
  - Weekly npm audit for security vulnerabilities
  - Automated PR for dependency updates (Dependabot)
```

### 18.20 Image Optimization & CDN
**Priority:** Medium | **Applies to:** Both Sites
```
Optimize image delivery for both sites:

1. Kaporta — next.config.ts image optimization:
   - Add formats: ['image/avif', 'image/webp']
   - Configure remote image domains if using external images
   - Set deviceSizes and imageSizes for responsive optimization

2. Replace placeholder gradient backgrounds with real images:
   - Use Next.js Image component with priority for above-fold images
   - Lazy load below-fold images (default behavior)
   - Add blur placeholders (blurDataURL) for loading states
   - Optimize all images to WebP/AVIF before upload

3. Image CDN (optional):
   - Cloudinary free tier: auto-format, auto-quality, responsive
   - Or use Vercel's built-in Image Optimization (already included)

4. Favicon & App Icons:
   - Generate full favicon set (16x16, 32x32, 180x180, 512x512)
   - Apple touch icon
   - Android Chrome icons
   - Open Graph image (1200x630) for social sharing
```

### 18.21 Sitemap, Robots & Advanced SEO (Kaporta)
**Priority:** Medium | **Applies to:** Kaporta Group
```
Kaporta is missing sitemap.xml and robots.txt (CybitSolutions has them):

1. src/app/sitemap.ts:
   - Generate XML sitemap with all 18+ pages
   - Include dynamic service pages (/services/[slug])
   - Include dynamic blog pages (/blog/[slug])
   - Set priority and changeFrequency per page type
   - lastmod dates for content freshness

2. src/app/robots.ts:
   - Allow all crawlers
   - Reference sitemap URL
   - Disallow /api/ routes

3. Canonical URLs:
   - Add canonical tags to all pages
   - Prevent duplicate content issues

4. Breadcrumb navigation:
   - Visual breadcrumbs on all subpages
   - BreadcrumbList JSON-LD schema

5. Open Graph images:
   - Generate OG images per page using @vercel/og
   - Dynamic images with page title + Kaporta branding
```

### 18.22 Global Search (Kaporta)
**Priority:** Medium | **Applies to:** Kaporta Group
```
Add global search functionality to Kaporta (CybitSolutions already has this):

- Cmd/Ctrl+K keyboard shortcut to open search modal
- Search across all pages, services, projects, blog posts, jobs
- Build search index from data files (services.ts, projects.ts, blog-posts.ts, jobs.ts)
- Real-time filtering with highlighted matches
- Category-based result grouping (Services, Projects, Blog, Careers)
- Recent searches stored in localStorage
- Search button in header navigation
- Mobile-friendly full-screen search overlay
```

### 18.23 Chat Widget (Kaporta)
**Priority:** Medium | **Applies to:** Kaporta Group
```
Add intelligent chat widget to Kaporta (CybitSolutions already has this):

- Floating chat button (bottom-right corner, construction yellow)
- FAQ-based responses for common questions:
  - Services offered, pricing inquiries, operating hours
  - Location and contact information
  - Quote request process
  - Career opportunities
- Quick action buttons (Request Quote, Call Us, Email Us)
- Keyword matching for intelligent routing
- Escalation to WhatsApp for live support
- Session storage for greeting state
- Minimizable/closable with smooth animations
- Accessible: aria-labels, dialog role, focus trapping
```

### 18.24 PWA (Progressive Web App) Support
**Priority:** Medium | **Applies to:** Both Sites
```
Add PWA capabilities to both websites:

1. Web App Manifest:
   - src/app/manifest.ts (Kaporta — CS already has one)
   - App name, short name, icons, theme color, background color
   - Display: standalone for app-like experience
   - Start URL, scope

2. Service Worker (next-pwa):
   - npm install @ducanh2912/next-pwa
   - Offline fallback page
   - Cache static assets (CSS, JS, fonts)
   - Cache API responses
   - Background sync for form submissions when offline

3. App Icons:
   - Generate from logo: 72, 96, 128, 144, 152, 192, 384, 512px
   - Maskable icons for Android
   - Apple splash screens
```

### 18.25 Framer Motion Animations
**Priority:** Medium | **Applies to:** Both Sites
```
Replace basic CSS animations with Framer Motion for both sites:

- npm install framer-motion
- Scroll-triggered section reveal (fade up with stagger)
- Page transition animations (fade between routes)
- Hero text typing/reveal animation
- Counter animation for stats (15+ Years, 100+ Projects)
- Card hover 3D tilt effect
- Mobile menu slide-in/out with spring physics
- Dropdown menu height animation
- Loading skeleton pulse animation
- Toast notification slide-in
- Project filter layout animation (AnimatePresence)
- Keep all animations performant (GPU-accelerated transforms only)
- Respect prefers-reduced-motion for accessibility
```

### 18.26 Form Validation Library
**Priority:** Medium | **Applies to:** Both Sites
```
Add proper form validation to both sites:

- npm install react-hook-form zod @hookform/resolvers
- Replace manual useState form handling with React Hook Form
- Zod schemas for type-safe validation:
  - ContactFormSchema: name (required), email (valid format), phone (optional),
    organization, service interest, message (min 10 chars)
  - QuoteFormSchema: all contact fields + project description (min 20 chars),
    budget range, timeline, file upload (max 10MB, PDF/DOC only)
  - NewsletterSchema: email (valid format, required)
- Real-time field validation (onBlur + onChange after first error)
- Accessible error messages (aria-describedby, role="alert")
- Form-level error summary for screen readers
- Debounced validation for performance
```

### 18.27 Payment Gateway Integration
**Priority:** Medium | **Applies to:** Both Sites
```
Make /payment pages functional with real payment processing:

Option A — Stripe (recommended):
- npm install stripe @stripe/stripe-js @stripe/react-stripe-js
- Create payment intent API route
- Embedded checkout form on /payment page
- Invoice number lookup
- Payment confirmation page
- Email receipt on successful payment
- Webhook handler for payment events

Option B — PayPal:
- npm install @paypal/react-paypal-js
- PayPal buttons on /payment page
- Invoice payment via PayPal link

FOR KAPORTA — Additional:
- Support Sierra Leonean Leones (SLE) and USD
- Mobile money integration (Orange Money, Africell Money) — placeholder
- Bank transfer instructions with copy-to-clipboard
```

### 18.28 CMS Integration (Content Management)
**Priority:** Medium | **Applies to:** Both Sites
```
Replace static TypeScript data files with a headless CMS:

Option A — Sanity (recommended, free tier):
- npm install next-sanity @sanity/image-url
- Content types: Services, Projects, Team, Blog Posts, Testimonials, Jobs
- Visual editing with Sanity Studio
- Real-time preview
- Structured content with rich text
- Image CDN with automatic optimization

Option B — Contentful:
- npm install contentful
- Similar content modeling
- Built-in CDN

Option C — Strapi (self-hosted, fully free):
- Full control over content API
- Custom content types
- Role-based access for content editors

Benefits:
- Non-technical staff can update content (blog posts, team, projects)
- No code deployment needed for content changes
- Version history and drafts
- Media library for images
```

### 18.29 Social Media Links & Meta Enhancements
**Priority:** Medium | **Applies to:** Kaporta Group
```
Fix placeholder social media links and enhance social sharing:

1. Replace "#" placeholder links in Footer:
   - Facebook: Add actual Kaporta Group Facebook URL
   - LinkedIn: Add actual Kaporta Group LinkedIn URL
   - WhatsApp: Already functional (wa.me/23278341012)

2. Add social sharing buttons to:
   - Blog posts (Share on Facebook, LinkedIn, WhatsApp, Twitter)
   - Project pages (Share this project)
   - Copy link button with toast notification

3. Open Graph enhancements:
   - Unique OG image per page
   - Twitter card meta tags
   - WhatsApp preview optimization (og:image aspect ratio)
```

### 18.30 Admin Dashboard (Phase 2)
**Priority:** Future | **Applies to:** Both Sites
```
Build lightweight admin dashboard for managing submissions:

- /admin route (protected with NextAuth.js)
- Dashboard overview: total submissions, unread count, recent activity
- Contact submissions list with read/unread status
- Quote requests with status workflow (new → reviewed → quoted → accepted/declined)
- Newsletter subscriber management (export CSV)
- Job application tracking
- Basic analytics display (page views, top pages)
- Admin users: email/password login
- Role-based access (super admin, admin, viewer)
```

### 18.31 Accessibility Enhancements
**Priority:** Medium | **Applies to:** Both Sites
```
Enhance accessibility beyond current WCAG 2.1 AA compliance:

1. Automated testing:
   - npm install -D @axe-core/react
   - Dev-mode accessibility warnings in console
   - CI pipeline accessibility checks on every PR

2. Enhanced keyboard navigation:
   - Focus trap in mobile menu and modals
   - Roving tabindex in navigation dropdowns
   - Escape key to close all overlays
   - Arrow key navigation in dropdown menus

3. Screen reader improvements:
   - aria-live regions for dynamic content (form responses, filters)
   - Announce page transitions to screen readers
   - Descriptive link text (avoid "click here", "read more")
   - Table of contents for long pages (blog posts, privacy policy)

4. Visual accessibility:
   - High contrast mode option
   - Font size adjustment controls
   - Reduced motion toggle (beyond prefers-reduced-motion)
```

### 18.32 Performance Optimization
**Priority:** Medium | **Applies to:** Both Sites
```
Optimize performance for Core Web Vitals scores:

1. Bundle optimization:
   - Analyze bundle with @next/bundle-analyzer
   - Dynamic import heavy components (charts, maps, chat widget)
   - Tree-shake unused lucide-react icons

2. Font optimization:
   - Preload critical fonts
   - Font display: swap (already done)
   - Subset fonts to used characters only

3. Image optimization:
   - Convert all images to WebP/AVIF
   - Implement blur placeholder (blurDataURL)
   - Proper width/height attributes to prevent CLS
   - Priority loading for above-fold images

4. Caching:
   - Configure Cache-Control headers for static assets
   - Stale-While-Revalidate for API responses
   - Service worker cache for repeat visitors

5. Lazy loading:
   - Intersection Observer for below-fold sections
   - Dynamic import for non-critical components
   - Defer third-party scripts (analytics, chat widget)
```

---

## Enhancement Priority Roadmap

### Phase 1 — Critical (Make Site Functional)
| # | Enhancement | Impact |
|---|-------------|--------|
| 18.11 | Backend API Routes | Forms actually submit |
| 18.12 | Database Integration | Data persistence |
| 18.13 | Email Service | Notifications work |
| 18.4 | Connect Forms to Backend | End-to-end form flow |
| 18.1 | Replace Placeholder Images | Professional appearance |

### Phase 2 — High Priority (Production Quality)
| # | Enhancement | Impact |
|---|-------------|--------|
| 18.14 | Analytics & Monitoring | Track visitors & errors |
| 18.15 | Error Handling & Loading | Better UX |
| 18.16 | Testing Framework | Code reliability |
| 18.17 | Component Library | Maintainability |
| 18.18 | Security Hardening | Protection |
| 18.21 | Sitemap & SEO (Kaporta) | Search visibility |

### Phase 3 — Medium Priority (Enhancement)
| # | Enhancement | Impact |
|---|-------------|--------|
| 18.19 | CI/CD Pipeline | Automated quality |
| 18.20 | Image Optimization | Performance |
| 18.22 | Global Search (Kaporta) | User experience |
| 18.23 | Chat Widget (Kaporta) | Customer support |
| 18.25 | Framer Motion | Visual polish |
| 18.26 | Form Validation Library | Data quality |
| 18.6 | Scroll Animations | Visual polish |
| 18.7 | Structured Data | SEO |
| 18.27 | Payment Gateway | Revenue |
| 18.29 | Social Media Links | Engagement |

### Phase 4 — Low Priority / Future
| # | Enhancement | Impact |
|---|-------------|--------|
| 18.8 | Dark Mode | User preference |
| 18.9 | Multi-language (Kaporta) | Wider audience |
| 18.24 | PWA Support | Mobile experience |
| 18.28 | CMS Integration | Content management |
| 18.31 | Accessibility Enhancements | Inclusivity |
| 18.32 | Performance Optimization | Speed |
| 18.30 | Admin Dashboard | Operations |
| 18.10 | Client Portal | Client relations |

---

## 18C. Implementation Log — Completed Enhancements (March 2026)

The following enhancements from Section 18B have been **implemented and verified** (zero build errors, 37 routes):

### CRITICAL — Completed

| # | Enhancement | Files Created/Modified | Status |
|---|-------------|----------------------|--------|
| 18.11 | Backend API Routes | `src/app/api/contact/route.ts`, `src/app/api/quote/route.ts`, `src/app/api/newsletter/route.ts`, `src/app/api/career-apply/route.ts` | ✅ Done |
| 18.13 | Email Integration (Resend) | `src/lib/email.ts` | ✅ Done (needs RESEND_API_KEY env var) |
| — | Zod Validation Schemas | `src/lib/validations.ts` | ✅ Done |
| — | Rate Limiting Utility | `src/lib/rate-limit.ts` | ✅ Done |
| 18.15 | Error Handling & Loading | `src/app/error.tsx`, `src/app/not-found.tsx`, `src/app/loading.tsx`, `src/app/services/loading.tsx`, `src/app/projects/loading.tsx`, `src/app/blog/loading.tsx` | ✅ Done |

### HIGH PRIORITY — Completed

| # | Enhancement | Files Created/Modified | Status |
|---|-------------|----------------------|--------|
| 18.14 | Vercel Analytics + Speed Insights | `src/app/layout.tsx` (updated) | ✅ Done |
| 18.17 | Reusable UI Component Library | `src/components/ui/Button.tsx`, `Card.tsx`, `Badge.tsx`, `Input.tsx`, `Textarea.tsx`, `Select.tsx`, `SectionHeading.tsx`, `Skeleton.tsx`, `index.ts` | ✅ Done (9 components) |
| 18.18 | Security Headers | `next.config.ts` (updated) | ✅ Done |
| 18.21 | Sitemap + Robots + PWA | `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/manifest.ts` | ✅ Done |

### MEDIUM PRIORITY — Completed

| # | Enhancement | Files Created/Modified | Status |
|---|-------------|----------------------|--------|
| 18.22 | Global Search (Cmd+K) | `src/components/search/SearchModal.tsx`, `src/components/layout/Header.tsx` (updated) | ✅ Done |
| 18.23 | Chat Widget | `src/components/chat/ChatWidget.tsx`, `src/app/layout.tsx` (updated) | ✅ Done |
| 18.29 | Social Media Links Fix | `src/components/layout/Footer.tsx` (updated) | ✅ Done |

### Dependencies Installed
```
zod, react-hook-form, @hookform/resolvers, resend, @vercel/analytics, @vercel/speed-insights
```

### Environment Variables Needed (Production)
```
RESEND_API_KEY=re_xxxxx   # Get from resend.com — enables email sending for all forms
```

### Remaining Items (Not Yet Implemented)
| # | Enhancement | Priority |
|---|-------------|----------|
| 18.1 | Replace Placeholder Images | High |
| 18.2 | Google Maps Embed | High |
| 18.3 | Floating WhatsApp Button | High |
| 18.4 | Connect Frontend Forms to API | High |
| 18.12 | Database Integration | High |
| 18.16 | Testing Framework | High |
| 18.19 | CI/CD GitHub Actions | Medium |
| 18.20 | Image Optimization & CDN | Medium |
| 18.25 | Framer Motion Animations | Medium |
| 18.26 | Form Validation (integrate Zod into frontend) | Medium |
| 18.6 | Scroll Animations | Medium |
| 18.7 | JSON-LD Structured Data | Medium |
| 18.27 | Payment Gateway (Stripe) | Medium |
| 18.8 | Dark Mode | Low |
| 18.9 | Multi-language (i18n) | Low |
| 18.24 | Full PWA (Service Worker) | Low |
| 18.28 | CMS Integration | Low |
| 18.31 | Accessibility Enhancements | Medium |
| 18.32 | Performance Optimization | Medium |
| 18.30 | Admin Dashboard | Future |
| 18.10 | Client Portal | Future |
