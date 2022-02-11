<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h4 class="panel-title">Dodawanie Championa</h4>
    </div>
    <div class="panel-body">
      <div class="input-group margin-bottom">
        <span class="input-group-addon">Imie postaci</span>
        <input
          type="text"
          class="form-control"
          v-model="name"
          placeholder="Imię"
        />
      </div>
      <div class="input-group margin-bottom">
        <span class="input-group-addon">Przydomek postaci</span>
        <input
          type="text"
          class="form-control"
          v-model="pseudo"
          placeholder="Przydomek"
        />
      </div>
      <div class="row margin-bottom">
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-addon">Max HP</span>
            <input
              v-model="hp"
              type="number"
              class="form-control"
              placeholder="Maksymalna ilość HP"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group">
            <span class="input-group-addon">Przydomek postaci</span>
            <input
              v-model="mp"
              type="number"
              class="form-control"
              placeholder="Maksymalna ilość HP"
            />
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-danger" @click="reset">
        Resetuj
      </button>
      &nbsp;
      <button type="button" class="btn btn-success" @click="add">Dodaj</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheAddChampionPanel",
  data: () => ({
    name: "",
    pseudo: "",
    hp: null,
    mp: null,
  }),
  methods: {
    reset() {
      this.name = "";
      this.pseudo = "";
      this.hp = null;
      this.mp = null;
    },
    add() {
      this.$emit("add", {
        name: this.name,
        pseudo: this.pseudo,
        hp: this.hp,
        mp: this.mp,
      });
      this.reset();
    },
  },
};
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 12px;
}
</style>