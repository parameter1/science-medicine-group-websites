const subscribe = require('@science-medicine-group/package-global/templates/static-page/subscribe');

module.exports = (app) => {
  app.get('/subscribe', (_, res) => { res.marko(subscribe); });
};
