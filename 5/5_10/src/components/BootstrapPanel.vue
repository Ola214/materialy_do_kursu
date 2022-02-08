<template>
  <div class='panel panel-primary'>
    <div class='panel-heading'>
        <h5 class='panel-title'>Nagłówek</h5>
    </div>
    <div class='panel-body'>

    </div>
  </div>
</template>

<script>

  export default {
      
  }
</script>

<style scoped>
    .control{
        width:200px;
        height:100px;
        border: 6px solid #333;
        position:relative;
        display:flex;
    }

    .control > .picks{
        width: 50%;
        height:100%;
        display:flex;
        flex-wrap:wrap;
    }

    .control > .picks > .pick{
        width:50%;
        height:50%;
        border: 5px solid rgba(0, 0, 0, .4);
        cursor: pointer;
    }

    .control > .current{
        width:50%;
        height:100%;
        border: 5px solid rgba(0, 0, 0, .4);
        transition: 1s;
    }
</style>