/* eslint-disable no-unused-vars */

import { percentageFromNumber, percentageOfNumber, hundredPercentageFromPercantage } from '@/lib/percentage';
import calcCard from '@/HoC/calculation-card';
import template from './percent.page.html';

export default {
  name: 'percent',
  template,
  components: { calcCard },
  data() {
    return {
    };
  },
};
