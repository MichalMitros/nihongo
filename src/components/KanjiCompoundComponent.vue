<template>
  <v-container>
    <div v-for="(item, index) in compounds" :key="index">
      <h2 class="kanjiPartDivider">Kanji {{item[0].part}}</h2>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left" width="30%">Kanji</th>
            <th class="text-left" width="35%">Kana</th>
            <th class="text-left" width="35%">Tłumaczenie</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(compound, index2) in item" :key="index2">
            <td class="body-1">{{ compound.kanji }}</td>
            <td class="body-1">{{ compound.kana }}</td>
            <td class="body-1">{{ compound.value }}</td>
          </tr>
        </tbody>
      </v-simple-table>
      
    </div>
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
