/* eslint-disable no-unused-vars */

import percentFromNumber from '@/components/cards/percent-from-number';
import percentFromPercent from '@/components/cards/percent-from-percent';
import percentOfNumber from '@/components/cards/percent-of-number';

import template from './percent.page.html';

export default {
  name: 'percent',
  template,
  components: { percentFromNumber, percentOfNumber, percentFromPercent },
  data() {
    return {
      title: 'percentage_calculator',
    };
  },
};
