<template>
  <div class="container">
    <radios-item v-for="item of data" :key="item.id" :item="item">
      <div slot="slot" class="artist">{{item.artist}}</div>
    </radios-item>
  </div>
</template>

<script>
import RadiosItem from "@/components/RadiosItem.vue";
export default {
  components: {
    RadiosItem
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
        id: item.radio.id,
        name: item.name,
        coverImgUrl: item.coverUrl,
        artist: item.mainSong.artists[0].name
      };
      this.data.push(obj);
    });
    // console.log(this.data);
  }
};
</script>

<style lang="less" scoped>
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