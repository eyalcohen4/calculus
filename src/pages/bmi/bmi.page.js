/* eslint-disable no-unused-vars */

import BMICard from '@/components/cards/BMI';

import template from './bmi.page.html';

export default {
  name: 'bmi',
  template,
  components: { BMICard },
  data() {
    return {
      title: 'bmi_calculator',
    };
  },
};
