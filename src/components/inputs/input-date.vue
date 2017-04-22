<template>
  <div class="input-date">
    <span v-text="$t(label)"></span>
    <date-picker
      v-on:selected="updateValue"
      :language="language"
      :clearButton="true"
      wrapperClass="input-date__picker"
      inputClass="input-date__picker__input">
      </date-picker>
  </div>
</template>

<script>
  import datePicker from 'vuejs-datepicker';


  export default {
    name: 'input-date',
    props: {
      input: { type: Object, required: true },
      value: { type: null, required: true },
      label: { type: String },
    },
    components: {
      datePicker,
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
