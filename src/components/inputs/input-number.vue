<template>
  <div class="input-number">

    <input
      type="number"
      :id="input.id"
      :required="input.required"
      @change="updateValue($event)"
      step="any"
      class="input-number__input">

    <label :for="input.id" class="input-number__label" v-text="$t(label)"></label>

  </div>
</template>

<script>
  export default {
    name: 'input-number',
    props: {
      input: { type: Object, required: true },
      value: { type: null, required: true },
      label: { type: String },
    },
    methods: {
      updateValue(e) {
        this.$emit('input', e.currentTarget.value);
      },
    },
  };
</script>
