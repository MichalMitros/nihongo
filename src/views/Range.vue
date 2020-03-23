<template>
  <div>
    <v-btn large color="black" text @click="goBack()" class="mb-4">
        <v-icon color="black">mdi-arrow-left</v-icon>
        Powrót
    </v-btn>
    <h3>
      <v-icon
        large
        class="icn"
        color="black">
        mdi-format-list-checks
      </v-icon>
      Zakres Kanji
    </h3>
    <v-container fluid>
      <v-checkbox @change="save()" v-for="set in kanjiSets" :key="set" v-model="selected" :label="'Kanji ' + set" :value="set"></v-checkbox>
    </v-container>
  </div>
</template>

<script>
import router from '../router'
import { kanji } from "../data/kanji";

export default {
  name: 'Range',
  components: {
  },
  data: () => ({
    kanjiSets: [],
    selected: []
  }),
  methods: {
    goBack() {
      router.go(-1);
    },
    save() {
      this.selected.sort((a, b) => a > b);
      sessionStorage.setItem("kanjisets", this.selected);
    }
  },
  mounted() {
    kanji.forEach(item => {
      if(!this.kanjiSets.includes(item.part)) {
        this.kanjiSets.push(item.part);
      }
    });
    let sets = sessionStorage.getItem('kanjisets').split(',');
    sets.forEach(item => {
      this.selected.push(Number.parseInt(item));
    });
  }
}
</script>

<style lang="scss">
</style>
