<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Nested Lazy loading</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    computed: {
      ToogleDriver() {
        return this.$store.state.data
      },
    },
  }
</script>
