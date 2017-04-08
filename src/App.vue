<template>
  <div id="app">
    <top></top>
    <main>
      <router-view></router-view>
    </main>
    <bottom></bottom>
  </div>
</template>

<script>
import top from '@/components/layout/Top';
import bottom from '@/components/layout/Bottom';

export default {
  name: 'app',
  components: {
    top,
    bottom,
  },
};
</script>

<style>

</style>
