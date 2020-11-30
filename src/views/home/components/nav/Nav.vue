<!-- 首页=>分类导航 -->

<template>
  <div id="nav">
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="(nav,index) in navList"
                     :key="nav.cid"
                     :icon="nav.icon_url"
                     :text="nav.name"
                     @click="gotoCategory(index)" />
    </van-grid>
  </div>
</template>

<script>
  export default {
    props:{
      navList: Array
    }
  }

</script>

<style lang="less" scoped>

</style>
