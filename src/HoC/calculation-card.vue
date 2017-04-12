<template>
  <div>
    <div>
      <span> {{ title }} </span>
      <span v-if="subtitle"> {{ subtitle }} </span>
    </div>
    
    <div>
       <inputNumber
      v-for="input in inputs"
      key="input.id"
      :id="input.id"
      v-model="input.value"
      :label="input.label">
    </inputNumber>
    <button @click="handler"> {{ button }} </button>
    </div>
    <span v-if="result"> {{ result } }</span>
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

