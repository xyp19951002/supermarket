<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active" :placeholder="true" route>
      <van-tabbar-item
        v-for="item in tabList"
        :dot="item.dot"
        :icon="item.icon"
        :to="item.to"
        :key="item.icon"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabList: [
        {
          title: "首页",
          icon: "home-o",
          dot: false,
          to: "/index"
        },
        {
          title: "分类",
          icon: "search",
          dot: false,
          to: "/class"
        },
        {
          title: "购物车",
          icon: "friends-o",
          dot: false,
          to: "/cart"
        },
        {
          title: "我的",
          icon: "setting-o",
          dot: false,
          to: "/mine"
        }
      ]
    };
  }
};
</script>
