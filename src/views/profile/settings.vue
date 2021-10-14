<template>
  <div>
    <van-cell is-link @click="showNickName">修改昵称</van-cell>
    <!-- <van-cell is-link @click="showPopup">修改头像</van-cell> -->
    <!-- <van-cell is-link @click="showPopup">修改密码</van-cell> -->
    <van-popup v-model="showNM" position="bottom" :style="{ height: '70%' }">
      <van-cell-group>
        <van-field
          v-model="newNickName"
          label="新的昵称"
          placeholder="请输入新的昵称"
        />
      </van-cell-group>
      <van-button round type="info" size="large" class="btnStyle" @click="nicknameChange">圆形按钮</van-button>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { changeNickName } from '../../api/user'

export default {
  data() {
    return {
      newNickName: '',
      showNM: false
    }
  },
  methods: {
    showNickName() {
      this.showNM = true
    },
    async nicknameChange() {
      try {
        const res = await changeNickName(this.username, this.newNickName, this.token)
      } catch (error) {
        return
      }
    }
  },
  computed: {
    ...mapState(['token']),
    ...mapState(['username'])
  }
}
</script>

<style scoped>
.btnStyle {
  margin-top: 20px;
}
</style>
