<template>
  <van-swipe
    class="my-swipe"
    :autoplay="autoplay"
    :indicatorColor="indicatorColor"
  >
    <van-swipe-item v-for="item in swiperList" :key="item">
      <img :src="item" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    autoplay: Number,
    swiperList: Array,
    indicatorColor: String
  }
};
</script>
<style lang="stylus" scoped>
.my-swipe .van-swipe-item
  height 200px
  img
    width 100%
    height 100%
</style>
