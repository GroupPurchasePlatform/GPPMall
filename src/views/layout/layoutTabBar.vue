<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/store" icon="shop-o">店铺</van-tabbar-item>
      <van-tabbar-item to="/commodity" icon="apps-o">商品</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="contact">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped></style>
