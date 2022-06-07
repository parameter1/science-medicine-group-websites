const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/ivd', label: 'IVD' },
  { href: '/lab-analyzers', label: 'Lab Analyzers' },
  { href: '/microbiology', label: 'Microbiology' },
  { href: '/next-gen-sequencing', label: 'Next-Gen Sequencing' },
  { href: '/molecular-diagnostics', label: 'Molecular Diagnostics' },
  { href: '/point-of-care', label: 'Point of Care' },
];

const resources = [
  { href: '/vendor-connect', label: 'Vendor Connect' },
  { href: '/conferences', label: 'Conferences' },
];

const utilities = [
  { href: '/page/media-kit', label: 'Media Kit' },
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
];

const mobileMenu = {
  user: [],
  primary: [
    ...topics,
  ],
  secondary: [
    ...resources,
    subscribe,
    { href: '/', label: 'Advertise', target: '_blank' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  user: [],
  sections: [
    ...topics,
  ],
};

module.exports = {
  type: 'navbar2',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: topics,
  },
  secondary: {
    items: [],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/copyright-information', label: 'Copyright Information' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
    ],
  },
};
