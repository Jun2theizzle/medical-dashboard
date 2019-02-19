import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/visits',
      name: 'visits',
      component: () => import('./views/Visits.vue'),
      meta: {
        auth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      if (window.$cookies.get('api-key') == null) {
        router.push({
          name: 'login',
          params: {
            nextUrl: to.fullPath
          }
        })
      }
      else {
        next();
      }
    }
    else {
      next();
    }
})

export default router;