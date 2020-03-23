<template>
  <div>
    <v-btn large color="black" text to="/dictionary" class="mb-4">
        <v-icon color="black">mdi-arrow-left</v-icon>
        powrót
    </v-btn>
    <h2>
        Kategorie:
    </h2>
    <v-col class="col mb-12">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          @click="showAll(); $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          Wszystkie
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          @click="showIndex = 0; $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          Czasowniki
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          @click="showIndex = 1; $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          い-przymiotniki
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          @click="showIndex = 2; $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          な-przymiotniki
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          @click="showIndex = 3; $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          Czas/częstotliwości
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          @click="showIndex = 4; $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          Przysłówki
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          @click="showIndex = 5; $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          Opis położenia
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          @click="showIndex = 6; $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          W sklepie/restauracji
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          @click="showIndex = 7; $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          Dni tygodnia
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          @click="showFamily(); $vuetify.goTo('#res', {duration: 750})"
          color="primary">
          Rodzina
        </v-btn>
      </v-row>
    </v-col>
    <div id="res"></div>
    <div v-if="showIndex !== -1" class="mb-12">
        <!-- wszystkie -->
        <div v-if="showIndex === -2">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Kana</th>
                    <th class="text-left">Kanji</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in allWords" :key="index">
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
        <!-- czasowniki -->
        <div v-if="showIndex === 0">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Hiragana</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in dictionary[showIndex]" :key="index">
                    <td>{{ item.key }}</td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
        <!-- i-przymiotniki -->
        <div v-if="showIndex === 1">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Hiragana</th>
                    <th class="text-left">Kanji</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in dictionary[showIndex]" :key="index">
                    <td>{{ item.key }}</td>
                    <td><div v-if="item.kanji">{{ item.kanji }}</div></td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
        <!-- na-przymiotniki -->
        <div v-if="showIndex === 2">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Hiragana</th>
                    <th class="text-left">Kanji</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in dictionary[showIndex]" :key="index">
                    <td>{{ item.key }}</td>
                    <td><div v-if="item.kanji">{{ item.kanji }}</div></td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
        <!-- czas/czestotliwosci -->
        <div v-if="showIndex === 3">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Kana</th>
                    <th class="text-left">Kanji</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in dictionary[showIndex]" :key="index">
                    <td>{{ item.key }}</td>
                    <td><div v-if="item.kanji">{{ item.kanji }}</div></td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
        <!-- przyslowki -->
        <div v-if="showIndex === 4">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Hiragana</th>
                    <th class="text-left">Kanji</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in dictionary[showIndex]" :key="index">
                    <td>{{ item.key }}</td>
                    <td><div v-if="item.kanji">{{ item.kanji }}</div></td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
        <!-- opis polozenia -->
        <div v-if="showIndex === 5">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Hiragana</th>
                    <th class="text-left">Kanji</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in dictionary[showIndex]" :key="index">
                    <td>{{ item.key }}</td>
                    <td><div v-if="item.kanji">{{ item.kanji }}</div></td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
        <!-- sklep/restauracja -->
        <div v-if="showIndex === 6">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Hiragana</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in dictionary[showIndex]" :key="index">
                    <td>{{ item.key }}</td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
        <!-- dni tygodnia -->
        <div v-if="showIndex === 7">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left">Hiragana</th>
                    <th class="text-left">Kanji</th>
                    <th class="text-left">Tłumaczenie</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in dictionary[showIndex]" :key="index">
                    <td>{{ item.key }}</td>
                    <td><div v-if="item.kanji">{{ item.kanji }}</div></td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
        <!-- rodzina -->
        <div v-if="showIndex === 8">
            <v-simple-table>
                <thead>
                <tr>
                    <th class="text-left"></th>
                    <th class="text-left">Moja</th>
                    <th class="text-left">Czyjaś</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in family" :key="index">
                    <td><b>{{ item.key }}</b></td>
                    <td>{{ item.value1 }}</td>
                    <td>{{ item.value2 }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>
    </div>
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="pink"
      v-if="showIndex !== -1"
      @click="$vuetify.goTo(-9999, {duration: 750})"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { dictionary } from "../data/dictionary";

export default {
  name: 'Categories',
  components: {
  },
  data: () => ({
    showIndex: -1,
    dictionary: dictionary,
    allWords: [],
    family: []
  }),
  methods: {
    showAll() {
      if(this.allWords === undefined || this.allWords.length === 0) {
        dictionary.forEach(category => {
            category.forEach(word => {
                this.allWords.push(word);
            });
        });
        this.allWords.sort((a, b) => a.value.localeCompare(b.value))
      }
      this.showIndex = -2;
    },
    showFamily() {
      if(this.family === undefined || this.family.length === 0) {
        for(let i=0; i<dictionary[8].length; i+= 2) {
            this.family.push({key: dictionary[8][i].value, value1: dictionary[8][i].key, value2: dictionary[8][i+1].key})
        }
      }
      this.showIndex = 8;
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
