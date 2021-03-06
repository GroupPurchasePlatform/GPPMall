import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
        path: '/store',
        name: 'store',
        component: () => import('@/views/store/store.vue')
      },
      {
        path: '/commodity',
        name: 'commodity',
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
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/profile/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/profile/register.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/home/search.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail/detail.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('@/views/activity/activity.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/profile/settings.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
