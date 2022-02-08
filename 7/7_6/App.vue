<template>
  <div id="app">
    <h1>Zadanie #7</h1>
    <ul class="nav nav-tabs">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Secret form</a></li>
      <li><a href="#">Public form</a></li>
    </ul>
    <!-- TU WSTAW KOMPONENT -->
  </div>
</template>

<script>
  import TheHome from './components/TheHome'
  import ThePublicForm from './components/ThePublicForm'
  import TheSecretForm from './components/TheSecretForm'

  export default {
    name: 'app',
    data: () => ({
        
    }),
    components:{
      TheHome,
      ThePublicForm,
      TheSecretForm
    }
  }
</script>

<style>
  #app{
    padding:20px;
  }

  .slide-enter-active, .slide-leave-active{
    transition: all 1s;
  }

  .slide-enter, .slide-leave-to{
    opacity: 0;
    transform: translateX(30px);
  }

  .slide-move{
    transition: transform 1s;
  }

  .slide-leave-active{
    position: absolute;
    width: 100%;
  }

</style>