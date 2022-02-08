<template>
  <div id="app">
    <h1>Transition</h1>
    <button class="btn btn-primary" @click="display = !display">Przełącz</button>
    <hr> 
    <transition>
      <div class="alert alert-success" v-show="display">
        Welcome!
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
        display: false
    })
  }
</script>

<style>
  #app{
    padding:20px;
  }
</style>