<template>
  <div class="result">
    <span class="result__value">
      {{ result }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'card-result',
    props: {
      result: { type: [String, Number], required: true },
    },
  };
</script>
