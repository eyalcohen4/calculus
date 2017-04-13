<template>
  <div class="perFromNumber">
    <calcCard :result="result" :title="title" :inputs="inputs" :handler="handler" :button="button"></calcCard>
  </div>
</template>

 <script>
 /* eslint-disable no-underscore-dangle */
  import { hundredPercentFromPercant } from '@/lib/percentage';
  import calcCard from '@/HoC/calculation-card';

  export default {
    name: 'percentFromNumber',

    components: {
      calcCard,
    },

    data() {
      return {
        title: 'cards.how_much_is_100',
        handler: this.handler,
        inputs: [
          {
            id: 'perFromNumber-number',
            value: 0,
            label: 'sum',
            required: true,
          },
          {
            id: 'perFromNumber-percent',
            value: 0,
            label: 'percent',
            required: true,
          },
        ],
        button: 'calc',
        result: '?',

      };
    },

    methods: {
      handler() {
        const num = this.inputs[0].value;
        const percent = this.inputs[1].value;

        this.result = hundredPercentFromPercant(percent, num);
      },
    },
  };

</script>
