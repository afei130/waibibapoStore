<template>
    <div>
        <HeadTabbar :title="$title" />
        <van-address-edit :area-list="areaList" show-delete show-set-default :search-result="searchResult" :area-columns-placeholder="areaColumnsPlaceholder" @save="onSave" @delete="onDelete" />
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
            aid: 0,
            areaList,
            areaColumnsPlaceholder: ["请选择", "请选择", "请选择"],
            searchResult: [],
        };
    },
    created() {
        let _this = this;
        let aid = this.$route.query.aid;
        if (aid) {
            _this.aid = aid;
        }
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