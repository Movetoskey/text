<template>
  <div class="cartbuy">
    <!-- 加入购物车 -->
    <div class="buy" v-show="this.show">
      <div class="dialog">
        <div class="describe">
          <img :src="lists[this.index].path" alt="" />
          <div class="text">
            <p>{{ lists[index].text }}</p>
            <strong>￥{{ lists[index].price }}</strong>
            <van-icon
              name="close"
              class="close"
              size="25"
              color="#56bb37"
              @click="close"
            />
          </div>
        </div>
        <div class="describe mount">
          <p>数量</p>
          <div>
            <button @click="sub()">-</button>
            <input type="number" :value="this.number" />
            <button @click="add()">+</button>
          </div>
        </div>
        <div class="addcart" @click="addcart(lists[index])">加入购物车</div>
      </div>
    </div>
    <!-- 购买 -->
    <div class="buy" v-show="this.showbuy">
      <div class="dialog">
        <div class="describe">
          <img :src="lists[this.index].path" alt="" />
          <div class="text">
            <p>{{ lists[index].text }}</p>
            <strong>￥{{ lists[index].price }}</strong>
            <van-icon
              name="close"
              class="close"
              size="25"
              color="#56bb37"
              @click="close"
            />
          </div>
        </div>
        <div class="describe mount">
          <p>数量</p>
          <div>
            <button @click="sub()">-</button>
            <input type="number" :value="this.number" />
            <button @click="add()">+</button>
          </div>
        </div>
        <router-link :to="{ name: 'Settle' }">
          <div class="addcart" @click="addcart(lists[index])">
            立即购买
          </div>
        </router-link>
      </div>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button
        type="warning"
        color="#56bb37"
        text="加入购物车"
        @click="onClickButton"
      />
      <van-goods-action-button
        type="danger"
        color="#4aa02b"
        text="立即购买"
        @click="onClickButton_buy"
      />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import Storage from "@/views/Storage.js";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { Toast } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { Icon } from "vant";

Vue.use(Toast);
Vue.use(Icon);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  name: "Cartbuy",
  data() {
    return {
      show: false,
      showbuy: false,
      items: Storage.get("items"),
      logined: Storage.get("logined"),
      number: 1,
    };
  },
  props: ["index"],
  computed: {
    ...mapState({
      lists: "lists",
    }),
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      if (this.logined.length == 0) {
        Toast("请先登录");
        this.$router.push({ name: "Logining" });
      } else {
        this.show = true;
      }
    },
    onClickButton_buy() {
      if (this.logined.length == 0) {
        Toast("请先登录");
        this.$router.push({ name: "Logining" });
      } else {
        this.showbuy = true;
      }
    },
    close() {
      this.show = false;
      this.showbuy = false;
    },
    sub() {
      this.number--;
      if (this.number < 1) {
        Toast("不能再减啦");
        this.number = 1;
      }
    },
    add() {
      this.number++;
    },
    addcart(lists) {
      var a = null;
      // console.log(lists);
      // 设置商品的缓存
      this.items.forEach((item) => {
        if (lists.path == item.path) {
          a = true;
          item.num += this.number;
        }
      });
      if (a == null) {
        this.$set(this.items, this.items.length, {
          path: lists.path,
          text: lists.text,
          price: lists.price,
          num: this.number,
          checked: true,
        });
      }
      Toast("添加成功");
      this.show = false;
    },
  },
  watch: {
    items: {
      handler() {
        Storage.set("items", this.items);
      },
      deep: true,
    },
  },
  created() {
    // console.log(this.lists);
  },
};
</script>

<style lang="less" scoped>
.cartbuy {
  .buy {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
    .dialog {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 180px;
      background: #fff;

      .describe {
        width: 100%;
        height: 66px;
        padding: 5px 10px;
        border-bottom: 1px solid #dedede;
        box-sizing: border-box;
        display: flex;
        img {
          display: block;
          position: relative;
          border: 1px solid #dedede;
          border-radius: 5px;
          top: -40px;
          width: 85px;
          height: 85px;
        }
        .text {
          width: 100%;
          position: relative;
          margin-left: 10px;
          p {
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #000;
            margin-bottom: 5px;
            font-size: 16px;
          }
          strong {
            font-size: 14px;
            color: #56bb37;
          }
          .close {
            position: absolute;
            top: 0;
            right: 0;
          }
        }
      }
      .mount {
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        div {
          background-color: #f1f1f1;
          color: #878787;
          border-radius: 2px;
          line-height: 16px;
          button {
            width: 20px;
            height: 20px;
            border: 0;
            font-weight: 800;
          }
          input {
            width: 40px;
            height: 20px;
            border: 0;
            background-color: #f1f1f1;
            text-align: center;
          }
        }
      }

      .addcart {
        width: 100%;
        background: #56bb37;
        a {
          display: inline-block;
          width: 100%;
          color: #fff;
          background: #4aa02b;
        }
        color: #fff;
        height: 44px;
        text-align: center;
        line-height: 44px;
      }
    }
  }
}
</style>
