<template>
  <div class="input-date">
    <input type="text" class="input-date__input" :required="input.required"
      @change="updateValue($event)">
    <label :for="input.id" v-text="$t(label)"></label>
  </div>
</template>

<script>
  import timePicker from 'vuejs-datepicker';

  export default {
    name: 'input-date',
    props: {
      input: { type: Object, required: true },
      value: { type: null, required: true },
      label: { type: String },
    },
    components: {
      timePicker,
    },
    data() {
      return {
        language: this.$store.getters.locale,
      };
    },
    methods: {
      updateValue(e) {
        this.$emit('input', e);
      },
    },
  };
</script>
