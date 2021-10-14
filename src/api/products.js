import request from '@/utils/request'
/**
 * 获取首页随机五张轮播图
 * @returns 返回轮播图数据
 */
export const getSlideShow = () => {
  return request({
    url: '/product/querySlideShow',
    method: 'POST'
  })
}
/**
 * 获取首页随机十个商品数据
 * @returns 返回商品数据
 */
export const getProducts = () => {
  return request({
    url: '/product/queryRandomProduct',
    method: 'POST'
  })
}
