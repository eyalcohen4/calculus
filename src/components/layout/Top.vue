<template>
  <header class="header">
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

  export default {
    name: 'top',
    components: {
      Navigation,
    },
  };
</script>
