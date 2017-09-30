<template>
  <div id="app">
    <loading v-show="showLoading"></loading>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import router from './router'
import loading from 'components/loading'
import util from './util/util.js'
import api from './model/api.js'
import appConfigs from './configs'
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      showLoading: false,
      titlename: {
        'home': '你的标题'
      }
    }
  },
  created() {
    //拦截路由
    router.beforeEach((to, from, next) => {
      next();
      //初始化滚动事件监听
      document.body.scrollTop = 0;
      $(document).unbind('scroll');
      //运行滚动条滚动
      util.allscroll();
    });

    util.vueEvent.$on("showloading", () => {
      this.showLoading = true;
    });
    util.vueEvent.$on("disloading", () => {
      this.showLoading = false;
    });
    //首次进入页面设置标题
    this.firstitle()
  },
  methods: {
    //第一次进入页面也判断标题
    firstitle(){
      let url = window.location.href;
      let name = '';
      if(url.indexOf('?')!=-1){
        name = url.substring(url.indexOf('#')+2,url.indexOf('?'));
      }else{
        name = url.substring(url.indexOf('#')+2);
      }
      let _arr = name.split('/');
      name = _arr[_arr.length-1];
      if(name){
        document.title = this.titlename[name]
      }
    }
  },
  components: {
    loading
  }
}
</script>

<style>
/*.router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .1s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #000000;
  font-size: 16px;
}

body {
  overflow-x: hidden;
  min-width: 320px;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  outline:none;
  margin: 0;
  padding: 0;
}

::-webkit-input-placeholder {
  color: #999;
}


/*去掉百度地图logo*/

.mapdetail .anchorBL {
  display: none;
}

.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}


/*文字超出省略号 第二行超出省略*/

.ellipisis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.ellipisis2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.textleft {
  text-align: left;
}

.textright {
  text-align: right;
}


/*自适应颜色*/

.a_yellow_c {
  color: #ebab12;
}

.a_green_c {
  color: #00ae66;
}

.a_bottle_t_green {
  color: #618677;
}

.a_grey_c {
  color: #999;
}

.a_bottle_green {
  color: #009c5b;
}

.a_blue_c {
  color: #2196f3;
}

.a_redc_c {
  color: #f33f33;
}

.b_bottom_c{
  background-color:#f5f5f5;
}
.a_green_border {
  border: 1px solid #00ae66;
}
.a_grey_border {
  border: 1px solid #999;
}
/*公共样式*/
.fixed{
  position: fixed;
}
.bottom_big_green_btn{
  border-radius: 5px;
  height:45px;
  position: absolute;
  left:0.8rem;
  right:0.8rem;
  font-size:17px;
  line-height: 45px;
  color:#ffffff;
  background-color:#00ae66;
}

/*分割线*/

.div_line {
  width: 100%;
  box-sizing: border-box;
  line-height: 0;
  height: 0.5rem;
  background-color: #f5f5f5;
  position: relative;
}
.blodline{
  width:100%;
  height:0.5rem;
  background-color:#f5f5f5;
}

</style>
