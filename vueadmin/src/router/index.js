import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/Home",
    },
    {
      path: "/Home",
      name: "Home",
      meta: { title: "首页", keepAlive: false },
      component: (resolve) => require(["../views/Home"], resolve),
    },
    {
      path: "/Users",
      name: "Users",
      meta: { title: "用户列表", keepAlive: false },
      component: (resolve) => require(["../views/user/Users"], resolve),
    },
    {
      path: "/Order",
      name: "Order",
      meta: { title: "订单", keepAlive: false },
      component: (resolve) => require(["../views/shop/Order"], resolve),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    //如果设置标题，拦截后设置标题
    Vue.prototype.$title = to.meta.title;
  }
  next();
});

export default router;
