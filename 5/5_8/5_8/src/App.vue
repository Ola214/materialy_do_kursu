<template>
  <div id="app">
    <TheAddChampionPanel />
  </div>
</template>

<script>
import TheAddChampionPanel from "./components/TheAddChampionPanel";
export default {
  name: "app",
  components: {
    TheAddChampionPanel,
  },
  data: () => ({
    champions: [
      {
        name: "Lux",
        pseudo: "the Light",
        hp: 120,
        mp: 890,
      },
      {
        name: "Macho",
        pseudo: "the Strong",
        hp: 690,
        mp: 80,
      },
    ],
  }),
};
</script>

<style>
#app {
  padding: 20px;
}
</style>