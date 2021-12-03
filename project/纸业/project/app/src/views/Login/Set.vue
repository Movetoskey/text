<template>
  <div class="set">
    <Header :Title="this.title" />
    <ul>
      <li class="me">
        <div v-if="logined.length > 0">
          <img src="@/assets/t1.jpg" alt="" />
          <router-link :to="{ name: 'Message' }">
            <p>{{ logined[0].name }}</p>
            <span>电话:{{ logined[0].phone }}</span>
          </router-link>
        </div>
        <div v-if="logined.length == 0">
          <img src="@/assets/t1.jpg" alt="" />
          <router-link :to="{ name: 'Message' }">
            <p>未登录</p>
            <span>电话: 无</span>
          </router-link>
        </div>
        <router-link :to="{ name: 'Message' }">
          <span><van-icon name="arrow"/></span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Address' }">
          <p>我的收货地址</p>
        </router-link>
        <span><van-icon name="arrow"/></span>
      </li>
    </ul>
    <ul>
      <li>
        <p>新消息通知</p>
        <span><van-icon name="arrow"/></span>
      </li>
      <li>
        <p>主题换肤</p>
        <span><van-icon name="arrow"/></span>
      </li>
      <li>
        <p>隐私</p>
        <span><van-icon name="arrow"/></span>
      </li>
      <li>
        <p>通用</p>
        <span>地区、音效、辅助功能等 <van-icon name="arrow"/></span>
      </li>
    </ul>
    <ul>
      <li>
        <p>关于商城</p>
        <span><van-icon name="arrow"/></span>
      </li>
      <li>
        <p>帮助与反馈</p>
        <span><van-icon name="arrow"/></span>
      </li>
    </ul>

    <h1 v-if="logined.length > 0">
      <router-link :to="{ name: 'Logining' }">切换账号</router-link>
    </h1>
    <h1 @click="Exit()" v-if="logined.length > 0">退出登录</h1>
    <h1 v-if="logined.length == 0">
      <router-link :to="{ name: 'Logining' }">去登录</router-link>
    </h1>
    <h1 v-if="logined.length == 0">
      <router-link :to="{ name: 'Logining' }">先注册</router-link>
    </h1>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Storage from "@/views/Storage.js";
import Vue from "vue";
import { AddressList } from "vant";

Vue.use(AddressList);
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "Set",
  components: {
    Header,
  },
  data() {
    return {
      title: "设置",
      logined: Storage.get("logined"),
    };
  },
  methods: {
    Exit() {
      this.logined.splice(0, this.logined.length);
      Storage.set("logined", this.logined);
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="less" scoped>
.set {
  width: 100%;
  background: rgb(244, 244, 244);
  height: 100%;
  position: absolute;
  .nav {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ccc;
    font-size: 18px;
    p {
      font-size: 20px;
      padding-left: 10px;
      float: left;
    }
  }
  ul {
    width: 100%;
    background: #fff;
    margin-bottom: 10px;
    li {
      height: 40px;
      line-height: 40px;
      margin: 0 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(204, 204, 204, 0.438);
      p {
        color: #000;
      }
      span {
        color: #888;
      }
    }
    .me {
      height: 100px;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        a {
          margin-left: 10px;
          p {
            height: 30px;
            font-size: 20px;
            color: #000;
          }
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
    }
  }

  h1 {
    width: 300px;
    margin: 0 auto;
    height: 40px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    background: #56bb37;
    margin-bottom: 10px;
    text-align: center;
    color: #fff;
    a {
      color: #fff;
    }
  }
}
</style>
