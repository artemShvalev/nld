<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="red-gray"
      src="https://images.unsplash.com/photo-1613427924070-d03cbf10bb3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      :overlay-opacity="5"
      tag="aside"
    >
      <AsideContent />
    </v-navigation-drawer>
    <Header />
    <Content />
  </v-app>
</template>

<script>
  import AsideContent from '../components/AsideContent'
  import Header from '../components/Header'
  import Content from './content.vue'

  export default {
    components: {
      Content,
      AsideContent,
      Header,
    },
    computed: {
      ToogleDriver() {
        return this.$store.state.data
      },
    },
  }
</script>

<style scoped lang="scss">
  aside {
    opacity: 1.7;
  }
</style>
