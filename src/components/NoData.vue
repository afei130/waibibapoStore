<template>
  <div>
    <van-empty
    :class="position"
    :image="image[type]"
    v-show="show"
    :description="msg"
  />
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
    msg:{
      type:String,
      default: "暂无数据"
    },
    position:{
      type:String,
      default: ""
    }
  },
  data() {
    return {
      image: ["default", "error", "network", "search"]
    };
  }
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
