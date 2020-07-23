import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import '@/mock/mockServer'
Vue.component('TypeNav', TypeNav)//全局注册
Vue.component('SliderLoop',SliderLoop)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})
