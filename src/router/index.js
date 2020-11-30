import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import BottomBar from '../views/BottomBar/BottomBar.vue';


// 懒加载二级组件 Tarbar
import Home from '../views/home/Home';
import Category from '../views/category/Category.vue';
import Eat from '../views/eat/Eat.vue';
import Cart from '../views/cart/Cart.vue';
import Mine from '../views/mine/Mine.vue';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/bottomBar',
    // 是否数据缓存
    meta: {
        keepAlive: true
    },
  }, {
    // 根页面
    path: '/bottombar',
    name: 'bottombar',
    component: BottomBar,
    children: [{
      path: '/bottombar',
      redirect: '/bottombar/home',
      // 是否数据缓存
      meta: {
        keepAlive: true
      },
    },{
      // 主页
      path: 'home',
      name: 'home',
      component: Home,
      // 是否数据缓存
      meta: {
          keepAlive: true
      }
    }
    ,{
      // 分类
      path: 'category',
      name: 'category',
      component: Category,
      // 是否数据缓存
      meta: {
          keepAlive: true
      }
    },
    {
      // 吃什么
      path: 'eat',
      name: 'eat',
      component: Eat,
      // 是否数据缓存
      meta: {
          keepAlive: true
      }
    },
    {
      // 购物车
      path: 'cart',
      name: 'cart',
      component: Cart,
      // 是否数据缓存
      meta: {
          keepAlive: true
      }
    },
    {
      // 我的
      path: 'mine',
      name: 'mine',
      component: Mine,
      // 是否数据缓存
      meta: {
          keepAlive: true
      }
    }  
            ]
  }]
})