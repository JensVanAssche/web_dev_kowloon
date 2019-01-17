import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import DogArticles from './views/DogArticles.vue'
import CoolingMat from './views/CoolingMat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/dogarticles',
      name: 'dogarticles',
      component: DogArticles
    },
    {
      path: '/coolingmat',
      name: 'coolingmat',
      component: CoolingMat
    }
  ]
})
