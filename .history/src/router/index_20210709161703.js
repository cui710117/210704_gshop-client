import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Profile from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  //配置所以路由
  routes: [{
      path: '/msite',
      component: Msite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
        path: '/profile',
        component:Profile
      },
      {
        path:'/',
        redirect:'/msite'
      }
  ]
})
