<!-- 吃什么=> 商品列表 -->

<template>
  <div class="ListWrap">
    <div class="item">
      <img class="img" src="http://img.ddimg.mobi/recipe/0d788bb4244681550475160522.jpg?width=700&height=523">
      <p class="title">十个步骤教你吃螃蟹蟹</p>
      <div class="desc">
        <img class="icon" src="http://img.ddimg.mobi/recipe/90c6caa84d9251561628540222.png">
        <p class="txt">叮咚买菜</p>
      </div>
    </div>
    <div class="item">
      <img class="img" src="http://img.ddimg.mobi/recipe/0d788bb4244681550475160522.jpg?width=700&height=523">
      <p class="title">十个步骤教你吃螃蟹蟹</p>
      <div class="desc">
        <img class="icon" src="http://img.ddimg.mobi/recipe/90c6caa84d9251561628540222.png">
        <p class="txt">叮咚买菜</p>
      </div>
    </div>
    <div class="item">
      <img class="img" src="http://img.ddimg.mobi/recipe/0d788bb4244681550475160522.jpg?width=700&height=523">
      <p class="title">十个步骤教你吃螃蟹蟹</p>
      <div class="desc">
        <img class="icon" src="http://img.ddimg.mobi/recipe/90c6caa84d9251561628540222.png">
        <p class="txt">叮咚买菜</p>
      </div>
    </div>
    <div class="item">
      <img class="img" src="http://img.ddimg.mobi/recipe/0d788bb4244681550475160522.jpg?width=700&height=523">
      <p class="title">十个步骤教你吃螃蟹蟹</p>
      <div class="desc">
        <img class="icon" src="http://img.ddimg.mobi/recipe/90c6caa84d9251561628540222.png">
        <p class="txt">叮咚买菜</p>
      </div>
    </div>
    <div class="item">
      <img class="img" src="http://img.ddimg.mobi/recipe/0d788bb4244681550475160522.jpg?width=700&height=523">
      <p class="title">十个步骤教你吃螃蟹蟹</p>
      <div class="desc">
        <img class="icon" src="http://img.ddimg.mobi/recipe/90c6caa84d9251561628540222.png">
        <p class="txt">叮咚买菜</p>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../../../serve/api.js';
  export default {
    data() {
      return {
        
      }
    },

    created() {
      this.getMenu()
    },

    methods: {
      getMenu(){
        // api.getMenuList().then(res=>{
        //   console.log(res)
        // })
        api.getMenuLista('http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/',{  //params参数必写 , 如果没有参数传{}也可以
            params: { 
              id: lk01,
              name: user
            }
        })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
      }
    },
  }

</script>

<style lang="less" scoped>
  @import './List.less';

</style>
