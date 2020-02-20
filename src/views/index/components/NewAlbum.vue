<template>
  <div class="container">
    <list-item v-for="item of data" :key="item.id" :item="item">
      <div slot="slot" class="desc">
        <p class="albumName">{{item.albumName}}</p>
        <p class="albumArtist">{{item.artist}}</p>
      </div>
    </list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListsItem.vue";
export default {
  components: {
    ListItem
  },
  props: {
    sendData: {
      type: Array
    }
  },
  data() {
    return {
      data: []
    };
  },
  async mounted() {
    // console.log(this.sendData);
    let data = await this.sendData.slice(0, 6);
    data.forEach((item, index) => {
      let obj = {
        id: item.id,
        albumName: item.name,
        coverImgUrl: item.picUrl,
        artist: item.artist.name,
        name: ""
      };
      this.data.push(obj);
    });
    console.log(this.data);
  }
};
</script>

<style lang="less" scoped>
#move() {
  position: relative;
  top: -4px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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