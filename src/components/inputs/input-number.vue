<template>
  <div class="input-number">
    <input type="number" :id="id" @change="updateValue($event)" step="any" :required="required" class="input-number__input">
    <label :for="id" class="input-number__label" v-text="$t(label)"></label>
  </div>
</template>

<script>
  export default {
    name: 'input-number',
    props: {
      id: { type: String, required: true },
      value: { type: null, required: true },
      placeholder: { type: String },
      label: { type: String },
      required: { type: Boolean, required: true },
    },
    methods: {
      updateValue(e) {
        this.$emit('input', e.currentTarget.value);
      },
    },
  };
</script>
