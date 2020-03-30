<template>
  <v-container>

    <v-expansion-panels popout focusable>
      <v-expansion-panel
        v-for="(kanjiSet, index) in kanji"
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
              <v-fade-transition leave-absolute>
                <span v-if="!open">{{ kanjiSet[0].kanji }}, {{ kanjiSet[1].kanji }}, {{ kanjiSet[2].kanji }}...</span>

              </v-fade-transition>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-for="(item, i) in kanjiSet" :key="i">
            <h1 class="kanjiSign">{{ item.kanji }}</h1>
            <v-simple-table>
              <thead>
                <tr>
                  <th class="text-left" width="50%">ON-YOMI</th>
                  <th class="text-left">KUN-YOMI</th>
                </tr>
              </thead>
              <tbody v-if="item.on.length > item.kun.length">
                <tr v-for="(reading, index2) in item.on" :key="index2">
                  <td class="body-1">{{ reading }}</td>
                  <td class="body-1"><span v-if="index2 < item.kun.length">{{ item.kun[index2] }}</span></td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr v-for="(reading, index2) in item.kun" :key="index2">
                  <td class="body-1"><span v-if="index2 < item.on.length">{{ item.on[index2] }}</span></td>
                  <td class="body-1">{{ reading }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- <div v-for="(item, index) in kanji" :key="index">
      <div v-if="index === 0 || item.part != kanji[index-1].part" class="kanjiPartDivider">
      <h2>Kanji {{item.part}}</h2>
      <h1 class="kanjiSign">{{ index+1 }}. {{ item.kanji }}</h1>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left" width="50%">ON-YOMI</th>
            <th class="text-left">KUN-YOMI</th>
          </tr>
        </thead>
        <tbody v-if="item.on.length > item.kun.length">
          <tr v-for="(reading, index2) in item.on" :key="index2">
            <td class="body-1">{{ reading }}</td>
            <td class="body-1"><span v-if="index2 < item.kun.length">{{ item.kun[index2] }}</span></td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="(reading, index2) in item.kun" :key="index2">
            <td class="body-1"><span v-if="index2 < item.on.length">{{ item.on[index2] }}</span></td>
            <td class="body-1">{{ reading }}</td>
          </tr>
        </tbody>
      </v-simple-table> -->
      
    </div>
  </v-container>
</template>

<script>
import { kanji } from "../data/kanji";

export default {
  name: 'KanjiComponent',

  data: () => ({
    kanji: kanji
  }),
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
.kanjiSign {
  margin-top: 1rem;
}
</style>
