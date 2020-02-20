<template>
  <div class="page">
    <head-item :title="playlistname"></head-item>
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
        playlistname:"",
        tracks:[]
    };
  },
  async mounted() {
      let {id} = this.$route.query;
      let res = await Http.getlistDetail(id);
      console.log(res)
      this.playlistname  = res.playlist.name;
      this.tracks = res.playlist.tracks;
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
}

</style>