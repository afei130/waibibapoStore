import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home/Index'
    },
    {
      path: '/home/Index',
      name: 'home',
      meta: { title: "首页", keepAlive: true },
      component: resolve => require(['../views/home/Index'], resolve)
    },
    {
      path: '/sort/Index',
      name: 'sort',
      meta: { title: "分类", keepAlive: true },
      component: resolve => require(['../views/sort/Index'], resolve)
    },
    {
      path: '/shopping/Index',
      name: 'shopping',
      meta: { title: "购物车", keepAlive: true },
      component: resolve => require(['../views/shopping/Index'], resolve)
    },
    {
      path: '/mine/Index',
      name: 'mine',
      meta: { title: "我的", keepAlive: true },
      component: resolve => require(['../views/mine/Index'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    Vue.prototype.$title = to.meta.title;
  }
  next()
})

export default router
