<!-- 购物车页面 -->

<template>
  <div class="cart">
    <!-- 头部区域 -->
    <header class="header">
      <h4 class="title">购物车</h4>
      <div class="del">删除</div>
    </header>

    <!-- 购物车为空 -->
    <div class="NoCart" v-show="have">
        <img src="../../../src/images/cart//empty.png">
        <div class="txt">
            <p>购物车空空滴</p>
        </div>
        <router-link to="/home" class="buy">去逛逛</router-link>
    </div>
    <!-- 购物车有商品 -->
    <div class="Cart">
        <div class="content">
            <div class="left">
                <a class="active" href="javaScript:;"></a>
            </div>
            <div class="center">
                <img src="http://img.ddimg.mobi/product/4d143e2d8ccee1568048072835.png!deliver.product.list" alt="">
            </div>
            <div class="right">
                <div>琯溪三红蜜柚1个1.25kg以上</div>
                <div> ¥13.90</div>
            </div>
            <div class="deal">
                <span></span>
                <input type="text">
                <span></span>
            </div>
        </div>
    </div>



    <!-- 猜你喜欢 -->
    <van-divider :style="{ color: 'black', borderColor: 'grey', padding: '0 16px' }">猜你喜欢</van-divider>

    <!-- 提交订单 -->
    <van-submit-bar class="btn" :price="3050" button-text="提交订单">
      <van-checkbox >全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span>修改地址</span>
      </template>
    </van-submit-bar>

    <!-- 回到顶部组件 -->
    <GoTop></GoTop>
    
  </div>
</template>

<script>
  import GoTop from '../../components/GoTop/GoTop.vue';
  export default {
    data() {
      return {
        have: false
      }
   },
    components: {
      GoTop
    }
  }

</script>

<style lang="less" scoped>
  @import './Cart.less';

</style>
