const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');

const withPinned = require('@science-medicine-group/package-global/templates/website-section/conference-with-pinned');
const conference = require('@science-medicine-group/package-global/templates/website-section/conference');

const ecrAliases = [
  '2024',
];

module.exports = (app) => {
  app.get('/:alias(resources/conferences)', withWebsiteSection({
    template: conference,
    queryFragment,
  }));

  // ECR
  app.get('/:alias(resources/conferences/ecr)', (req, res) => {
    res.redirect(301, `/resources/conferences/ecr/${ecrAliases[0]}`);
  });
  ecrAliases.forEach((year) => {
    app.get(`/:alias(resources/conferences/ecr/${year})`, withWebsiteSection({
      template: withPinned,
      queryFragment,
    }));
  });
};
