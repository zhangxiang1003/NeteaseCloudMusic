<template>
  <div id="app">
    <transition mode="out-in">
      <router-view/>
    </transition>
    <van-tabbar v-model="active" active-color="#c20c0c" inactive-color="#666" route v-show="$route.meta.showFooter">
        <van-tabbar-item icon="music-o" to="/">乐库</van-tabbar-item>
        <van-tabbar-item icon="bar-chart-o" to="/toplist">榜单排行</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o" to="/artist">歌手榜</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:0
    }
  }
}
</script>
<style lang="less">
  .v-enter,.v-leave-to{
    opacity: 0;
    transform: translateY(150px);
  }
  .v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
  }
</style>

