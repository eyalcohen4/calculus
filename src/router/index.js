import Vue from 'vue';
import Router from 'vue-router';

import Percent from '@/pages/percent/percent.page';
import BMI from '@/pages/bmi/bmi.page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'navigation.percent',
      component: Percent,
    },
    {
      path: '/BMI',
      name: 'navigation.bmi',
      component: BMI,
    },
  ],
});
