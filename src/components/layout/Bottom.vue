<template>
  <footer class="footer">
    <div class="footer__credit">
      Powered By 
    </div>
    <div class="footer__switch-language">
      <switchLanguage></switchLanguage>
    </div>
  </footer>
</template>

<script>
  import switchLanguage from '@/components/switch-language';

  export default {
    name: 'bottom',

    components: {
      switchLanguage,
    },
  };
</script>
