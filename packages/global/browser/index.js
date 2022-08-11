
import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';

const ContentMeterTrack = () => import(/* webpackChunkName: "content-meter-tracker" */ './track-content-meter.vue');
const RevealAdHandler = () => import(/* webpackChunkName: "reveal-ad-handler" */ './reveal-ad-handler.vue');

export default (Browser) => {
  MonoRail(Browser);
  // ### HACK ### to get Reveal ad to display on all pages
  const { EventBus } = Browser;
  // console.log('EventBus: ', EventBus.$on);
  EventBus.$on('revealAdListenerAdded', () => {
    console.warn('hitting on loaded stuff');
    const reskinVars = {
      adTitle: 'CLICK HERE FOR MORE INFORMATION',
      adClickUrl: '#',
      adImagePath: 'https://img.labpulse.com/files/base/smg/all/image/static/lab/reveal-ad/sample-300x250.png',
      backgroundImagePath: 'https://img.labpulse.com/files/base/smg/all/image/static/lab/reveal-ad/sample-bg.jpg',
      background: 'transparent',
    };
    window.postMessage(JSON.stringify(reskinVars), '*');
  });
  Browser.register('RevealAdHandler', RevealAdHandler, {
    provide: { EventBus },
  });
  // will need to also remove the inclusion and event trigger in the reveal ad once configured
  // ### HACK ###
  Browser.register('ContentMeterTrack', ContentMeterTrack);
};
