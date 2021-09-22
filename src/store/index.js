import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/localStorage'

Vue.use(Vuex)

const TOKEN_KEY = 'TOKEN'

export default new Vuex.Store({
  state: {
    // 用户信息，包含 token 等数据
    token: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser(state, data) {
      state.token = data
      // 将数据进行备份
      setItem(TOKEN_KEY, state.token)
    }
  },
  actions: {
  },
  modules: {
  }
})
