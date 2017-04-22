import Vue from 'vue';
import Router from 'vue-router';

// import Examples from '@/pages/examples/examples.page';
import BMI from '@/pages/bmi/bmi.page';
import Percent from '@/pages/percent/percent.page';
import Time from '@/pages/time/time.page';

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
    {
      path: '/Time',
      name: 'navigation.time',
      component: Time,
    },
    // Uncomment this when examples needed
    // {
    //   path: '/Examples',
    //   name: 'examples',
    //   component: Examples,
    // },
  ],
});
