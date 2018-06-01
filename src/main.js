import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/'

import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
