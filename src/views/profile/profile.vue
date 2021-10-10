<template>
  <div class="profile-container">
    <div class="header login" v-if="userInfo"></div>
    <div class="header not-login" v-else>
      <div class="login-btn" @click="$router.push('/login')">
        <!-- <img src="@/assets/earth.png" class="mobile-image"> -->
        <span class="text">登录 / 注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
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

<style scoped lang="less">
.profile-container {
  .header {
    height: 361px;
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-image {
        width: 221px;
        height: 151px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #000;
      }
    }
  }
}
</style>
