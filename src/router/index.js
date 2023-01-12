import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/index.vue'
import Money from '../components/money/index.vue'
import Borrow from '../components/borrow/index.vue'
import Raise from '../components/raise/index.vue'
import Download from "../components/special/download.vue"

import '../../css/reset.scss'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/money',
    name: 'money',
    component: Money,
  },
  {
    path: '/borrow',
    name: 'borrow',
    component: Borrow
  },
  {
    path: '/raise',
    name: 'raise',
    component: Raise
  },
  {
    path: "/download",
    name: "download",
    component: Download,
},
  
]

const router = new VueRouter({
  routes
})

export default router
