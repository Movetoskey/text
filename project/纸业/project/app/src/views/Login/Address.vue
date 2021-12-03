<template>
  <div class="address">
    <Header :Title="this.title" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onselected"
    />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Storage from "@/views/Storage.js";
import Vue from "vue";
import { AddressList } from "vant";
// import { Toast } from "vant";

Vue.use(AddressList);
export default {
  name: "Address",
  components: {
    Header,
  },
  data() {
    return {
      chosenAddressId: "1",
      title: "选择收货地址",
      list: Storage.get("addressLists"),
      selected: Storage.get("selected"),
    };
  },
  methods: {
    onAdd() {
      this.$router.push({ name: "Edit" });
    },
    onEdit(item, index) {
      this.$router.push({ name: "Edit", params: { index: index } });
    },
    // 购买页面
    onselected(item, index) {
      // 1删除
      // this.selected.forEach((val) => {
      //   this.selected.splice(val, 1);
      // });
      // 2删除
      this.$delete(this.selected, 0);
      this.$set(this.selected, this.selected.length, {
        name: this.list[index].name,
        tel: this.list[index].tel,
        address: this.list[index].address,
      });
    },
  },
  watch: {
    selected: {
      handler() {
        Storage.set("selected", this.selected);
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.address {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #efeff4;
}
</style>
