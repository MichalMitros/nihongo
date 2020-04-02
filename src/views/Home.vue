<template>
  <div class="home">
    <p><span class="title">Czas do JLPT: {{ time }}</span></p>
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
          to="/learning"
          color="primary">
          <v-icon
            medium
            class="icn"
            color="white">
            mdi-file-edit
          </v-icon>
          Nauka <span class="overline">(BETA)</span>
        </v-btn>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    time: '',
    isTimerRunning: false
  }),
  mounted() {
    if(!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.refreshTime();
      setInterval(() => {
        this.refreshTime();
      }, 1000);
    }
  },
  methods: {
    refreshTime() {
      let t = Math.floor(moment('2020-07-05 12:00').diff(moment()) / 1000);
      let days = Math.floor(t / 86400) + "";
      t = t % 86400;
      let hours = Math.floor(t / 3600) + "";
      t = t % 3600;
      let minutes = Math.floor((t / 60) % 60) + "";
      let seconds = Math.floor(t % 60) + "";
      
      this.time = days + "d " + hours + "g " + minutes + "m " + seconds + "s";
    }
  }
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
