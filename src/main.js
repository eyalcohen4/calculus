// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable global-require  */

import Vue from 'vue';
import VueHelmet from 'vue-helmet';
import { sync } from 'vuex-router-sync';

import '@/style/index.scss';

import changeDirection from '@/lib/change-direction';
import changeLanguage from '@/lib/change-language';

import App from './App';
import store from './store';
import router from './router';
import setLocale from './i18n';

Vue.config.productionTip = false;

setLocale('he');
sync(store, router);

if (store.getters.locale === 'he') {
  changeLanguage('he');
  changeDirection('rtl');
} else {
  changeLanguage('en');
  changeDirection('ltr');
}

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/static/sw.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
    VueHelmet,
  },
});
