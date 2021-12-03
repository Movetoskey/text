<template>
  <div class="home">
    <Header :Title="this.title" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="pic"
        ><img src="@/assets/1.webp" alt="" />
      </van-swipe-item>
      <van-swipe-item class="pic"
        ><img src="@/assets/2.webp" alt=""
      /></van-swipe-item>
    </van-swipe>
    <h1>品牌精选择 <span>BRAND CHIOCE</span></h1>
    <div class="paper">
      <div>
        <h2>
          <router-link :to="{ name: 'Weida' }">韧在维达 乐在全家</router-link>
        </h2>
        <p>为质感又压线<br />纸质更厚实柔软</p>
      </div>
      <router-link :to="{ name: 'Weida' }">
        <img src="@/assets/weida.webp" alt="" />
      </router-link>
    </div>
    <div class="contain">
      <div>
        <h2>生活榜</h2>
        <p>热爱生活每一天</p>
        <button>纸品生活榜</button>
      </div>
      <ul>
        <li>
          <router-link :to="{ name: 'Detail', params: { id: 2 } }">
            <img src="@/assets/l1.webp" alt="" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Detail', params: { id: 3 } }"
            ><img src="@/assets/l2.webp" alt=""
          /></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Detail', params: { id: 4 } }"
            ><img src="@/assets/l3.webp" alt=""
          /></router-link>
        </li>
      </ul>
    </div>
    <h1>必买清单 <span>SELECTED</span></h1>
    <div class="wrap">
      <div class="wrap-left">
        <div>
          <h2>活动时间：10:00-22:00</h2>
          <p>车载纸巾遮阳专用抽纸</p>
          <img src="@/assets/bg11.webp" alt="" />
        </div>
      </div>
      <div class="wrap-right">
        <div class="text">
          <div>
            <h2>有好货</h2>
            <p>加厚四层卷纸</p>
            <span>立减10元</span>
          </div>

          <img src="@/assets/bg22.webp" alt="" />
        </div>
        <div class="text">
          <div>
            <h2>量贩装</h2>
            <p>无香餐巾纸</p>
            <span>第二件五折</span>
          </div>
          <img src="@/assets/bg33.webp" alt="" />
        </div>
      </div>
    </div>
    <ul class="series">
      <li>
        <div>
          <h2>满99减50</h2>
          <p>心相印·红悦系列</p>
          <router-link :to="{ name: 'Xin' }"
            ><img src="@/assets/bg44.webp" alt=""
          /></router-link>
        </div>
      </li>
      <li>
        <div>
          <h2>全场五折</h2>
          <p>清风原木金装</p>
          <router-link :to="{ name: 'Qing' }"
            ><img src="@/assets/bg55.webp" alt=""
          /></router-link>
        </div>
      </li>
      <li>
        <div>
          <h2>领券更优惠</h2>
          <p>洁柔·Face卷纸</p>
          <router-link :to="{ name: 'Jie' }"
            ><img src="@/assets/bg66.webp" alt=""
          /></router-link>
        </div>
      </li>
    </ul>
    <h1>好物推荐 <span>PRODUCT</span></h1>
    <!-- 路由 -->
    <ul class="product">
      <li v-for="(list, index) in lists" :key="index">
        <router-link :to="{ name: 'Detail', params: { id: index } }">
          <img :src="list.path" alt="" />
          <p>{{ list.text }}</p>
          <span>￥{{ list.price }} <img src="@/assets/cart.png" alt=""/></span>
        </router-link>
      </li>
    </ul>
    <Bottom />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Bottom from "@/components/Bottom";
import Header from "@/components/Header";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { List } from "vant";

Vue.use(List);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: "Home",
  components: {
    Bottom,
    Header,
  },
  data() {
    return {
      title: "日用百货",
    };
  },
  computed: {
    ...mapState({
      lists: "lists",
    }),
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
.home {
  width: 100%;
  .pic {
    height: 200x;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 16px;
    padding: 20px 10px 10px 10px;
    span {
      color: #56bb37;
      font-size: 14px;
    }
  }
  .paper {
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    height: 116px;
    background: url(../assets/p.jpg) no-repeat center/358px 116px;
    display: flex;
    div {
      width: 200px;
      h2 {
        font-size: 16px;
        margin: 28px 10px 0;
        a {
          color: #000;
        }
      }
      p {
        width: 133px;
        height: 38px;
        padding: 0 10px 0;
      }
    }
    a {
      img {
        width: 125px;
        height: 106px;
      }
    }
  }
  .contain {
    width: 100%;
    height: 90px;
    box-sizing: border-box;
    padding: 20px 10px 0 10px;
    display: flex;
    div {
      width: 100px;
      h2 {
        width: 103px;
        font-size: 14px;
        margin: 0;
      }
      p {
        width: 100%;
        color: #666;
        padding-bottom: 5px;
        font-size: 12px;
        margin: 0;
      }
      button {
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 0;
        color: #fff;
        font-size: 12px;
        border-radius: 6px;
        background: #85c797;
      }
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        a {
          img {
            width: 60px;
          }
        }
      }
    }
  }
  .wrap {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    .wrap-left {
      width: 150px;
      height: 220px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      background: url(../assets/bg1.webp) no-repeat center/100%;
      div {
        width: 150px;
        height: auto;
        text-align: center;
        h2 {
          font-size: 12px;
        }
        p {
          color: #666;
          font-size: 12px;
        }

        img {
          width: 80px;
          height: 110px;
        }
      }
    }
    .wrap-right {
      width: 220px;
      margin-left: 10px;
      .text {
        width: 100%;
        height: 105px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        background: url(../assets/bg2.webp) no-repeat center/100%;
        &:nth-child(2) {
          background: url(../assets/bg3.webp) no-repeat center/100%;
        }
        div {
          width: 100px;
          h2 {
            font-size: 16px;
          }
          p {
            color: #666;
            font-size: 12px;
          }
          span {
            font-size: 12px;
            color: #4aa2ca;
          }
        }
      }
      img {
        width: 80px;
        height: 88px;
      }
    }
  }
  .series {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 25px;
    border-bottom: 5px solid #ddd;
    li {
      width: 120px;
      height: 180px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      background: url(../assets/bg4.jpg);
      &:nth-child(2) {
        background: url(../assets/bg5.jpg);
      }
      &:nth-child(3) {
        background: url(../assets/bg6.jpg);
      }
      div {
        width: 100px;
        height: auto;
        text-align: center;
        h2 {
          font-size: 16px;
        }
        p {
          color: #666;
          font-size: 12px;
          margin: 10px 0;
        }
        img {
          width: 60px;
          height: 85px;
        }
      }
    }
  }
  .product {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      height: 240px;
      img {
        width: 180px;
      }
      p {
        width: 136px;
        margin: 0 auto;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span {
        display: block;
        padding: 10px 0 10px 20px;
        font-size: 12px;
        color: #56bb37;
        img {
          width: 14px;
          float: right;
        }
      }
    }
  }
}
</style>
