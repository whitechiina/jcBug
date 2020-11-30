<!-- 首页=>轮播组件 -->

<template>
  <swiper id="swiper" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="slide" v-for="(item,index) in banner" :key="item.public_id">
      <img :src="item.icon_url" :alt="item.public_name">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

  export default {
    data() {
      return {
        swiperOption: {
          // 进来就加载
          notNextTick: true,
          pagination: '.swiper-pagination', //这里修改
          clickable: true,
          loop: true,
          //配置自动播放
          autoplay: {
            delay: 2000, //3秒切换一次
            // 最后一个是否停止
            stopOnLastSlide: false,
            // 用户操作swiper之后，是否禁止autoplay
            disableOnInteraction: false,
          },
          observer: true,
          observeParents: true,
          // 配置速度
          speed: 3000,
          // 滑动后回调函数
          on: {
            slideChangeTransitionEnd() {},
            //   preventLinksPropagation: false
          }
        }
      }
    },
    props:{
      // 父组件传的值
      banner: Array
    },
    mounted() {

    },
    computed: {
      // 拿到swiper对象
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    components: {
      swiper,
      swiperSlide
    },
  }

</script>

<style scoped>
  #swiper {
    padding-top: 3.2rem;
    width: 95%;
    height: 10rem;
    border-radius: 0rem 0rem 1rem 1rem;
    touch-action: none;
    margin: 0 auto;
  }

  .slide {
    width: 100%;
    height: 10rem;
  }

  img {
    width: 100%;
    height: 10rem;
  }

  /*穿透修改样式*/
  #swiper>>>.swiper-pagination-bullet-active {
    background-color: #3bba63;
  }

  #swiper>>>.swiper-pagination-bullet {
    width: 0.46rem;
    height: 0.46rem;
    border-radius: 50%;
  }
</style>
