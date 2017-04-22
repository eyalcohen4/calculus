<template>
  <div class="calculation-card">
    <div class="calculation-card__header">
      <span v-text="$t(title)" class="calculation-card__header__title"></span>
    </div>

    <div class="calculation-card__content">
      <div class="small-12 large-12 columns">

        <inputNumber
          key="input.id"
          v-for="input in inputs"
          v-model="input.value"
          :input="input"
          :label="input.label"
          class="calculation-card-content__item">
        </inputNumber>

        <card-result :result="result"></card-result>
        <span v-text="$t(error)"></span>

      </div>
    </div>

    <div class="calculation-card__actions">
      <button @click.prevent="handler" class="calculation-card__actions__button" v-text="$t(button)"></button>
    </div>

    <div class="calculation-card__result">
      <span v-if="percent"> % </span>
    </div>
  </div>
</template>

<script>
  import inputNumber from '@/components/inputs/input-number';
  import cardResult from '@/components/card-result';

  export default {
    name: 'percent-card',
    props: {
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
      error: { type: String },
    },
    components: {
      inputNumber,
      cardResult,
    },
    methods: {
      actionClick() {
        return this.handler();
      },
    },
  };
</script>

