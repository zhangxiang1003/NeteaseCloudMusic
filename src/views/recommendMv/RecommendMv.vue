<template>
  <div class="page">
    <head-item :title="'推荐MV'"></head-item>
    <div class="container">
        <recommend-mVs v-if="data.length" :sendData="data"></recommend-mVs>
    </div>
  </div>
</template>

<script>
import HeadItem from "@/components/Head.vue";
import Http from "@/api/music.js";
import RecommendMVs from "../index/components/RecommendMVs.vue"

export default {
  components: {
    HeadItem,
    RecommendMVs
  },
  data() {
    return {
        data:[]
    };
  },
  async mounted() {
      let res = await Http.getRecommendMv();
      console.log(res);
      this.data = res.result;
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
.container{
    padding: 5px;
}

</style>