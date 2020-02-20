<template>
  <div class="page">
    <head-item :title="'最新音乐'"></head-item>
      <div class="container">
        <song-item v-for="item of newSongs" :key="item.id" :item="item"></song-item>
      </div>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import Http from "@/api/music.js";
import SongItem from "@/components/SongItem"


export default {
  components: {
    HeadItem,
    SongItem
  },
  data() {
    return {
        newSongs:[]
    };
  },
  async mounted() {
      let res = await Http.getNewSong();
      console.log(res);
      this.newSongs = res.result;

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
    .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    }
}

</style>