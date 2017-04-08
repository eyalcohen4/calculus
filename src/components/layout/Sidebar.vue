<template>
  <div class="mobile-only sidebar">

    <div>
      <md-button class="sidebar__button" @click.native="toggleRightSidenav">
        <i class="material-icons">menu</i>
      </md-button>
    </div>

    <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
    </md-sidenav>

  </div>
</template>

<script>
export default {
  name: 'sidebar',
  methods: {
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
  },
};
</script>
