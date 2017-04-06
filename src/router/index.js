import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import Percent from '@/pages/percent/percent.page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/percent',
      name: 'Percent',
      component: Percent,
    },
  ],
});
