import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import('@/views/Home'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard'),
      },
      {
        path: '/upload',
        name: 'upload',
        component: () => import('@/views/appUpload/tabs'),
      },
      {
        path: '/labs',
        name: 'labs',
        component: () => import('@/views/Labs'),
      },
      {
        path: '/cert',
        name: 'cert',
        component: () => import('@/views/appCert/cert'),
      },
      {
        path: '/shorturl',
        name: 'shorturl',
        component: () => import('@/views/appShorturl/shorturl'),
      },
      {
        path: '/backup',
        name: 'backup',
        component: () => import('@/views/appBackup/backup'),
      },
      {
        path: '/cron',
        name: 'cron',
        component: () => import('@/views/appCron/cron.vue'),
      },
      {
        path: '/cron/logs/:job',
        name: 'logs',
        component: () => import('@/views/appCron/log'),
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/Settings'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/Register'),
  },
  {
    path: '/account',
    component: () => import('@/views/Account'),
    children: [
      {
        path: '',
        name: 'user',
        component: () => import("@/views/account/views/user"),
      },
      {
        path: '/account/reminder',
        name: 'reminder',
        component: () => import("@/views/account/views/reminder"),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// auth before each route
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('token')) next({ name: 'login' })
  else next()
})


export default router
