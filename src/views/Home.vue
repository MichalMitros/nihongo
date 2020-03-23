<template>
  <div class="home">
    <span class="title">Witaj! ^_^</span><br>
    <span class="title">Co dzisiaj robimy?</span>

    <v-col class="col">
      <v-row class="row">
        <v-btn
          class="btn" 
          x-large
          to="/kanji"
          color="primary">
          <v-icon
            medium
            class="icn"
            color="white">
            mdi-ideogram-cjk
          </v-icon>
          Kanji
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          to="/classifiers"
          color="primary">
          <v-icon
            medium
            class="icn"
            color="white">
            mdi-numeric
          </v-icon>
          Klasyfikatory
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          class="btn" 
          x-large
          to="/dictionary"
          color="primary">
          <v-icon
            medium
            class="icn"
            color="white">
            mdi-bookshelf
          </v-icon>
          Słowniczek
        </v-btn>
        <v-btn 
          class="btn" 
          x-large
          to="/tests"
          color="primary">
          <v-icon
            medium
            class="icn"
            color="white">
            mdi-file-edit
          </v-icon>
          Testy
        </v-btn>
      </v-row>
    </v-col>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
}
</script>

<style lang="scss">
.home {
  margin-top: 1rem;
}
.col {
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 1rem;
}
.row {
  height: 100%;
}
.btn {
  width: 40%;
  margin: auto;
  margin-top: 1rem;
}
// 980px
@media only screen and (max-width: 720px) {
	.btn {
    width: 100%;
    margin: auto;
    margin-top: 1rem;
  }
}
.icn {
  margin-right: 0.5rem;;
}
</style>
