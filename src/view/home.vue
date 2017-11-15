<template>
  <div class="home">
    <h1>hello world!</h1>
    <section>
      <ul>
        <li v-for="item in infomation">{{item.label}}</li>
      </ul>
    </section>
  </div> 
</template>

<script>
import util from 'src/util/util.js'
import { get_healthInformationCategoryList } from 'src/model/api.js'

export default {
  name: 'home',
  props : [],
  data () {
    return {
      infomation:''
    }
  },
  components: {
    
  },
  created(){
    
  },
  methods : {
      async get_info(params){
        util.vueEvent.$emit("showloading");
        let res = await get_healthInformationCategoryList(params);
        res.datetime = new Date(res.updateDate).Format('yyyy-MM-dd');
        this.infomation = res;
        util.vueEvent.$emit("disloading");
      },
  },
  mounted(){
      this.get_info()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
