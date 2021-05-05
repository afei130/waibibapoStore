<template>
  <div class="page">
    <HeadTabbar :title="$title" :left="{ title:'',leftArrow:false }" />
    <div class="card" v-for="(item,index) in cards.goods" :key="index">
      <div class="card-container">
        <div class="card-container-left" @click="onSelect(index)">
          <van-checkbox v-model="item.checked" />
        </div>
        <div class="card-container-right">
          <van-card :tag="item.tag" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.thumb">
            <template #tags>
              <span v-for="(itemTag,index) in item.tags" :key="index">
                <van-tag class="card-tags" plain type="danger">{{itemTag.title}}</van-tag>
              </span>
            </template>
            <template #bottom>
              <van-stepper class="card-container-right-stepper" input-width="30px" button-size="20px" theme="round"
                v-model="item.num" :min="0" @change="onNum(index)" />
            </template>
          </van-card>
        </div>
      </div>
    </div>
    <NoData :show="noData.show" :msg="noData.msg" />
    <div class="foot-container">
      <van-submit-bar class="foot-container-item" :price="submitBar.price" :button-text="submitBar.buttonText"
        @submit="onSubmit">
        <van-checkbox @click="onAllSelect" v-model="submitBar.checkbox.checked">{{submitBar.checkbox.buttonText}}
        </van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
  import HeadTabbar from "@/components/HeadTabbar";
  import NoData from "@/components/NoData";
  export default {
    components: {
      HeadTabbar,
      NoData
    },
    data() {
      return {
        noData: {
          msg: "购物车空空如也",
          show: true
        },
        submitBar: {
          checkbox: {
            checked: false,
            buttonText: "全选"
          },
          price: 0,
          buttonText: "提交订单"
        },
        cards: {
          goods: [
            {
              checked: false,
              tag: "热卖",
              tags: [
                {
                  title: "满3999减620"
                },
                {
                  title: "12期免息"
                }
              ],
              price: "6199.00",
              num: 1,
              desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
              title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
              thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
              originPrice: "6888.00"
            }, {
              checked: false,
              tag: "热卖",
              tags: [
                {
                  title: "满3999减620"
                },
                {
                  title: "12期免息"
                }
              ],
              price: "6199.00",
              num: 1,
              desc: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
              title: "Apple iPad Pro 11英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜屏) 深空灰色",
              thumb: "https://img01.yzcdn.cn/vant/apple-1.jpg",
              originPrice: "6888.00"
            }]
        }
      };
    },
    created() {
      let goods = this.cards.goods;
      if (goods.length > 0) {
        this.noData.show = false;
      } else {
        this.noData.show = true;
      }
    },
    methods: {
      //单选商品
      onSelect(index) {
        console.log("onSelect")
        let _this = this;
        let goods = _this.cards.goods;
        goods[index].checked = goods[index].checked ? false : true;
        _this.calculatePrice();
      },
      //全选商品
      onAllSelect() {
        let _this = this;
        let checkbox = _this.submitBar.checkbox;
        let goods = _this.cards.goods;
        goods.forEach(item => {
          item.checked = checkbox.checked ? true : false;
        });
        _this.calculatePrice();
      },
      //增加/减少商品数量
      onNum(index) {
        console.log("onNum")
        let _this = this;
        let goods = _this.cards.goods;
        if (goods[index].num > 0) {
          goods[index].checked = true;
        } else {
          _this.$dialog.confirm({
            title: '提示',
            message: '确认删除该商品吗？',
          })
            .then(() => {
              goods.splice(index, 1);
            }).catch(() => {
              goods[index].num++;
            });
        }
        _this.calculatePrice();
      },
      //计算价格
      calculatePrice() {
        let _this = this;
        let submitBar = _this.submitBar;
        submitBar.price = 0;
        let goods = _this.cards.goods;
        goods.forEach(item => {
          if (item.checked) {
            submitBar.price += parseFloat(item.price) * item.num * 100;
          }
        });
      },
      //提交订单
      onSubmit() { }
    },
  };
</script>

<style scoped>
  .page {
    padding: 10px 0;
  }

  .card {
    background: #fafafa;
    margin-bottom: 10px;
  }

  .card-container {
    display: flex;
    align-items: center;
  }

  .card-container-left {
    padding-left: 10px;
  }

  .card-container-right {
    width: 100%;
    overflow: hidden;
  }

  .card-container-right-stepper {
    width: 100%;
    text-align: right;
  }

  .van-card__bottom {
    display: flex;
    margin-top: 10px;
  }

  .van-card__price {
    color: #ee0a24;
    font-weight: 700;
  }

  .foot-container {
    height: 50px;
  }

  .foot-container-item {
    margin-bottom: 50px;
  }
</style>