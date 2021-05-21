<template>
    <div class="left-nav">
        <el-menu default-active="Home" class="el-menu-vertical-demo" :router="true" :unique-opened="true" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="Home">
                <template slot="title">
                    <i class="el-icon-s-home"></i>
                    <span>首页</span>
                </template>
            </el-menu-item>
            <el-submenu index="user">
                <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="Users">
                    <span slot="title">用户列表</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="shop">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item index="Order">
                    <span slot="title">订单列表</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style scoped>
.left-nav {
    position: absolute;
    top: 61px;
    left: 0;
    width: 15rem;
    height: calc(100% - 61px);
}
.left-nav .el-menu {
    height: 100%;
}
</style>