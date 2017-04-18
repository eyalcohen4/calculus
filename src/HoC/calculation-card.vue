<template>
  <div class="calculation-card">
    <div class="calculation-card__header">
      <span v-text="$t(title)" class="calculation-card__header__title"></span>
    </div>

    <form>
    <div class="calculation-card__content">
      <div class="small-6 large-12 columns">
        <inputNumber
          key="input.id"
          v-for="input in inputs"
          v-model="input.value"
          :id="input.id"
          :label="input.label"
          :required="input.required"
          class="calculation-card-content__item">
        </inputNumber>
        <span v-text="$t(error)"></span>
      </div>
      <div class="small-6 large-12 columns">
        <div class="calculation-card__content__result">
          <span class="calculation-card__content__result__sign"> = </span>
          <span class="calculation-card__content__result__number">
            {{ result }}
            <span v-if="percent"> % </span>
          </span>
        </div>
      </div>

    </div>

    <div class="calculation-card__actions">
      <button @click="handler" class="calculation-card__actions__button" v-text="$t(button)"></button>
    </div>
  </form>
  </div>
</template>

<script>
  import inputNumber from '@/components/inputs/input-number';

  export default {
    name: 'percent-card',
    props: {
      title: { type: String, required: true },
      subtitle: { type: String },
      handler: { type: Function, required: true },
      button: { type: String, rqeuired: true },
      inputs: { type: Array, required: true },
      percent: { type: Boolean },
      result: { type: [Number, String] },
      error: { type: String },
    },
    components: {
      inputNumber,
    },
    methods: {
      actionClick() {
        return this.handler();
      },
    },
  };
</script>

