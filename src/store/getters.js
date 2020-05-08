const getters = {
  // 返回购物车数组
  cartList(state) {
    return state.cartList
  },
  // 返回购物车数组长度
  cartCount(state, getters) {
    return getters.cartList.length
  }
}

export default getters
