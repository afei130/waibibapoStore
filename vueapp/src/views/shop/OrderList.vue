<template>
    <div>
        <div class="search-container">
            <div class="search-container-fixed">
                <van-search v-model="search.value" show-action placeholder="搜索订单" @search="onSearch">
                    <template #left>
                        <van-icon @click="$router.go(-1)" class="search-icon" name="arrow-left" />
                    </template>
                    <template #action>
                        <div @click="onSearch">搜索</div>
                    </template>
                </van-search>
            </div>
        </div>
        <van-tabs v-model="tabs.active" offset-top="53px" sticky swipeable @change="tabsChange" animated>
            <van-tab v-for="(item,index) in tabs.titles" :key="index" :title="item">
                <van-pull-refresh v-model="pullRefresh.isLoading" :success-text="pullRefresh.successText" @refresh="onRefresh">
                    <van-card v-for="(orderItem,orderIndex) in tabs.orders[index]" :key="orderIndex" :price="orderItem.price" :num="orderItem.num" :desc="orderItem.desc" :title="orderItem.title" :thumb="orderItem.thumb">
                        <template #tags>
                            <span v-for="(orderItemTagItem,TagItem) in orderItem.tags" :key="TagItem">
                                <van-tag class="card-tags" plain type="danger">{{orderItemTagItem.title}}</van-tag>
                            </span>
                        </template>
                        <template #footer>
                            <van-button size="small" plain round @click="$utils.toView('OrderDetails')">查看详情</van-button>
                            <van-button v-if="orderItem.state == 2" size="small" plain round>查看物流</van-button>
                            <van-button v-if="orderItem.state == 0" size="small" round color="linear-gradient(to right, #ff6034, #ee0a24)">立即付款</van-button>
                        </template>
                    </van-card>
                    <div v-show="noData.noMore" class="no-more">没有更多了</div>
                    <NoData :show="noData.show" :msg="noData.msg" />
                </van-pull-refresh>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import NoData from "@/components/NoData";
export default {
    components: {
        NoData,
    },
    data() {
        return {
            noData: {
                show: false,
                msg: "没有订单",
                noMore: false,
            },
            search: {
                value: "",
            },
            pullRefresh: {
                isLoading: false,
                successText: "刷新成功",
            },
            tabs: {
                active: 0,
                titles: ["全部", "待付款", "待发货", "待收货", "待评价"],
                orders: [
                    [
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 0,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 2,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 2,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 3,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 0,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 0,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 0,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 0,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 0,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 0,
                        },
                    ],
                    [
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 1,
                        },
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 1,
                        },
                    ],
                    [
                        {
                            tag: "热卖",
                            tags: [
                                {
                                    title: "满3999减620",
                                },
                                {
                                    title: "12期免息",
                                },
                            ],
                            price: "6199.00",
                            num: 1,
                            desc:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            title:
                                "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                            originPrice: "6888.00",
                            state: 2,
                        },
                    ],
                    [],
                    [],
                ],
            },
        };
    },
    created() {
        let active = this.$route.query.active;
        this.tabs.active = active == null ? 0 : active;
        this.tabsChange();
    },
    methods: {
        onSearch() {},
        tabsChange() {
            let _this = this;
            let active = _this.tabs.active;
            let orders = _this.tabs.orders[active];
            _this.noData.show = orders.length > 0 ? false : true;
            _this.noData.noMore = !_this.noData.show;
        },
        onRefresh() {
            setTimeout(() => {
                this.pullRefresh.isLoading = false;
            }, 1000);
        },
    },
};
</script>

<style scoped>
.search-container {
    position: relative;
    height: 53px;
}
.search-container-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}
.search-icon {
    margin-right: 8px;
}
.no-more {
    text-align: center;
    padding: 10px 0 20px;
    color: #888;
    font-size: 14px;
}
</style>