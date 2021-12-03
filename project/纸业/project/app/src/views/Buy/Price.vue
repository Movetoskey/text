<template>
  <div class="price">
    <Header :Title="this.title" />
    <van-search placeholder="输入关键词搜索" />
    <div class="middle">
      <!-- 路由 -->
      <div class="nav">
        <router-link :to="{ name: 'Search' }">
          <span>综合</span>
        </router-link>
        <router-link :to="{ name: 'Sell' }">
          <span>销量</span>
        </router-link>
        <router-link :to="{ name: 'Price' }">
          <span>
            价格
            <div
              :class="[this.temp ? 'triangle_top' : 'red']"
              @click="asc()"
            ></div>
            <div
              :class="[this.temp ? 'triangle_bottom' : 'green']"
              @click="desc()"
            ></div>
          </span>
        </router-link>
      </div>
      <!-- 路由 -->
      <ul class="list">
        <li v-for="(list, index) in lists" :key="index">
          <router-link to="">
            <img :src="list.path" alt="" />
            <div>
              <p>{{ list.text }}</p>
              <strong>￥{{ list.price }}</strong>
              <span>销量：<img src="@/assets/cart.png" alt=""/></span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <Bottom />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import { Search } from "vant";
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "Search",
  components: {
    Bottom,
    Header,
  },
  data() {
    return {
      title: "商品搜索",
      active: 2,
      temp: null,
      lists: [
        {
          path: require("@/assets/pro1.webp"),
          text: "洁柔手帕纸巾小包可湿水面巾纸餐巾纸",
          price: 29,
          pic: require("@/assets/xq-pro1.jpg"),
        },
        {
          path: require("@/assets/pro2.webp"),
          text: "得宝手帕纸巾小包迷你面巾纸餐巾纸",
          price: 49,
          pic: require("@/assets/xq-pro2.jpg"),
        },
        {
          path: require("@/assets/pro3.webp"),
          text: "得宝纯棉纸巾干湿两用全棉柔巾90抽",
          price: 39,
          pic: require("@/assets/xq-pro3.jpg"),
        },
        {
          path: require("@/assets/pro4.webp"),
          text: "本色抽纸巾3层面巾纸食品级低白度餐巾原浆家庭实惠装",
          price: 19,
          pic: require("@/assets/xq-pro4.jpg"),
        },
        {
          path: require("@/assets/pro5.webp"),
          text: "抽纸批发箱装家庭装特价纸巾原浆抽纸实惠装",
          price: 89,
          pic: require("@/assets/xq-pro5.jpg"),
        },
        {
          path: require("@/assets/pro6.webp"),
          text: "厨房用纸厨房纸料理专用",
          price: 49,
          pic: require("@/assets/xq-pro6.jpg"),
        },
        {
          path: require("@/assets/pro7.webp"),
          text: "湿巾批发茶语超便携迷你",
          price: 19,
          pic: require("@/assets/xq-pro7.jpg"),
          pic1: require("@/assets/xq-pro77.jpg"),
        },
        {
          path: require("@/assets/pro8.webp"),
          text: "纸巾餐巾纸面巾纸无香擦手纸面纸方巾纸抽",
          price: 59,
          pic: require("@/assets/xq-pro8.jpg"),
        },
        {
          path: require("@/assets/pro9.webp"),
          text: "手帕纸本色原浆低白度纸巾家用卫生餐巾纸",
          price: 19,
          pic: require("@/assets/xq-pro4.jpg"),
        },
        {
          path: require("@/assets/pro10.webp"),
          text: "无芯卷纸本色卫生纸批发",
          price: 30,
          pic: require("@/assets/xq-pro9.jpg"),
          pic1: require("@/assets/xq-pro99.jpg"),
        },
      ],
    };
  },

  methods: {
    desc() {
      this.temp = false;
      this.lists.sort((a, b) => {
        return a.price - b.price;
      });
    },
    asc() {
      this.temp = true;
      this.lists.sort(function(a, b) {
        return b.price - a.price;
      });
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.price {
  width: 100%;
  .van-search {
    width: 90%;
    margin: 0 auto;
  }
  .middle {
    .nav {
      width: 100%;
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
      span {
        position: relative;
        .triangle_top {
          width: 0;
          height: 0;
          position: absolute;
          top: 0;
          right: -15px;
          border-bottom: 6px solid red;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
        }
        .triangle_bottom {
          width: 0;
          height: 0;
          position: absolute;
          bottom: -2px;
          right: -15px;
          border-top: 6px solid #42b983;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
        }
        .red {
          width: 0;
          height: 0;
          position: absolute;
          top: 0;
          right: -15px;
          border-bottom: 6px solid #40b983;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
        }
        .green {
          width: 0;
          height: 0;
          position: absolute;
          bottom: -2px;
          right: -15px;
          border-top: 6px solid red;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
        }
      }
    }
    .list {
      width: 100%;
      overflow: hidden;
      li {
        width: 100%;
        height: 80px;
        padding: 10px 0;
        a {
          display: flex;
          justify-content: space-around;
          img {
            width: 80px;
            margin-left: 10px;
          }
          div {
            width: 70%;
            padding-left: 10px;
            p {
              width: 208px;
              font-size: 15px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #000;
            }
            strong {
              font-size: 15px;
              color: #000;
              font-weight: 400;
            }
            span {
              display: block;
              font-size: 14px;
              color: #666;
              padding: 5px 0 0;
              img {
                width: 14px;
                float: right;
              }
            }
          }
        }
      }
    }
  }
}
</style>
