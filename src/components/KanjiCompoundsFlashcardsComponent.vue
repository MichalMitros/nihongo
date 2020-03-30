<template>
  <v-container>
      <v-col>
        <div v-if="!showStartPage">
          <v-card @click="active = !active" class="mb-6 flashCard" elevation="14">
            <v-responsive :aspect-ratio="1/1">
                <div v-show="!active" class="text-center flashcardContent-kanji display-2">
                  <v-spacer></v-spacer>
                  <p></p>
                  <p></p>
                  <p>{{ learningSet[currentSign].kanji }}</p>
                </div>
                <div v-show="active" class="text-center flashcardContent headline">
                    <p> </p>
                    <p> </p>
                    <p> </p>
                    <p></p>
                    <p></p>
                    <p>{{ learningSet[currentSign].kana }}</p>
                    <p>{{ learningSet[currentSign].value }}</p>
                </div>
            </v-responsive>
          </v-card>
          <div class="d-flex justify-center">
              <v-spacer></v-spacer>
              <v-btn large text color="primary" @click="currentSign = currentSign === learningSet.length-1 ? 0 : currentSign+1, active = false">Następne</v-btn>
              <v-spacer></v-spacer>
          </div>
        </div>
        <div v-else>
          <div class="mb-2">
            <v-switch v-model="shuffle" label="Kolejność losowa"></v-switch>
            <h3>Zakres:</h3>
            <v-combobox
              v-model="selectedSets"
              :items="kanjiSets"
              label="Wybierz zestaw do nauki"
              multiple
              clearable
              open-on-clear
            ></v-combobox>
            <span class="title">
              Wciśnij fiszkę, aby zobaczyć tłumaczenie.
            </span>
          </div>
          <div class="d-flex justify-center">
              <v-spacer></v-spacer>
              <v-btn large :disabled="selectedSets.length === 0" color="primary" @click="start">Start</v-btn>
              <v-spacer></v-spacer>
          </div>
        </div>
      </v-col>
  </v-container>
</template>

<script>
import { compounds } from "../data/kanji";

export default {
  name: 'KanjiCompoundsFlashcardsComponent',

  data: () => ({
    learningSet: [],
    currentSign: 0,
    active: false,
    showStartPage: true,
    kanjiSets: [],
    selectedSets: [],
    shuffle: true
  }),
  mounted() {
    let n = 1;
    compounds.forEach(kanjiSet => {
      this.kanjiSets.push("Kanji " + n);
      this.selectedSets.push("Kanji " + n);
      n++;
    });
    this.kanjiSets = this.kanjiSets.reverse();
  },
  methods: {
    start() {
      this.learningSet = [];
      let indexes = [];
      this.selectedSets.forEach(set => {
        indexes.push(Number(set.slice(6))-1);
        if(indexes[indexes.length-1] === undefined) {
          this.selectedSets = [];
          return;
        }
      });
      
      
      for(let i=0; i<compounds.length; i++) {
        if(indexes.includes(i)) {
          
          compounds[i].forEach(sign => {
            this.learningSet.push(sign);
          })
        }
      }

      if(this.shuffle) {
        this.shuffleLearningSet();
      }

      this.showStartPage = false;
    },
    shuffleLearningSet() {
      for(let i=0; i<this.learningSet.length; i++) {
        let n = Math.floor(Math.random() * this.learningSet.length);
        let tmp = this.learningSet[i];
        this.learningSet[i] = this.learningSet[n];
        this.learningSet[n] = tmp;
      }
    }
  }
}
</script>

<style lang="scss">
.flashcardContent {
  text-align: center;
  align-items: center;
  padding: 0.5rem;
  height: 100%;
}
.flashcardContent-kanji {
  text-align: center;
  align-items: center;
  padding: 0.5rem;
  padding-top: 3rem;
  height: 100%;
}
.flashCard {
  align-items: center;
  margin: auto;
  width: 50%;
}
@media only screen and (max-width: 720px) {
	.flashCard {
    align-items: center;
    margin: auto;
    width: 100%;
  }
}
</style>
