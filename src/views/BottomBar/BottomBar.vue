<!-- 首页=>底部导航栏 -->

<template>
  <div class="wrap">
    <van-tabbar v-model="active" active-color="#75a342"
    inactive-color="#7d7e80">
      <van-tabbar-item
        v-for="(item,index) in tabbars" 
        :key="index"
        @click="tab(index, item.name)"
        >
        <span class="title">{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>

    <!-- 缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currIndex: 0,
        active: 0,
        tabbars: [{
            name: 'home',
            title: '首页',
            normal: require('@/images/tabbar/home_default.png'),
            active: require('@/images/tabbar/home_selected.png')
          },
          {
            name: 'category',
            title: '分类',
            normal: require('@/images/tabbar/category_default.png'),
            active: require('@/images/tabbar/category_selected.png')
          },
          {
            name: 'eat',
            title: '吃什么',
            normal: require('@/images/tabbar/eat_default.png'),
            active: require('@/images/tabbar/eat_selected.png')
          },
          {
            name: 'cart',
            title: '购物车',
            normal: require('@/images/tabbar/shoppingcart_default.png'),
            active: require('@/images/tabbar/shoppingcart_selected.png'),
            num: 5
          },
          {
            name: 'mine',
            title: '我的',
            normal: require('@/images/tabbar/mine_default.png'),
            active: require('@/images/tabbar/mine_selected.png')
          }
        ]
      }
    },
    methods: {
      tab(index, val) {
        this.currIndex = index
        this.$router.push(val)
      },
    },

  }

</script>

<style lang="less" scoped>

</style>
