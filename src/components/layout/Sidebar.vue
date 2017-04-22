<template>
  <div v-if="show" class="sidebar" :class="{ 'sidebar--active': show, 'sidebar--left': left }">
    <span class="sidebar__close" @click="closeSidebar">X</span>
    <nav class="sidebar__navigation">
      <ul class="sidebar__navigation__list">
        <li v-for="navItem in routes" class="sidebar__navigation__list__item">
          <router-link :to="navItem.path" v-text="$t(navItem.name)" class="sidebar__navigation__list__item__link"></router-link>
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
    props: {
      show: { type: Boolean },
      left: { type: Boolean },
    },
    methods: {
      closeSidebar() {
        this.$emit('close');
      },
    },
    updated() {
      const overlay = document.getElementById('sidebar-overlay');
      if (this.show) {
        overlay.classList.add('active');
      } else {
        overlay.classList.remove('active');
      }
    },
  };
</script>
