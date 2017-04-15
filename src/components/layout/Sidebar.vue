<template>
  <div>
    <nav class="navigation">
      <ul class="navigation__list">
        <li v-for="navItem in routes" class="navigation__list__item">
          <router-link :to="navItem.path" v-text="$t(navItem.name)" class="navigation__list__item__link"></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import router from '@/router';

  export default {
    name: 'sidebar',
    data() {
      return {
        routes: router.options.routes,
      };
    },
  };
</script>
