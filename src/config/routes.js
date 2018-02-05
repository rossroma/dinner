import Vue from 'vue'
import Router from 'vue-router'

// 引入后台页面
import order from '../components/order'
import listView from '../components/listView'

// 使用实例插件
Vue.use(Router)

export default new Router({
  routes: [
    // 将页面组件与path指定的路由关联
    {path: '/', component: order},
    {path: '*', component: order},
    {path: '/YouNeverKnowThePath', component: listView}
  ]
})
