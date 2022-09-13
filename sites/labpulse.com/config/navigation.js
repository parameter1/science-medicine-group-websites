const sortNavItems = require('@science-medicine-group/package-global/utils/sort-nav-items');

const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const businessInsights = [
  { href: '/business-insights/people-on-the-move', label: 'People on the Move' },
  { href: '/business-insights/trends-and-finance', label: 'Trends & Finance' },
  { href: '/business-insights/policy-and-regulation', label: 'Policy & Regulation' },
];

const researchDevelopment = [
  { href: '/research-and-development/clinical-trial', label: 'Clinical Trial' },
  { href: '/research-and-development/collaboration', label: 'Collaboration' },
  { href: '/research-and-development/funding', label: 'Funding' },
  { href: '/research-and-development/ruo', label: 'RUO' },
];

const diagnosticTechnologies = [
  { href: '/diagnostic-technologies/clinical-chemistry', label: 'Clinical Chemistry' },
  { href: '/diagnostic-technologies/immunoassays', label: 'Immunoassays' },
  { href: '/diagnostic-technologies/molecular-diagnostics', label: 'Molecular Diagnostics' },
  { href: '/diagnostic-technologies/emerging-technology', label: 'Emerging Technology' },
  { href: '/diagnostic-technologies/pathology-and-ai', label: 'Pathology & AI' },
];

const diseases = [
  { href: '/diseases/autoimmune', label: 'Autoimmune' },
  { href: '/diseases/cancer', label: 'Cancer' },
  { href: '/diseases/cardiovascular', label: 'Cardiovascular' },
  { href: '/diseases/covid-19', label: 'Covid-19' },
  { href: '/diseases/infectious', label: 'Infectious' },
  { href: '/diseases/health-topics', label: 'Health Topics' },
];

const resources = [
  { href: '/page/about-us', label: 'About Us' },
  { href: '/resources/cases', label: 'Cases' },
  { href: '/resources/conferences', label: 'Conferences' },
  { href: '#', label: 'Showcasts' },
  { href: '/resources/vendors', label: 'Vendors' },
  { href: '/resources/video', label: 'Video' },
  { href: '/resources/webinars', label: 'Webinars' },
];

const topics = [
  { href: '/business-insights', label: 'Business Insights', children: businessInsights },
  { href: '/research-and-development', label: 'Research & Development', children: researchDevelopment },
  { href: '/diagnostic-technologies', label: 'Diagnostic Technologies', children: diagnosticTechnologies },
  { href: '/diseases', label: 'Diseases', children: diseases },
  { href: '/point-of-care-testing', label: 'Point-of-Care Testing' },
];

const mobileMenu = {
  primary: sortNavItems([
    ...topics,
  ]),
  secondary: sortNavItems([
    ...resources,
    // subscribe,
  ]),
};

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  user: {
    items: [
      {
        href: '/login',
        label: 'Sign In',
        when: 'logged-out',
        modifiers: ['user'],
      },
      {
        href: '/logout',
        label: 'Sign Out',
        when: 'logged-in',
        modifiers: ['user'],
      },
    ],
  },
  mobileMenu,
  topics,
  primary: {
    items: sortNavItems([
      ...resources,
    ]),
  },
  secondary: {
    items: [
      ...topics,
      { href: '/resources', label: 'Resources' },
    ],
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/business-insights'],
      secondary: { items: [...topics] },
      tertiary: { items: [] },
      primary: {
        items: [
          ...businessInsights,
        ],
      },
    },
    {
      when: ['/diagnostic-technologies'],
      secondary: { items: [...topics] },
      tertiary: { items: [] },
      primary: {
        items: [
          ...diagnosticTechnologies,
        ],
      },
    },
    {
      when: ['/diseases'],
      secondary: { items: [...topics] },
      tertiary: { items: [] },
      primary: {
        items: [
          ...diseases,
        ],
      },
    },
    {
      when: ['/research-and-development'],
      secondary: { items: [...topics] },
      tertiary: { items: [] },
      primary: {
        items: [
          ...researchDevelopment,
        ],
      },
    },
    {
      when: ['/resources'],
      secondary: { items: [...topics] },
      tertiary: { items: [] },
      primary: {
        items: [
          ...resources,
        ],
      },
    },
  ],
  toggleMenu: {
    col1: {
      label: 'Business Insights',
      items: [
        ...sortNavItems(businessInsights),

      ],
    },
    col2: {
      label: 'Research & Development',
      items: [
        ...sortNavItems(researchDevelopment),
      ],
    },
    col3: {
      label: 'Diagnostic Technologies',
      items: [
        ...sortNavItems(diagnosticTechnologies),
      ],
    },
    col4: {
      label: 'Diseases',
      items: [
        ...sortNavItems(diseases),
      ],
    },
    col5: {
      label: 'Resources',
      items: [
        ...resources,
      ],
    },
  },
  footer: {
    col1: {
      label: 'Topics',
      items: [
        ...topics,
        // { href: '/business-insights', label: 'Business Insights' },
        // { href: '/diagnostic-technologies', label: 'Diagnostic Technologies' },
        // { href: '/diseases', label: 'Diseases' },
      ],
    },
    col2: {
      label: 'Resources',
      items: [
        ...resources,
        { href: '#', label: 'TBD' },
        { href: '#', label: 'TBD' },
      ],
    },
    col3: {
      label: 'More',
      items: [
        { href: '#', label: 'TBD' },
        { href: '#', label: 'TBD' },
      ],
    },
    items: [
      privacyPolicy,
      { href: '/page/copyright-information', label: 'Copyright Information' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
