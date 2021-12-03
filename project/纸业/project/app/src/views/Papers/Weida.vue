<template>
  <div class="weida">
    <Header :Title="this.title" />
    <div>
      <van-search placeholder="输入关键词搜索" />
      <button><router-link :to="{ name: 'Search' }">搜索</router-link></button>
    </div>

    <ul class="middle">
      <li v-for="(item, index) in items" :key="index">
        <router-link to="">
          <img :src="item.path" alt="" />
          <p>{{ item.text }}</p>
          <span>￥{{ item.price }} <img src="@/assets/cart.png" alt=""/></span>
        </router-link>
      </li>
    </ul>
    <Bottom />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import { Search } from "vant";

import { Button } from "vant";

Vue.use(Button);
Vue.use(Search);
export default {
  name: "Weida",
  components: {
    Header,
    Bottom,
  },
  data() {
    return {
      title: "维达",
      items: [
        {
          path: require("@/assets/pro3.webp"),
          text: "得宝纯棉纸巾干湿两用全棉柔巾90抽",
          price: 39,
        },
        {
          path: require("@/assets/pro2.webp"),
          text: "得宝手帕纸巾小包迷你面巾纸餐巾纸",
          price: 49,
        },
        {
          path: require("@/assets/pro6.webp"),
          text: "厨房用纸厨房纸料理专用",
          price: 49,
        },
        {
          path: require("@/assets/pro10.webp"),
          text: "无芯卷纸本色卫生纸批发",
          price: 30,
        },
      ],
    };
  },
  methods: {
    enter() {},
  },
};
</script>

<style lang="less" scoped>
.weida {
  width: 100%;
  .middle {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      height: 240px;
      img {
        width: 180px;
      }
      p {
        width: 136px;
        margin: 0 auto;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #000;
      }
      span {
        display: block;
        padding: 10px 0 10px 20px;
        font-size: 12px;
        color: #56bb37;
        img {
          width: 14px;
          float: right;
        }
      }
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    .van-search {
      padding: 0;
      margin: 10px 0 10px 12px;
      border: 1px solid #56bb37;
    }
    button {
      background: #56bb37;
      border: 0;
      height: 36px;
      width: 50px;
      font-size: 16px;
      a {
        color: #fff;
      }
    }
  }
}
</style>
