<template>
  <ul class="switch-language">
     <li v-for="(value, key) in languages" v-text="value" @click="changeLocale(key)" class="switch-language__language"></li>
  </ul>
</template>

<script>
  import changeDirection from '@/lib/change-direction';
  import setLocale from '@/i18n/index';
  import { languages } from '@/i18n/locales';

  export default {
    name: 'switch-language',

    data() {
      return {
        languages,
      };
    },

    computed: {
      locale() {
        return this.$store.getters.locale;
      },
    },

    methods: {
      changeLocale(locale) {
        if (locale === 'he') {
          changeDirection('rtl');
        } else {
          changeDirection('ltr');
        }

        setLocale(locale);
        this.$store.dispatch('LOCALE', locale);
      },
    },
  };
</script>
