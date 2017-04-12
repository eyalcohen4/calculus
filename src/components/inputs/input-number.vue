<template>
  <div class="input-number">
    <label :for="id" class="input-number__label"></label>
    <input type="number" :id="id" :value="value" @change="updateValue($event)" class="input-number__input">
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
    },
    methods: {
      updateValue(e) {
        this.$emit('input', e.currentTarget.value);
      },
    },
  };
</script>
