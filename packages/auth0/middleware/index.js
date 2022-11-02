const { auth } = require('express-openid-connect');
const Joi = require('@parameter1/joi');
const { validate } = require('@parameter1/joi/utils');
const identityX = require('./identity-x');

/**
 *
 */
module.exports = (app, params = {}) => {
  const config = validate(Joi.object({
    authRequired: Joi.boolean().default(false),
    auth0Logout: Joi.boolean().default(true),
    baseURL: Joi.string().required(),
    clientID: Joi.string().required(),
    issuerBaseURL: Joi.string().required(),
    secret: Joi.string().required(),
    routes: Joi.object().default({ login: false }),
    afterCallback: Joi.function(),
  }), params);

  app.use((req, _, next) => {
    req.auth0Enabled = true;
    next();
  });

  app.use(auth(config));

  // Redirect after login if `returnTo` URL parameter is present.
  if (config.routes.login === false) {
    app.get('/login', (req, res) => {
      const referrer = req.query.returnTo || req.get('referrer') || config.baseURL;
      let returnTo;
      try {
        returnTo = new URL(referrer);
      } catch (e) {
        returnTo = new URL(referrer, `${req.protocol}://${req.get('host')}`);
      }
      returnTo.searchParams.append('isAuth0Login', true);
      res.oidc.login({ returnTo: `${returnTo}` });
    });
  }

  // Load the IdentityX integration
  app.use(identityX);
};
