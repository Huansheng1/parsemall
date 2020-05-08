<template>
  <tab-bar>
    <!-- 子标签栏通过插槽插入标签栏里，传递不同标签栏图标、文字、路由地址 -->
    <tab-bar-item link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
  // 引入公共的标签栏组件
    import TabBar from 'common/tabbar/TabBar'
    import TabBarItem from 'common/tabbar/TabBarItem'
// 主标签栏使用公共的标签组件
    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>
