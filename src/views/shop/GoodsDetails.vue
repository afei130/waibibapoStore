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
        <div class="bottom-nav">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
                <van-goods-action-icon icon="star-o" text="收藏" />
                <van-goods-action-button type="warning" text="加入购物车" />
                <van-goods-action-button type="danger" text="立即购买" />
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
        };
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