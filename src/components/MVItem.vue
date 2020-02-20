<template>
    <div class="content" @click="handleClick(item.id)">
      <img class="pic" :src="item.picUrl" alt />
      <p class="songName">{{item.name}}</p>
      <p class="artists">{{item.artists[0].name}}</p>
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
      console.log(id);
      this.$router.push(`/mv?mvid=${id}`);
    }
  }
};
</script>

<style lang="less" scoped>
@size: 114px;
@width:175px;
@color: #777;
#move() {
  position: relative;
  top: -4px;
}
#row() {
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
}
.content {
  width: @width;
}
.songName {
  #move();
  font-size: 13px;
  #row();
}
.artists {
  #move();
  font-size: 10px;
  padding-bottom: 5px;
  color: @color;
}
.pic {
  width: @width;
  height: @size;
  border-radius: 3px;
}
</style>