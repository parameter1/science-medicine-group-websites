const defaults = {
  name: 'Stay in the Know',
  description: 'Delivered right to your inbox, LabPulse’s newsletters keep you informed on the latest clinical lab updates. Subscribe to get exclusive access!',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/smg/all/image/static/lab/newsletter-phone-half.png',
  },
  signupBanner: {
    ...defaults,
  },
  signupFooter: {
    ...defaults,
    colspan: 5,
    enable: true,
    name: 'Stay Connected',
  },
};
