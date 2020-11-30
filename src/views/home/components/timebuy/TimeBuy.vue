<template>
  <div class="wrapper">
    <div class="bag">
      <div class="title">限时抢购</div>
      <!-- 倒计时 -->
      <van-count-down :time="time" class="time">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <!-- 更多按钮 -->
      <div class="more">更多</div>
    </div>
    <ShopList :timeBuy="timeBuy"></ShopList>
  </div>
</template>

<script>
  import ShopList from './ShopList.vue';
  export default {
    data() {
      return {
        // 倒计时时间设置
        time: 30 * 60 * 1000 * 100
      }
    },
    props:{
      timeBuy: Array
    },
    components: {
      ShopList
    }
  }

</script>

<style lang="less" scoped>
  @import './TimeBuy.less';

  .item {
    display: inline-block;
    width: 22px;
    margin-right: 5px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: black;
  }

</style>
