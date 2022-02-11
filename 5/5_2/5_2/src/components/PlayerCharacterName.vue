<template>
  <h3 class="panel-title">
    {{ myName }} {{ pseudo }}
    <input type="text" :value="myName" @change="changeMyName" />
  </h3>
</template>
<script>
export default {
  props: {
    myName: String,
    pseudo: {
      type: String,
      required: false,
      validator(value) {
        return value.toLowerCase() === value;
      },
    },
    changeFunc: Function,
  },
  methods: {
    changeMyName(event) {
      //this.$emit('changedName', event.target.value);
      this.changeFunc(event.target.value);
    },
  },
};
</script>
<style scoped>
</style>