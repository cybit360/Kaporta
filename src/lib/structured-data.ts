const SITE_URL = 'https://kaporta.vercel.app';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kaporta Investment Sierra Leone Limited',
    alternateName: 'Kaporta Group',
    url: SITE_URL,
    logo: `${SITE_URL}/images/kaporta-logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+23278341012',
      email: 'kaportaq1@gmail.com',
      contactType: 'customer service',
      areaServed: 'West Africa',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Benguema Firing Range',
      addressLocality: 'Waterloo, Freetown',
      addressCountry: 'SL',
    },
    sameAs: [
      'https://www.facebook.com/kaportagroup',
      'https://www.linkedin.com/company/kaportagroup',
      'https://wa.me/23278341012',
    ],
    foundingDate: '2008',
    description:
      'Kaporta Investment Sierra Leone Limited provides construction, haulage, quarrying, power, and equipment rental services across Sierra Leone and West Africa.',
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kaporta Investment Sierra Leone Limited',
    alternateName: 'Kaporta Group',
    url: SITE_URL,
    logo: `${SITE_URL}/images/kaporta-logo.svg`,
    image: `${SITE_URL}/images/kaporta-logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+23278341012',
      email: 'kaportaq1@gmail.com',
      contactType: 'customer service',
      areaServed: 'West Africa',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Benguema Firing Range',
      addressLocality: 'Waterloo, Freetown',
      addressCountry: 'SL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 8.38,
      longitude: -13.18,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/kaportagroup',
      'https://www.linkedin.com/company/kaportagroup',
      'https://wa.me/23278341012',
    ],
    foundingDate: '2008',
    areaServed: 'West Africa',
    priceRange: '$$',
    description:
      'Kaporta Investment Sierra Leone Limited provides construction, haulage, quarrying, power, and equipment rental services across Sierra Leone and West Africa.',
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Kaporta Investment Sierra Leone Limited',
      url: SITE_URL,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kaporta Group',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
