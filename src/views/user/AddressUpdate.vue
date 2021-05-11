<template>
    <div>
        <HeadTabbar :title="$title" />
        <van-address-edit :area-list="areaList" show-delete show-set-default :search-result="searchResult" :area-columns-placeholder="areaColumnsPlaceholder" @save="onSave" @delete="onDelete" />
    </div>
</template>

<script>
import { areaList } from "@/utils/areaList";
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
        onDelete() {
            console.log("delete");
        },
    },
};
</script>
    
<style>
</style>