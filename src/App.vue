<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
        <BottomTabbar />
    </div>
</template>
<script>
import BottomTabbar from "@/components/BottomTabbar";
export default {
    components: {
        BottomTabbar,
    },
};
</script>
<style>
html {
    height: 100%;
    background: #f7f8fa;
}
/* 图片大小限制 */
.img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
}
/* 卡片标签间隔 */
.card-tags {
    margin-right: 5px;
}
/* 间隔 */
.gap {
    height: 10px;
}
/* 修改vant组件默认值 */
.van-card{
    background-color: #fff;
}
</style>