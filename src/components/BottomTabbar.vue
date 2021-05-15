<template>
    <van-tabbar :placeholder="true" route>
        <van-tabbar-item v-for="(item,index) in tabbar" :key="index" :icon="item.icon" :name="item.name" :to="item.path" :badge="item.badge">
            {{item.title}}</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    watch:{
        "$store.state.goodsCarNum"(){
            this.tabbar[2].badge = this.$store.state.goodsCarNum;
        }
    },
    data() {
        return {
            tabbar: [
                {
                    icon: "shop-o",
                    name: "/Home",
                    path: "/Home",
                    title: "首页",
                    badge: "",
                },
                {
                    icon: "apps-o",
                    name: "/Sort",
                    path: "/Sort",
                    title: "分类",
                    badge: "",
                },
                {
                    icon: "shopping-cart-o",
                    name: "/Car",
                    path: "/Car",
                    title: "购物车",
                    badge: this.$store.state.goodsCarNum,
                },
                {
                    icon: "user-o",
                    name: "/Mine",
                    path: "/Mine",
                    title: "我的",
                    badge: "",
                },
            ],
        };
    },
    created() {},
    methods: {},
};
</script>

<style scoped></style>