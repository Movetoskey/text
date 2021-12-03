<template>
  <div class="settle">
    <Header :Title="this.title" />
    <!-- 路由 -->
    <div class="nav" v-if="this.selected.length == 0">
      <router-link :to="{ name: 'Address' }">
        新增地址
        <van-icon name="arrow" />
      </router-link>
    </div>
    <!-- 地址 -->
    <div class="address" v-if="this.selected.length > 0">
      <router-link :to="{ name: 'Address' }">
        <van-tag type="success">地址</van-tag>
        <p>{{ this.selected[0].name }}</p>
        <p>{{ this.selected[0].tel }}</p>
        <h1>{{ this.selected[0].address }}</h1>
        <van-icon name="arrow" size="25px" />
      </router-link>
    </div>
    <ul class="list">
      <li v-for="(item, index) in items" :key="index">
        <input
          type="checkbox"
          :checked="item.checked"
          @click="radiocheck(index)"
        />
        <img :src="item.path" alt="" />
        <div class="text">
          <p>{{ item.text }}</p>
          <strong>
            ￥{{ item.price }}
            <div>
              <button @click="sub(item)">-</button>
              <input type="number" :value="item.num" />
              <button @click="add(item)">+</button>
            </div>
          </strong>
        </div>
        <p @click="drop(index)">删除</p>
      </li>
    </ul>
    <ul class="foot">
      <li>
        购物车小计
        <div>
          <span>￥{{ totalprice }}</span>
        </div>
      </li>
      <li>
        快递方式
        <div><span>免费送货 ￥0</span> <van-icon name="arrow" /></div>
      </li>
      <li>
        优惠券
        <div><span>不使用优惠券</span> <van-icon name="arrow" /></div>
      </li>
      <li>
        支付方式
        <div><span>微信支付</span><van-icon name="arrow" /></div>
      </li>
      <li>
        买家留言
        <div><input type="text" /></div>
      </li>
    </ul>
    <!--  下单 跳转到 overbooking -->
    <div class="order">
      <div>
        <label for=""
          ><input
            type="checkbox"
            @click="allCheck()"
            :checked="Allcheck"
          />全选</label
        >
        <p>
          合计：<span>{{ totalprice }}</span>
        </p>
        <button @click="overbooking()">下单</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Order from "@/components/Order";
import Storage from "@/views/Storage.js";
import Vue from "vue";
import { Icon } from "vant";
import { Tag } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Tag);
Vue.use(Icon);
export default {
  name: "Settle",
  components: {
    Header,
    Order,
  },
  data() {
    return {
      title: "确认订单",
      items: Storage.get("items"),
      Allcheck: true,
      addressLists: Storage.get("addressLists"),
      selected: Storage.get("selected"),
      index: "",
    };
  },
  computed: {
    totalprice() {
      let totalprice = 0;
      this.items.forEach((item) => {
        if (item.checked == true) {
          totalprice += item.price * item.num;
        }
      });
      return totalprice;
    },
  },
  methods: {
    sub(item) {
      // console.log(item.num);
      item.num--;
      if (item.num < 1) {
        Toast("不能再减啦");
        item.num = 1;
      }
    },
    add(item) {
      item.num++;
    },
    allCheck() {
      this.Allcheck = !this.Allcheck;
      this.items.forEach((val) => {
        val.checked = this.Allcheck;
      });
    },
    radiocheck(index) {
      this.items[index].checked = !this.items[index].checked;
      for (let i in this.items) {
        const item = this.items[i];
        if (item.checked == false) {
          this.Allcheck = false;
          return;
        } else {
          this.Allcheck = true;
        }
      }
    },
    drop(index) {
      // this.isplay = true
      if (confirm("是否删除该商品？")) {
        this.$delete(this.items, index);
      }
      if (this.items.length == 0) {
        this.Allcheck = false;
      }
      this.items.forEach((val) => {
        if (val.checked == true) {
          this.Allcheck = true;
        }
      });
    },
    overbooking() {
      // console.log(this.totalprice);
      if (
        this.items.length > 0 &&
        this.selected.length > 0 &&
        this.totalprice > 0
      ) {
        this.$router.push({ name: "Overbooking" });
      } else {
        this.Allcheck = false;
        Toast("请选好地址或商品");
      }
    },
  },
  watch: {
    items: {
      handler() {
        Storage.set("items", this.items);
      },
      deep: true,
    },
  },
  created() {
    this.items.forEach((item) => {
      item.checked = this.Allcheck;
    });
    this.index = this.$route.params.index;
    // console.log(this.$route.params.index);
    // console.log(this.addressLists);
  },
};
</script>

<style lang="less" scoped>
.settle {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #f4f4f4;
  box-sizing: border-box;
  .nav {
    width: 100%;
    box-sizing: border-box;
    padding: 13px;
    background: #fff;
    margin-top: 10px;
    a {
      color: #000;
    }
    .van-icon-arrow {
      float: right;
    }
  }
  // 地址
  .address {
    width: 100%;
    height: 67px;
    padding: 13px 30px 13px 13px;
    box-sizing: border-box;
    margin-top: 8px;
    font-size: 14px;
    background: #fff;
    position: relative;
    span {
      color: #fff;
    }
    p {
      display: inline-block;
      margin: 0 3px;
      color: #000;
    }
    h1 {
      font-weight: 400;
      color: #000;
      font-size: 14px;
    }
    .van-icon-arrow {
      position: absolute;
      top: 20px;
      color: #000;
      right: 10px;
    }
  }
  .list {
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    margin: 2px 0 13px;
    padding: 0 13px;
    li {
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      padding: 10px 0;
      display: flex;
      img {
        width: 55px;
      }
      p {
        font-size: 12px;
        align-self: center;
      }
      .text {
        width: 100%;
        box-sizing: border-box;
        margin-left: 10px;
        p {
          width: 208px;
          font-size: 15px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #000;
        }
        strong {
          display: block;
          font-size: 14px;
          padding-top: 10px;
          color: #42b983;
          font-weight: 400;
          div {
            float: right;
            background-color: #f1f1f1;
            color: #878787;
            border-radius: 2px;
            line-height: 16px;
            margin-right: 30px;
            button {
              width: 24px;
              height: 20px;
              border: 0;
              font-weight: 800;
            }
            input {
              width: 40px;
              height: 20px;
              border: 0;
              background-color: #f1f1f1;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .foot {
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      background: #fff;
      margin-top: 2px;
      padding: 13px;
      div {
        span {
          font-size: 14px;
          color: #000;
        }
        input {
          border: 1px solid #d3d3d3;
          padding: 4px 4px 4px 6px;
        }
      }
    }
  }
  .order {
    width: 100%;
    height: 50px;
    div {
      width: 100%;
      height: 52px;
      box-sizing: border-box;
      position: fixed;
      bottom: 0;
      left: 0;
      background: rgb(254, 240, 250);
      display: flex;
      justify-content: space-between;
      align-items: center;
      label {
        margin-left: 10px;
      }
      p {
        margin-left: 10px;
        span {
          color: #4aa02b;
        }
      }
      button {
        width: 100px;
        height: 50px;
        background: #4aa02b;
        color: #fff;
        border: 0;
      }
    }
  }
}
</style>
