<!-- 首页=> 限时抢购商品列表 -->

<template>
    <div id="list" ref="personWrap">
        <ul ref="personTab">
            <li ref="productItem" v-for="(item,index) in timeBuy" :key="index">
                <img :src="item.small_image">
                <span class="name">{{item.name}}</span>
                <div class="price">
                    <p class="now">￥{{item.price}}</p>
                    <p class="del">¥{{item.origin_price}}</p>
                    <div class="buyCar">
                        <svg t="1586007661798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6342" width="200" height="200"><path d="M371.021938 910.222222m-113.777778 0a113.777778 113.777778 0 1 0 227.555556 0 113.777778 113.777778 0 1 0-227.555556 0Z" p-id="6343" fill="#3bba63"></path><path d="M797.688604 910.222222m-113.777777 0a113.777778 113.777778 0 1 0 227.555555 0 113.777778 113.777778 0 1 0-227.555555 0Z" p-id="6344" fill="#3bba63"></path><path d="M851.733049 531.057778l164.408889-328.817778A60.871111 60.871111 0 0 0 961.24416 113.777778h-711.111111l-15.36-46.933334A97.848889 97.848889 0 0 0 143.466382 0H1.24416v113.777778h129.137778l177.777778 558.933333A97.848889 97.848889 0 0 0 399.466382 739.555556h512v-113.777778H412.550827l-17.92-56.888889h395.946666a69.688889 69.688889 0 0 0 61.155556-37.831111z" p-id="6345" fill="#3bba63"></path></svg>
                    </div>   
                </div>
            </li>
        </ul>
    </div>
</template>
    
<script>
    // 引入第三方组件
import BScroll from 'better-scroll';

export default {
    props:{
        timeBuy: Array
    },
    created() {
        this.$nextTick(() => {
            this.personScroll();
        });
    },
    methods: {
    personScroll() {
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = 6 * 130;
      this.$refs.personTab.style.width = width + "px";

      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
    @import './ShopList.less';
</style>
