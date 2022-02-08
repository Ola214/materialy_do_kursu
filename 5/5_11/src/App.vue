<template>
  <div id="app">
    <ul class="nav nav-tabs">
      <li class='active'><a href="#">Home</a></li>
      <li><a href="#">Suma liczb</a></li>
      <li><a href="#">Autor</a></li>
    </ul>
    
  </div>
</template>

<script>

  import PageHome from './components/PageHome'
  import PageAuthor from './components/PageAuthor'
  import PageSum from './components/PageSum'
  export default {
    name: 'app',
    components:{
      PageHome,
      PageSum,
      PageAuthor
    },
    data: () => ({
      
    })
  }
</script>

<style>
  #app{
    padding:20px;
  }
</style>