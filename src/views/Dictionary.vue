<template>
  <div>
    <h1>
      <v-icon
        large
        class="icn"
        color="black">
        mdi-bookshelf
      </v-icon>
      Słowniczek
    </h1>
    <v-btn 
      class="categories" 
      large
      to="categories"
      color="primary">
      Kategorie
    </v-btn>
    <div class="search_field">
      <v-text-field
        outlined
        label="Szukana fraza"
        append-icon="mdi-magnify"
        v-model="searchedSentence"
        @keydown.enter="search">
      </v-text-field>
    </div>
    <div v-if="results && results.length > 0">
      <h3>Ilość wyników wyszukiwania: {{ results.length }}</h3>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Kana</th>
            <th class="text-left">Kanji</th>
            <th class="text-left">Tłumaczenie</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in results" :key="index">
            <td>{{ item.key }}</td>
            <td><div v-if="item.kanji">{{ item.kanji }}</div></td>
            <td>
              <span v-if="item.comment">
                {{ item.comment }} 
              </span>
              {{ item.value }}
              <span v-if="item.alternatives"> [
                <span v-for="alternative in item.alternatives" :key="alternative">{{ alternative }}; 
                </span>]
              </span>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
    <div v-if="notFound">
      <h2>Brak wyników.</h2>
    </div>
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="pink"
      v-if="!notFound && results.length > 0"
      @click="$vuetify.goTo(-9999, {duration: 750})"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { dictionary } from "../data/dictionary";

export default {
  name: 'Dictionary',
  components: {
  },
  data: () => ({
    searchedSentence: "",
    results: [],
    notFound: false
  }),
  methods: {
    search() {
      this.results = [];
      if(this.searchedSentence.length > 0) {
        if(this.searchedSentence.charAt(this.searchedSentence.length-1) == " ") {
          this.searchedSentence = this.searchedSentence.slice(0, this.searchedSentence.length-1);
        }
        dictionary.forEach(category => {
          category.forEach(word => {
            if(word.key.toLowerCase().search(this.searchedSentence.toLowerCase()) > -1 ||
              word.value.toLowerCase().search(this.searchedSentence.toLowerCase()) > -1) {
              this.results.push(word);
            } else if(word.kanji !== undefined && word.kanji.length > 0) {
              if(word.kanji.toLowerCase().search(this.searchedSentence.toLowerCase()) > -1) {
                this.results.push(word);
              }
            }
          });
        });
        if(this.results.length === 0) {
          this.notFound = true;
        } else {
          this.notFound = false;
          this.results.sort((a, b) => a.value.toLowerCase().localeCompare(b.value.toLowerCase()));
        }
      }
    }
  }
}
</script>

<style lang="scss">
.categories {
  margin: auto;
  width: 100%;
  margin-top: 2.5rem;
}
.search_btn {
  margin-left: 1rem;
}
.search_field {
  width: 100%;
  margin: auto;
  margin-top: 1.5rem;
}
</style>
