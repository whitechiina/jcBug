<!-- 吃什么=> 下拉菜单 -->

<template>
  <div class="PullList">
    <div class="list" v-show="isShowMenuList">
        <!-- 最近找过 -->
        <span>最近找过</span>
        <ul>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
        </ul>

        <!-- 菜单分类 -->
        <span>菜单分类</span>
        <ul>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
            <li>吃鸡</li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      isShowMenuList: Boolean
    }
  }

</script>

<style lang="less" scoped>
@import './Pull.less';
</style>
