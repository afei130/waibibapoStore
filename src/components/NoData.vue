<template>
    <div>
        <van-empty :class="position" :image="image[type]" v-show="show" :description="msg">
            <van-button v-if="button.show" round :style="button.style" @click="$utils.ToView(button.to.name,button.to.params)">{{button.value}}</van-button>
        </van-empty>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        type: {
            type: Number,
            default: 0,
        },
        msg: {
            type: String,
            default: "暂无数据",
        },
        position: {
            type: String,
            default: "",
        },
        button: {
            type: Object,
            default() {
                return {
                    show: false,
                    value: "按钮",
                    to: {
                        name: "",
                    },
                    style: {
                        width: "160px",
                        height: "40px",
                        color: "#fff",
                        background: "#1989fa",
                    },
                };
            },
        },
    },
    data() {
        return {
            image: ["default", "error", "network", "search"],
        };
    },
};
</script>

<style scoped>
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
}
/deep/ .van-empty__description {
    padding: 0;
}
</style>
