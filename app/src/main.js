import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// set environment variables

process.env.VUE_APP_BACKEND_URL = 'http://localhost:3000';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
