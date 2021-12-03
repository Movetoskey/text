<template>
  <div class="shop">
    <Header :Title="this.title" />
    <img src="@/assets/baby.webp" alt="" />
    <!-- 路由 -->
    <div class="coupon">
      <router-link to="">
        <img src="@/assets/j1.webp" alt="" />
      </router-link>
      <router-link to="">
        <img src="@/assets/j2.webp" alt="" />
      </router-link>
    </div>
    <div class="nav">
      <b>品牌导航</b>
      <p>一件到达你想去的地方</p>
    </div>
    <!-- router -->
    <ul class="goods">
      <li v-for="(item, index) in items" :key="index">
        <router-link :to="{ name: item.name }">
          <img :src="item.path" alt="" />
          <p>{{ item.text }}</p>
          <div><img :src="item.bg" alt="" /></div>
        </router-link>
      </li>
    </ul>
    <p class="all">
      - 所有商品 -
    </p>
    <!-- 路由 -->
    <ul class="foot">
      <li v-for="(list, index) in lists" :key="index">
        <router-link :to="{ name: 'Detail', params: { id: index } }">
          <img :src="list.path" alt="" />
          <div>
            <p>{{ list.text }}</p>
            <strong
              >￥{{ list.price }} <img src="@/assets/cart.png" alt=""
            /></strong>
          </div>
        </router-link>
      </li>
    </ul>
    <Bottom />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
export default {
  name: "Shop",
  components: {
    Bottom,
    Header,
  },
  data() {
    return {
      title: "活动",
    };
  },
  computed: {
    ...mapState({
      items: "items",
      lists: "lists",
    }),
  },
};
</script>

<style lang="less" scoped>
.shop {
  width: 100%;
  background: rgb(244, 244, 244);
  img {
    width: 100%;
  }
  .coupon {
    padding: 20px 12px;
    display: flex;
    justify-content: space-around;
    background: #fff;
    a {
      img {
        width: 120px;
        height: 64px;
      }
    }
  }
  .nav {
    width: 100%;
    text-align: center;
    margin-top: 6px;
    padding: 25px 0;
    background: #fff;
    p {
      font-size: 12px;
      margin-top: 6px;
      color: #56bb37;
    }
  }
  .goods {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px 0;
    li {
      width: 32%;
      margin-bottom: 5px;
      background: #fff;
      position: relative;
      p {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        z-index: 1;
        position: relative;
      }
      div {
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 0;
        img {
          width: 100%;
          z-index: 0;
        }
      }
    }
  }
  .all {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
    background: #fff;
  }
  .foot {
    width: 100%;
    background: #fff;
    overflow: hidden;
    li {
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      padding: 10px 0;
      a {
        display: flex;
        justify-content: space-around;
        img {
          width: 80px;
          margin-left: 10px;
        }
        div {
          width: 70%;
          padding-left: 10px;
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
            font-size: 15px;
            padding-top: 10px;
            color: #42b983;
            font-weight: 400;
            img {
              width: 14px;
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>
