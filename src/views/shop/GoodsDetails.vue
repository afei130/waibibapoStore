<template>
    <div>
        <HeadTabbar :title="$title" />
        <van-swipe :autoplay="swipe.autoplay">
            <van-swipe-item v-for="(item, index) in swipe.images" :key="index">
                <div class="img-container">
                    <img class="img" v-lazy="item" />
                </div>
            </van-swipe-item>
        </van-swipe>
        <div class="frame">
            <div class="frame-container">
                <van-row type="flex" justify="space-between">
                    <van-col>
                        <span class="frame-container-cny">￥</span>
                        <span class="frame-container-price">106</span>
                        <span class="frame-container-decimals">.00</span>
                    </van-col>
                </van-row>
            </div>
            <div>兰叶源 懒人大号平板长拖把家用一拖净免手洗地拖地板墩布神器尘推木地板 家用款-45cm双层铝合金面板/加强伸缩杆(共1布</div>
        </div>
        <div class="gap" />
        <van-tabs v-model="tabs.active" offset-top="46" sticky>
            <van-tab title="商品介绍">
                <div class="details" v-html="goods.details" />
            </van-tab>
            <van-tab title="规格参数">
                <div class="table-container">
                    <table class="table">
                        <tr>
                            <td class="table-letf">商品编号</td>
                            <td class="table-right">1564648948994</td>
                        </tr>
                        <tr>
                            <td class="table-letf">商品名称</td>
                            <td class="table-right">兰叶源</td>
                        </tr>
                    </table>
                </div>
            </van-tab>
        </van-tabs>
        <van-sku v-model="sku.show" :sku="sku" :goods="sku.goods" :goods-id="sku.goodsId" :quota="sku.quota" :quota-used="sku.quotaUsed" :hide-stock="sku.hide_stock" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
        <div class="bottom-nav">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="cart-o" text="购物车" badge="2" @click="$universal.ToView('Car')" />
                <van-goods-action-icon icon="star-o" text="收藏" />
                <van-goods-action-button type="warning" text="加入购物车" @click="sku.show = true" />
                <van-goods-action-button type="danger" text="立即购买" @click="sku.show = true" />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
import HeadTabbar from "@/components/HeadTabbar";
export default {
    components: {
        HeadTabbar,
    },
    data() {
        return {
            swipe: {
                autoplay: "3000",
                images: [
                    "https://img01.yzcdn.cn/vant/apple-1.jpg",
                    "https://img01.yzcdn.cn/vant/apple-2.jpg",
                ],
            },
            tabs: {
                active: 0,
            },
            goods: {
                details:
                    "<img class='img' src='https://img01.yzcdn.cn/vant/apple-2.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' />",
            },
            sku: {
                show: false,
                goods: {
                    picture: "https://img01.yzcdn.cn/vant/apple-2.jpg",
                },
                goodsId: 1, //商品 id
                quota: 0, //限购数，0 表示不限购
                quotaUsed: 0, //已经购买过的数量
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: "颜色", // skuKeyName：规格类目名称
                        k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                                id: 1001, // skuValueId：规格值 id
                                name: "红色", // skuValueName：规格值名称
                                imgUrl:
                                    "https://img01.yzcdn.cn/vant/apple-1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl:
                                    "https://img01.yzcdn.cn/vant/apple-1.jpg", // 用于预览显示的规格类目图片
                            },
                            {
                                id: 1002,
                                name: "蓝色",
                                imgUrl:
                                    "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                previewImgUrl:
                                    "https://img01.yzcdn.cn/vant/apple-2.jpg",
                            },
                            {
                                id: 1003,
                                name: "紫色",
                                imgUrl:
                                    "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                previewImgUrl:
                                    "https://img01.yzcdn.cn/vant/apple-2.jpg",
                            },
                        ],
                        largeImageMode: false, //  是否展示大图模式
                    },
                    {
                        k: "规格", // skuKeyName：规格类目名称
                        k_s: "s2", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                                id: 10001, // skuValueId：规格值 id
                                name: "64GB", // skuValueName：规格值名称
                            },
                            {
                                id: 10002,
                                name: "128GB",
                            },
                            {
                                id: 10003,
                                name: "256GB",
                            },
                        ],
                        largeImageMode: false, //  是否展示大图模式
                    },
                ],
                //所有的组合列表，均为一对多关系。如：红色(tree.k_s = s1)能选64GB、128GB、256GB,那就要写三个对象与关联的字段一一对应
                list: [
                    {
                        id: 101, //skuId
                        s1: 1001, // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: 10001, // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 100, // 价格（单位分）
                        stock_num: 110, // 当前 sku 组合对应的库存
                    },
                    {
                        id: 102,
                        s1: 1001,
                        s2: 10002,
                        price: 900,
                        stock_num: 999,
                    },
                    {
                        id: 103,
                        s1: 1001,
                        s2: 10003,
                        price: 900,
                        stock_num: 999,
                    },
                    {
                        id: 104,
                        s1: 1002,
                        s2: 10001,
                        price: 900,
                        stock_num: 999,
                    },
                    {
                        id: 105,
                        s1: 1002,
                        s2: 10002,
                        price: 900,
                        stock_num: 999,
                    },
                    {
                        id: 106,
                        s1: 1002,
                        s2: 10003,
                        price: 900,
                        stock_num: 999,
                    },
                    {
                        id: 107,
                        s1: 1003,
                        s2: 10001,
                        price: 900,
                        stock_num: 999,
                    },
                    {
                        id: 108,
                        s1: 1003,
                        s2: 10002,
                        price: 900,
                        stock_num: 999,
                    },
                    {
                        id: 109,
                        s1: 1003,
                        s2: 10003,
                        price: 900,
                        stock_num: 999,
                    },
                ],
                price: "1.00 ~ 9.00", // 无规格商品时默认价格（单位元）如：1 ,有规格时可以以最小/最大范围显示 如：1.00 ~ 9.00
                stock_num: 999, // 商品总库存
                collection_id: 0, // 无规格商品时点击购买/加入购物车获取的是这个字段的值,有规格时获取组合列表中的对象id
                none_sku: false, // 是否无规格商品
                hide_stock: false, // 是否隐藏剩余库存
            },
        };
    },
    methods: {
        onBuyClicked() {},
        onAddCartClicked() {},
    },
};
</script>

<style scoped>
.img-container {
    height: 20rem;
}
.frame {
    padding: 20px;
    background: #fff;
}
.frame-container {
    color: red;
}
.frame-container-cny {
    font-weight: bold;
}
.frame-container-price {
    font-size: 25px;
    font-weight: bold;
}
.frame-container-decimals {
    font-weight: bold;
}
.bottom-nav {
    position: relative;
    height: 50px;
}
.details {
    width: 100%;
    height: 100%;
}
.table-container {
    padding: 10px;
}
.table {
    width: 100%;
    font-size: 12px;
    border-spacing: 0;
    border-collapse: collapse;
    border-color: #888;
}
.table-letf {
    border: 1px solid #dadada;
    width: 70px;
    padding: 8px;
}
.table-right {
    border: 1px solid #dadada;
    padding: 8px;
}
</style>