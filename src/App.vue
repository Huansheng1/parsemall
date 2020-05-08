<template>
  <div id="app">
    <!-- 缓存除了详情Detail的其他路由视图页面 -->
    <keep-alive exclude="Detail">
      <!-- 路由组价视图展示 -->
      <router-view></router-view>
    </keep-alive>
    <!-- 主标签栏，HTML标签和属性不支持大写，建议- -->
    <main-tab-bar></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'
  import Icon from 'content/Icon/Icon.vue'
  import SvgIcon from 'content/Icon/svg.vue'
// 载入想要使用的组件：MainTabBar-主标签栏，Icon-图标，SvgIcon-字体图标
  export default {
    name: 'app',
    components: {
      MainTabBar,
      Icon,
      SvgIcon
    }
  }
</script>

<style>
/* 导入基础样式 */
  @import "assets/css/base.css";
/* 根标签设置为相对---->定位：子绝父相原装 */
  #app {
    position: relative;
  }
</style>
