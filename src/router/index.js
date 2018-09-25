import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const CanvasDemo = () => import('../views/CanvasDemo.vue')
const Sort = () => import('../views/Sort.vue')
const Slider = () => import('../views/Slider.vue')

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('../views/Menu.vue')
    },
    {
      path: '/canvasDemo',
      name: 'CanvasDemo',
      component: CanvasDemo
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    }
  ]
})
