/**
 * 接收商家地址数据
 */

export const RECEIVE_ADDRESS = 'receive_address'
export const RECEIVE_CATEGORYS = 'receive_categorys'
export const RECEIVE_SHOPS = 'receive_shops'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
}
