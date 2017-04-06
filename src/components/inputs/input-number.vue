<template>
  <md-input-container>

    <label :for="id">Number</label>
    <md-input 
      type="number" 
      :id="id" 
      :value="value" 
      :placeholder="placeholder"
      @change="updateValue($event)"
      ></md-input>

  </md-input-container>
</template>

<script>
  export default {
    name: 'input-number',
    props: {
      id: { type: String, required: true },
      value: { type: String, required: true },
      placeholder: { type: String },
    },
    methods: {
      updateValue(number) {
        this.$emit('input', number);
      },
    },
  };
</script>
