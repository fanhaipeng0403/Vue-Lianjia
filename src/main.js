// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuex from 'vuex'
import mint from '@/library/mint'
import AMap from 'vue-amap'

Vue.use(AMap)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

AMap.initAMapApiLoader({
  key: '7dce4690729f4438ac02617195d83a57',
  plugin: ['Geolocation']
})

const store = new Vuex.Store({
  state: {
    dlh_show: false,
    fdlh_show: false,
    onetoast: true,
    fb_show: false,
    item: {}
  },
  mutations: {
  },
  actions: {
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mint,
  components: { App },
  template: '<App/>'
})
