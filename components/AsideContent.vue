<template>
  <div>
    <v-btn text color="white" width="260" class="mt-10" :large="true">
      <v-icon class="pr-3">mdi-music</v-icon>
      <nuxt-link to="/RecentTracks">Последние песни</nuxt-link>
    </v-btn>
    <v-divider></v-divider>
    <v-btn text color="white" width="260" class="mt-10" :large="true">
      <v-icon class="pr-3">mdi-album</v-icon>
      Альбом "С тобой"
    </v-btn>
    <v-divider></v-divider>
    <v-btn text color="white" width="260" class="mt-10" :large="true">
      <v-icon class="pr-3">mdi-archive</v-icon>
      Архив
    </v-btn>
    <v-divider></v-divider>
    <Player />
  </div>
</template>
