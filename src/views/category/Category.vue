<!-- 分类=>首页 -->

<template>
    <div class="category">
        <!-- 头部 -->
        <Header></Header>
        <!-- 内容 -->
        <div class="content">
        </div>
    </div>
</template>

<script>
import Header from './components/searchhead/SearchHead';

export default {
    components:{
        Header,
    }
}
</script>

<style lang="less">
    .content{
        padding-top: 10rem;
    }
</style>