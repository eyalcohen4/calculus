// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueHelmet from 'vue-helmet';
import { sync } from 'vuex-router-sync';

import '@/style/index.scss';

import changeDirection from '@/lib/change-direction';

import App from './App';
import store from './store';
import router from './router';
import setLocale from './i18n';

Vue.config.productionTip = false;

setLocale('he');
sync(store, router);

if (store.getters.locale === 'he') {
  changeDirection('rtl');
} else {
  changeDirection('ltr');
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
