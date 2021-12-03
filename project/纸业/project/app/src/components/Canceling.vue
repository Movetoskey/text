<template>
  <div class="paying">
    <ul v-for="(val, id) in newArray" :key="id">
      <li>
        <h1 class="date">
          {{ val.time | formatDate }} <span>{{ val.text }}</span>
        </h1>
        <ul>
          <li v-for="(item, index) in val.items" :key="index">
            <img :src="item.path" alt="" class="pic" />
            <div>
              <h1>{{ item.text }}</h1>
              <p>
                ￥{{ item.price }} <span>×{{ item.num }}</span>
              </p>
            </div>
          </li>
        </ul>
        <div>
          <p>购物车小计：<span>￥22</span></p>
          <p>配送：<span>免费送货</span></p>
          <p>订单合计：<span>￥22</span></p>
          <p>
            <van-button plain type="primary" size="small">取消订单</van-button
            ><van-button plain type="primary" size="small">立即支付</van-button>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
import Storage from "@/views/Storage.js";
import { Card } from "vant";
import { Toast } from "vant";
import moment from "moment";

Vue.use(Toast);
Vue.use(Card);
Vue.use(Button);
export default {
  name: "Paying",
  data() {
    return {
      newArray: Storage.get("newArray"),
    };
  },
  watch: {
    times: {
      handler() {
        Storage.set("times", this.times);
      },
      deep: true,
    },
    newArray: {
      handler() {
        Storage.set("newArray", this.newArray);
      },
      deep: true,
    },
  },
  filters: {
    formatDate(dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
      return moment(dateStr).format(pattern);
    },
  },
  created() {
    console.log(this.newArray);
  },
};
</script>

<style lang="less" scoped>
.paying {
  width: 100%;
  background: #fafafa !important;
  ul {
    width: 100%;
    padding: 0 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background: #fff;
    li {
      h1 {
        font-size: 14px;
        font-weight: 400;
        padding: 5px 0;
        span {
          color: #56bb37;
          float: right;
        }
      }
      div {
        text-align: right;
        font-size: 14px;
        p {
          height: 30px;
          line-height: 30px;
          span {
            color: #56bb37;
          }
        }
        button {
          height: 26px;
          margin-left: 10px;
        }
      }
      ul {
        padding: 0;
        background: #f9f9f9;
        li {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .pic {
            width: 50px;
            height: 50px;
          }
          div {
            width: 100%;
            margin-left: 10px;
            box-sizing: border-box;
            font-size: 12px;
            text-align: left;
            h1 {
              font-weight: 400;
            }
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              span {
                color: #56bb37;
                float: right;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
}
</style>
