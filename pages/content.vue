<template>
  <v-main class="mt-8">
    <v-card class="ml-5" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Последние песни</v-card-title>
      </v-img>

      <v-card-text class="text--primary"> </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Слушать </v-btn>

        <v-btn color="orange" text> Скачать </v-btn>
      </v-card-actions>
    </v-card>
    <v-spacer />
    <!-- 2 Карточка -->
    <v-card class="ml-5 mt-10" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Старые песни</v-card-title>
      </v-img>

      <v-card-text class="text--primary"> </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Слушать </v-btn>

        <v-btn color="orange" text> Скачать </v-btn>
      </v-card-actions>
    </v-card>
    <!-- 2 Карточка -->
  </v-main>
</template>

<script>
  export default {}
</script>

<style></style>
