<template>
  <header class="header">
    <Sidebar class="mobile-only"></Sidebar>
    <div class="header__logo">
      LOGO
    </div>
    <div class="header__menu">
      <Navigation class="desktop-only"></Navigation>
    </div>
  </header>
</template>

<script>
  import Navigation from './Navigation';
  import Sidebar from './Sidebar';

  export default {
    name: 'top',
    components: {
      Navigation,
      Sidebar,
    },
  };
</script>
