<template>
  <div class="good-item" @click="goodDetail">
    <img :src="goodItem.product_surfacePlot" alt="" />
    <div class="good-info">
      <p>{{ goodItem.product_name }}</p>
      <span class="price">{{ goodItem.product_price }}</span>
      <span class="collect">{{ goodItem.product_sales }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodDetail() {
      this.$router.push('/detail')
    }
  }
}
</script>

<style scoped>
.good-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.good-item img {
  width: 100%;
  border-radius: 5px;
}

.good-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.good-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.good-info .collect {
  position: relative;
}

.good-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* background: url('../../../assets/images/common/collect.svg') 0 0/14px 14px; */
}
</style>
