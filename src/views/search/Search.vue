<template>
  <div class="page">
    <head-item :title="title"></head-item>
    <div class="search">
      <van-search
        placeholder="请输入搜索歌手或歌曲名"
        v-model.trim="keyword"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>
    <div class="searchPage" v-if="isShow">
      <div class="hotSearch">
        <div class="title">热门搜索</div>
        <div class="container">
          <div class="hotItem" v-for="item of hotSearch" :key="item.first" @click="hSearch(item.first)">{{item.first}}</div>
        </div>
      </div>
      <div class="history">
        <div class="title">
          <span>搜索历史</span>
          <van-icon name="close" @click="close"/>
        </div>
        <div class="container">
          <div v-for="(item,index) of history" :key="index" class="hotItem" @click="hSearch(item)">
            {{item}}
          </div>
        </div>
      </div>
    </div>

    <div class="songs" v-else>
      <music-item v-for="(item, index) in songs" :key="item.id"
        :index="index" :title="item.name" 
        :artist="item.artists[0].name" :album="item.album.name" :id="item.id"></music-item>
    </div>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import Http from "@/api/music.js";
import MusicItem from "@/components/MusicItem.vue"
export default {
  components: {
    HeadItem,
    MusicItem
  },
  data() {
    return {
      title: "网易云搜索",
      keyword: "",
      isShow: true,
      hotSearch: [],
      history:[],
      songs:[]
    };
  },
  async mounted() {
    let hot = await Http.gethotsongs();
    this.hotSearch = hot.result.hots;

    if(sessionStorage.getItem("history")){
      this.history = JSON.parse(sessionStorage.getItem("history"));
    }
  },
  methods: {
    async onSearch() {
      this.isShow = false;
      if(this.keyword!=="" && !this.history.includes(this.keyword)){
       this.history.unshift(this.keyword);
       let history = JSON.stringify(this.history);
        sessionStorage.setItem("history",history);
      }
      let res = await Http.searchResult(this.keyword);
      this.songs = res.result.songs;
    },
    onCancel() {
      this.isShow = true;
    },
    close(){
      this.history = [];
      sessionStorage.removeItem("history");
    },
    async hSearch(keyword){
      console.log(keyword);
      if(!this.history.includes(keyword)){
       this.history.unshift(keyword);
       let history = JSON.stringify(this.history);
        sessionStorage.setItem("history",history);
      }
      this.keyword = keyword;
      this.onSearch();
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
.hotSearch,
.history {
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
}
.title {
  display: flex;
  justify-content: space-between;
  color: #de655c;
  font-size: 15px;
  font-weight: 800;
}
.hotItem {
  font-size: 14px;
  color: #de655c;
  background-color: #edeef0;
  border-radius: 7.5px;
  padding: 10px;
  margin: 3.5px;
}
.container{
    display: flex;
    flex-wrap: wrap;
}
.songs{
  width: 100%;
  .song{
    padding: 10px;
    border-bottom: 1px solid #edeef0;
    .name{
      color: #000000;
      font-size: 15px;
      width: 300px;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      overflow: hidden;
    }
    .album{
    font-size: 11px;
    color: #000000;
    width: 300px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
    }
  }
}
</style>