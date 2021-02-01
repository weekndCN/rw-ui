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
    ],
  },

  {
    path: '/login',
    name: '/login',
    component: () => import('@/views/login/Login'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
