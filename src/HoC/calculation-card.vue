<template>
<md-card md-with-hover>
  <md-card-header v-if="title">
    <div class="md-title">{{ title }}</div>
    <div class="md-subhead" v-if="subtitle">{{ subtitle }}</div>
  </md-card-header>

  <md-card-content>
    <inputNumber
      v-for="input in inputs"
      key="input.id"
      :id="input.id"
      v-model="input.value"
      :label="input.label">
    </inputNumber>

    <md-card-actions>
      <md-button @click.native="handler">
        {{ button }}
      </md-button>
    </md-card-actions>
    <span v-if="result"> {{ result }} </span>
  </md-card-content>
</md-card>
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

