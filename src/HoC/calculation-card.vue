<template>
  <div class="calculation-card">
    <div class="calculation-card__header">
      <span v-text="$t(title)" class="calculation-card__header__title"></span>
    </div>

    <div class="calculation-card__content">
      <inputNumber
        key="input.id"
        v-for="input in inputs"
        v-model="input.value"
        :id="input.id"
        :label="input.label"
        class="calculation-card-content__item">
      </inputNumber>
    </div>

    <div class="calculation-card__actions">
      <button @click="handler" class="card__actiobs__button" v-text="$t(button)"></button>
    </div>

    <div class="calculation-card__result">
      <span v-if="result"> {{ result }} </span>
    </div>
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
      result: { type: Number },
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

