<template>
  <div class="about">
    <div class="middle">
      <div class="user">
        <router-link :to="{ name: 'Set' }">
          <img src="@/assets/t1.jpg" alt="" />
          <p v-if="logined.length > 0">{{ logined[0].name | formatuser }}</p>
          <p v-if="logined.length == 0">未登录</p>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <p class="me">我的订单</p>
      <ul class="state">
        <li>
          <router-link :to="{ name: 'Orders', params: { index: 2 } }">
            <van-icon name="clock-o" color="#4aa02b" size="22px" />
            <p>付款中</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Orders', params: { index: 3 } }">
            <van-icon name="balance-pay" color="#4aa02b" size="22px" />
            <p>已付款</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Orders', params: { index: 4 } }">
            <van-icon name="certificate" color="#4aa02b" size="22px" />
            <p>已发货</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Orders', params: { index: 6 } }">
            <van-icon name="refund-o" color="#4aa02b" size="22px" />
            <p>已退款</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Orders', params: { index: 5 } }">
            <van-icon name="close" color="#4aa02b" size="22px" />
            <p>已取消</p>
          </router-link>
        </li>
      </ul>
      <p class="me">我的工具</p>
      <ul class="state one">
        <li>
          <router-link to="">
            <van-icon name="shopping-cart-o" color="#4aa02b" size="22px" />
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <van-icon name="like-o" color="#4aa02b" size="22px" />
            <p>我的关注</p>
          </router-link>
        </li>
      </ul>
      <p class="me">会员中心</p>
      <ul class="state two">
        <li>
          <router-link to="">
            <van-icon name="gift-o" color="#4aa02b" size="22px" />
            <p>优惠卷</p>
          </router-link>
        </li>
      </ul>
    </div>
    <Bottom />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import Storage from "@/views/Storage.js";
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  name: "About",
  components: {
    Bottom,
    Header,
  },
  data() {
    return {
      title: "用户中心",
      name: "1232",
      logined: Storage.get("logined"),
    };
  },
  filters: {
    formatuser(val) {
      return `${val}email-com`;
    },
  },
};
</script>

<style lang="less" scoped>
.about {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(244, 244, 244);
  .user {
    width: 100%;
    height: 150px;
    background: #4aa02b;
    display: flex;
    justify-content: center;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      img {
        width: 50px;
        margin-right: 25px;
        border-radius: 50%;
      }
      p {
        width: 220px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 20px;
        margin-right: 25px;
      }
    }
  }
  .me {
    width: 100%;
    box-sizing: border-box;
    height: 46px;
    line-height: 46px;
    margin: 5px 0;
    padding-left: 25px;
    font-size: 14px;
    background: #fff;
  }
  .state {
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    background: #fff;
    justify-content: space-around;
    li {
      text-align: center;
      a {
        p {
          font-size: 12px;
          color: #000;
        }
      }
    }
  }
  .one {
    justify-content: flex-start;
    li {
      padding-left: 20px;
    }
  }
  .two {
    justify-content: flex-start;
    li {
      padding-left: 20px;
    }
  }
}
</style>
