import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.indigo,
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
          dark: {
            primary: colors.indigo,
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
