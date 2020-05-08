const mutations = {
  // 加入购物车操作
  addCart(state, info) {
    console.log(info);
    // ES6数组扩展方法-find(),语法：find(function(item, index, arr){return true})
    // 作用：找出第一个满足「指定条件返回true」的元素。
    // 箭头函数写法
    // const oldInfo = state.cartList.find(function(item){
    //   return item.iid === info.iid
    // };
    // 查看是否添加过
    const oldInfo = state.cartList.find(item => item.iid === info.iid)

    // 2.如果已存在就数量+1，新添加的商品则数量设置为1，默认勾选商品并将它加入到购物车列表
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      info.count = 1
      info.checked = true
      state.cartList.push(info)
    }
  }
}

export default mutations

