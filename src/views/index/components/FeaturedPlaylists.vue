<template>
  <div class="container">
    <list-item v-for="item of data" :key="item.id" :item="item">
      <div slot="slot" class="playcount">
        <van-icon name="play" />
        {{item.playCount | CountFormat()}}
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
        name: item.name,
        coverImgUrl: item.coverImgUrl,
        playCount: item.playCount
      };
      this.data.push(obj);
    });
    // console.log(this.data);
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
.container {
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
  top: 2px;
  right: 6px;
}
.content {
  position: relative;
}
</style>