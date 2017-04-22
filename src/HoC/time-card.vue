<template>
  <div class="calculation-card">
    <div class="calculation-card__header">
      <span v-text="$t(title)" class="calculation-card__header__title"></span>
    </div>

    <div class="calculation-card__content">
      <div class="small-12 large-12 columns">

        <inputDate
          v-if="type === 'days'"
          key="input.id"
          v-for="input in inputs"
          v-model="input.value"
          :input="input"
          :label="input.label"
          class="calculation-card__content__item">
        </inputDate>

        <inputHours
          v-if="type === 'hours'"
          key="input.id"
          v-for="input in inputs"
          v-model="input.value"
          :input="input">
        </inputHours>

        <span v-text="$t(resultTitle)"></span>
        <card-result :result="result"></card-result>
        <span v-text="$t(error)"></span>
      </div>
    </div>

    <div class="calculation-card__actions">
      <button @click.prevent="handler" class="calculation-card__actions__button" v-text="$t(button)"></button>
    </div>
  </div>
</template>

<script>
  import inputDate from '@/components/inputs/input-date';
  import inputHours from '@/components/inputs/input-hours';
  import cardResult from '@/components/card-result';

  export default {
    name: 'time-card',
    props: {
      type: { type: String, required: true },
      title: { type: String, required: true },
      subtitle: { type: String },
      handler: { type: Function, required: true },
      button: { type: String, rqeuired: true },
      inputs: { type: Array, required: true },
      percent: { type: Boolean },
      result: {
        type: [Number, String],
        default() { return 0; },
      },
      resultTitle: { type: String },
      error: { type: String },
    },
    components: {
      inputDate,
      cardResult,
      inputHours,
    },
    methods: {
      actionClick() {
        return this.handler();
      },
    },
  };
</script>

