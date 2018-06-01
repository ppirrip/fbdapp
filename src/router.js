import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Casino from './views/Casino.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Casino
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
