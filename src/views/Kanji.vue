<template>
  <div>
    <h1>
      <v-icon
        large
        class="icn"
        color="black">
        mdi-ideogram-cjk
      </v-icon>
      Kanji
    </h1>
    <v-btn 
      class="categories" 
      large
      to="range"
      color="primary">
      <v-icon class="icn">mdi-cog-outline</v-icon>
      &nbsp;Zakres
    </v-btn>
    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          color="primary">
          Lista kanji
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          color="primary">
          Złożenia
        </v-btn>
      </v-row>
    </v-col>
  </div>
</template>
