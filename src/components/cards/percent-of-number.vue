<template>
  <div class="perFromNumber">
    <calcCard :result="result" :title="title" :inputs="inputs" :handler="handler" :button="button"></calcCard>
  </div>
</template>

 <script>
 /* eslint-disable no-underscore-dangle */
  import { percentOfNumber } from '@/lib/percentage';
  import calcCard from '@/HoC/calculation-card';

  export default {
    name: 'percentOfNumber',

    components: {
      calcCard,
    },

    data() {
      return {
        title: 'cards.percent_of_number',
        handler: this.handler,
        inputs: [
          {
            id: 'perOfNumber-number',
            value: 0,
            label: 'sum',
            required: true,
          },
          {
            id: 'perOfNumber-sum',
            value: 0,
            label: 'sum',
            required: true,
          },
        ],
        error: '',
        button: 'calc',
        result: '?',
        percent: true,
      };
    },

    methods: {
      handler() {
        const num = this.inputs[0].value;
        const sum = this.inputs[1].value;

        if (num < 1 || sum < 1) {
          this.error = 'forms.required';
          return;
        }

        this.result = percentOfNumber(num, sum);
      },
    },
  };

</script>
