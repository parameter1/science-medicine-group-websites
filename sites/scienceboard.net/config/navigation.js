const privacyPolicy = require('./privacy-policy');
const subscribe = require('./subscribe');

const topics = [
  { href: '/bioprocessing', label: 'Bioprocessing' },
  { href: '/cancer-research', label: 'Cancer Research' },
  { href: '/cell-biology', label: 'Cell Biology' },
  { href: '/drug-discovery', label: 'Drug Discovery' },
  { href: '/gene-and-cell-therapy', label: 'Gene and Cell Therapy' },
  { href: '/immunology', label: 'Immunology' },
  // Not sure what content is supposed to go under OMIC
  // { href: '/omics', label: 'OMICs' },
];

const resources = [
  { href: '/insights', label: 'Insights' },
  { href: '/webinars', label: 'Webinars' },
  { href: '/video', label: 'Video' },
];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
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
      privacyPolicy,
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
    ],
  },
};
