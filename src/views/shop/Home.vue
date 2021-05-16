<template>
    <div>
        <van-sticky>
            <van-search v-model="search.value" placeholder="请输入搜索关键词" readonly @click="$utils.ToView('GoodsSearch')" />
        </van-sticky>
        <van-swipe :autoplay="swipe.autoplay">
            <van-swipe-item v-for="(item, index) in swipe.images" :key="index">
                <div class="img-container">
                    <img class="img" v-lazy="item" />
                </div>
            </van-swipe-item>
        </van-swipe>
        <van-grid :column-num="grid.columnNum" :border="grid.border">
            <van-grid-item v-for="(item,index) in grid.item.boxs" :key="index">
                <span :style="grid.item.css.icon">
                    <img class="img" v-lazy="item.icon" />
                </span>
                <span :style="grid.item.css.text">{{item.text}}</span>
            </van-grid-item>
        </van-grid>
        <van-card v-for="(item,index) in cards.goods" :key="index" :tag="item.tag" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb" :origin-price="item.originPrice" @click="$utils.ToView('GoodsDetails',{goods:item})">
            <template #tags>
                <span v-for="(itemTag,index) in item.tags" :key="index">
                    <van-tag class="card-tags" plain type="danger">{{itemTag.title}}</van-tag>
                </span>
            </template>
        </van-card>
        <BottomTabbar />
    </div>
</template>

<script>
import BottomTabbar from "@/components/BottomTabbar";
export default {
    components: {
        BottomTabbar,
    },
    data() {
        return {
            search: {
                value: "",
            },
            swipe: {
                autoplay: "3000",
                images: [
                    "https://img01.yzcdn.cn/vant/apple-1.jpg",
                    "https://img01.yzcdn.cn/vant/apple-2.jpg",
                ],
            },
            grid: {
                columnNum: 4,
                border: false,
                item: {
                    css: {
                        icon:
                            "width:50px;height:50px;borderRadius:50%;overflow: hidden;",
                        text: "font-size:14px;color:#646566",
                    },
                    boxs: [
                        {
                            icon: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                            text: "数码",
                        },
                        {
                            icon: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                            text: "数码",
                        },
                        {
                            icon: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                            text: "数码",
                        },
                        {
                            icon: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                            text: "数码",
                        },
                    ],
                },
            },
            cards: {
                goods: [
                    {
                        checked:true,
                        id: 1,
                        tag: "热卖",
                        tags: [
                            {
                                title: "满3999减620",
                            },
                            {
                                title: "12期免息",
                            },
                        ],
                        coin: "￥",
                        price: "6199.00",
                        num: 9999,
                        buyNum: 1,
                        desc:
                            "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                        title:
                            "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                        thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                        originPrice: "6888.00",
                        picture: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                        details:
                            "<img class='img' src='https://img01.yzcdn.cn/vant/apple-2.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' />",
                    },
                    {
                        checked:true,
                        id: 2,
                        tag: "热卖",
                        tags: [
                            {
                                title: "满3999减620",
                            }
                        ],
                        coin: "￥",
                        price: "1999.00",
                        num: 9999,
                        buyNum: 1,
                        desc:
                            "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                        title:
                            "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                        thumb: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                        originPrice: "6888.00",
                        picture: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                        details:
                            "<img class='img' src='https://img01.yzcdn.cn/vant/apple-2.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' /><img class='img' src='https://img01.yzcdn.cn/vant/apple-1.jpg' />",
                    },
                ],
            },
        };
    },
};
</script>

<style scoped>
.img-container {
    height: 12rem;
}
</style>