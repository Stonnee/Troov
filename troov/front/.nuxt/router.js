import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c479e560 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _69d575b7 = () => interopDefault(import('../pages/index/auth.vue' /* webpackChunkName: "pages/index/auth" */))
const _64abddad = () => interopDefault(import('../pages/index/list.vue' /* webpackChunkName: "pages/index/list" */))
const _62d5849c = () => interopDefault(import('../pages/index/register.vue' /* webpackChunkName: "pages/index/register" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _c479e560,
    name: "index",
    children: [{
      path: "auth",
      component: _69d575b7,
      name: "index-auth"
    }, {
      path: "list",
      component: _64abddad,
      name: "index-list"
    }, {
      path: "register",
      component: _62d5849c,
      name: "index-register"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
