<template>
    <div>
        <HeadTabbar :title="$title" />
        <AddressSelection @click="GetAddressId" />
        <van-card v-for="(item,index) in data" :key="index" :num="item.buyNum" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb" />
        <van-radio-group v-model="radioGroup.radio">
            <van-cell-group :title="radioGroup.title">
                <van-cell v-for="(item,index) in radioGroup.payMethod" :key="index" :title="item.title" clickable @click="radioGroup.radio=item.radio">
                    <template #right-icon>
                        <van-radio :name="item.radio" />
                    </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>
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
            radioGroup: {
                radio: "waibi",
                title: "付款方式",
                payMethod: [
                    {
                        title: "歪币",
                        radio: "waibi",
                    },
                    {
                        title: "支付宝",
                        radio: "alipay",
                    },
                    {
                        title: "微信",
                        radio: "wechat",
                    },
                ],
            },
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
            data.forEach((item) => {
                _this.submitBar.price +=
                    parseFloat(item.price) * item.buyNum * 100;
            });
            _this.data = data;
        }
    },
    methods: {
        GetAddressId(aid) {
            console.log("aid：", aid);
        },
        onSubmit() {},
    },
};
</script>

<style scoped>
</style>