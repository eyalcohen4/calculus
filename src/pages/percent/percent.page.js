  import he from '@/language/he';

  import calcCard from '@/HoC/calculation-card';
  import template from './percent.page.html';

  export default {
    name: 'percent',
    template,
    components: { calcCard },
    data() {
      return {
        cards: {
          perFromSum: {
            title: he.PERCENTAGE_FROM_SUM_TITLE,
            button: he.CALC,
            inputs: [
              {
                id: 'perFromSum-per',
                value: null,
                label: he.PERCANTAGE,
              },
              {
                id: 'perFromSum-sum',
                value: null,
                label: he.SUM,
              },
            ],
            result: null,
          },
        },
      };
    },
    methods: {
      perFromSum() {
        const card = this.cards.perFromSum;
        const number = card.inputs[0].value;
        const percent = card.inputs[1].value;
        card.result = (number / 100) * percent;
      },
      perOfNumberFromNumber(numberOf, numberFrom) {
        return numberOf / (numberFrom / 100);
      },
      fullPerFromPer(percent, number) {
        return (number / percent) * 100;
      },
    },
  };
