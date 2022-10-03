
import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import FormLogin from './form-login.vue';

const GlobalSiteNewsletterMenu = () => import(/* webpackChunkName: "global-site-newsletter-menu" */ './site-newsletter-menu.vue');
const ContentMeterTrack = () => import(/* webpackChunkName: "content-meter-tracker" */ './track-content-meter.vue');
const PreferenceCenter = () => import(/* webpackChunkName: "braze-preference-center" */ './braze-preference-center.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  MonoRail(Browser, {
    enableOmedaIdentityX: false,
    idxArgs: {
      CustomLoginComponent: FormLogin,
    },
  });
  Browser.register('ContentMeterTrack', ContentMeterTrack);
  Browser.register('GlobalSiteNewsletterMenu', GlobalSiteNewsletterMenu, {
    provide: { EventBus },
  });
  Browser.register('PreferenceCenter', PreferenceCenter);
};
