<template>
    <div class="page">
        <HeadTabbar :title="$title" :left="{ title:'',leftArrow:false }" />
        <div class="card" v-for="(item,index) in cards.goods" :key="index">
            <div class="card-container">
                <div class="card-container-left" @click="onSelect(index)">
                    <van-checkbox v-model="item.checked" />
                </div>
                <div class="card-container-right">
                    <van-card :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb">
                        <template #tags>
                            <span v-for="(itemTag,index) in item.tags" :key="index">
                                <van-tag class="card-tags" plain type="danger">{{itemTag.title}}</van-tag>
                            </span>
                        </template>
                        <template #bottom>
                            <van-stepper class="card-container-right-stepper" input-width="30px" button-size="20px" theme="round" v-model="item.buyNum" :min="0" @change="onBuyNum(index)" />
                        </template>
                    </van-card>
                </div>
            </div>
        </div>
        <NoData :show="noData.show" :msg="noData.msg" :type="noData.type" />
        <div class="foot-container">
            <van-submit-bar class="foot-container-item" :price="submitBar.price" :button-text="submitBar.buttonText" @submit="onSubmit">
                <van-checkbox @click="onAllSelect" v-model="submitBar.checkbox.checked">{{submitBar.checkbox.buttonText}}
                </van-checkbox>
            </van-submit-bar>
        </div>
        <BottomTabbar />
    </div>
</template>

<script>
import HeadTabbar from "@/components/HeadTabbar";
import NoData from "@/components/NoData";
import BottomTabbar from "@/components/BottomTabbar";
export default {
    components: {
        HeadTabbar,
        NoData,
        BottomTabbar,
    },
    data() {
        return {
            noData: {
                msg: "购物车空空如也",
                show: true,
                type: 0,
            },
            submitBar: {
                checkbox: {
                    checked: false,
                    buttonText: "全选",
                },
                price: 0,
                buttonText: "提交订单",
            },
            cards: {
                goods: [],
            },
        };
    },
    created() {
        let _this = this;
        let goodsCar = localStorage.getItem("goodsCar");
        if (goodsCar == "undefined") {
            _this.noData.show = true;
        } else {
            goodsCar = JSON.parse(goodsCar);
            if (Array.isArray(goodsCar)) {
                if (goodsCar.length > 0) {
                    _this.noData.show = false;
                    _this.cards.goods = goodsCar;
                    _this.calculatePrice();
                    _this.submitBar.checkbox.checked =
                        goodsCar.filter((item) => item.checked).length ==
                        goodsCar.length
                            ? true
                            : false;
                }
            } else {
                _this.noData.show = true;
            }
        }
    },
    methods: {
        //单选商品
        onSelect(index) {
            let _this = this;
            let goods = _this.cards.goods;
            goods[index].checked = goods[index].checked ? false : true;
            _this.calculatePrice();
            _this.saveChange();
        },
        //全选商品
        onAllSelect() {
            let _this = this;
            let checkbox = _this.submitBar.checkbox;
            let goods = _this.cards.goods;
            goods.forEach((item) => {
                item.checked = checkbox.checked ? true : false;
            });
            _this.calculatePrice();
            _this.saveChange();
        },
        //增加/减少商品购买数量
        onBuyNum(index) {
            let _this = this;
            let goods = _this.cards.goods;
            if (goods[index].buyNum > 0) {
                goods[index].checked = true;
            } else {
                _this.$dialog
                    .confirm({
                        title: "提示",
                        message: "确认删除该商品吗？",
                    })
                    .then(() => {
                        goods.splice(index, 1);
                        _this.noData.show = goods.length > 0 ? false : true;
                        _this.saveChange();
                    })
                    .catch(() => {
                        goods[index].buyNum++;
                    });
            }
            _this.calculatePrice();
            _this.saveChange();
        },
        //计算价格
        calculatePrice() {
            let _this = this;
            let submitBar = _this.submitBar;
            submitBar.price = 0;
            let goods = _this.cards.goods;
            goods.forEach((item) => {
                if (item.checked) {
                    submitBar.price +=
                        parseFloat(item.price) * item.buyNum * 100;
                }
            });
            _this.saveChange();
        },
        //保存修改到本地缓存
        saveChange() {
            let _this = this;
            localStorage.setItem("goodsCar", JSON.stringify(_this.cards.goods));
            _this.$store.commit("setGoodsCarNum");
        },
        //提交订单
        onSubmit() {
            let _this = this;
            let goods = _this.cards.goods.filter((item) => item.checked);
            if (goods.length > 0) {
                _this.$utils.toView("CarToPlaceOrder", { goods: goods });
            } else {
                _this.$toast.fail({
                    message: "请选择商品",
                });
            }
        },
    },
};
</script>

<style scoped>
.page {
    padding: 10px 0;
}

.card {
    background: #fff;
    margin-bottom: 10px;
}

.card-container {
    display: flex;
    align-items: center;
}

.card-container-left {
    padding-left: 10px;
}

.card-container-right {
    width: 100%;
    overflow: hidden;
}

.card-container-right-stepper {
    width: 100%;
    text-align: right;
}

.van-card__bottom {
    display: flex;
    margin-top: 5px;
}

.van-card__price {
    color: #ee0a24;
    font-weight: 700;
}

.foot-container {
    height: 50px;
}

.foot-container-item {
    margin-bottom: 50px;
}
</style>