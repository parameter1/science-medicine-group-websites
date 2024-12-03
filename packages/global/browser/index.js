import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import PhotoSwipe from '@parameter1/base-cms-marko-web-photoswipe/browser';
import Braze from '@science-medicine-group/package-braze/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import Rudderstack from './rudderstack.vue';
import CollapsibleSidebar from './collapsible-sidebar.vue';

const GlobalRevealAdHandler = () => import(/* webpackChunkName: "reveal-ad-handler" */ './reveal-ad-handler.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  MonoRail(Browser, {
    enableOmedaIdentityX: false,
  });
  PhotoSwipe(Browser);
  Braze(Browser);
  Browser.register('CollapsibleSidebar', CollapsibleSidebar);

  // Rudderstack identification
  Browser.register('Rudderstack', Rudderstack, { provide: { EventBus } });

  Browser.register('GlobalRevealAdHandler', GlobalRevealAdHandler);

  EventBus.$on('identity-x-change-email-link-sent', () => {
    // "reload" the page to update user state
    window.location.search = 'sent=true';
  });
  GCSE(Browser);
};
