<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      background="#3296fa"
      placeholder="请输入搜索关键词"
    />
    <van-notice-bar
      scrollable
      left-icon="volume-o"
      text="各大商铺、商品活动正在火热开展中~"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2452946890/O1CN01yfGtsj20lfbnPQJUq_!!0-item_pic.jpg_580x580Q90.jpg_.webp"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-panel
      title="当前出价：￥56"
      desc="纸新生手口专用屁宝宝家庭实惠装大包装特价家用"
      status="出价中"
    >
    </van-panel>
    <van-cell-group>
      <van-cell title="价格区间" value="1 ~ 89 元" />
      <van-cell title="已出价" value="20 人" />
      <van-cell title="已设置提醒" value="77 人" />
    </van-cell-group>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon
        icon="underway-o"
        text="设置提醒"
        @click="onClickIcon"
      />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button
        type="danger"
        text="立即出价"
        @click="onClickButton"
        color="#3296fa"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  methods: {
    onClickIcon() {
      Toast('点击图标')
    },
    onClickButton() {
      Toast('点击按钮')
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  height: 600px;
}

.my-swipe .van-swipe-item img {
  height: 100%;
}
</style>
