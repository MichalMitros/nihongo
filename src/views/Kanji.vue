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
    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          @click=" showKanji = true; showCompound = false; $vuetify.goTo('#components', {duration: 750})"
          color="primary">
          Lista kanji
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          @click=" showKanji = false; showCompound = true; $vuetify.goTo('#components', {duration: 750})"
          color="primary">
          Złożenia
        </v-btn>
      </v-row>
    </v-col>
    <div id="components">
      <KanjiComponent v-if="showKanji"></KanjiComponent>
      <KanjiCompoundComponent v-if="showCompound"></KanjiCompoundComponent>
    </div>
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="pink"
      v-if="showKanji"
      @click="$vuetify.goTo(-9999, {duration: 750})"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import KanjiComponent from "../components/KanjiComponent";
import KanjiCompoundComponent from "../components/KanjiCompoundComponent";

export default {
  name: 'Kanji',
  components: {
    KanjiComponent,
    KanjiCompoundComponent
  },
  data: () => ({
    showKanji: false,
    showCompound: false
  }),
  methods: {
  }
}
</script>

<style lang="scss">
#components {
  margin-top: 2rem;
}
</style>
