import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// REM适配
import 'amfe-flexible'
// Vant引入
import Vant from 'vant'
import 'vant/lib/index.css'
// 全局CSS
import './styles/index.less'
import 'vant/lib/index.less'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
