import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const CanvasDemo = () => import('../views/CanvasDemo.vue')
const Sort = () => import('../views/Sort.vue')
const Slider = () => import('../views/Slider.vue')
const EasyTestAboutVue = () => import('../views/EasyTestAboutVue.vue')
const BicycleCanvas = () => import('../views/BicycleCanvas.vue')
const EasyCanvasPractice = () => import('../views/EasyCanvasPractice.vue')
const CanvasPratice = () => import('../views/CanvasPratice.vue')

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
    },
    {
      path: '/easyTestAboutVue',
      name: 'EasyTestAboutVue',
      component: EasyTestAboutVue
    },
    {
      path: '/bicycleCanvas',
      name: 'BicycleCanvas',
      component: BicycleCanvas
    },
    {
      path: '/easyCanvasPractice',
      name: 'EasyCanvasPractice',
      component: EasyCanvasPractice
    },
    {
      path: '/canvasPratice',
      name: 'CanvasPratice',
      component: CanvasPratice
    }
  ]
})
