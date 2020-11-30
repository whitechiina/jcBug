<!-- 首页=>特色专区 -->

<template>
  <div id="SpecialZone">
    <div class="title">特色专区</div>
    <div class="wrapperItem">
      <!-- 新鲜品尝 -->
      <div class="new" v-for="item in SpecialZone.newItemList">
        <span>{{item.title}}</span>
        <p>{{item.subtitle}}</p>
        <img :src="item.imageOne">
        <img :src="item.imageTwo">
      </div>
      <!-- 十二月爆款 -->
      <div class="hot" v-for="item in SpecialZone.hotItemList">
          <span>{{item.title}}</span>
          <p>{{item.subtitle}}</p>
          <img :src="item.imageOne">
          <img :src="item.imageTwo">
      </div>
      <!-- Vip专享 -->
      <div class="vip" v-for="item in SpecialZone.vipItemList">
          <span>{{item.title}}</span>
          <p>{{item.subtitle}}</p>
          <img :src="item.imageOne">
          <img :src="item.imageTwo">
      </div>
      <!-- 吃什么 -->
      <div class="eat" v-for="item in SpecialZone.otherItemList">
          <span>{{item.title}}</span>
          <p>{{item.subtitle}}</p>
      </div>
      <!-- 平价菜场 -->
      <div class="money" v-for="item in SpecialZone.lowPriceItemList">
          <span>{{item.title}}</span>
          <p>{{item.subtitle}}</p>
          <img :src="item.image">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      SpecialZone: Object
    }
  }

</script>

<style lang="less" scoped>
  @import './SpecialZone.less';

</style>
