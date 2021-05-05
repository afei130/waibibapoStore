<template>
    <van-tabbar v-if="show" v-model="active" :placeholder="true">
        <van-tabbar-item v-for="(item,index) in tabbar" :key="index" :icon="item.icon" :name="item.name"
            :to="item.path">
            {{item.title}}</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        watch: {
            $route(to) {
                //监听当前路由
                //页面路径属于底部菜单页面时显示
                this.SetShow(to.path);
            }
        },
        data() {
            return {
                tabbar: [{
                    icon: "shop-o",
                    name: "/home/Index",
                    path: "/home/Index",
                    title: "首页"
                },{
                    icon: "apps-o",
                    name: "/sort/Index",
                    path: "/sort/Index",
                    title: "分类"
                },{
                    icon: "shopping-cart-o",
                    name: "/shopping/Index",
                    path: "/shopping/Index",
                    title: "购物车"
                },{
                    icon: "user-o",
                    name: "/mine/Index",
                    path: "/mine/Index",
                    title: "我的"
                }],
                active: "",
                show: false
            };
        },
        created() {
            //设置当前图标选中
            let path = this.$route.path;
            this.active = path == "/" ? this.$router.options.routes[0].redirect : path;//重定向时给/Home选中
            this.SetShow(path);
        },
        methods: {
            SetShow(path) {
                this.show = false;//默认不显示
                let tabbar = this.tabbar;
                for (let i = 0; i < tabbar.length; i++) {
                    if (tabbar[i].path == path) {
                        this.active = path;
                        this.show = true;
                        break;
                    }
                }
            }
        }
    };
</script>

<style scoped></style>