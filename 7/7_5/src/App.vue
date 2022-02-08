<template>
  <div id="app">
    <h1>Transition</h1>
    <button class="btn btn-primary">Przełącz</button>
    <hr> 
    
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
        names: ['Jerry', 'Thomas', 'Isaaiah', 'Mayor', 'Napoleon', 'Julliet', 'Finch']
    })
  }
</script>

<style>
  #app{
    padding:20px;
  }
</style>