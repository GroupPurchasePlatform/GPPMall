<template>
  <div>
    <div class="comodity-title">{{ blockData.name }}</div>
    <div class="commodity-list">
      <commodity-item
        v-for="item in blockData.child"
        :key="item.class3"
        :itemData="item"
      />
    </div>
  </div>
</template>

<script>
import CommodityItem from './CommodityItem.vue'

export default {
  props: {
    blockData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CommodityItem
  }
}
</script>

<style scoped>
.comodity-title {
  font-size: 30px;
  margin: 10px;
}

.commodity-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
