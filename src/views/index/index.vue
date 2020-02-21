<template>
  <div class="page">
    <head-item :title="title"></head-item>
    <div class="search">
      <van-search placeholder="请输入搜索歌手或歌曲名" @click.native="handleSearch" />
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item) of banners" :key="item.id">
          <img :src="item.picUrl" />
          <!-- @click="BannerDetail(item.targetId)" -->
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <div class="top">
        <div class="subtitle">
          最新音乐
          <van-icon name="arrow" @click="NewSongDetail('NewSong')" />
        </div>
      </div>
      <div class="bottom">
        <new-song v-if="newSongs.length" :sendData="newSongs"></new-song>
      </div>
      <div class="top">
        <div class="subtitle">
          精选歌单
          <van-icon name="arrow" @click="PlaylistsDetail('FeaturedPlaylists')" />
        </div>
      </div>
      <div class="bottom">
        <featured-playlists v-if="playlists.length" :sendData="playlists"></featured-playlists>
      </div>
      <div class="top">
        <div class="subtitle">
          推荐MV
          <van-icon name="arrow" @click="MVsDetail('RecommendMVs')" />
        </div>
      </div>
      <div class="bottom">
        <recommend-mVs v-if="mvs.length" :sendData="mvs"></recommend-mVs>
      </div>
      <div class="top">
        <div class="subtitle">
          电台推荐
          <van-icon name="arrow" @click="RadiosDetail('RecommendRadios')" />
        </div>
      </div>
      <div class="bottom">
        <recommend-radios v-if="radios.length" :sendData="radios"></recommend-radios>
      </div>
      <!-- <div class="top">
        <div class="subtitle">
          最新专辑
          <van-icon name="arrow" @click="AlbumDetail('NewAlbum')" />
        </div>
      </div>
      <div class="bottom">
        <new-album v-if="albums.length" :sendData="albums"></new-album>
      </div>-->
    </div>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import NewSong from "./components/NewSong.vue";
import FeaturedPlaylists from "./components/FeaturedPlaylists.vue";
import RecommendMVs from "./components/RecommendMVs.vue";
import RecommendRadios from "./components/RecommendRadios.vue";
import NewAlbum from "./components/NewAlbum.vue";
import Http from "@/api/music.js";
export default {
  components: {
    HeadItem,
    NewSong,
    FeaturedPlaylists,
    RecommendMVs,
    RecommendRadios,
    NewAlbum
  },
  data() {
    return {
      title: "网易云音乐",
      banners: [],
      newSongs: [],
      playlists: [],
      mvs: [],
      radios: [],
      albums: []
    };
  },
  async mounted() {
    let banner = await Http.getBanner();
    console.log(banner);
    this.banners = banner.banners;
    let newSong = await Http.getNewSong();
    // console.log(newSong.result);
    this.newSongs = newSong.result;
    let playlists = await Http.getsongsheet();
    // console.log(playlists.playlists);
    this.playlists = playlists.playlists;
    let mvs = await Http.getRecommendMv();
    // console.log(mvs.result);
    this.mvs = mvs.result;
    let radios = await Http.getDjRadios();
    // console.log(radios.programs);
    this.radios = radios.programs;
    let albums = await Http.getNewEst();
    // console.log(albums.albums);
    this.albums = albums.albums;
  },
  methods: {
    handleSearch() {
      this.$router.push("/search");
    },
    NewSongDetail(sub) {
      console.log(sub);
      this.$router.push("/newsong");
    },
    PlaylistsDetail(sub) {
      console.log(sub);
      this.$router.push("/featureplaylist");
    },
    MVsDetail(sub) {
      console.log(sub);
      this.$router.push("/recommendmv");
    },
    RadiosDetail(sub) {
      console.log(sub);
      this.$router.push("/recommendradio");
    },
    AlbumDetail(sub) {
      console.log(sub);
      this.$router.push("/newalbum");
    },
    BannerDetail(id) {
      console.log(id);
      this.$router.push(`/play?ids=${id}`);
    }
  }
};
</script>

<style lang="less" scoped>
@top: 46px;
@bottom: 50px;
@color: #c20c0c;
@gray: #444;
#weight() {
  font-weight: 600;
}
.page {
  padding-top: @top;
  padding-bottom: @bottom;
}
.search {
  color: @color;
}
.van-swipe img {
  width: 100%;
}
.content {
  padding: 0 8px 20px;
}
.top {
  .subtitle {
    #weight();
    font-size: 16px;
    display: flex;
    align-items: center;
    color: @gray;
  }
  padding: 10px 0;
}
</style>