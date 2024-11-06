const configureNativeX = require('@science-medicine-group/package-global/config/native-x');

const config = configureNativeX();

config.enabled = process.env.ENABLE_NATIVE_X === 'true';

config
  .setAliasPlacements('default', [
    { name: 'default', id: '62fce264ffb1230001dca87e' },
    { name: 'related-content', id: '62fce264ffb1230001dca87e' },
  ])
  .setAliasPlacements('cases', [
    { name: 'cases', id: '6400e1b493fb8e0001c3a6fb' },
  ])
  .setAliasPlacements('dental-specialties/endodontics', [
    { name: 'related-content', id: '6435a1eab91bf50001e2c27b' },
  ])
  .setAliasPlacements('dental-specialties/smile-design', [
    { name: 'related-content', id: '6435a2049eb1640001e88aef' },
  ])
  .setAliasPlacements('dental-specialties/orofacial-pain', [
    { name: 'related-content', id: '645e89589545ae0001f7ffc9' },
  ])
  .setAliasPlacements('clinical/imaging-cad-cam', [
    { name: 'related-content', id: '644ffa6a9eb164000117db0c' },
  ])
  .setAliasPlacements('dental-hygiene', [
    { name: 'related-content', id: '6455380ee248aa0001d4f458' },
  ])
  .setAliasPlacements('dental-specialties/senl', [
    { name: 'related-content', id: '6516d0ecb497bc00017060c2' },
  ])
  .setAliasPlacements('digital-dentistry/implants', [
    { name: 'related-content', id: '66d72fd8b7c9ff459c804dca' },
  ])
  .setAliasPlacements('demo', [
    { name: 'related-content', id: '66d72e96b7c9ff459c804dc6' },
  ])
  .setAliasPlacements('dental-practice/legal-issues', [
    { name: 'related-content', id: '672be891521472d277b00339' },
  ]);

module.exports = config;
