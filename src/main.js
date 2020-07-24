import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'
import '@/mock/mockServer'
Vue.component('TypeNav', TypeNav)//全局注册
Vue.component('SliderLoop', SliderLoop)
Vue.component('Pagination', Pagination)
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  el: '#app',
  router,
  store
})
