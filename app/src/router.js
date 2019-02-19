import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

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
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        auth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      if (localStorage.getItem('api-key') == null) {
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