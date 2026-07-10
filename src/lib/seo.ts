function domain() {
  return '[INSERT: DOMAIN]'
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${domain()}/#organization`,
    name: 'LEO FM',
    alternateName: 'Leo Facility Management',
    url: domain(),
    logo: `${domain()}/idea%205%20png.png`,
    image: `${domain()}/office.png`,
    description: 'Looking for quality facility management services near me? Leo FM delivers trustworthy FM services in Brisbane — commercial cleaning, building maintenance and facility management across Queensland.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[INSERT: Street address]',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      postalCode: '[INSERT: Postcode]',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '[INSERT: Latitude]',
      longitude: '[INSERT: Longitude]',
    },
    telephone: '[INSERT: Phone number]',
    email: 'hello@leofm.com.au',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '07:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '07:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '07:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '07:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '07:00', closes: '17:00' },
    ],
    areaServed: [
      { '@type': 'City', name: 'Brisbane' },
      { '@type': 'City', name: 'Gold Coast' },
      { '@type': 'City', name: 'Sunshine Coast' },
      { '@type': 'City', name: 'Ipswich' },
      { '@type': 'City', name: 'Logan' },
    ],
    sameAs: [
      '[INSERT: Facebook URL]',
      '[INSERT: LinkedIn URL]',
      '[INSERT: Instagram URL]',
    ],
  }
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${domain()}/#service`,
    provider: { '@id': `${domain()}/#organization` },
    name: 'Facility Management Services Brisbane',
    description: 'Leo FM provides quality FM services in Brisbane and across Queensland — including commercial cleaning, building maintenance, grounds care and facility management. Trustworthy facility management services near you.',
    areaServed: { '@type': 'City', name: 'Brisbane' },
    serviceType: [
      'Commercial Cleaning',
      'Industrial Cleaning',
      'Facility Management',
      'Building Maintenance',
      'Grounds Maintenance',
    ],
  }
}

export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${domain()}/#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: domain() },
    ],
  }
}

export function injectSchema() {
  const schemas = [getLocalBusinessSchema(), getServiceSchema(), getBreadcrumbSchema()]
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(schemas)
  document.head.appendChild(script)
}
