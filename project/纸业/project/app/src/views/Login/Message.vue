<template>
  <div class="message">
    <Header :Title="this.title" />
    <div class="face"><img src="@/assets/t1.jpg" alt="" /></div>
    <p>账号 <span>123123</span></p>
    <p>昵称 <input type="text" placeholder="请填写昵称" /></p>

    <van-field
      readonly
      clickable
      name="picker"
      :value="value"
      label="性别"
      placeholder="请填写性别"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <p>手机 <input type="tel" placeholder="请输入手机号" /></p>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Vue from "vue";
import { Form } from "vant";
import { Field } from "vant";
import { Popup } from "vant";
import { Picker } from "vant";

Vue.use(Picker);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
export default {
  name: "Message",
  components: {
    Header,
  },
  data() {
    return {
      title: "个人信息",
      value: "",
      columns: ["男", "女"],
      showPicker: false,
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
</script>

<style lang="less" scoped>
.message {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(244, 244, 244);
  .face {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    img {
      width: 80px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  p {
    width: 100%;
    box-sizing: border-box;
    height: 50px;
    padding: 10px 16px;
    font-size: 14px;
    color: #646566;
    margin: 5px 0;
    background: #fff;
    line-height: 30px;
    input {
      height: 24px;
      border: 0;
      margin-left: 68px;
    }
    span {
      margin-left: 68px;
    }
  }
}
</style>
