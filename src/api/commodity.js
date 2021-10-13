import request from '@/utils/request'
/**
 * 请求分类页面数据
 * @returns 返回分类页面的数据
 */
export const commodity = () => {
  return request({
    url: '/class'
  })
}
