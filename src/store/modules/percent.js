/* eslint-disable no-param-reassign */
import { percentFromNumber } from '@/lib/percentage';

export default {
  state: {
    fromNumber: {
      inputs: {
        number: {
          id: 'perFromNumber-number',
          value: 0,
          label: 'sum',
        },
        summary: {
          id: 'perFromNumber-percent',
          value: 0,
          label: 'percent',
        },
      },
      title: 'cards.percent_from_number',
      button: 'button',
      handler: percentFromNumber,
    },
  },

  actions: {
    INPUTS: ({ commit }, inputs) => {
      commit('SET_INPUTS', { inputs });
    },
  },

  mutations: {
    SET_INPUTS: (state, { inputs }) => {
      state.inputs = inputs;
    },
  },

  getters: {
    inputs: state => state.inputs,
  },
};
