<template>
  <div id="app">
    
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      champions:[
        {
          name: 'Lux',
          pseudo: 'the Light',
          hp: 120,
          mp: 890
        },
        {
          name: 'Macho',
          pseudo: 'the Strong',
          hp: 690,
          mp: 80
        }
      ]
    })
  }
</script>

<style>
  #app{
    padding:20px;
  }
</style>