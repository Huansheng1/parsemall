import Vue from 'vue'
import Vuex from 'vuex'
// 导入同步操作mutations.js文件
import mutations from './mutations'
// 导入异步操作actions.js文件
import actions from './actions'
// 导入数据处理getters.js文件
import getters from './getters'
// 安装Vuex
Vue.use(Vuex)
// 定义购物车数组状态
const state = {
  cartList: []
}
// ES6写法，赋值给Store实例对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
