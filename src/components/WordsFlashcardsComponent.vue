<template>
  <v-container>
      <v-col>
        <div v-if="!showStartPage">
          <v-card @click="active = !active" class="mb-6 flashCard" elevation="14">
            <v-responsive :aspect-ratio="1/1">
                <div v-show="!active" class="text-center flashcardContent-kanji display-2">
                  <v-spacer></v-spacer>
                  <p></p>
                  <p>{{ learningSet[currentWord].key }}</p>
                </div>
                <div v-show="active" class="text-center flashcardContent-kanji display-1">
                    <p>{{ learningSet[currentWord].value }}</p>
                </div>
            </v-responsive>
          </v-card>
          <div class="d-flex justify-center">
              <v-spacer></v-spacer>
              <v-btn large text color="primary" @click="currentWord = currentWord === learningSet.length-1 ? 0 : currentWord+1, active = false">Następne</v-btn>
              <v-spacer></v-spacer>
          </div>
        </div>
        <div v-else>
          <div class="mb-2">
            <v-switch v-model="shuffle" v-if="categories && categories.length > 0" label="Kolejność losowa"></v-switch>
            <span class="title">
              Wciśnij fiszkę, aby zobaczyć tłumaczenie.
            </span>
          </div>
          <div class="d-flex justify-center">
              <v-spacer></v-spacer>
              <v-btn large color="primary" @click="start">Start</v-btn>
              <v-spacer></v-spacer>
          </div>
        </div>
      </v-col>
  </v-container>
</template>

<script>
import { dictionary } from "../data/dictionary";

export default {
  name: 'WordsFlashcardsComponent',

  data: () => ({
    learningSet: [],
    currentWord: 0,
    showStartPage: true,
    active: false,
    shuffle: false
  }),
  methods: {
    start() {
      this.learningSet = [];
      
      if(this.categories && this.categories.length > 0) {
        for(let i=0; i<dictionary.length; i++) {
            if(this.categories.includes(i)) {
                dictionary[i].forEach(word => {
                    this.learningSet.push(word);
                });
            }
        }
      } else {
        this.shuffle = true;
        for(let i=0; i<dictionary.length; i++) {
            dictionary[i].forEach(word => {
                this.learningSet.push(word);
            });
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
  },
  props: {
    categories: Array
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
