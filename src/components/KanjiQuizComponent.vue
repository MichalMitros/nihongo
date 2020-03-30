<template>
  <v-container>
    QUIZ
  </v-container>
</template>

<script>
import { compounds } from "../data/kanji";

export default {
  name: 'KanjiQuizComponent',

  data: () => ({
    compounds: compounds,
  }),
  mounted() {
  }
}
</script>

<style lang="scss">
</style>
