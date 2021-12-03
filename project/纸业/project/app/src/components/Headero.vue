<template>
  <div class="headero">
    <div class="title">
      <van-icon name="arrow-left" size="16px" @click="back()" />
      <p>{{ Title }}</p>
      <img src="@/assets/dian.png" alt="" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { Badge } from "vant";

Vue.use(Badge);

Vue.use(Icon);
export default {
  name: "Headero",
  props: ["Title"],
  methods: {
    back() {
      this.$router.push({ name: "About" });
    },
  },
};
</script>

<style lang="less" scoped>
.headero {
  width: 100%;
  height: 40px;

  .title {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    z-index: 9999;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
