<template>
  <div>
    <nav-bar class="home-nav-bar">
      <div slot="center" class="search" @click="$router.push('/search')">
        <div class="text">输入关键词以搜索相关商品</div>
      </div>
    </nav-bar>
    <!-- TODO: 轮播图实现 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid clickable :column-num="2" class="home-grid">
      <van-grid-item icon="apps-o" text="分类" to="/" />
      <van-grid-item icon="point-gift-o" text="活动" url="/vant/mobile.html" />
    </van-grid>
    <!-- TODO: 商品展示 -->
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar/NavBar.vue'

export default {
  data: {
    images: null,
    goods: {
      page: 0,
      list: []
    }
  },
  created() {

  },
  components: {
    NavBar
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
  background-color: #39a9ed;
}

.home-grid {
  margin-top: 15px;
}
</style>
