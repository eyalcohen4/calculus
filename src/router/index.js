import Vue from 'vue';
import Router from 'vue-router';
import Percent from '@/pages/percent/percent.page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Percent',
      component: Percent,
    },
  ],
});
