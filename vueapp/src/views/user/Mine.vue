<template>
    <div>
        <div class="user-container">
            <div class="user-container-tx">
                <img class="img" src="@/assets/images/tx2.jpg">
            </div>
            <div class="user-container-name">用户名</div>
        </div>
        <van-cell title="我的订单" value="查看" is-link @click="$utils.toView('OrderList')" />
        <van-grid :clickable="true">
            <van-grid-item icon="cash-on-deliver" text="待付款" @click="$utils.toView('OrderList',{ active:0 })" />
            <van-grid-item icon="logistics" text="待发货" @click="$utils.toView('OrderList',{ active:1 })" />
            <van-grid-item icon="send-gift-o" text="待收货" @click="$utils.toView('OrderList',{ active:2 })" />
            <van-grid-item icon="records" badge="99+" text="待评价" @click="$utils.toView('OrderList',{ active:3 })" />
        </van-grid>
        <div class="gap" />
        <van-cell-group>
            <van-cell icon="chat-o" title="消息" is-link>
                <template #title>
                    <van-badge :content="200" max="99">
                        <div>消息</div>
                    </van-badge>
                </template>
            </van-cell>
            <van-cell icon="location-o" title="收货地址" is-link @click="$utils.toView('AddressList')" />
            <van-cell icon="star-o" title="我的收藏" is-link />
            <van-cell title="GitHub" is-link url="https://github.com/afei130/waibibapoStore" />
        </van-cell-group>
        <BottomTabbar />
    </div>
</template>

<script>
import BottomTabbar from "@/components/BottomTabbar";
export default {
    components: {
        BottomTabbar,
    },
    data() {
        return {};
    },
    created() {
        let _this = this;
        let user = {
            UserId:"admin",
            Password:"123456"
        }
        _this.$request.Post(
            "api/User/Login",
            {
                user: JSON.stringify(user),
            },
            (res) => {
                console.log(res)
                _this.$toast.success({
                    message: res.msg,
                    duration: 2000,
                });
            }
        );
    },
};
</script>

<style scoped>
.user-container {
    background: linear-gradient(to right, #ff6034, #ee0a24);
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.user-container-tx {
    width: 5rem;
    height: 5rem;
    border: solid 2px #fff;
    border-radius: 50%;
    overflow: hidden;
}
.user-container-name {
    color: #fff;
    font-size: 14px;
    margin-top: 5px;
}
</style>