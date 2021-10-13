<template>
  <div class="commodity-item" @click="commodityDetail">
    <div class="image">
      <img :src="itemData.url" alt="" />
    </div>
    <div class="commodity-info">
      <p>{{ itemData.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      tyoe: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    commodityDetail() {
      this.$router.push('/detail')
    }
  }
}
</script>

<style scoped>
.commodity-item {
  padding-bottom: 40px;
  position: relative;
  width: 30%;
  height: 30%;
}

.commodity-item .image {
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
}

.commodity-item img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.commodity-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  text-align: center;
}
</style>
