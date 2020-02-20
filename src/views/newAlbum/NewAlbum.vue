<template>
  <div class="page">
    <head-item :title="'最新专辑'"></head-item>
    <div class="container">
        <list-item v-for="item of data" :key="item.id" :item="item">
        <div slot="slot" class="desc">
            <p class="albumName">{{item.albumName}}</p>
            <p class="albumArtist">{{item.artist}}</p>
        </div>
        </list-item>
    </div>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import Http from "@/api/music.js";
import ListItem from "@/components/ListsItem.vue";

export default {
  components: {
    HeadItem,
    ListItem
  },
  data() {
    return {
        data:[]
    };
  },
  async mounted() {
    let data = await Http.getNewEst();
    console.log(data)
    data.albums.forEach((item, index) => {
      let obj = {
        id: item.id,
        albumName: item.name,
        coverImgUrl: item.picUrl,
        artist: item.artist.name,
        name: ""
      };
      this.data.push(obj);
    });
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@top: 46px;
@bottom: 50px;
.page {
  padding-top: @top;
}
#row() {
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
}
#move() {
  position: relative;
  top: -4px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
.desc {
  #move();
  .albumArtist {
    font-size: 10px;
    color: #777;
  }
  .albumName {
    font-size: 13px;
  }
}
</style>