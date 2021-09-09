// 网络请求封装
import axios from 'axios'
// import store from '@/store'

const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/'
})
// // 请求拦截器
// request.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   // config ：本次请求的配置对象
//   const { user } = store.state
//   if (user && user.token) {
//     config.headers.Authorization = `Bearer ${user.token}`
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

export default request
