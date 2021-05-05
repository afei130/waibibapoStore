<template>
    <div>
        <van-sticky>
            <van-search v-model="search.value" placeholder="请输入搜索关键词" />
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
        <div v-for="(item,index) in cards.goods" :key="index">
            <van-card :tag="item.tag" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb"
                :origin-price="item.originPrice">
                <template #tags>
                    <span v-for="(itemTag,index) in item.tags" :key="index">
                        <van-tag plain type="danger">{{itemTag.title}}</van-tag>
                    </span>
                </template>
            </van-card>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: {
                    value: '',
                },
                swipe: {
                    autoplay: "5000",
                    images: [
                        'https://img01.yzcdn.cn/vant/apple-1.jpg',
                        'https://img01.yzcdn.cn/vant/apple-2.jpg',
                    ],
                },
                grid: {
                    columnNum: 4,
                    border: false,
                    item: {
                        css: {
                            icon: "width:50px;height:50px;borderRadius:50%;overflow: hidden;",
                            text: "font-size:14px;color:#646566"
                        },
                        boxs: [{
                            icon: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                            text: "数码",
                        }, {
                            icon: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                            text: "数码",
                        }, {
                            icon: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                            text: "数码",
                        }, {
                            icon: "https://img01.yzcdn.cn/vant/apple-1.jpg",
                            text: "数码",
                        }]
                    }
                },
                cards: {
                    goods: [
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620"
                                },
                                {
                                    title: "12期免息"
                                }
                            ],
                            price: "6199.00",
                            desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00"
                        }, {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620"
                                },
                                {
                                    title: "12期免息"
                                }
                            ],
                            price: "6199.00",
                            desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00"
                        }, {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620"
                                },
                                {
                                    title: "12期免息"
                                }
                            ],
                            price: "6199.00",
                            desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00"
                        }, {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620"
                                },
                                {
                                    title: "12期免息"
                                }
                            ],
                            price: "6199.00",
                            desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00"
                        }, {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620"
                                },
                                {
                                    title: "12期免息"
                                }
                            ],
                            price: "6199.00",
                            desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00"
                        }, {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620"
                                },
                                {
                                    title: "12期免息"
                                }
                            ],
                            price: "6199.00",
                            desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00"
                        }, {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620"
                                },
                                {
                                    title: "12期免息"
                                }
                            ],
                            price: "6199.00",
                            desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00"
                        }, {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620"
                                },
                                {
                                    title: "12期免息"
                                }
                            ],
                            price: "6199.00",
                            desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00"
                        }
                    ]
                }

            };
        },
    }
</script>

<style scoped>
    .img-container {
        height: 12rem;
    }

    .sort {
        background: #888 !important;
    }
</style>