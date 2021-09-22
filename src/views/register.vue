<template>
  <div>
    <van-nav-bar class="page-nav-bar" title="注册">
      <van-icon name="arrow-left" slot="left" color="#fff" @click="$router.back()" />
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        left-icon="friends-o"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        left-icon="edit"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">点击注册</van-button>
      </div>
      <div class="privacy">隐私条款</div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  data() {
    return {
      // 用户信息
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      // 1. 获取表单数据
      const user = this.user
      // 2. 表单验证
      // 在组件中需要通过 this.$toast 进行调用
      this.$toast.loading({
        message: "登录中...",
        forbidClick: true, // 禁用背景点击
        duration: 0 // 展示持续事件，默认 2s，如果为 0 则持续展示
      })
      // 3. 提交表单
      const { data } = await login(user)
      if (data.state === '402') {
        this.$toast.fail('用户名或者密码错误')
      } else {
        this.$store.commit('setUser', data.token)
        this.$toast.success('登录成功')
        // 登录成功跳转到我的页面
        this.$router.back()
      }
    }
  }
}
</script>

<style scoped lang="less">
.privacy {
  font-size: 25px;
  color: #666666;
  text-align: center;
  padding-top: 850px;
}
</style>

