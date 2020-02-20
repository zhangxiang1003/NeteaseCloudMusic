<template>
  <div class="page" v-if="song.al">
    <img :src="song.al.picUrl" class="background_img">
    <head-item :title="'音乐播放'"></head-item>
    <div class="title">
        <p class="name">{{song.name}}</p>
        <p class="artistname">{{song.ar[0].name}}</p>
    </div>
    <div class="songplayer">
        <div class="button">
            <img :src="song.al.picUrl" alt="">
            <van-icon :name="isPlay?'pause-circle-o':'play-circle-o'" @click="toggle"/>
        </div>
    </div>
    <audio style="display:none" ref="audio"></audio>
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
      song:{},
      isPlay:true,
      playUrl:""
    };
  },
  async mounted() {
      let {ids} = this.$route.query;
      let res = await Http.getsongDetail(ids);
      this.song = res.songs[0];
      let data = await Http.getSongplayUrl(ids);
     this.playUrl = data.data[0].url;
     this.$refs.audio.src = this.playUrl;
     this.$refs.audio.play();
  },
  methods:{
      toggle(){
          this.isPlay = !this.isPlay;
          if(this.isPlay){
              this.$refs.audio.play();
          }else{
              this.$refs.audio.pause();
          }
      }
  }
};
</script>

<style lang="less" scoped>
@top: 46px;
@bottom: 50px;
.page {
  padding-top: @top;
  width: 375px;
}
.img{
    width: 375px;
}
.background_img{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    z-index: -1;
    transform: scale(1.5);
}
.title{
    padding-top: 15px;
    color: #fff;
    text-align: center;
    font-size: 15px;
    .name{
        font-size: 18px;
    }
    .artistname{
        font-size: 13px;
    }
}
.songplayer{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    .button{
        width: 200px;
        height: 200px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 3px solid #ffffff;
        }
        .van-icon{
            color: #fff;
            font-size: 40px;
            position: absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
    }
}

</style>