<template>
    <div>
        <HeadTabbar :title="$title" />
        <AddressSelection @click="GetAddressId" />
        <van-card v-for="(item,index) in data" :key="index" :num="item.num" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb" />
        <van-submit-bar :loading="false" :price="submitBar.price" :button-text="submitBar.buttonText" @submit="onSubmit" />
    </div>
</template>

<script>
import HeadTabbar from "@/components/HeadTabbar";
import AddressSelection from "@/components/AddressSelection";
export default {
    components: {
        HeadTabbar,
        AddressSelection,
    },
    data() {
        return {
            address: {},
            data: [],
            submitBar: {
                price: 0,
                buttonText: "支付订单",
            },
        };
    },
    created() {
        let _this = this;
        let data = _this.$route.query.goods;
        if (Array.isArray(data)) {
            data.forEach(item => {
              _this.submitBar.price += parseFloat(item.price) * item.num * 100;
            });
            _this.data = data;
        }
    },
    methods: {
        GetAddressId(aid) {
            console.log("aid：", aid);
        },
        onSubmit() {

        },
    },
};
</script>

<style scoped>
</style>