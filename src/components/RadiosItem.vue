<template>
  <div class="content" @click="handleClick(item.id)">
    <img class="pic" :src="item.coverImgUrl" alt />
    <p class="listName">{{item.name}}</p>
    <slot name="slot"></slot>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    handleClick(id) {
      console.log(id);
      this.$router.push(`/radiolist?id=${id}`);
      this.$store.dispatch("changeCity",city);
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
#rowTwo() {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.content {
  width: @size;
  margin-bottom: 4px;
}
.listName {
  #move();
  font-size: 13px;
  #rowTwo();
}
.pic {
  width: @size;
  height: @size;
  border-radius: 5px;
}
</style>