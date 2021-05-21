<template>
    <div class="head-nav">
        <div class="container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <div>
                头像
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style scoped>
.head-nav {
    position: absolute;
    top: 0;
    left: 240px;
    width: calc(100% - 280px);
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>