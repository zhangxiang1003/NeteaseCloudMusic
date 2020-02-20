<template>
    <div>
        <van-nav-bar :title="title" fixed :left-arrow="!$route.meta.showFooter" @click-left="back"/>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String
            }
        },
        methods:{
            back(){
                this.$router.back();
            }
        }
    }
</script>

<style lang="less" scoped>
    //给整个导航条设背景
    .van-nav-bar{
    background: #c20c0c;
    }
    //给title的样式
    .van-nav-bar__title{
        color: #fff;
    }
        //给箭头的样式
    .van-nav-bar__arrow{
        color:#fff;
    }
</style>