<template>
  <div class="orders">
    <Headero :Title="this.title" />
    <van-tabs v-model="active" color="#4aa02b" title-active-color="#4aa02b">
      <van-tab title="全部"><Paying /><Canceling /></van-tab>
      <van-tab title="未付款">内容 2</van-tab>
      <van-tab title="付款中"><Paying /></van-tab>
      <van-tab title="已付款">内容 4</van-tab>
      <van-tab title="已发货">内容 5</van-tab>
      <van-tab title="已取消"><Canceling /></van-tab>
      <van-tab title="已退款">内容7</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Headero from "@/components/Headero";
import Paying from "@/components/Paying";
import Canceling from "@/components/Canceling";
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "Orders",
  components: {
    Headero,
    Paying,
    Canceling,
  },
  data() {
    return {
      title: "订单列表",
      active: this.$route.params.index,
    };
  },
};
</script>

<style lang="less" scoped>
.orders {
  width: 100%;
}
</style>
