<template>
    <div class="content" @click="handleClick(item.id)">
      <img class="pic" :src="item.picUrl" alt />
      <p class="songName">{{item.name}}</p>
      <p class="artists">{{item.song.artists[0].name}}</p>
    </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods:{
    handleClick(id){
      this.$router.push(`/play?ids=${id}`);
    }
  }
};
</script>

<style lang="less" scoped>
@size: 114px;
@color: #777;
#move() {
  position: relative;
  top: -4px;
}
#row() {
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow:hidden;
}
.content {
  width: @size;
}
.songName {
  #move();
  font-size: 13px;
  #row();
}
.artists {
  #move();
  font-size: 8px;
  padding-bottom: 5px;
  color: @color;
}
.pic {
  width: @size;
  height: @size;
  border-radius: 5px;
}

</style>