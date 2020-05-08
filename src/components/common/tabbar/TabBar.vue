<template>
<!-- 将子标签栏抽取出去，标签栏只负责标签栏的样式和结构，使用插槽使得标签栏对子标签栏具有更好的扩展性 -->
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style scoped>
  #tab-bar {
    /* 导航栏本身的样式 */
    background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);

    /* 导航栏定位绝对定位到底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 利用flex进行布局，属性设置弹性盒子模式，文字居中 */
    display: flex;
    text-align: center;
  }
</style>


