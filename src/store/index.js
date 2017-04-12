/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const DEFAULT_LOCALE = 'he';

const store = new Vuex.Store({
  state: {
    locale: DEFAULT_LOCALE,
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
