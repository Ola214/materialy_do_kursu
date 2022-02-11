<template>
  <div class="healthbar">
    <div class="progress">
      <div
        :class="{ active: animated }"
        class="progress-bar progress-bar-primary progress-bar-striped"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: manaAmount + '%' }"
        @click="animated = !animated"
      >
        {{ manaAmount }} / 100 MP
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./../main.js";
export default {
  data: () => ({
    animated: false,
    manaAmount: 100,
  }),
  methods: {
    minusHp() {
      //this.$emit('changeHp', this.health-10);
    },
    respawn() {
      //this.$emit('changeHp', this.maxHealth);
    },
  },
  watch: {
    manaAmount(newValue) {
      if (newValue < 0) {
        this.respawn();
      }
    },
  },
  created() {
    eventBus.$on("changemana", (event) => {
      this.manaAmount = event;
    });
  },
};
</script>

<style scoped>
.healthbar {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.progress {
  width: 100%;
  margin: 0;
  margin-left: 10px;
}
</style>