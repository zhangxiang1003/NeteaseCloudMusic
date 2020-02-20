<template>
  <div class="page">
    <head-item :title="artist.name"></head-item>
    <img :src="artist.picUrl" alt="" class="pic">
    <div class="list">播放列表</div>
    <div class="m-container">
        <music-item v-for="(item, index) in hotSongs" :key="item.id"
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
      artist:{},
      hotSongs:[]
    };
  },
  async mounted() {
      var {id} = this.$route.query;
      let res = await Http.getArtistplaylist(id);
      this.artist = res.artist;
      this.hotSongs = res.hotSongs;
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