import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/localStorage'

Vue.use(Vuex)

const TOKEN_KEY = 'TOKEN'
const USER_NAME = 'UN'

export default new Vuex.Store({
  state: {
    // 用户信息，包含 token 等数据
    token: getItem(TOKEN_KEY),
    username: getItem(USER_NAME)
  },
  mutations: {
    setUser(state, data) {
      state.token = data
      // 将数据进行备份
      setItem(TOKEN_KEY, state.token)
    },
    setUsername(state, data) {
      state.username = data
      setItem(USER_NAME, state.username)
    }
  },
  actions: {},
  modules: {}
})
