<template>
  <div>
    <h1>
      <v-icon
        large
        class="icn"
        color="black">
        mdi-file-edit
      </v-icon>
      Nauka
    </h1>
    
    <h2 class="categoryDivider">Kanji</h2>

    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          @click="opt = 0, dialog = true"
          color="primary">
          Fiszki (BETA)
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          @click="opt = 1, dialog = true"
          disabled
          color="primary">
          Quiz
        </v-btn>
      </v-row>
    </v-col>

    <h2 class="categoryDivider">Złożenia kanji</h2>

    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          @click="opt = 2, dialog = true"
          color="primary">
          Fiszki (BETA)
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          disabled
          color="primary">
          Quiz
        </v-btn>
      </v-row>
    </v-col>

    <v-divider class="categoryDivider"></v-divider>

    <h2 class="categoryDivider">Czasowniki</h2>

    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          disabled
          color="primary">
          Fiszki
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          disabled
          color="primary">
          Quiz
        </v-btn>
      </v-row>
    </v-col>

    <h2 class="categoryDivider">Przymiotniki</h2>

    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          disabled
          color="primary">
          Fiszki (wszystkie)
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          disabled
          color="primary">
          Quiz (wszystkie)
        </v-btn>
      </v-row>
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          disabled
          color="primary">
          Fiszki (い-przymiotniki)
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          disabled
          color="primary">
          Quiz (い-przymiotniki)
        </v-btn>
      </v-row>
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          disabled
          color="primary">
          Fiszki (な-przymiotniki)
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          disabled
          color="primary">
          Quiz (な-przymiotniki)
        </v-btn>
      </v-row>
    </v-col>

    <h2 class="categoryDivider">Czas/częstotliwości</h2>

    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          disabled
          color="primary">
          Fiszki
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          disabled
          color="primary">
          Quiz
        </v-btn>
      </v-row>
    </v-col>

    <h2 class="categoryDivider">Słownictwo - wszystkie kategorie</h2>

    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          disabled
          color="primary">
          Fiszki
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          disabled
          color="primary">
          Quiz
        </v-btn>
      </v-row>
    </v-col>

    <v-divider class="categoryDivider"></v-divider>

    <h2 class="categoryDivider">Klasyfikatory</h2>

    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          disabled
          color="primary">
          Fiszki
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          disabled
          color="primary">
          Quiz
        </v-btn>
      </v-row>
    </v-col>

    <div class="categoryDivider"></div>
    <v-dialog persistent v-model="dialog" max-width="35rem">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template> -->
      
      <v-card height="100%">
        <v-card-title class="headline grey lighten-2">
          <span v-if="opt == 0">Fiszki Kanji</span>
          <span v-if="opt == 1">Quiz Kanji</span>
          <span v-if="opt == 2">Fiszki - Złożenia</span>
          <v-spacer></v-spacer>
          <v-btn @click="dialog=false, opt = -1" icon ><v-icon>mdi-close</v-icon></v-btn>
          </v-card-title>
        <v-card-text>
          <KanjiFlashcardsComponent v-if="opt == 0"></KanjiFlashcardsComponent>
          <KanjiQuizComponent v-if="opt == 1"></KanjiQuizComponent>
          <KanjiCompoundsFlashcardsComponent v-if="opt == 2"></KanjiCompoundsFlashcardsComponent>
        </v-card-text>
      </v-card>
    </v-dialog>
    

  </div>
</template>

<script>
import KanjiFlashcardsComponent from "../components/KanjiFlashcardsComponent";
import KanjiQuizComponent from "../components/KanjiQuizComponent";
import KanjiCompoundsFlashcardsComponent from "../components/KanjiCompoundsFlashcardsComponent";

export default {
  name: 'Learning',
  components: {
    KanjiFlashcardsComponent,
    KanjiQuizComponent,
    KanjiCompoundsFlashcardsComponent
  },
  data: () => ({
    opt: 0,
    dialog: false
  }),
  methods: {
  }
}
</script>

<style lang="scss">
.categoryDivider {
  margin-top: 2rem;
}
</style>
