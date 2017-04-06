import template from './percent.page.html';

export function percentageFromSum(percent, number) {
  return (number / 100) * percent;
}

export function percentageOfNumberFromSum(numberOf, numberFrom) {
  return numberOf / (numberFrom / 100);
}

export function hundredPercentFromPercantage(percent, number) {
  return (number / percent) * 100;
}


export default {
  name: 'percent',
  template,
  data() {
    return {
      message: 'Hello Vue',
    };
  },
};
