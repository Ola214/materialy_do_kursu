<template>
  <div id="app">
    <cmp-xcv />
    <CmpXcv />
  </div>
</template>

<script>
import RoundedButton from "./components/RoundedButton.vue";

export default {
  name: "App",
  components: {
    CmpXcv: RoundedButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
