<template>
  <div>
    <van-nav-bar
      class="page-nav-bar"
      :title="title"
    />
    <div v-if="userInfo">
      已登录
    </div>
    <div v-else>
      <van-button
        type="primary"
        size="large"
        round
        @click="loginClick"
      >
        微信登录
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: false
    }
  },
  methods: {
    loginClick() {}
  },
  computed: {
    title() {
      if (this.userInfo) {
        return '我的'
      } else {
        return '未登录'
      }
    }
  }
}
</script>

<style scoped>
.van-button {
  margin-top: 550px;
}
</style>
