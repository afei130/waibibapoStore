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
      meta: { title: "首页", keepAlive: true },
      component: (resolve) => require(["../views/shop/Home"], resolve),
    },
    {
      path: "/Sort",
      name: "Sort",
      meta: { title: "分类", keepAlive: true },
      component: (resolve) => require(["../views/shop/Sort"], resolve),
    },
    {
      path: "/Car",
      name: "Car",
      meta: { title: "购物车", keepAlive: false },
      component: (resolve) => require(["../views/shop/Car"], resolve),
    },
    {
      path: "/Mine",
      name: "Mine",
      meta: { title: "我的", keepAlive: false },
      component: (resolve) => require(["../views/user/Mine"], resolve),
    },
    {
      path: "/GoodsList",
      name: "GoodsList",
      meta: { title: "商品列表", keepAlive: false },
      component: (resolve) => require(["../views/shop/GoodsList"], resolve),
    },
    {
      path: "/GoodsDetails",
      name: "GoodsDetails",
      meta: { title: "商品详情", keepAlive: false },
      component: (resolve) => require(["../views/shop/GoodsDetails"], resolve),
    },
    {
      path: "/OrderList",
      name: "OrderList",
      meta: { title: "我的订单", keepAlive: true },
      component: (resolve) => require(["../views/shop/OrderList"], resolve),
    },
    {
      path: "/OrderDetails",
      name: "OrderDetails",
      meta: { title: "订单详情", keepAlive: false },
      component: (resolve) => require(["../views/shop/OrderDetails"], resolve),
    },
    {
      path: "/GoodsSearch",
      name: "GoodsSearch",
      meta: { title: "商品搜索", keepAlive: false },
      component: (resolve) => require(["../views/shop/GoodsSearch"], resolve),
    },{
      path: "/AddressList",
      name: "AddressList",
      meta: { title: "我的地址", keepAlive: false },
      component: (resolve) => require(["../views/user/AddressList"], resolve),
    },{
      path: "/AddressAdd",
      name: "AddressAdd",
      meta: { title: "添加地址", keepAlive: false },
      component: (resolve) => require(["../views/user/AddressAdd"], resolve),
    },{
      path: "/AddressUpdate",
      name: "AddressUpdate",
      meta: { title: "修改地址", keepAlive: false },
      component: (resolve) => require(["../views/user/AddressUpdate"], resolve),
    }
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
