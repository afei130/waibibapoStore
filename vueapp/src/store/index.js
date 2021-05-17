import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsCarNum: "",
  },
  mutations: {
    setGoodsCarNum() {
      let _this= this;
      let goodsCar = localStorage.getItem("goodsCar");
      if (goodsCar != "undefined") {
        goodsCar = JSON.parse(goodsCar);
        let goodsNum = goodsCar.length;
        _this.state.goodsCarNum = goodsNum > 0 ? goodsNum : "";
      }
    },
  },
  actions: {},
  modules: {},
});
