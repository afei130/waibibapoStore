<template>
    <div id="app">
        <Logo />
        <HeadNav />
        <LeftNav />
        <div class="main">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </div>
    </div>
</template>
<script>
import HeadNav from "@/components/HeadNav";
import LeftNav from "@/components/LeftNav";
import Logo from "@/components/Logo";
export default {
    components: {
        HeadNav,
        LeftNav,
        Logo,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#app {
    box-sizing: border-box;
}
img {
    width: 100%;
    height: 100%;
}
.main {
    position: absolute;
    top: 60px;
    left: 240px;
    padding: 20px;
    width: calc(100% - 280px);
    height: calc(100% - 100px);
}
</style>
