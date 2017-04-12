<template>
  <div>
    <nav class="navigation">
      <ul class="navigation__list">
        <li v-for="navItem in items" class="navigation__list__item">{{ navItem }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>

  export default {
    name: 'navigation',
    data() {
      return {
        items: [
        ],
      };
    },
  };
</script>
