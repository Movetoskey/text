<template>
  <div class="order">
    <input type="checkbox" />全选
    <div>
      <p>合计：<span>￥19</span></p>
      <router-link to=""><button>下单</button></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
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
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
</style>
