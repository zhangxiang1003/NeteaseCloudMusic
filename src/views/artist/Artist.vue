<template>
  <div class="page">
    <head-item :title="title"></head-item>
    <van-list class="a_container" v-model="loading" :finished="finished" @load="onLoad" 
    finished-text="没有更多了" :offset="0">
      <div class="item" v-for="(item,index) of artist.slice(0,this.end)" :key="item.id" @click="handleClick(item.id)">
        <div class="index">{{index+1}}</div>
        <img  :src="item.picUrl" alt="">
        <div class="dec">
          <p class="name">{{item.name}}</p>
          <p class="hot">{{item.score}}热度</p>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import Http from '@/api/music.js';
export default {
  components: {
    HeadItem
  },
  data() {
    return {
      title: "歌手榜",
      artist:[],
      loading:false,
      finished:false,
      end:10
    };
  },
  async mounted(){
    let res =await Http.getSonger();
    this.artist = res.list.artists;
    
  },
  methods:{
    onLoad(){
      setTimeout(()=>{
        this.end+=10;
        this.loading = false;
        if(this.end>=100){
          this.finished = true;
        }
      },1000);

    },
    handleClick(id){
      this.$router.push(`/artistdetail?id=${id}`);
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
.a_container{
  .item{
    width: 100%;
    padding: 5px;
    height: 110px;
    display: flex;
    .index{
      color: #9a9a98;
      width: 37.5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      width: 112px;
      height: 100%;
      border-radius: 8px;
    }
    .dec{
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .name{
        font-size: 15px;
      }
      .hot{
        font-size: 13px;
        color: #9a9a98;
      }
    }
  }
}
</style>