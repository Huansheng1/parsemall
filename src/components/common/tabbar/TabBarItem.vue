<template>
<!-- 子标签栏根元素并绑定点击事件 -->
  <div id="tab-bar-item" @click="itemClick">
    <!-- 通过插槽扩展子标签栏图标，使得组件具有复用性 -->
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <!-- 通过插槽扩展子标签栏活动时图标 当isActive为真时隐藏默认图标显示活动图标-->
    <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
    <!-- 通过插槽扩展子标签栏标题文字 v-bind绑定计算属性来动态更改css-->
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
	export default {
    name: "TabBarItem",
    // props接收父组件传递过来的link链接路径数据
    props: {
			link: {
				type: String,
        required: true
      }
    },
    computed: {
      // 获取当前活动路由路径并判断当前标签页的路径属性是否包含在路由路径里面-->判断是否被点击
			isActive() {
				return this.$route.path.indexOf(this.link) !== -1
      },
      // 三元运算符如果isActive为真时返回第一个样式数据来达到动态更改样式的目的
      activeStyle() {
				return this.isActive ? {'color': 'red'} : {}
      }
    },
    // 点击事件：标签被点击时路由将地址切换为link属性指向的路径
    methods: {
			itemClick() {
				this.$router.replace(this.link)
      }
    }
	}
</script>

<style scoped>
/* 设置单个标签分类在弹性盒子占据几份 */
  #tab-bar-item {
    flex: 1;
  }
/* 设置标签栏图标大小、对齐方式和上外边距 */
  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
/* 单个标签栏字体设置大小，上外边距和字体颜色 */
  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>