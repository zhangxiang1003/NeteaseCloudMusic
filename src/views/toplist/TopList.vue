<template>
  <div class="page">
    <head-item :title="title"></head-item>
    <div class="toplist">
      <div class="list-item" v-for="item of list" :key="item.name" @click="handleClick(item.idx)">
        <img :src="item.coverImgUrl" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import Http from "@/api/music.js";
export default {
  components: {
    HeadItem
  },
  data() {
    return {
      title: "榜单排行",
      list: []
    };
  },
  async mounted() {
    for (let i = 0; i < 10; i++) {
      let obj = {};
      let res = await Http.getTopList(i);
      obj.name = res.playlist.name;
      obj.coverImgUrl = res.playlist.coverImgUrl;
      obj.idx = i;
      this.list.push(obj);
    }
  },
  methods:{
    handleClick(idx){
      this.$router.push(`/toplistdetail?idx=${idx}`);
    }
  }
};
</script>

<style lang="less" scoped>
@top: 46px;
@bottom: 50px;
.page {
  padding-top: @top;
  padding-bottom: @bottom;
}
.toplist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-around;
  .list-item {
    width: 160px;
    margin-top: 10px;
    img {
      width: 160px;
    }
    p {
      font-size: 17px;
    }
  }
}
</style>