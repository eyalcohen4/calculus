<template>
  <header class="header">
    <button class="open-sidebar mobile-only" @click="changeSidebar">=</button>
    <div class="header__logo">
      <img src="static/images/logo.png" class="header__logo__img" alt="Calculus Logo"></img>
    </div>
    <div class="header__menu">
      <Navigation class="desktop-only"></Navigation>
      <Sidebar :show="showSidebar" :left="sidebarLeft" v-on:close="changeSidebar"></Sidebar>
    </div>
  </header>
</template>

<script>
  import Navigation from './Navigation';
  import Sidebar from './Sidebar';

  export default {
    name: 'top',
    data() {
      return {
        showSidebar: false,
        sidebarLeft: false,
      };
    },
    components: {
      Navigation,
      Sidebar,
    },
    methods: {
      changeSidebar() {
        const language = this.$store.getters.locale;
        if (language !== 'he') {
          this.sidebarLeft = true;
        }

        if (this.showSidebar) {
          this.showSidebar = false;
        } else {
          this.showSidebar = true;
        }
      },
    },
  };
</script>
