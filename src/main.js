import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
// 懒加载
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})
// 使用状态管理vuex和路由vuerouter
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
