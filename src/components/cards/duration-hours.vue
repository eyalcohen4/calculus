<template>
  <div class="durationDays">
    <timeCard :type="type" :title="title" :handler="handler" :inputs="inputs" :button="button" :result="result"></timeCard>
  </div>
</template>

 <script>
 /* eslint-disable no-underscore-dangle */
  import { durationBetweenHours } from '@/lib/time';
  import timeCard from '@/HoC/time-card';

  export default {
    name: 'duration-days',

    components: {
      timeCard,
    },

    data() {
      return {
        type: 'hours',
        title: 'cards.duration_hours',
        handler: this.handler,
        inputs: [
          {
            id: 'duration-time-from',
            value: 0,
            label: 'time.from',
            required: true,
          },
          {
            id: 'duration-time-to',
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

        this.result = durationBetweenHours(from, to);
      },
    },
  };

</script>
