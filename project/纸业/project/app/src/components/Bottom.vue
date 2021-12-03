<template>
  <div class="Bottom">
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">
          <span><img src="@/assets/home.webp" alt=""/></span>
          <img src="@/assets/home1.webp" alt="" />
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Shop' }">
          <span><img src="@/assets/shop.webp" alt=""/></span>
          <img src="@/assets/shop1.webp" alt="" />
          <p>活动</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Cart' }">
          <span><img src="@/assets/cart.webp" alt=""/></span>
          <img src="@/assets/cart1.webp" alt="" />
          <p>购物车</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">
          <span><img src="@/assets/about.webp" alt=""/></span>
          <img src="@/assets/about1.webp" alt="" />
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.Bottom {
  width: 100%;
  height: 50px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &.router-link-exact-active > span > img {
      display: none;
    }
    &.router-link-exact-active > img {
      display: block;
    }
  }
  ul {
    width: 100%;
    background: #fff;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999999999999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 80px;
      height: 50px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin: 0;
      }
      img {
        width: 24px;
        height: 24px;
        display: none;
      }
      span {
        text-align: center;
        img {
          display: block;
        }
      }
    }
  }
}
</style>
