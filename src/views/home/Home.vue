<template>
  <div id="home">
    <!-- 骨架屏，数据没加载完占位 -->
    <Skeleton v-show="loading"></Skeleton>
    <div v-if="!loading">
      <!-- 头部 -->
      <div class="head">
        <!-- 头部地理位置和搜索框 -->
        <Header></Header>
        <!-- banner轮播图 -->
        <Swiper :banner="banner"></Swiper>
        <!-- tip提示图 -->
        <Tip :home_ad="home_ad"></Tip>
      </div>
      <!-- 分类导航 -->
      <Nav :navList="navList"></Nav>
      <!-- 会员界面 -->
      <Vip></Vip>
      <!-- 限时抢购 -->
      <TimeBuy :timeBuy="timeBuy"></TimeBuy>
      <!-- 特色专区 -->
      <SpecialZone :SpecialZone="SpecialZone"></SpecialZone>
      <!-- 选项卡 -->
      <TabBar :tabList="tabList" :timeBuy="timeBuy"></TabBar>
      <!-- Van分割线 -->
      <van-divider>我也是有底线的呢</van-divider>
      <!-- 回到顶部按钮 -->
      <GoTop></GoTop>
    </div>
  </div>
</template>

<script>
  import api from '../../serve/api.js'

  //引入页面组件
  import Header from './components/header/Header.vue';
  import Swiper from './components/swiper/Swiper.vue';
  import Tip from './components/tip/Tip.vue';
  import Nav from './components/nav/Nav.vue';
  import Vip from './components/vip/Vip.vue';
  import TimeBuy from './components/timebuy/TimeBuy.vue';
  import SpecialZone from './components/SpecialZone/SpecialZone.vue';
  import TabBar from './components/Tabbar/Tabbar.vue';
  import Skeleton from './components/skeleton/index.vue';

  import GoTop from '../../components/GoTop/GoTop.vue';
  export default {
    data() {
      return {
        loading: true, //骨架屏/页面是否显示
        home_ad: '',
        banner: [],
        navList: [], 
        timeBuy:[],
        SpecialZone: {},
        tabList:[]
      }
    },
    created(){
      this._initData()
    },
    methods: {
      // 初始化首页数据
      _initData(){
        api.getHomeData().then(res =>{
          console.log(res)
          if(res.data.success){
          // 轮播组件赋值
           this.banner = res.data.data.list[0].icon_list
          //  首页广告
           this.home_ad = res.data.data.home_ad.image_url
          //  小圆导航列表
           this.navList = res.data.data.list[2].icon_list
          // 限时抢购
           this.timeBuy = res.data.data.list[3].product_list
          // 特色专区
           this.SpecialZone = res.data.data.special_zone
          // 选型卡商品列表
           this.tabList = res.data.data.list[12].product_list

          //  骨架屏
           this.loading = false
          }
        })
      }
    },

    components: {
      Header,
      Swiper,
      Tip,
      Nav,
      Vip,
      TimeBuy,
      SpecialZone,
      TabBar,
      Skeleton,
      GoTop
    }
  }

</script>

<style lang="less" scoped>
#home{
  padding-bottom: 2.8rem;
}
.head {
    width: 100%;
    background-image: url('http://518taole.7-orange.cn/backImage.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.van-divider {
  background-color: #f5f5f5;
  margin: 0;
  line-height: 2rem;
}
</style>
