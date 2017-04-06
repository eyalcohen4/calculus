<template>
  <md-input-container>

    <label :for="id">{{ label }}</label>
    <md-input
      type="number"
      :id="id"
      :value="value"
      @change="updateValue($event)">
    </md-input>

  </md-input-container>
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
      updateValue(number) {
        this.$emit('input', number);
      },
    },
  };
</script>
