<template>
    <div>
        <div class="user-container">
            <div class="user-container-tx">
                <img class="img" src="@/assets/images/tx2.jpg">
            </div>
            <div class="user-container-name">用户名</div>
        </div>
        <van-cell title="我的订单" value="查看" is-link />
        <van-grid :clickable="true">
            <van-grid-item icon="cash-on-deliver" text="待付款" />
            <van-grid-item icon="logistics" text="待发货" />
            <van-grid-item icon="send-gift-o" text="待收货" />
            <van-grid-item icon="records" badge="99+" text="待评价" />
        </van-grid>
        <div style="height: 10px;"></div>
        <van-cell-group>
            <van-cell icon="coupon-o" title="优惠券" is-link />
            <van-cell icon="chat-o" title="消息" is-link>
                <template #title>
                    <van-badge :content="200" max="99">
                        <div>消息</div>
                    </van-badge>
                </template>
            </van-cell>
            <van-cell icon="location-o" title="收货地址" is-link />
            <van-cell icon="star-o" title="我的收藏" is-link />
            <van-cell title="GitHub" is-link url="https://github.com/afei130/waibibapoStore" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        };
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