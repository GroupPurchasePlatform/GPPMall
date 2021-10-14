<template>
  <div>
    <nav-bar class="home-nav-bar">
      <div slot="center" class="search" @click="$router.push('/search')">
        <div class="text">输入关键词以搜索相关商品</div>
      </div>
    </nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img v-lazy="item.product_surfacePlot" />
      </van-swipe-item>
    </van-swipe>
    <van-grid clickable :column-num="2" class="home-grid">
      <van-grid-item icon="apps-o" text="分类" to="/commodity" />
      <van-grid-item icon="point-gift-o" text="活动" to="/activity" />
    </van-grid>
    <good-list :goods="goods" />
    <div class="block"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload)

import NavBar from '../../components/common/NavBar/NavBar.vue'
import GoodList from '../../components/content/Goods/GoodsList.vue'
import { getSlideShow, getProducts } from '../../api/products'

export default {
  data() {
    return {
      images: [],
      goods: []
    }
  },
  created() {
    // 获取轮播图数据
    getSlideShow().then(res => {
      this.images = res.data
    })
    // 获取商品数据
    getProducts().then(res => {
      this.goods = res.data
    })
  },
  components: {
    NavBar,
    GoodList
  }
}
</script>

<style scoped>
.home-nav-bar {
  background-color: #3296fa;
}

.search {
  border-radius: 33px;
  background-color: #fff;
  height: 66px;
  width: 600px;
  margin: auto;
  margin-top: 13px;
  position: relative;
}

.search .text {
  position: absolute;
  top: -9px;
  left: 30px;
  font-size: 30px;
  padding-bottom: 30px;
}

.my-swipe {
  border-radius: 20px;
  width: 720px;
  height: 300px;
  margin: auto;
  margin-top: 15px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}

.my-swipe img {
  height: 100%;
}

.home-grid {
  margin-top: 15px;
}

.block {
  margin-top: 120px;
}
</style>
