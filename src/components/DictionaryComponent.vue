<template>
  <v-container>
    
    {{dictionary2[0][0].key}}
  </v-container>
</template>

<script>
import { dictionary } from "../data/dictionary";

export default {
  name: 'HelloWorld',

  data: () => ({
    dictionary2: dictionary
  }),
  mounted() {
  }
}
</script>

<style lang="scss">
</style>
