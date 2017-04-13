<template>
  <div class="perFromNumber">
    <calcCard :result="result" :title="title" :inputs="inputs" :handler="handler" :button="button"></calcCard>
  </div>
</template>

 <script>
 /* eslint-disable no-underscore-dangle */
  import calculateBMI from '@/lib/BMI';
  import calcCard from '@/HoC/calculation-card';

  export default {
    name: 'percentFromNumber',

    components: {
      calcCard,
    },

    data() {
      return {
        title: 'cards.calculate_bmi',
        handler: this.handler,
        inputs: [
          {
            id: 'perFromNumber-height',
            value: 0,
            label: 'bmi.height',
            required: true,
          },
          {
            id: 'perFromNumber-weight',
            value: 0,
            label: 'bmi.weight',
            required: true,
          },
        ],
        button: 'calc',
        result: '?',

      };
    },

    methods: {
      handler() {
        const height = this.inputs[0].value;
        const weight = this.inputs[1].value;

        this.result = calculateBMI(height, weight);
      },
    },
  };

</script>
