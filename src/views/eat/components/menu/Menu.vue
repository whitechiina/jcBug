<!-- 吃什么=> 今日菜单 -->

<template>
  <div class="wrap">
    <div class="menu">
        <ul>
            <li>家常菜</li>
            <li>家常菜</li>
            <li>家常菜</li>
            <li>家常菜</li>
            <li>家常菜</li>
            <li>家常菜</li>
            <li>家常菜</li>
        </ul>
    </div>
    <!-- 下拉框 -->
    <div class="all" @click="all">
        <span v-show="pull">收起</span>
        <span v-show="!pull">全部</span>
        <span class="top" v-show="pull"><svg style="width: 1.2rem;height: 1.2rem" t="1586258100752" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1832" width="200" height="200"><path d="M800.6 671.9c-16.3 16.3-43.1 16.3-59.4 0L511.4 442.2 281.6 671.9c-16.3 16.3-43.1 16.3-59.4 0-16.3-16.3-16.3-43.1 0-59.4L481.7 353c16.3-16.3 43.1-16.3 59.4 0l259.4 259.4c16.4 16.5 16.4 43.2 0.1 59.5z" p-id="1833"></path></svg></span>
        <span class="bottom" v-show="!pull"><svg t="1586258137317" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="200" height="200"><path d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z" p-id="2708"></path></svg></span>
    </div>
    <!-- 下拉菜单-遮罩层 -->
    <Pull :isShowMenuList="isShowMenuList" v-on:hiddenMenu="all"></Pull>
  </div>
</template>

<script>
import Pull from '../pull/Pull';
  export default {
    data() {
        return {
          isShowMenuList:false,
          pull: false
        }
    },
    components:{
        Pull
    },
    methods: {
        all(){
            // 上下菜单文字列表图标切换
            this.pull = !this.pull;
            this.isShowMenuList = !this.isShowMenuList
        }
    },
  }

</script>

<style lang="less" scoped>
@import './Menu.less';
</style>
