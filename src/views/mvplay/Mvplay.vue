<template>
  <div class="page">
    <head-item :title="data.name"></head-item>
    <video :src="playsrc" class="audio" controls="controls"></video>
    <p class="name">{{data.name}}</p>
    <div class="desc">
        <p><span class="time">发行：{{data.publishTime}}</span> <span class="playcount">播放次数：{{data.playCount}}</span></p>
        <p>{{data.desc}}</p>
        <p>点赞：{{data.likeCount}}</p>
        <p>收藏：{{data.subCount}}</p>
        <p>评论：{{data.commentCount}}</p>
        <p>分享：{{data.shareCount}}</p>
    </div>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import Http from "@/api/music.js";

export default {
  components: {
    HeadItem,
  },
  data() {
    return {
        data:{},
        playsrc:""
    };
  },
  async mounted() {
      let {mvid} = this.$route.query;
      let res = await Http.getmvDetail(mvid);
      console.log(res);
      this.data = res.data;
      this.playsrc = this.data.brs[240];
      console.log(res.data.brs[240])
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
.audio{
    width: 100%;
}
.name{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
}
.desc{
    padding-left: 10px;
    font-size: 12px;
    color: #6A6B6C;
    margin-top: 10px;
}
.playcount{
    margin-left: 15px;
}
</style>