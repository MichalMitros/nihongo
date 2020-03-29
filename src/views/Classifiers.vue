<template>
  <div class="page">
    <h1>
      <v-icon
        large
        class="icn"
        color="black">
        mdi-numeric
      </v-icon>
      Klasyfikatory
    </h1>
    <v-container fluid>
      <v-data-iterator
        :items="classifiers"
        item-key="classifier"
        hide-default-footer
      >
        <template>
          <v-switch
                  :label="'Liczebniki'"
                  class="pl-4 mt-0"
                  @change="expandCards = !expandCards"
                ></v-switch>
          <v-row>
            <v-col
              v-for="(item, index) in classifiers"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-card-title>
                  <h4>{{ item.classifier }}</h4>
                </v-card-title>
                <v-card-subtitle>
                  <h4><span>{{ item.meaning }}</span></h4>
                </v-card-subtitle>
                
                <v-divider></v-divider>
                <v-list v-if="expandCards" dense>
                  <v-list-item v-for="(counter) in item.counters" :key="counter">
                    <v-list-item-content>
                      <b v-if="counter.charAt(0) != '*'">{{ counter }}</b>
                      <b v-if="counter.charAt(0) == '*'"><u>{{ counter.substring(1) }}</u></b>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="pink"
      v-if="expandCards"
      @click="$vuetify.goTo(-9999, {duration: 750})"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { classifiers } from "../data/classifiers";

export default {
  name: 'Classifiers',
  components: {
  },
  data: () => ({
    expandCards: false,
    classifiers: classifiers
  })
}
</script>

<style lang="scss">

</style>
