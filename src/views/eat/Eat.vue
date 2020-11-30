<!-- 吃什么=> 搜索栏 -->
<template>
  <div id="wrap">
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 今日菜单 -->
    <Menu></Menu>
    <!-- 列表瀑布组件 -->
    <List></List>
  </div>
</template>

<script>
  import Search from "./components/search/Search.vue";
  import Menu from './components/menu/Menu.vue';
  import List from './components/list/List.vue';

  export default {
    components: {
      Search,
      Menu,
      List
    }
  }

</script>

<style lang="less" scoped>
#wrap{
  width: 100%;
  margin-top: 6.5rem;
  overflow: hidden;
  margin-bottom: 3rem;
}
</style>
