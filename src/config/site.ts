// Single source for business contact details and identity used in templates and JSON-LD.
// public/llms.txt is static and repeats the email by hand; update it when this changes.

export const site = {
  name: 'Cranes Consulting',
  url: 'https://cranesconsultingfl.com',
  email: 'cranesconsultingfl@gmail.com',
  areaServed: ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Lakeland', 'Naples', 'Marco Island', 'Bonita Springs', 'Fort Myers'],
  // TODO(Tyler): add the LinkedIn company or profile URL and the Google Business Profile URL.
  sameAs: [] as string[],
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
