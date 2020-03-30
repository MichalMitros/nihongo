<template>
  <v-container>
      <v-col>
        <div v-if="!showStartPage">
          <v-card @click="active = !active" class="mb-4 flashCard" elevation="14">
            <v-responsive :aspect-ratio="1/1">
                <div v-if="!active" class="text-center flashcardContent display-4">
                  <v-spacer></v-spacer>
                    ABC
                </div>
                <div v-else class="text-center flashcardContent display-4">
                    DEF
                </div>
            </v-responsive>
          </v-card>
          <div class="d-flex justify-center">
              <v-spacer></v-spacer>
              <v-btn text color="primary">Następne</v-btn>
              <v-spacer></v-spacer>
          </div>
        </div>
        <div v-else>
          <div class="mb-6">
            <span class="title">
              Wciśnij fiszkę, aby zobaczyć tłumaczenie.
            </span>
          </div>
          <div class="d-flex justify-center">
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="showStartPage = false">Start</v-btn>
              <v-spacer></v-spacer>
          </div>
        </div>
      </v-col>
  </v-container>
</template>

<script>
import { kanji } from "../data/kanji";

export default {
  name: 'KanjiFlashcardsComponent',

  data: () => ({
    kanji: kanji,
    active: false,
    showStartPage: true
  }),
  mounted() {
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
.flashCard {
  align-items: center;
  margin: auto;
  width: 70%;
}
@media only screen and (max-width: 720px) {
	.flashCard {
    align-items: center;
    margin: auto;
    width: 100%;
  }
}
</style>
