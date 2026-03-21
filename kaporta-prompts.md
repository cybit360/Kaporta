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

---

## 18. Suggested Next Prompts

These are recommended prompts to run next to enhance the website:

### Replace Placeholder Images
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

### Add Google Maps Embed
```
Replace the map placeholder on the Contact page with a real Google Maps embed:
- Embed iframe showing Benguema Firing Range, Waterloo, Freetown, Sierra Leone
- Responsive sizing
- Add a "Get Directions" link below the map
- Consider using @vis.gl/react-google-maps for interactive features
```

### Add Floating WhatsApp Button
```
Add a floating WhatsApp chat button visible on all pages:
- Fixed position bottom-right corner
- Green WhatsApp icon with pulse animation
- Opens https://wa.me/23278341012 with predefined message
- Show tooltip on hover: "Chat with us on WhatsApp"
- Hide on scroll down, show on scroll up (optional)
- Add to root layout so it appears on every page
```

### Connect Forms to Backend
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

### Deploy to Vercel
```
Deploy the Kaporta Group website to Vercel:
- Connect GitHub repository (cybit360/Kaporta)
- Set up environment variables if needed
- Configure custom domain
- Enable Vercel Analytics
- Set up preview deployments for branches
- Test all pages and forms post-deployment
```
