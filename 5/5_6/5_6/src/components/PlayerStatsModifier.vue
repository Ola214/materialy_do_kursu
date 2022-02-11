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
        @change="$emit('changeHp', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    health: Number,
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