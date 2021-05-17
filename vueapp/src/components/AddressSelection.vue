<template>
    <div>
        <div class="address-container">
            <van-cell :title="address.active.name+address.active.tel" :label="address.active.address" icon="location-o" is-link center @click="popup.show = true" />
        </div>
        <van-popup style="background: #f7f8fa;" v-model="popup.show" :position="popup.position" :style="popup.style">
            <van-nav-bar title="选择地址" left-text="返回" left-arrow @click-left="popup.show = false" />
            <van-address-list v-show="!noData.show" v-model="address.chosenAddressId" :list="address.list" :disabled-list="address.disabledList" disabled-text="以下地址超出配送范围" default-tag-text="默认" @add="$utils.ToView('AddressAdd')" @edit="onEdit" @select="onSelect" />
            <NoData :show="noData.show" :msg="noData.msg" :button="{show:noData.button.show,value:noData.button.value,to:noData.button.to,style:noData.button.style}" />
        </van-popup>
    </div>
</template>

<script>
import NoData from "@/components/NoData";
export default {
    components: {
        NoData,
    },
    data() {
        return {
            noData: {
                show: true,
                msg: "还没有任何地址",
                button: {
                    show: true,
                    value: "添加地址",
                    to: {
                        name: "AddressAdd",
                    },
                    style: {
                        width: "160px",
                        height: "40px",
                        color: "#fff",
                        background: "#1989fa",
                    },
                },
            },
            address: {
                chosenAddressId: "1",
                active: {
                    id: "1",
                    name: "张三",
                    tel: "13000000000",
                    address:
                        "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
                },
                list: [
                    {
                        id: "1",
                        name: "张三",
                        tel: "13000000000",
                        address:
                            "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
                        isDefault: true,
                    },
                    {
                        id: "2",
                        name: "李四",
                        tel: "1310000000",
                        address: "浙江省杭州市拱墅区莫干山路 50 号",
                        isDefault: false,
                    },
                ],
                disabledList: [
                    {
                        id: "3",
                        name: "王五",
                        tel: "1320000000",
                        address: "浙江省杭州市滨江区江南大道 15 号",
                    },
                ],
            },
            popup: {
                show: false,
                position: "right",
                style: { width: "100%", height: "100%" },
            },
        };
    },
    created() {
        let _this = this;
        if (_this.address.list.length > 0) {
            _this.noData.show = false;
            _this.address.active = _this.address.list.filter(
                (item) => item.isDefault
            )[0];
        }
    },
    methods: {
        onEdit(item) {
            let _this = this;
            let aid = item.id;
            _this.$utils.ToView("AddressUpdate", { aid: aid });
        },
        onSelect(item) {
            let _this = this;
            _this.address.active = item;
            _this.popup.show = false;
            _this.$emit("click", item.id);
        },
    },
};
</script>

<style scoped>
</style>