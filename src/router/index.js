import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/detail/:goodsId',
      component:Detail
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isHide:true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isHide:true
      }
    },
    {
      path: '/search:keyword?',
      component: Search,
      // props: route => ({ keyword: route.params.keyword, keyword1: route.query.keyword1 }),
      name:'search'
    },
    {
      path: '/',
      redirect:'/home'  //重定向
    }
  ],
  // 解决页面跳转后到底部的bug
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

//解决多次点击编程式导航报错问题
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originPush.call(this, location).catch(() => {})
  } else {
    return originPush.call(this, location, onRejected, onResolved)
  }
}
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originReplace.call(this, location).catch(() => {})
  } else {
    return originReplace.call(this, location, onRejected, onResolved)
  }
}