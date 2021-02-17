<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="red-gray"
      src="https://images.unsplash.com/photo-1613328007570-379c5b22317d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      :overlay-opacity="5"
      tag="aside"
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Nested Lazy loading</v-toolbar-title>
    </v-app-bar>
    <Content />
  </v-app>
</template>

<script>
  import Content from './content.vue'

  export default {
    components: {
      Content,
    },
    data: () => ({ drawer: false }),
  }
</script>

<style scoped lang="scss">
  aside {
    opacity: 0.5;
  }
</style>
