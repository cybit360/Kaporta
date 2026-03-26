'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const labelMap: Record<string, string> = {
  about: 'About Us',
  leadership: 'Leadership Team',
  certifications: 'Certifications & Partnerships',
  services: 'Services',
  'quarrying-mining': 'Quarrying & Mining',
  'concrete-production': 'Concrete Production',
  'haulage-logistics': 'Haulage & Logistics',
  'civil-engineering': 'Civil Engineering & Construction',
  'power-energy': 'Power & Energy Solutions',
  'equipment-rental': 'Equipment Rental',
  projects: 'Projects',
  careers: 'Careers',
  internships: 'Internship & Training',
  testimonials: 'Testimonials',
  blog: 'Blog',
  contact: 'Contact Us',
  quote: 'Request a Quote',
  payment: 'Payment',
  privacy: 'Privacy Policy',
  terms: 'Terms of Use',
  accessibility: 'Accessibility',
};

function formatSegment(segment: string): string {
  if (labelMap[segment]) return labelMap[segment];
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  segments.forEach((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    items.push({ label: formatSegment(segment), href });
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${typeof window !== 'undefined' ? window.location.origin : ''}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex items-center flex-wrap gap-1 text-xs sm:text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className="h-3 w-3 text-concrete-gray flex-shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="font-semibold text-charcoal" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-concrete-gray hover:text-deep-blue transition-colors inline-flex items-center gap-1"
                  >
                    {index === 0 && <Home className="h-3 w-3" aria-hidden="true" />}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
