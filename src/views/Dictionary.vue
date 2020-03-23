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
    <!-- <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          to="/search_dictionary"
          color="primary"
          outlined>
          <v-icon
            medium
            class="icn"
            color="primary">
            mdi-magnify
          </v-icon>
          Szukaj
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          color="primary">
          Kategorie
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          color="primary">
          Czasowniki
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          color="primary">
          Przymiotniki
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          color="primary">
          Czas/częstotliwości
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          color="primary">
          Przysłówki
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          color="primary">
          Opis położenia
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          color="primary">
          W sklepie/restauracji
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          color="primary">
          Dni tygodnia
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          color="primary">
          Rodzina
        </v-btn>
      </v-row>
    </v-col> -->
  </div>
</template>

<script>
import DictionaryComponent from "../components/DictionaryComponent";
import { dictionary } from "../data/dictionary";

export default {
  name: 'Dictionary',
  components: {
    DictionaryComponent
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
            }
          });
        });
        if(this.results.length === 0) {
          this.notFound = true;
        } else {
          this.notFound = false;
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
