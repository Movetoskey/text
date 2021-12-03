<template>
  <div class="detail_db">
    <Header :Title="this.title" />
    <div class="pic">
      <img :src="db[this.index].path" alt="" />
    </div>
    <div class="goods">
      <strong>￥19</strong>
      <h1>{{ db[this.index].text }}</h1>

      <p>
        活动： <span>[最新优惠券]</span>
        <router-link to=""> 立即领取 <van-icon name="arrow"/></router-link>
      </p>

      <router-link to="">
        <p>
          选择商品规格<a href=""> <van-icon name="arrow"/></a>
        </p>
      </router-link>
    </div>
    <div class="slide">
      <div class="line"></div>
      <span>继续拖动，查看商品信息</span>
      <div class="line"></div>
    </div>
    <van-tabs v-model="active" color="#56bb37" title-active-color="#56bb37">
      <van-tab title=" 详情"><Moredb :index="index"/></van-tab>
      <van-tab title="评论">
        <van-tabs type="card" color="#56bb37">
          <van-tab title="全部"></van-tab>
          <van-tab title="好评(0)"></van-tab>
          <van-tab title="中评(0)"></van-tab>
          <van-tab title="差评(0)"></van-tab>
          <van-tab title="有图(0)"></van-tab> </van-tabs
      ></van-tab>
    </van-tabs>
    <Cartbuy />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Header from "@/components/Header";
import Moredb from "@/components/Moredb";
import Cartbuy from "@/components/Cartbuy";
import Vue from "vue";
import { Icon } from "vant";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
export default {
  name: "Detail",
  components: {
    Header,
    Moredb,
    Cartbuy,
  },
  data() {
    return {
      title: "商品详情",
      active: 2,
      index: "",
    };
  },
  computed: {
    ...mapState({
      db: "db",
    }),
  },
  created() {
    this.index = this.$route.params.id;
    console.log(this.index);
  },
};
</script>

<style lang="less" scoped>
.detail_db {
  .pic {
    img {
      width: 100%;
      height: 320px;
    }
  }
  .goods {
    width: 100%;
    height: 126px;
    padding: 0 10px;
    box-sizing: border-box;
    strong {
      display: block;
      width: 100%;
      padding-top: 10px;
      text-align: center;
      color: #56bb37;
    }
    h1 {
      text-align: center;
      padding-top: 5px;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 11px;
    }
    p {
      height: 16px;
      font-size: 13px;
      padding-top: 6px;
      margin: 6px 0;
      color: #666;
      border-top: 1px solid #eee;
      span {
        color: #56bb37;
        font-size: 13px;
      }
      a {
        float: right;
        color: #666;
      }
    }
  }
  .slide {
    padding: 8px;
    text-align: center;
    background-color: #eee;
    color: #666;
    font-size: 12px;
    .line {
      width: 40px;
      height: 1px;
      background: #ccc;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
