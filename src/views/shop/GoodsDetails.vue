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
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
            <van-goods-action-icon icon="star-o" text="收藏" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
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
        };
    },
};
</script>

<style scoped>
.img-container {
    height: 20rem;
}
</style>