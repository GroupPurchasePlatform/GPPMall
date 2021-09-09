<template>
  <div class="login-page">
    <van-nav-bar
      class="page-nav-bar"
      left-arrow
      @click-left="onClickLeft"
      title="登录"
    />
    <van-button
      type="primary"
      size="large"
      round
      @click="loginClick"
    >
      微信登录
    </van-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    loginClick() {}
  }
}
</script>

<style scoped>
.van-button {
  margin-top: 550px;
}
</style>
