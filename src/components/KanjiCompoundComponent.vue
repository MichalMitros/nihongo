<template>
  <v-container>
    <v-expansion-panels popout focusable>
      <v-expansion-panel
        v-for="(kanjiSet, index) in compounds"
        :key="index"
      >
        <!-- <v-expansion-panel-header>
          <h3>Kanji {{ index+1 }}</h3>
        </v-expansion-panel-header> -->
        <v-expansion-panel-header v-slot="{ open }">
          <v-row no-gutters>
            <v-col cols="4"><b>Kanji {{ index+1 }}</b></v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute v-if="kanjiSet.length > 0">
                <span v-if="!open">{{ kanjiSet[0].kanji }}, {{ kanjiSet[1].kanji }}...</span>

              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left" width="30%">Kanji</th>
                <th class="text-left" width="35%">Kana</th>
                <th class="text-left" width="35%">Tłumaczenie</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(compound, index2) in kanjiSet" :key="index2">
                <td class="body-1">{{ compound.kanji }}</td>
                <td class="body-1">{{ compound.kana }}</td>
                <td class="body-1">{{ compound.value }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel disabled>
        <v-expansion-panel-header>
          <v-row no-gutters>
            <v-col cols="4"><b>Kanji 7</b></v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span>東京駅, 電気...</span>

              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { compounds } from "../data/kanji";

export default {
  name: 'KanjiCompoundsComponent',

  data: () => ({
    compounds: compounds
  }),
  mounted() {
  }
}
</script>

<style lang="scss">
.kanjiPartDivider {
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
}
</style>
