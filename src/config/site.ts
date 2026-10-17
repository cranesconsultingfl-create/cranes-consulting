// Single source for business contact details and identity used in templates and JSON-LD.
// public/llms.txt is static and repeats the email and phone by hand; update it when these change.
// Keep the phone identical to the Google Business Profile so the two listings match.

export const site = {
  name: 'Cranes Consulting',
  url: 'https://cranesconsultingfl.com',
  email: 'cranesconsultingfl@gmail.com',
  phone: '(813) 816-2469',
  phoneE164: '+18138162469',
  areaServed: ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Lakeland', 'Naples', 'Marco Island', 'Bonita Springs', 'Fort Myers'],
  // TODO(Tyler): add the LinkedIn company or profile URL and the Google Business Profile URL.
  sameAs: [] as string[],
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

export const tel = `tel:${site.phoneE164}`;
