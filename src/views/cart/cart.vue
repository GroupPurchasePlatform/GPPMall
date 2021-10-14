<template>
  <div id="cart">
    <cart-list class="cart-list" :cart-list="cartList"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'

export default {
  components: {
    CartList,
    BottomBar
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList
    },
    cartCount() {
      return this.$store.getters.cartCount
    }
  }
}
</script>

<style scoped>
#cart {
  height: 100vh;
}

.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
</style>
