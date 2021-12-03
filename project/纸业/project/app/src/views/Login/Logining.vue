<template>
  <div class="logining">
    <Header :Title="this.title" />
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
        v-model="phone"
        required
        @blur="blurphone()"
        label="手机号"
        placeholder="建议常用手机号"
        :error-message="setphone"
      />
    </van-cell-group>
    <div class="foot" @click="logining()">登录</div>
    <div class="foot">
      <router-link :to="{ name: 'Register' }">没有账号，去注册</router-link>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
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
  name: "Logining",
  components: {
    Header,
  },
  data() {
    return {
      username: "",
      phone: "",
      password: "",
      setuser: "请输入长度为4-10位的字母、数字、下划线",
      setword: "以字母开头的6-10位，除空白符号外",
      setphone: "",
      title: "登录",
      usermsg: Storage.get("usermsg"),
      logined: Storage.get("logined"),
      a: "",
      b: "",
      c: "",
    };
  },
  methods: {
    bluruser() {
      var pattern = /^\w{4,10}$/;
      if (pattern.test(this.username)) {
        this.setuser = "";
      } else {
        this.setuser = "请输入长度为4-10位的字母、数字、下划线";
      }
      // 判断有没有
      this.a = false;
      this.usermsg.forEach((val) => {
        if (val.name == this.username) {
          this.a = true;
        }
      });
      if (this.a == false) {
        Toast("用户名不存在");
      }
    },
    blurword() {
      var pattern = /^[a-zA-Z]\S{5,9}$/;
      if (pattern.test(this.password)) {
        this.setword = "";
      } else {
        this.setword = "格式错误，以字母开头的6-10位";
      }
      this.b = false;
      this.usermsg.forEach((val) => {
        if (val.password == this.password) {
          this.b = true;
        }
      });
      if (this.b == false) {
        Toast("密码错误");
      }
    },
    blurphone() {
      var pattern = /^1\d{10}$/;
      if (pattern.test(this.phone)) {
        this.setphone = null;
      } else {
        this.setphone = "手机号格式错误";
      }
      //
      this.c = false;
      this.usermsg.forEach((val) => {
        if (val.phone == this.phone) {
          this.c = true;
        }
      });
      if (this.c == false) {
        Toast("手机号未注册");
      }
    },
    logining() {
      //
      if (this.b && this.a && this.c) {
        this.usermsg.forEach((val) => {
          if (
            val.name == this.username &&
            val.phone == this.phone &&
            val.password == this.password
          ) {
            Toast("登录成功");
            this.logined.splice(0, this.logined.length);
            this.$set(this.logined, this.logined.length, {
              name: val.name,
              phone: val.phone,
              password: val.password,
            });
            Storage.set("logined", this.logined);
            this.$router.push({ path: "/" });
          }
        });
      } else {
        Toast("信息输入有误");
      }

      if (this.phone == "") {
        Toast("请输入手机号");
      }
      if (this.password == "") {
        Toast("请输入密码");
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
    logined: {
      handler() {
        Storage.set("logined", this.logined);
      },
      deep: true,
    },
  },

  created() {},
};
</script>

<style scoped lang="less">
.logining {
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
