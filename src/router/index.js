import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['@/views/index'], resolve)
  }
]

const router = new VueRouter({
  routes
})

export default router
