import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'//首页路由

Vue.use(Router)

export default new Router({
  routes: [
    /*{ path: '*', component: NotFoundComponent },//404页面*/
    {//首页
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
