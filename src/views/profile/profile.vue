<template>
  <div id="profile">
    <!-- 用户信息栏,通过条件判断切换不同展示形态 -->
    <div
      class="user-info-without-login"
      v-if="JSON.stringify(userInfo) === '{}'"
    >
      <div @click="$router.push('/login')">
        <van-empty
          image="search"
          description="登录 / 注册"
          class="empty-style"
        />
      </div>
    </div>
    <div class="user-info-with-login" v-else>
      <div class="base-info">
        <div class="left">
          <van-image
            :src="userInfo.staff_head"
            round
            fit="cover"
            class="avatar"
          />
          <div class="info-text">
            <span class="name">{{ userInfo.staff_nickname }}</span>
            <br />
            <span class="name">{{ userInfo.staff_label }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 相关信息 -->
    <section class="account">
      <div class="account-item">
        <div>
          <span class="balance">
            {{ JSON.stringify(userInfo) !== '{}' ? userInfo.staff_card.toFixed(2) : '0.00'}}
          </span>
          元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div><span class="balance">0</span> 个</div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div><span class="balance">0</span> 分</div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <!-- 订单详情 -->
    <van-grid :column-num="5" class="grid-block">
      <van-grid-item icon="after-sale" text="待付款" />
      <van-grid-item icon="send-gift-o" text="待发货" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="passed" text="已完成" />
      <van-grid-item icon="close" text="已关闭" />
    </van-grid>
    <van-cell title="维权与退换货" is-link to="index" class="cell-box" />
    <van-cell title="地址管理" is-link to="index" />
    <van-cell title="我的收藏" is-link to="index" />
    <van-cell title="设置" is-link to="/settings" />
    <div class="block"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { getUserInfo } from '../../api/user'

export default {
  data() {
    return {
      // 对象信息
      userInfo: {}
    }
  },
  methods: {
    async loadUserInfo(username, token) {
      try {
        const { data } = await getUserInfo(username, token)
        this.userInfo = data.staff
      } catch (error) {
        this.$toast('获取数据失败')
      }
    }
  },
  computed: {
    // 将存储在vuex中的数据映射到当前数据对象中
    ...mapState(['token']),
    ...mapState(['username'])
  },
  created() {
    if (this.token) {
      this.loadUserInfo(this.username, this.token)
    }
  }
}
</script>

<style scoped lang="less">
#profile {
  background-color: #f5f7f9;
}

.user-info-without-login {
  background-color: #3296fa;
  padding: 50px;
  height: 650px;
}

.user-info-with-login {
  background-color: #3296fa;
  padding: 5px 75px;
}

.base-info {
  height: 231px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .avatar {
      width: 132px;
      height: 132px;
      margin-right: 23px;
      border: 1px solid #fff;
    }
    .info-text {
      margin-left: 35px;
      .name {
        font-size: 30px;
        color: #fff;
      }
    }
  }
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}

.grid-block {
  margin-top: 12px;
}

.cell-box {
  margin-top: 12px;
}

.block {
  margin-top: 150px;
}
</style>
