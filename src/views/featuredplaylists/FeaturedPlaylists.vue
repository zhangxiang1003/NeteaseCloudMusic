<template>
  <div class="page">
    <head-item :title="'精选歌单'"></head-item>
    <div class="container">
        <list-item v-for="item of playlists" :key="item.id" :item="item">
        <div slot="slot" class="playcount">
            <van-icon name="play" />
            {{item.playCount | CountFormat()}}
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
      playlists:[],
    };
  },
  async mounted() {
      let res = await Http.getsongsheet();
      console.log(res);
      this.playlists = res.playlists;
      
  },
  methods:{

  },
    filters: {
    CountFormat: value => {
      if (value >= 100000) {
        value = Math.ceil(value / 10000) + "万";
      }
      return value;
    }
  }
};
</script>

<style lang="less" scoped>
@top: 46px;
@bottom: 50px;
.page {
  padding-top: @top;

}
.container {
    padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.playcount {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
}
.content {
  position: relative;
}

</style>