<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">Modyfikacja statystyk gracza</h4>
    </div>
    <div class="panel-body">
      Punkty życia:
      <input
        type="number"
        :value="health"
        @change="$emit('changeHp', Number($event.target.value))"
      />
      Punkty many:
      <input type="number" @change="changeMana" />
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../main.js";
export default {
  props: {
    health: Number,
  },
  methods: {
    changeMana(event) {
      eventBus.$emit("changeMana", event.target.value);
    },
  },
};
</script>

<style>
.panel {
  -webkit-box-shadow: 0px 0px 48px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 48px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 48px -7px rgba(0, 0, 0, 0.75);
  margin: 40px;
}
</style>