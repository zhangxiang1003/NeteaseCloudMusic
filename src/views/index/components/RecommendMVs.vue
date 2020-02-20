<template>
  <div class="container">
      <mV-item v-for="item of data" :key="item.id" :item="item"></mV-item>
  </div>
</template>

<script>
import MVItem from "@/components/MVItem.vue"
export default {
  components: {
      MVItem
  },
  props: {
    sendData: {
      type: Array
    }
  },
  data() {
    return {
      data: []
    };
  },
  async mounted() {
    // console.log(this.sendData);
    this.data = await this.sendData;
    // console.log(this.data);
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>