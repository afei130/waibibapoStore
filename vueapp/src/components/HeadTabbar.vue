<template>
  <van-nav-bar
    :title="title"
    :fixed="true"
    placeholder
    :left-arrow="left.leftArrow"
    :left-text="left.title"
    :right-text="right.title"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    left:{
      type:Object,
      default(){
        return{
          title:"返回",
          to:"",
          leftArrow:true
        }
      }
    },
    right:{
      type:Object,
      default(){
        return{
          title:"",
          to:""
        }
      }
    }
  },
  methods: {
    onClickLeft() {
      let _this = this;
      if (_this.left.to.length > 0) {
          _this.$utils.toView(_this.to);
      } else {
        _this.$router.go(-1); //返回上一层
      }
    },
    onClickRight() {
      let _this = this;
      if(_this.right.to.length > 0){
        _this.$utils.toView(_this.right.to);
      }
    },
  },
};
</script>

<style scoped></style>
