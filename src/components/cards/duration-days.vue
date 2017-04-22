<template>
  <div class="durationDays">
    <timeCard :type="type" :title="title" :handler="handler" :inputs="inputs" :button="button" :result="result"></timeCard>
  </div>
</template>

 <script>
 /* eslint-disable no-underscore-dangle */
  import { durationBetweenDays } from '@/lib/time';
  import timeCard from '@/HoC/time-card';

  export default {
    name: 'duration-days',

    components: {
      timeCard,
    },

    data() {
      return {
        type: 'days',
        title: 'cards.duration_days',
        handler: this.handler,
        inputs: [
          {
            id: 'duration-date-time-from',
            value: 0,
            label: 'time.from',
            required: true,
          },
          {
            id: 'duration-date-time-to',
            value: 0,
            label: 'time.to',
            required: true,
          },
        ],
        button: 'calc',
        result: '?',
      };
    },

    methods: {
      handler() {
        const from = this.inputs[0].value;
        const to = this.inputs[1].value;

        this.result = durationBetweenDays(from, to);
      },
    },
  };

</script>
