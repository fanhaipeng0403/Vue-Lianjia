import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/page/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})
