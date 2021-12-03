<template>
  <div class="overbooking">
    <Header :Title="this.title" />
    <div class="waiting">
      <van-icon name="bag" />
      <p>订单 等待中</p>
    </div>
    <p class="title">
      请在尽快完成付款，还剩 <span>20分</span> （超时按取消订单处理）
    </p>
    <div class="address" v-if="this.selected.length > 0">
      <van-tag type="success">地址</van-tag>
      <p>{{ this.selected[0].name }}</p>
      <p>{{ this.selected[0].tel }}</p>
      <h1>{{ this.selected[0].address }}</h1>
    </div>
    <ul class="list">
      <li v-for="(item, index) in items" :key="index">
        <img :src="item.path" alt="" />
        <div class="text">
          <p>{{ item.text }}</p>
          <strong>
            ￥{{ item.price }}
            <span> ×{{ item.num }} </span>
          </strong>
        </div>
      </li>
    </ul>
    <ul class="container">
      <li>
        购物车小计： <span>￥{{ totalprice }}</span>
      </li>
      <li>配送： <span>免费送货</span></li>
      <li>
        订单合计： <span>￥{{ totalprice }}</span>
      </li>
      <li class="message">
        买家留言
        <p>#3101</p>
      </li>
      <li class="orderTime">
        订单编号
        <p>#3101</p>
      </li>
      <li class="orderTime">
        下单时间
        <p>{{ times[times.length] | formatDate() }}</p>
      </li>
      <li class="cancel">
        <p @click="cancel()">取消订单</p>
        <van-button plain hairline type="primary" size="small" @click="goTo()"
          >立即支付</van-button
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Vue from "vue";
import { Icon } from "vant";
import Storage from "@/views/Storage.js";
import { Tag } from "vant";
import { Button } from "vant";
import moment from "moment";

Vue.use(Button);
Vue.use(Tag);
Vue.use(Icon);
export default {
  name: "Overbooking",
  components: {
    Header,
  },
  //
  data() {
    return {
      title: "订单详情",
      selected: Storage.get("selected"),
      items: Storage.get("items"),
      times: Storage.get("times"),
      newArray: Storage.get("newArray"),
    };
  },
  computed: {
    totalprice() {
      let totalprice = 0;
      this.items.forEach((item) => {
        if (item.checked == true) {
          totalprice += item.price * item.num;
        }
      });
      return totalprice;
    },
  },
  methods: {
    goTo() {
      window.localStorage.removeItem("items");
      this.$router.push({ name: "Orders", params: { index: 2 } });
    },
    cancel() {
      window.localStorage.removeItem("items");
      this.times.text = "已取消";
      this.times.forEach((val) => {
        this.$set(this.newArray, this.newArray.length, {
          time: val.time,
          items: val.items,
          text: "已取消",
        });
      });
      Storage.set("newArray", this.newArray);
      this.$delete(this.times, this.times.length - 1);
      Storage.set("times", this.times);
      this.$router.push({ name: "Orders", params: { index: 5 } });
    },
  },
  filters: {
    formatDate(dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
      return moment(dateStr).format(pattern);
    },
  },
  watch: {
    times: {
      handler() {
        Storage.set("times", this.times);
      },
      deep: true,
    },
    items: {
      handler() {
        Storage.set("items", this.items);
      },
      deep: true,
    },
    newArray: {
      handler() {
        Storage.set("newArray", this.newArray);
      },
      deep: true,
    },
  },
  created() {
    var tt = new Date(); //获取当前时间
    this.$set(this.times, this.times.length, {
      time: tt,
      items: this.items,
      text: "付款中",
    });
    // console.log(this.times);
  },
};
</script>

<style lang="less" scoped>
.overbooking {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #f4f4f4 !important;
  .waiting {
    width: 100%;
    color: #fff;
    height: 90px;
    box-sizing: border-box;
    padding-left: 15px;
    background: #4aa02b;
    display: flex;
    align-items: center;
  }
  .title {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    margin-bottom: 8px;
    font-size: 12px;
    background: #fff;
    span {
      color: #4aa02b;
    }
  }
  .address {
    width: 100%;
    height: 67px;
    padding: 13px 30px 13px 13px;
    box-sizing: border-box;
    margin-top: 8px;
    font-size: 14px;
    background: #fff;
    position: relative;
    span {
      color: #fff;
    }
    p {
      display: inline-block;
      margin: 0 3px;
      color: #000;
    }
    h1 {
      font-weight: 400;
      color: #000;
      font-size: 14px;
    }
    .van-icon-arrow {
      position: absolute;
      top: 20px;
      color: #000;
      right: 10px;
    }
  }
  .list {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    margin: 2px 0;
    li {
      width: 100%;
      height: 70px;
      box-sizing: border-box;
      padding: 8px 13px;
      margin: 2px 0;
      display: flex;
      background: #fff;
      img {
        width: 50px;
      }
      p {
        font-size: 12px;
      }
      .text {
        width: 100%;
        box-sizing: border-box;
        margin-left: 10px;
        p {
          width: 208px;
          font-size: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #000;
        }
        strong {
          display: block;
          padding-top: 10px;
          color: #42b983;
          font-weight: 400;
          span {
            float: right;
            border-radius: 2px;
            line-height: 16px;
            margin-right: 30px;
            font-weight: 600;
          }
        }
      }
    }
  }
  .container {
    width: 100%;
    margin: 5px 0;
    padding-bottom: 50px;
    font-size: 14px;
    background: #f4f4f4;
    box-sizing: border-box;
    li {
      background: #fff;
      padding: 6px 15px;
      margin: 2px 0;
      display: flex;
      justify-content: space-between;
      span {
        color: #56bb37;
      }
      p {
        margin-left: 20px;
      }
    }
    .message {
      padding: 12px 15px;
      margin: 7px 0;
      justify-content: start;
    }
    .orderTime {
      padding: 12px 15px;
      justify-content: start;
    }
    .cancel {
      padding: 12px 15px;
      line-height: 25px;
      p {
        margin: 0;
      }
      button {
        height: 25px;
      }
    }
  }
}
</style>
