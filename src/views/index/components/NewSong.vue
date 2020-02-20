<template>
  <div class="container">
      <song-item v-for="item of data" :key="item.id" :item="item"></song-item>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem"
export default {
  components: {
      SongItem
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
    this.data = await this.sendData.slice(0, 6);
    // console.log(this.data);
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>