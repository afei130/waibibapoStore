<template>
    <div>
        <HeadTabbar :title="$title" />
        <van-address-edit :area-list="areaList" save-button-text="确认添加" show-set-default :search-result="searchResult" :area-columns-placeholder="areaColumnsPlaceholder" @save="onSave" />
    </div>
</template>

<script>
import { areaList } from "@/universal/areaList";
import HeadTabbar from "@/components/HeadTabbar";
export default {
    components: {
        HeadTabbar,
    },
    data() {
        return {
            areaList,
            areaColumnsPlaceholder: ["请选择", "请选择", "请选择"],
            searchResult: [],
        };
    },
    methods: {
        onSave() {
            console.log("save");
        },
    },
};
</script>
    
<style>
</style>