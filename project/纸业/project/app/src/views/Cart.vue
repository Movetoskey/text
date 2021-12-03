<template>
  <div class="cart">
    <Header :Title="this.title" />
    <div class="car_buy" v-if="items.length > 0 && logined.length > 0">
      <p class="nav hold" v-show="play">
        <span @click="readyChange()">管理</span>
      </p>
      <p class="nav" v-show="!play">
        <van-checkbox
          :checked="Allcheck"
          v-model="Allcheck"
          @click="allCheck()"
        >
          全选
        </van-checkbox>
        <span @click="readyChange()">
          <van-button plain type="primary" size="small">完成</van-button>
          <van-button plain type="primary" size="small" @click="drop()"
            >删除</van-button
          >
        </span>
      </p>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <input
            type="checkbox"
            :checked="item.checked"
            @click="radiocheck(index)"
          />
          <img :src="item.path" alt="" />
          <div class="list">
            <p>{{ item.text }}</p>
            <div class="box">
              <span>{{ item.price }}</span>
              <div>
                <button @click="sub(item)">-</button>
                <input type="number" :value="item.num" />
                <button @click="add(item)">+</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="space"></div>
      <van-submit-bar
        :price="totalprice * 100"
        button-text="提交订单"
        @submit="onSubmit"
        v-show="play"
      >
        <van-checkbox :checked="Allcheck" v-model="Allcheck" @click="allCheck()"
          >全选</van-checkbox
        >
      </van-submit-bar>
    </div>
    <div class="car_none" v-if="items.length == 0 || logined.length == 0">
      <div>
        <img src="@/assets/none.png" alt="" />
        <button @click="back()">继续购物</button>
      </div>
    </div>
  </div>
</template>

<script>
import Bottom from "@/components/Bottom";
import Storage from "@/views/Storage.js";
import Header from "@/components/Header";
import Vue from "vue";
import { SubmitBar } from "vant";
import { Toast } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
import { Button } from "vant";

Vue.use(Button);
Vue.use(Toast);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SubmitBar);
export default {
  name: "Cart",
  components: {
    Bottom,
    Header,
  },
  data() {
    return {
      title: "购物车",
      items: Storage.get("items"),
      selected: Storage.get("selected"),
      Allcheck: true,
      play: true,
      logined: Storage.get("logined"),
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
    back() {
      this.$router.go(-1);
    },
    onSubmit() {
      if (
        this.items.length > 0 &&
        this.selected.length > 0 &&
        this.totalprice > 0
      ) {
        Toast("提交成功");
        this.$router.push({ name: "Overbooking" });
      } else {
        this.Allcheck = false;
        Toast("请选好地址或商品");
      }
    },
    readyChange() {
      this.play = !this.play;
      this.Allcheck = !this.Allcheck;
      this.items.forEach((item) => {
        item.checked = this.Allcheck;
      });
    },
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
      // this.Allcheck = !this.Allcheck;
      this.items.forEach((val) => {
        val.checked = this.Allcheck;
      });
    },
    radiocheck(index) {
      this.items[index].checked = !this.items[index].checked;
      for (let i in this.items) {
        const item = this.items[i];
        if (item.checked) {
          this.Allcheck = item.checked;
          return;
        } else {
          this.Allcheck = true;
        }
      }
    },
    drop() {
      let val = this.items;
      for (let a = 0; a < val.length; a++) {
        if (val[a].checked == true) {
          val.splice(a, 1);
          a -= 1; //每删除一个项就让a减少一个 保持a和长度同步，解决删除不干净的问题
          Toast("删除成功");
        } else {
          Toast("本此未删除");
        }
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
  mounted() {
    this.items.forEach((item) => {
      item.checked = true;
    });
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 100%;
  height: 100%;
  background: rgb(244, 244, 244);
  .space {
    width: 100%;
    height: 50px;
    background: #fff;
  }
  .car_buy {
    width: 100%;
    .nav {
      width: 100%;
      height: 42px;
      line-height: 42px;
      padding: 0 10px;
      box-sizing: border-box;
      background: #fff;
      border-bottom: 2px solid #eee;
      display: flex;
      justify-content: space-between;
      span {
        display: flex;
        align-items: center;
        color: #07c160;
        button {
          height: 27px;
          margin-left: 5px;
        }
      }
    }
    .hold {
      display: block;
      text-align: right;
      span {
        display: inline-block;
      }
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: 2px;
        display: flex;
        img {
          width: 60px;
        }
        .list {
          width: 100%;
          margin-left: 10px;
          font-size: 14px;
          .box {
            width: 100%;
            margin-top: 15px;
            color: #878787;
            border-radius: 2px;
            line-height: 16px;
            display: flex;
            justify-content: space-between;
            span {
              color: #4aa02b;
            }
            button {
              width: 20px;
              height: 20px;
              border: 0;
              font-weight: 800;
            }
            input {
              width: 40px;
              height: 20px;
              color: #4aa02b;
              border: 0;
              background-color: #f1f1f1;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .car_none {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    background: rgb(244, 244, 244);
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 200px;
      height: 200px;
      text-align: center;
      img {
        width: 100px;
      }
      button {
        width: 132px;
        height: 30px;
        margin-top: 10px;
        font-size: 14px;
        border-radius: 5px;
        color: #fff;
        background: #4aa02b;
        text-align: center;
        line-height: 30px;
        border: 0;
      }
    }
  }
}
</style>
