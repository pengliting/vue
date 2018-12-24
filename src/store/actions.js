/**
 * 包含n个用于间接更新状态数据的方法的对象
 */
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  // 异步获取地址信息
  async reqAddress ({commit,state}){
    // 1. 发异步ajax请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    // 2. 有了结果后, 提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获食品分类列表
  async reqCategorys ({state}){
     const {longitude,latitude} = state
     const result = await reqCategorys(longitude,latitude)
    if (result.code === 0) {
      const categorys  = result.data
      commit(RECEIVE_CATEGORYS, {categorys })
    }
  },
  // 异步获取商家列表
  async reqShops ({commit,state}){
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }

}
