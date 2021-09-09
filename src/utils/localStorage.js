// /**
//  * 将数据存储到本地
//  * @param {name} key
//  * @param {value} value
//  */
// export const setItem = (name, value) => {
//   if (typeof value === 'object') {
//     value = JSON.stringify(value)
//   }
//   window.localStorage.setItem(name, value)
// }
// /**
//  * 将本地的数据进行读取
//  * @param {name} key
//  * @returns 返回数据
//  */
// export const getItem = name => {
//   const data = window.localStorage.getItem(name)
//   try {
//     return JSON.parse(data)
//   } catch (err) {
//     return data
//   }
// }
// /**
//  * 删除本地数据
//  * @param {name} key
//  */
// export const removeItem = name => {
//   window.localStorage.removeItem(name)
// }
