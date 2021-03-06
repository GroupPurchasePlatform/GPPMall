import request from '@/utils/request'
/**
 * 用户登录相关请求模块
 * @param {Object} data
 * @returns 返回数据
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/login/staff',
    params: data
  })
}
export const getUserInfo = (id, token) => {
  return request({
    url: '/staff/queryStaffByIds',
    method: 'POST',
    params: {
      id,
      token
    }
  })
}
// /**
//  * 用户注册相关请求模块
//  * @param {Object} data
//  * @returns 返回数据
//  */
// export const register = data => {
//   return request({
//     method: 'POST',
//     url: '/login/staff',
//     params: data
//   })
// }

export const changeNickName = (id, newNickname, token) => {
  return request({
    url: '/staff/updateStaffNickname',
    method: 'GET',
    data: {
      id: id,
      Nickname: newNickname,
      token: token
    }
  })
}
