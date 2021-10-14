<template>
  <div class="goods-list">
    <good-item v-for="(item, index) in goods" :goodItem="item" :key="index" />
  </div>
</template>

<script>
import GoodItem from './GoodItem.vue'

export default {
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodItem
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
