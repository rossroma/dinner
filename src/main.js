// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Container, Header, Button, Main, Switch, DatePicker, Tabs, TabPane, Table, TableColumn, Form, FormItem, Input, Select, Option, Dialog, Loading, Collapse, CollapseItem, Cascader } from 'element-ui'
import App from './App'

Vue.config.productionTip = false
Vue.use(Container)
Vue.use(Header)
Vue.use(Button)
Vue.use(Main)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Loading)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
