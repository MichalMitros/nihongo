<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item to="/" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Strona główna</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="kanji" link>
          <v-list-item-action>
            <v-icon>mdi-ideogram-cjk</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Kanji</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="classifiers" link>
          <v-list-item-action>
            <v-icon>mdi-numeric</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Klasyfikatory</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="dictionary" link>
          <v-list-item-action>
            <v-icon>mdi-bookshelf</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Słowniczek</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="tests" link>
          <v-list-item-action>
            <v-icon>mdi-file-edit</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Testy</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>日本語</v-toolbar-title>
    </v-app-bar>

    <v-content class="app_content">
      <router-view/>
    </v-content>
    <v-footer
      color="indigo"
      absolute
      app
    >
      <span class="white--text">Copyright &copy; 2020 by Michał Mitros</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
  }),
};
</script>

<style lang="scss">
.app_content {
  margin: auto;
  margin-top: 2rem;
  width: 80%;
}
@media only screen and (max-width: 980px) {
	.app_content {
	  width: 90% !important;
  }
}

</style>
