<!-- 首页=> 选项卡 -->

<template>
  <div class="wrap">
    <van-tabs animated
              sticky
              swipeable
              :border="false"
              :offset-top="47"
              ref="tabs"
              type="line"
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>

      <van-tab title="全部">
          <TabList :tabList="tabList"></TabList>
      </van-tab>
      <van-tab title="晚餐">
          <TabList :tabList="timeBuy"></TabList>
      </van-tab>
      <van-tab title="人气">
          <TabList :tabList="tabList"></TabList>
      </van-tab>
      <van-tab title="心选">
          <TabList :tabList="timeBuy"></TabList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  // 商品模板组件
  import TabList from './TabList.vue';
  export default {
    data() {
      return {
        // 选项卡位置[数组]
        active: 0
      };
    },
    props:{
      tabList: Array,
      timeBuy: Array
    },
    components:{
      TabList
    }
  }

</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
}
</style>
