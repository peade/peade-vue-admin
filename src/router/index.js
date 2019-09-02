import Vue from 'vue'
import Router from 'vue-router'

// const Layout = require('../layout/Index.vue' /* webpackchunkname: admin.layout */)
import Layout from '../layout/Index'

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
      component: Layout,
      meta: {
        title: '页面骨架'
      }
    },
    {
      path: '/html',
      component: Layout,
      children: [
        {
          path: 'address',
          name: 'address',
          component: () => import('../components/html/Address.vue' /* webpackchunkname: admin.html.address */)
        }
      ]

    }
  ]
})

export default router