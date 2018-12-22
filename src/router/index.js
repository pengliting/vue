import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  routes from './router'

export default new VueRouter({
  mode:'history',
  routes
})
