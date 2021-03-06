import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Video.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
