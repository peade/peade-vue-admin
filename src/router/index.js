import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'layout'}
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../layout/index.vue' /* webpackchunkname: admin.layout */),
      meta: {
        title: '页面骨架'
      }
    }
  ]
})

export default router