export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Company History', href: '/about' },
      { label: 'Leadership Team', href: '/about/leadership' },
      { label: 'Certifications & Partnerships', href: '/about/certifications' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Quarrying & Mining', href: '/services/quarrying-mining' },
      { label: 'Concrete Production', href: '/services/concrete-production' },
      { label: 'Haulage & Logistics', href: '/services/haulage-logistics' },
      { label: 'Civil Engineering & Construction', href: '/services/civil-engineering' },
      { label: 'Power & Energy Solutions', href: '/services/power-energy' },
      { label: 'Equipment Rental', href: '/services/equipment-rental' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Careers',
    href: '/careers',
    children: [
      { label: 'Current Openings', href: '/careers' },
      { label: 'Internship & Training', href: '/careers/internships' },
    ],
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about/leadership' },
    { label: 'Certifications', href: '/about/certifications' },
    { label: 'Careers', href: '/careers' },
  ],
  services: [
    { label: 'Quarrying & Mining', href: '/services/quarrying-mining' },
    { label: 'Concrete Production', href: '/services/concrete-production' },
    { label: 'Haulage & Logistics', href: '/services/haulage-logistics' },
    { label: 'Civil Engineering', href: '/services/civil-engineering' },
    { label: 'Power & Energy', href: '/services/power-energy' },
    { label: 'Equipment Rental', href: '/services/equipment-rental' },
  ],
  resources: [
    { label: 'Projects', href: '/projects' },
    { label: 'Blog & Insights', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Request a Quote', href: '/quote' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};
