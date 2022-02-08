<template>
  <div id="app">
    <input v-model='filterName'/>
    <ul>
      <li v-for="name in filteredNames">{{name}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data: () => ({
      names: ['Dariusz', 'Diana', 'Tomek', 'Leszek'],
      filterName: ''
    }),
    computed:{
      filteredNames(){
        return this.names.filter(v => v.match(this.filterName));
      }
    }
  }
</script>

<style>
  #app{
    padding:20px;
  }
</style>