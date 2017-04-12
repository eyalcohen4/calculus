/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

import percent from '@/store/modules/percent';

Vue.use(Vuex);

const DEFAULT_LOCALE = 'he';

const store = new Vuex.Store({
  modules: {
    percent,
  },

  state: {
    locale: DEFAULT_LOCALE,
    card: null,
  },

  actions: {
    LOCALE: ({ commit }, locale) => {
      commit('SET_LOCALE', { locale });
    },
  },

  mutations: {
    SET_LOCALE: (state, { locale }) => {
      state.locale = locale;
    },
  },

  getters: {
    locale: state => state.locale,
  },
});

export default store;
