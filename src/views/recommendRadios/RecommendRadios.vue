<template>
  <div class="page">
    <head-item :title="'电台推荐'"></head-item>
    <div class="container">
        <list-item v-for="item of data" :key="item.id" :item="item">
            <div slot="slot" class="artist">{{item.artist}}</div>
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
    let data = await Http.getDjRadios();
    console.log(data)
    data.programs.forEach((item, index) => {
      let obj = {
        id: item.id,
        name: item.name,
        coverImgUrl: item.coverUrl,
        artist: item.mainSong.artists[0].name
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
.artist {
  #row();
  font-size: 10px;
  color: #fff;
    position: absolute;
  top:90px;
  left: 0px;
  width: 110px;
  padding: 0 5px;
}
.content {
  position: relative;
}
</style>