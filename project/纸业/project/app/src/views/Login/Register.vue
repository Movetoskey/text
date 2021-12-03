<template>
  <div class="register">
    <Headero :Title="this.title" />
    <van-cell-group>
      <van-field
        v-model="username"
        @blur="bluruser()"
        required
        label="用户名"
        placeholder="请填写用户名"
        :error-message="setuser"
      />
      <van-field
        v-model="password"
        required
        type="password"
        @blur="blurword()"
        label="密码"
        placeholder="请设置密码"
        :error-message="setword"
      />
      <van-field
        v-model="repassword"
        required
        type="password"
        @blur="blurreword()"
        label="再次确认密码"
        placeholder="再次设置密码"
        :error-message="resetword"
      />
      <van-field
        v-model="phone"
        required
        @blur="blurphone()"
        label="手机号"
        placeholder="建议常用手机号"
        :error-message="setphone"
      />
    </van-cell-group>
    <div class="foot">
      <router-link :to="{ name: 'Logining' }"> 已有账号，去登陆</router-link>
    </div>
    <div class="foot" @click="register()">注册</div>
  </div>
</template>

<script>
import Headero from "@/components/Headero";
import Storage from "@/views/Storage.js";
import Vue from "vue";
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
export default {
  name: "Register",
  components: {
    Headero,
  },
  data() {
    return {
      username: "",
      phone: "",
      password: "",
      repassword: "",
      setuser: "请输入长度为4-10位的字母、数字、下划线",
      setword: "以字母开头的6-10位，除空白符号外",
      resetword: "",
      setphone: "",
      title: "注册",
      usermsg: Storage.get("usermsg"),
      a: "",
      b: "",
      c: "",
      d: "",
    };
  },
  methods: {
    // 用户名
    bluruser() {
      var pattern = /^\w{4,10}$/;
      if (pattern.test(this.username)) {
        this.setuser = "";
        this.a = true;
      } else {
        this.setuser = "请输入长度为4-10位的字母、数字、下划线";
        this.a = false;
      }
      // 判断存不存在
      this.usermsg.forEach((val) => {
        if (val.name == this.username) {
          this.a = false;
          Toast("用户已被注册");
        } else {
          this.a = true;
        }
      });
    },
    blurword() {
      var pattern = /^[a-zA-Z]\S{5,9}$/;
      // console.log(this.password);
      if (pattern.test(this.password)) {
        this.setword = "";
        this.b = true;
      } else {
        this.setword = "格式错误，以字母开头的6-10位";
        this.b = false;
      }
    },
    blurreword() {
      var pattern = /^[a-zA-Z]\S{5,9}$/;
      if (pattern.test(this.password) && this.password == this.repassword) {
        this.resetword = null;
        this.c = true;
      } else {
        this.resetword = "两次密码不匹配";
        this.c = false;
      }
    },
    blurphone() {
      var pattern = /^1\d{10}$/;
      if (pattern.test(this.phone)) {
        this.setphone = null;
        this.d = true;
      } else {
        this.setphone = "手机号格式错误";
        this.d = false;
      }

      this.usermsg.forEach((val) => {
        if (val.phone == this.phone) {
          this.d = false;
          Toast("电话已被注册");
        } else {
          this.d = true;
        }
      });
    },
    register() {
      if (this.a && this.b && this.c && this.d) {
        this.$set(this.usermsg, this.usermsg.length, {
          name: this.username,
          password: this.password,
          phone: this.phone,
        });
        Storage.set("usermsg", this.usermsg);
        Toast("注册成功");
        this.$router.push({ name: "Logining" });
      } else {
        Toast("信息错误");
      }

      //
      if (this.phone == "") {
        Toast("请输入手机号");
      }
      if (this.repassword == "") {
        Toast("请确认密码");
      }
      if (this.password == "") {
        Toast("请设置密码");
      }
      if (this.username == "") {
        Toast("请输入用户名");
      }
    },
  },
  watch: {
    usermsg: {
      handler() {
        Storage.set("usermsg", this.usermsg);
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="less">
.register {
  width: 100%;
  .foot {
    width: 150px;
    height: 40px;
    background: #56bb37;
    font-size: 14px;
    border-radius: 10px;
    color: #fff;
    margin: 10px auto;
    text-align: center;
    line-height: 40px;
    a {
      color: #fff;
    }
  }
}
</style>
