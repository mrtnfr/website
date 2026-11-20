/* PostHog analytics — cookieless.
   Uses sessionStorage (cleared when the tab closes) instead of cookies, so a single visit
   across pages (home → book page → buy) is one session, but nothing persists afterwards.
   Session recording is off. Region: EU. */
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags on onFeatureFlags onSessionId identify setPersonProperties group resetGroups reset get_distinct_id getGroups get_session_id alias set_config startSessionRecording stopSessionRecording captureException get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

(function () {
  var host = location.hostname;
  // Only track the live site — local previews stay out of the data.
  if (host !== 'www.talk2noa.com' && host !== 'talk2noa.com') {
    window.posthog = window.posthog || { capture: function () {} };
    return;
  }
  posthog.init('phc_pSEb7hZ8LWDPuEsVZV3jNJZmXvNTCbachp486cM7R8cs', {
    api_host: 'https://eu.i.posthog.com',
    persistence: 'sessionStorage',
    person_profiles: 'identified_only',
    disable_session_recording: true,
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true
  });
})();

/* Named events: any element with data-track="event_name" (and optional data-track-location)
   sends that event on click. Used for the book funnel: book_page_click → book_buy_click. */
document.addEventListener('click', function (e) {
  var el = e.target.closest && e.target.closest('[data-track]');
  if (!el || !window.posthog || !posthog.capture) return;
  posthog.capture(el.getAttribute('data-track'), {
    location: el.getAttribute('data-track-location') || undefined,
    href: el.getAttribute('href') || undefined
  }, { transport: 'sendBeacon' });
});
