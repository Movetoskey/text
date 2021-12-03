<template>
  <div class="search">
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
          <span
            >价格
            <div class="triangle_top"></div>
            <div class="triangle_bottom"></div>
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
    };
  },
  computed: {
    ...mapState({
      lists: "lists",
    }),
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
.search {
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
          border-bottom: 6px solid #42b983;
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
