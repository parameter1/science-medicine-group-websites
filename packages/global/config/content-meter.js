module.exports = {
  enable: process.env.ENABLE_CONTENT_METER === 'true',
  viewLimit: 2,
  excludeLabels: ['Sponsored'],
  // excludeContentTypes: [
  //   'company',
  //   'contact',
  // ],
  // excludePrimarySectionIds: [
  //   75347,
  // ],
  // excludePrimarySectionAlias: [
  //   'home',
  // ],
  // 30 days to milliseconds
  timeframe: 30 * 24 * 60 * 60 * 1000,
  displayOverlay: true,
  promoCode: 'registration_meter',
};
