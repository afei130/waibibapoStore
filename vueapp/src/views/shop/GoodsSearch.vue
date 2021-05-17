<template>
    <div>
        <van-search v-model="search.value" show-action placeholder="请输入搜索关键词" @search="onSearch">
            <template #left>
                <van-icon @click="$router.go(-1)" class="search-icon" name="arrow-left" />
            </template>
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
        </van-search>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: {
                value: "",
            },
        };
    },
    methods: {
        onSearch() {},
    },
};
</script>

<style scoped>
.search-icon {
    margin-right: 8px;
}
</style>