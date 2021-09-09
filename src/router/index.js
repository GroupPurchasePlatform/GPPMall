import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    component: () => import('../views/layout/layoutTabBar.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/home.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue')
      },
      {
        path: '/store',
        name: 'store',
        component: () => import('@/views/store/store.vue')
      },
      {
        path: '/commodity',
        name: 'homcommoditye',
        component: () => import('@/views/commodity/commodity.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/cart/cart.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/profile.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
