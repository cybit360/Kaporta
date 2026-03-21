# CybitSolutions Website — Master Prompt Reference

This document contains all the prompts used to build each section of the website, plus recommended future prompts for enhancements. Use these prompts with Claude Code to build, modify, or extend any part of the site.

---

## Table of Contents
1. [Project Setup Prompts](#1-project-setup)
2. [Layout & Navigation Prompts](#2-layout--navigation)
3. [Homepage Prompts](#3-homepage)
4. [What We Do — Services (10 Domains)](#4-what-we-do--services)
5. [What We Do — Past Performance & Case Studies](#5-past-performance)
6. [What We Do — Capability Statements](#6-capability-statements)
7. [What We Do — Our Approach / Innovation](#7-our-approach)
8. [Who We Are — About, Leadership, Social Impact](#8-who-we-are)
9. [Who We Serve — Government, Commercial, Alliances](#9-who-we-serve)
10. [Insights & Resources](#10-insights--resources)
11. [Careers](#11-careers)
12. [Contact / Engage](#12-contact--engage)
13. [Legal Pages](#13-legal-pages)
14. [Future Enhancement Prompts](#14-future-enhancements)
15. [SEO & Performance Prompts](#15-seo--performance)
16. [CMS Integration Prompts](#16-cms-integration)

---

## 1. Project Setup

### Prompt Used: Initialize Project
```
Initialize a Next.js 14+ project with App Router, TypeScript, and Tailwind CSS v4 for a professional GovCon website called CybitSolutions. Set up:
- Custom Tailwind theme with brand colors: Navy #0B1C2E, Slate #1E2A38, Steel #5C6B7A, Cloud #F4F7FA, Accent-Cyan #13C0F5, Accent-Amber #FFC766
- Google Fonts: Inter (headings), Source Sans 3 (body), JetBrains Mono (code)
- WCAG 2.2 AA accessibility defaults (focus states, skip links, semantic landmarks)
- Utility function cn() using clsx + tailwind-merge
```

### Prompt Used: Design Tokens
```
Configure tailwind.config.ts with the CybitSolutions brand design system:
- Colors: navy, slate, steel, cloud, accent-cyan, accent-amber
- Font families: heading (Inter), body (Source Sans 3), mono (JetBrains Mono)
- Add custom animations: count-up, fade-in, slide-up
- Ensure 4.5:1 color contrast ratio for accessibility
```

---

## 2. Layout & Navigation

### Prompt Used: Header + Mega Menu
```
Build a professional enterprise header for CybitSolutions with:
- Top utility bar with links: Contract Vehicles, Suppliers, Accessibility, Privacy
- Main navigation with 6 items: What We Do, Who We Are, Who We Serve, Insights, Careers, Contact
- Mega-menu dropdown on hover showing subpages with descriptions
- "Request Consultation" CTA button on the right
- Sticky header that becomes more opaque on scroll
- Mobile hamburger menu with accordion navigation
- Logo at /images/logo.png
Use Next.js Link, lucide-react icons, and Tailwind CSS.
```

### Prompt Used: Footer
```
Build a full enterprise footer for CybitSolutions matching federal prime contractor standards (similar to RTX, GDIT, Lockheed Martin):
- Multi-column layout: Company info + logo, About links, Services, Resources, Contact
- Social media icons: LinkedIn, Twitter/X, YouTube
- Bottom bar: Copyright, Privacy, Terms, Accessibility, Cookies, Equal Opportunity, Sitemap
- Dark navy background with proper typography hierarchy
```

### Future Prompt: Search Functionality
```
Add a global search feature to the CybitSolutions header:
- Search icon in the nav that opens a modal search overlay
- Client-side search across all page titles, service domains, and case studies
- Display results grouped by category (Services, Case Studies, Insights, Careers)
- Keyboard shortcut Cmd+K / Ctrl+K to open search
```

---

## 3. Homepage

### Prompt Used: Hero Section
```
Build the CybitSolutions homepage hero section with:
- Full-width dark navy background with gradient overlay and subtle glow effects
- Badge: "Veteran-Owned • Cleared Professionals • 20+ Years"
- Headline: "Mission-grade innovation for cyber, cloud, and AI."
- Subheadline: "We design, secure, and operate digital mission systems for government and enterprise—at scale and in compliance."
- 3 CTAs: Explore Services (cyan), Download Capability Statement (outline), Contact/RFP (amber outline)
- Stats bar below: 20+ Years, 5 Major Programs, 10K+ Users, 100% Compliance
```

### Prompt Used: Homepage Sections
```
Build these homepage sections for CybitSolutions:
1. Trust Strip: Partner logos (AWS, Microsoft, Google Cloud, ServiceNow, Splunk, Cisco, HashiCorp, CrowdStrike, Databricks) + certification badges (FedRAMP, ISO 27001, SOC 2, CMMC)
2. Proof Points: 3-column layout — Security Without Compromise, Speed at Scale, Outcomes That Matter
3. Featured Domains: 3 service domain cards with "View All 10 Domains" link
4. Case Studies: 3 selected case study tiles
5. CTA Banner: "Ready to Modernize Your Mission?" with consultation CTA
6. Latest Insights: 3 blog/news tiles
7. Careers Strip: Dark navy recruiting band with "Search Open Roles" CTA
```

### Future Prompt: Hero Video Background
```
Replace the homepage hero gradient background with a looping hero video:
- Use a stock video of a data center, government building, or cyber operations
- Maintain the dark overlay for text readability
- Fallback to gradient for slow connections
- Pause video on mobile for performance
- Add play/pause toggle button for accessibility
```

---

## 4. What We Do — Services

### Prompt Used: Services Landing Page
```
Build the Services & Solutions landing page showing all 10 CybitSolutions domains as a responsive grid:
- Page hero: "Services & Solutions" with subtitle about 10 mission-critical domains
- Grid of 10 cards, each with: icon, title, short description, "Learn More" link
- Each card links to /what-we-do/services/[domain-slug]
- Use the domains data from the FeaturedDomains component
```

### Prompt Used: Individual Service Domain Page (Template)
```
Build a service domain detail page for CybitSolutions following this template structure:
- Hero: Domain title + intro paragraph
- Functional Areas: Numbered list of sub-domains
- Example Services: Grid of service offerings
- Standards & Frameworks: Badge-style list
- Key Benefits: Icon + text list
- Target Customers: Text paragraph
- CTAs: Download [Domain] Capability Statement, Contact a [Role] Architect, Submit RFP
Apply this template to all 10 domains: cybersecurity, cloud, infrastructure, software-devops, data-analytics, ai-automation, enterprise-it, digital-transformation, emerging-tech, industry-specific
```

### Future Prompt: Service Domain Comparison Matrix
```
Add an interactive comparison matrix to the Services landing page:
- Tabbed or filterable view comparing all 10 domains
- Columns: Domain, Functional Areas, Key Standards, Target Customers
- Filter by: customer type (Federal, DoD, Commercial), standard (FedRAMP, NIST, CMMC)
- Sortable columns
- Export to PDF option
```

---

## 5. Past Performance

### Prompt Used: Case Studies Page
```
Build the Past Performance & Case Studies page for CybitSolutions:
- Hero section with executive overview
- 5 detailed case study cards in full-width layout, each with:
  - Client/Industry badge
  - Mission statement
  - Challenge bullets
  - Solution bullets
  - Results bullets
  - Technologies used
  - Compliance & Standards alignment
  - "Value to the Mission" statement
- The 5 case studies: DoD C3BM/ABMS, DoS CAKMI, DoS NGEM, DoS SPARTA PSIM, DoD RAPIDS/DEERS
- Below: 25 summary case studies in a compact 3-column grid organized by domain
- Microsoft Ecosystem past performance section
```

### Future Prompt: Interactive Case Study Pages
```
Convert each case study into its own dedicated page with:
- Full-page layout with sidebar navigation
- Before/After metrics visualization
- Technology stack icons
- Related services cross-links
- Download as PDF option
- Related case studies carousel at bottom
```

---

## 6. Capability Statements

### Prompt Used
```
Build the Capability Statements page for CybitSolutions with:
- Company Overview section (Veteran-Owned, Minority-Owned, Self-Certified SDB)
- Core Competencies list with icons
- Differentiators section
- Past Experiences summary
- NAICS Codes table: 541511, 541512, 541513, 541519, 541611, 518210, 541990, 561499, 561611
- Download CTAs for PDF capability statements (per domain)
- Contact information footer
```

---

## 7. Our Approach

### Prompt Used
```
Build the Our Approach / Innovation & R&D page for CybitSolutions:
- Methodology section with 4 phases: Discovery, Design, Build, Operate
- Visual timeline or process flow diagram
- Innovation focus areas: Zero-Trust, AI/ML, Cloud-Native, DevSecOps, Quantum-Ready
- R&D investments placeholder
- Standards alignment (NIST, FedRAMP, CMMC, ISO)
- Agile/SAFe methodology highlight
- CTA: "Let's discuss your mission requirements"
```

---

## 8. Who We Are

### Prompt Used: About Us
```
Build the About Us / Our Story page for CybitSolutions:
- Company timeline from founding to present
- Mission: "Deliver secure, innovative IT solutions that protect and empower organizations worldwide."
- Vision: "To be the trusted partner for Zero-Trust, cloud-native, AI-enabled enterprise transformation."
- Core Values section with icons
- Key differentiators: 20+ years experience, Veteran-Owned, cleared professionals, compliance-first
- Stats: years of experience, programs delivered, users supported
```

### Prompt Used: Leadership
```
Build the Leadership page with professional team member cards:
- Grid layout, 3 columns on desktop
- Each card: photo placeholder (gradient div), name, title, bio paragraph, certifications/badges
- Placeholder team: CEO, CTO, COO, VP Cybersecurity, VP Cloud, VP Federal Programs
- Include professional bios mentioning DoD/DoS experience, certifications (CISM, PMP, CASP+, AWS SA, ITIL4)
```

### Prompt Used: Social Impact
```
Build the Supporting Communities / Social Impact page:
- Veteran hiring and transition programs
- STEM education partnerships
- Community service initiatives
- Diversity & inclusion commitment
- Environmental sustainability
- Placeholder stats and program descriptions
```

---

## 9. Who We Serve

### Prompt Used: Government Solutions
```
Build the Government Solutions page with sections for:
- Federal Civilian agencies
- Department of Defense (DoD) & Intelligence Community
- State & Local Government
- Each section: description, key clients/agencies, relevant services, compliance frameworks
- CTA: Contact our federal solutions team
```

### Prompt Used: Commercial Business
```
Build the Commercial Business page:
- Industry verticals: Healthcare, Financial Services, Energy & Utilities, Technology
- Each vertical: description, challenges addressed, relevant services
- Commercial compliance: SOC 2, HIPAA, PCI DSS, GDPR
- CTA: Explore commercial solutions
```

### Prompt Used: Strategic Alliances
```
Build the Strategic Alliances & Certifications page:
- Technology Partners: AWS, Microsoft, Google Cloud, ServiceNow, Splunk, CrowdStrike, HashiCorp
- Integrator Partners placeholder
- Certifications grid: FedRAMP, ISO 27001, SOC 2, CMMC, HIPAA
- Supplier portal information
- Corporate governance section
- "Become a Partner" CTA
```

---

## 10. Insights & Resources

### Prompt Used: News & Insights
```
Build the News & Insights page with:
- Category filters: All, Cybersecurity, Cloud, AI, GovCon, Company News
- Blog post cards with: category badge, date, title, excerpt, author
- Press releases section
- Thought leadership articles
- 6-9 placeholder articles across categories
```

### Prompt Used: Resource Library
```
Build the Resource Library page:
- Filter by type: White Papers, Case Studies, Reports, Infographics, Capability Statements
- Download tiles with: title, description, format badge (PDF, PPTX), file size
- 6+ placeholder resources
- Newsletter signup form
```

### Prompt Used: Events & Webinars
```
Build the Events & Webinars page:
- Upcoming events section with registration CTAs
- Past events / On-demand webinars section
- Event cards: title, date, type (Conference, Webinar, Workshop), description
- Calendar integration placeholder
```

### Future Prompt: Blog System with MDX
```
Set up a full blog system using MDX:
- Create content/blog directory for .mdx files
- Add frontmatter support: title, date, author, category, excerpt, image
- Dynamic [slug] page route
- Category and tag filtering
- Related posts component
- Social sharing buttons
- Reading time estimate
```

---

## 11. Careers

### Prompt Used: Open Roles
```
Build the Open Roles page:
- Job listing cards with: title, location, clearance level, type (Full-time, Contract)
- Filter by: department, location, clearance
- Sections: Current Openings, Early Careers, University Recruiting, Military & Veterans
- Placeholder roles: Cybersecurity Engineer (TS/SCI), Cloud Architect (Secret), DevOps Engineer, Data Scientist, Project Manager (PMP)
- "Apply Now" buttons
- Equal Opportunity Employer statement
```

### Prompt Used: Culture & Benefits
```
Build the Culture & Benefits page:
- Company culture section: mission-driven, innovation, collaboration
- Benefits grid: Health/Dental/Vision, 401k, PTO, Education assistance, Clearance support, Remote flexibility
- Employee value proposition
- Office photos placeholder
- "Day in the Life" section placeholder
```

### Prompt Used: Testimonials
```
Build the Employee Testimonials page:
- Quote cards with: quote text, employee name, role, department
- Photo placeholder
- 6+ placeholder testimonials from various departments
- Video testimonial placeholder section
```

---

## 12. Contact / Engage

### Prompt Used: Contact Form
```
Build the Contact / RFP Intake page:
- Contact form: name, email, phone, company, subject (General, Demo, Consultation, RFP, Partnership, Media), message
- Form validation with error states
- Success message on submit
- Side panel with: office address, phone, email, business hours
- Map placeholder
```

### Prompt Used: Partner With Us
```
Build the Partner With Us page:
- Partnership types: Prime Contractor, Subcontractor, Technology Partner, Channel Partner
- Benefits of partnering with CybitSolutions
- Partner inquiry form
- Current partners showcase
```

### Prompt Used: Payment
```
Build the Payment page:
- Invoice payment information
- ACH/Wire transfer details placeholder
- Online payment portal link placeholder
- Payment terms and conditions
- Contact for billing inquiries
```

---

## 13. Legal Pages

### Prompt Used
```
Create professional legal pages for CybitSolutions:
1. Privacy Policy - Data collection, usage, GDPR/CCPA compliance
2. Terms of Use - Website usage terms
3. Accessibility Statement - WCAG 2.2 AA commitment, contact for accommodations
4. Cookie Policy - Cookie types, management, opt-out
All with proper legal formatting, headings, and last-updated dates.
```

---

## 14. Future Enhancement Prompts

### Animations & Micro-interactions
```
Add Framer Motion animations to the CybitSolutions website:
- Fade-in on scroll for section headings and cards
- Stagger animation for grid items
- Counter animation for stat numbers
- Smooth page transitions
- Mega-menu slide-down animation
- Mobile nav slide-in animation
Keep animations subtle and professional (no bounce/overshoot).
```

### Dark Mode Support
```
Add dark mode toggle to CybitSolutions:
- System preference detection
- Toggle button in header utility bar
- Adjusted color scheme maintaining brand identity
- Dark: navy-900 bg, lighter text, adjusted card backgrounds
- Persist preference in localStorage
```

### Multi-language Support (i18n)
```
Add internationalization to CybitSolutions:
- Languages: English, Spanish, French, Arabic
- next-intl or next-i18next setup
- Language switcher in header utility bar
- RTL support for Arabic
- Translated navigation and key content
```

### Analytics & Consent
```
Set up analytics and consent management:
- Google Analytics 4 (GA4) with first-party data
- Cookie consent banner using CookieYes/OneTrust pattern
- Event tracking for: CTA clicks, form submissions, downloads, navigation
- Conversion tracking for contact form and RFP submissions
- Privacy-compliant implementation
```

### Performance Optimization
```
Optimize CybitSolutions website performance:
- Next.js Image component for all images with blur placeholders
- Lazy loading for below-fold sections
- Font optimization with next/font
- Bundle analysis and code splitting
- Service worker for offline capability
- Core Web Vitals optimization (LCP, FID, CLS)
```

### CMS Integration
```
Integrate a headless CMS (Sanity/Contentful) for:
- Blog posts and news articles
- Case studies content
- Job listings
- Event calendar
- Team member profiles
- Resource library documents
Set up content models, preview mode, and ISR (Incremental Static Regeneration).
```

### ATS Integration
```
Integrate an Applicant Tracking System:
- Workday or Greenhouse API integration
- Real-time job listings pulled from ATS
- Apply button linking to ATS application
- Job alert subscription
```

---

## 15. SEO & Performance

### SEO Setup
```
Implement comprehensive SEO for CybitSolutions:
- Metadata for all pages (title, description, OG tags, Twitter cards)
- Structured data (JSON-LD): Organization, Service, Article schemas
- Dynamic sitemap.xml generation
- robots.txt with proper rules
- Canonical URLs
- Breadcrumb navigation with structured data
- Image alt text audit
- Internal linking strategy
```

### Page Speed
```
Optimize page speed scores:
- Preconnect to Google Fonts
- Critical CSS inlining
- Image optimization pipeline
- Lazy load below-fold components
- Reduce JavaScript bundle size
- Enable HTTP/2 push
- CDN configuration for Vercel/AWS
```

---

## 16. Deployment Prompts

### Vercel Deployment
```
Set up Vercel deployment for CybitSolutions:
- Connect to GitHub repository
- Configure environment variables
- Set up custom domain (cybitsolutions.com)
- Enable analytics
- Configure redirects and headers
- Set up preview deployments for PRs
```

### AWS Deployment
```
Set up AWS deployment with CloudFront:
- S3 + CloudFront for static assets
- WAF rules for security
- SSL/TLS certificate via ACM
- Route 53 DNS configuration
- Global CDN with edge locations
- Daily backups
```

---

## Quick Reference: Common Modifications

### Add a New Service Domain
```
Add a new service domain "[Domain Name]" to the CybitSolutions website:
1. Add data to src/data/services.ts
2. Create page at src/app/what-we-do/services/[slug]/page.tsx
3. Add to the domains array in src/components/sections/FeaturedDomains.tsx
4. Add to navigation data in src/data/navigation.ts
Follow the existing template pattern with: hero, intro, functional areas, services, standards, benefits, customers, CTAs.
```

### Add a New Case Study
```
Add a new case study for "[Client] — [Project Name]":
1. Add to src/data/case-studies.ts
2. Create markdown in content/case-studies/[slug].md
3. Add to the case studies grid on the past-performance page
Structure: client, mission, challenge, solution, results, technologies, compliance, value statement.
```

### Add a New Team Member
```
Add a new team member to the Leadership page:
1. Add to src/data/team.ts with: name, title, bio, certifications, image path
2. Add photo to public/images/team/[name].jpg
3. The leadership page will auto-render from the data file.
```

### Update Navigation
```
Modify the site navigation structure:
1. Update src/data/navigation.ts
2. Update the MegaMenu.tsx component if adding new mega-menu panels
3. Update Footer.tsx if adding new footer links
4. Create any new page directories and page.tsx files
```
