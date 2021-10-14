<template>
  <div class="commodity-content">
    <van-tree-select
      height="100vh"
      :items="items"
      :main-active-index.sync="active"
      class="content"
    >
      <template #content>
        <commodity-block
          :blockData="item"
          v-for="item in commodityData[active].child"
          :key="item.class2"
        />
        <div class="temp-div"></div>
      </template>
    </van-tree-select>
    <div class="temp-div"></div>
  </div>
</template>

<script>
import CommodityBlock from '../../components/content/CommodityView/CommodityBlock.vue'
import { commodity } from '../../api/commodity'

export default {
  data() {
    return {
      active: 0,
      commodityData: [],
      items: []
    }
  },
  created() {
    // 请求分类页面数据
    commodity().then((res) => {
      this.commodityData = res.data
      for (let i = 0; i < this.commodityData.length; i++) {
        this.items.push({
          text: this.commodityData[i].name
        })
      }
      // 解决组件底部不能显示的问题
      this.items.push({
        text: (this.commodityData[this.commodityData.length] = ' ')
      })
    })
  },
  components: {
    CommodityBlock
  }
}
</script>

<style scoped>
.temp-div {
  margin-top: 100px;
}

.content {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}

.content .van-sidebar-item::before {
  background-color: #3296fa;
}
</style>
