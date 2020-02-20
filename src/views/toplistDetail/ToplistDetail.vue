<template>
  <div class="page">
    <head-item :title="playlist.name"></head-item>
    <div style="fontsize:0">
      <img :src="playlist.coverImgUrl" alt="" class="pic">
    </div>
    <div class="list">播放列表</div>
    <div class="m-container">
        <music-item v-for="(item, index) in tracks" :key="item.id"
        :index="index" :title="item.name" 
        :artist="item.ar[0].name" :album="item.al.name" :id="item.id"></music-item>
    </div>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import Http from "@/api/music.js";
import MusicItem from "@/components/MusicItem.vue"

export default {
  components: {
    HeadItem,
    MusicItem
  },
  data() {
    return {
      playlist:{},
      tracks:[]
    };
  },
  async mounted() {
      let {idx} = this.$route.query;
      let res = await Http.getTopList(idx);
      console.log(res);
      this.playlist = res.playlist;
      this.tracks = this.playlist.tracks;
  },
  methods:{

  }
};
</script>

<style lang="less" scoped>
@top: 46px;
@bottom: 50px;
.page {
  padding-top: @top;
    .pic{
      width: 100%;
      height: 250px;
      display: block;
  }
    .list{
    padding-left: 15px;
    background: #eee;
    line-height: 40px;
    font-size: 15px;
  }
}

</style>