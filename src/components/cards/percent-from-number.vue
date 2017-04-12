<template>
  <div class="perFromNumber">
    <calcCard :result="result" :title="title" :inputs="inputs" :handler="handler" :button="button"></calcCard>
  </div>
</template>

 <script>
 /* eslint-disable no-underscore-dangle */
  import { percentFromNumber } from '@/lib/percentage';
  import calcCard from '@/HoC/calculation-card';

  export default {
    name: 'percentFromNumber',

    components: {
      calcCard,
    },

    data() {
      return {
        title: 'cards.percent_from_number',
        handler: this.handler,
        inputs: [
          {
            id: 'perFromNumber-number',
            value: 0,
            label: 'sum',
          },
          {
            id: 'perFromNumber-percent',
            value: 0,
            label: 'percent',
          },
        ],
        button: 'button',
        result: null,
      };
    },

    methods: {
      handler() {
        const num = this.inputs[0].value;
        const percent = this.inputs[1].value;

        this.result = percentFromNumber(num, percent);
      },
    },
  };

</script>
