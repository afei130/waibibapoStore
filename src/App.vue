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
.img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
}
.card-tags {
    margin-right: 5px;
}
</style>