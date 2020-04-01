<template>
  <v-container>
      <v-col>
        <div v-if="!showStartPage">
          <div v-if="showQuestion">
            <div class="display-1 questionText mb-6">
                {{ question.text }}
            </div>
            <v-btn large block color="primary" class=" mb-1" @click="selectAnswer(0)">{{ question.answers[0] }}</v-btn>
            <v-btn large block color="primary" class=" mb-1" @click="selectAnswer(1)">{{ question.answers[1] }}</v-btn>
            <v-btn large block color="primary" class=" mb-1" @click="selectAnswer(2)">{{ question.answers[2] }}</v-btn>
            <v-btn large block color="primary" class=" mb-1" @click="selectAnswer(3)">{{ question.answers[3] }}</v-btn>
            <div class="d-flex justify-center">
                <v-spacer></v-spacer>
                <!-- <v-btn large text color="primary" @click="">Następne</v-btn> -->
                <v-spacer></v-spacer>
            </div>
          </div>
          <div v-else>
            <v-card @click="nextQuestion()" class="mb-6 resultCard display-1" elevation="14">
              <v-responsive :aspect-ratio="1/1">
                <span v-if="result.length > 9" class="incorr">
                  {{ result }}
                </span>
                <span v-else class="corr">
                  {{ result }}
                </span>
              </v-responsive>
            </v-card>
          </div>
        </div>
        <div v-else>
          <div class="mb-2">
            <h3>Zakres:</h3>
            <v-combobox
              v-model="selectedSets"
              :items="kanjiSets"
              label="Wybierz zestaw do nauki"
              multiple
              clearable
              open-on-clear
            ></v-combobox>
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
  name: 'KanjiCompoundsQuizComponent',

  data: () => ({
    learningSet: [],
    showStartPage: true,
    kanjiSets: [],
    selectedSets: [],
    question: {
      answers: ['', '', '', ''],
      correctAnswer: 0,
      text: ''
    },
    result: '',
    showQuestion: true
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

      // this.shuffleLearningSet();
      this.nextQuestion();

      this.showStartPage = false;
    },
    shuffleLearningSet() {
      for(let i=0; i<this.learningSet.length; i++) {
        let n = Math.floor(Math.random() * this.learningSet.length);
        let tmp = this.learningSet[i];
        this.learningSet[i] = this.learningSet[n];
        this.learningSet[n] = tmp;
      }
    },
    selectAnswer(ans) {
      if(ans === this.question.correctAnswer) {
        this.result = 'DOBRZE :)'
      } else {
        this.result = 'POPRAWNA ODPOWIEDŹ: ' + this.question.answers[this.question.correctAnswer]
      }

      this.showQuestion = false;
    },
    nextQuestion() {
      let n = Math.floor(Math.random() * this.learningSet.length);
      let option = Math.random();
      this.question = {
        answers: ['', '', '', ''],
        correctAnswer: 0,
        text: ''
      }
      
      if(option < 0.25) {
        this.question.text = this.learningSet[n].kanji;
        this.question.correctAnswer = Math.floor(Math.random() * this.question.answers.length);
        this.question.answers[this.question.correctAnswer] = this.learningSet[n].kana;
        for(let i=0; i<this.question.answers.length; i++) {
          if(this.question.answers[i] == '') {
            let incorr = Math.floor(Math.random() * this.learningSet.length);
            while(incorr === n) {
              incorr = Math.floor(Math.random() * this.learningSet.length);
            }
            this.question.answers[i] = this.learningSet[incorr].kana;
          }
        }
      } else if(option < 0.5) {
        this.question.text = this.learningSet[n].kana;
        this.question.correctAnswer = Math.floor(Math.random() * this.question.answers.length);
        this.question.answers[this.question.correctAnswer] = this.learningSet[n].kanji;
        for(let i=0; i<this.question.answers.length; i++) {
          if(this.question.answers[i] == '') {
            let incorr = Math.floor(Math.random() * this.learningSet.length);
            while(incorr === n) {
              incorr = Math.floor(Math.random() * this.learningSet.length);
            }
            this.question.answers[i] = this.learningSet[incorr].kanji;
          }
        }
      } else if(option < 0.75) {
        this.question.text = this.learningSet[n].kanji;
        this.question.correctAnswer = Math.floor(Math.random() * this.question.answers.length);
        this.question.answers[this.question.correctAnswer] = this.learningSet[n].value;
        for(let i=0; i<this.question.answers.length; i++) {
          if(this.question.answers[i] == '') {
            let incorr = Math.floor(Math.random() * this.learningSet.length);
            while(incorr === n) {
              incorr = Math.floor(Math.random() * this.learningSet.length);
            }
            this.question.answers[i] = this.learningSet[incorr].value;
          }
        }
      } else {
        this.question.text = this.learningSet[n].value;
        this.question.correctAnswer = Math.floor(Math.random() * this.question.answers.length);
        this.question.answers[this.question.correctAnswer] = this.learningSet[n].kanji;
        for(let i=0; i<this.question.answers.length; i++) {
          if(this.question.answers[i] == '') {
            let incorr = Math.floor(Math.random() * this.learningSet.length);
            while(incorr === n) {
              incorr = Math.floor(Math.random() * this.learningSet.length);
            }
            this.question.answers[i] = this.learningSet[incorr].kanji;
          }
        }
      }
      this.showQuestion = true;
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
.questionText {
  padding: 1rem;
  padding-top: 3rem;
  text-align: center;
  color: black;
}
.resultCard {
  align-items: center;
  margin: auto;
  text-align: center;
  width: 50%;
  padding-top: 1rem;
}
.corr {
  color: darkgreen;
}
.incorr {
  color: red;
}
@media only screen and (max-width: 720px) {
	.resultCard {
    align-items: center;
    margin: auto;
    width: 100%;
  }
}
</style>
