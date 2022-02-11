<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <PlayerCharacterName />
      </div>
      <div class="panel-body">
        <PlayerCharacterHealthbar :health="health" :maxHealth="maxHp" />
        <PlayerCharacterManabar />
      </div>
    </div>
    <PlayerStatsModifier :health="health" />
  </div>
</template>

<script>
import PlayerCharacterName from "./PlayerCharacterName";
import PlayerStatsModifier from "./PlayerStatsModifier";
import PlayerCharacterHealthbar from "./PlayerCharacterHealthbar";
import PlayerCharacterManabar from "./PlayerCharacterManabar";
export default {
  components: {
    PlayerCharacterName,
    PlayerCharacterHealthbar,
    PlayerStatsModifier,
    PlayerCharacterManabar,
  },
  data: () => ({
    health: 981,
    maxHp: 981,
  }),
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