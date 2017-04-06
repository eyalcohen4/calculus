import template from './percent.page.html';

export function percentageFromSum(percent, number) {
  return (number / 100) * percent;
}

function percentageOfNumberFromSum(number, sum) {
  return (sum / 100) / number;
}

const sum = percentageOfNumberFromSum(10, 20);


export default {
  name: 'percent',
  template,
  data() {
    return {
      message: 'Hello Vue',
      sum,
    };
  },
};
