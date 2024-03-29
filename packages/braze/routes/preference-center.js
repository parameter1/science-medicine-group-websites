const { asyncRoute } = require('@parameter1/base-cms-utils');
const { validateToken } = require('@parameter1/base-cms-marko-web-recaptcha');
const { json } = require('express');
const { RECAPTCHA_V3_SECRET_KEY } = require('../env');
const template = require('../templates/preference-center');
const { updateIdentityXUser } = require('../utils');

const buildOptins = async ({ email, identityX, braze }) => {
  const questions = await braze.getSubscriptionGroupQuestions(identityX);
  const optIns = questions.reduce((obj, sg) => ({ ...obj, [sg.groupId]: false }), {});
  const questionSubscriptionGroupIds = questions.map((question) => question.groupId);

  // Check Braze
  try {
    const { users } = await braze.getSubscriptionStatus(email);
    if (users) {
      users.forEach((entry) => {
        const groups = entry.subscription_groups || [];
        groups.forEach((group) => {
          if (questionSubscriptionGroupIds.includes(group.id)) {
            optIns[group.id] = group.status === 'Subscribed';
          }
        });
        return optIns;
      });
    }
  } catch (e) {
    // Do nothing if the braze lookup failed
  }
  return optIns;
};

module.exports = (app) => {
  app.get('/user/subscribe/check', json(), asyncRoute(async (req, res) => {
    const { braze, identityX } = req;
    const { email } = req.query;
    const optIns = await buildOptins({ email, braze, identityX });
    res.json(optIns);
  }));

  app.get('/user/subscribe', asyncRoute(async (req, res) => {
    const { braze, identityX } = req;
    const questions = await braze.getSubscriptionGroupQuestions(identityX);
    res.marko(template, { questions });
  }));

  app.post('/user/subscribe', json(), asyncRoute(async (req, res) => {
    try {
      const { body, braze } = req;
      const { email, optIns, token } = body;
      await validateToken({ token, secretKey: RECAPTCHA_V3_SECRET_KEY, actions: ['brazePreferenceCenter'] });
      const idxUser = await updateIdentityXUser(email, req.identityX);
      await braze.trackUser(email, idxUser.id);
      const response = await braze.updateSubscriptions(email, idxUser.id, optIns);
      res.status(200).send(response);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }));
};
