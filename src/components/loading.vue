<template>
  <div class="loading">
    <div class="loadingimg"></div>
  </div>
</template>

<script>

export default {
  name: 'loading',
  props : [],
  data () {
    return {
      
    }
  },
  methods : {
    
  },
  mounted(){
    
  }
}

</script>

<style lang="scss" scoped>
  .loading{
    z-index: 3000;
    position: fixed;
    width:100%;
    height:100%;
    .loadingimg{
      position:relative;
      top: 50%;
      left: 50%;
      margin-left: -3rem;
      width: 6rem;
      height: 3rem;
      background:url('../../static/img/loading.gif') no-repeat;
      background-size:100%;
    }
  }
</style>
