<template>
  <h3 class="panel-title">{{ myName }} {{ pseudo }}</h3>
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
  },
};
</script>
<style scoped>
</style>