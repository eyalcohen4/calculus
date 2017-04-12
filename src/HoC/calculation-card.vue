<template>
  <div class="card">
    <span v-text="$t(title)" class="card__title"></span>

    <div class="card__content">
      <inputNumber
        key="input.id"
        v-for="input in inputs"
        v-model="input.value"
        :id="input.id"
        :label="input.label"
        class="card__content__item">
      </inputNumber>
    </div>
    <div class="card__actions">
      <button @click="handler" class="card__actiobs__button"> {{ button }} </button>
    </div>
    <div class="card__result">
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
      result: { type: String },
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

