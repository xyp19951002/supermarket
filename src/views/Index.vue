<template>
  <div class="index">
    <van-nav-bar title="首页" :fixed="true" :placeholder="true" />
    <div style="position=relative">
      <van-search
        v-model="value"
        background="transparent"
        shape="round"
        placeholder="请输入搜索关键词"
      />
      <swiper
        :autoplay="3000"
        indicatorColor="white"
        :swiperList="swiperList"
      />
    </div>

    <van-grid :border="false">
      <van-grid-item
        icon="photo-o"
        text="文字"
        v-for="(item, index) in 4"
        :key="index"
      >
        <template #icon>
          <img
            class="grid-img"
            src="data:image/png;base64,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"
            alt=""
          />
        </template>
      </van-grid-item>
    </van-grid>

    <section>
      <article v-for="(item, index) in 4" :key="index"></article>
    </section>

    <div class="recommend">
      <span class="title">推荐商品</span>

      <!-- 上拉加载 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="0"
      >
        <!-- 商品卡 -->
        <van-card
          v-for="item in recommendList"
          :key="item.productId"
          :price="item.currentPrice"
          :title="item.productName"
          :thumb="item.imgUrl"
          :origin-price="item.originalPrice"
          @click="goToDetail(item.productId)"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
import Swiper from "../components/Swiper.vue";
export default {
  components: { Swiper },
  data() {
    return {
      value: "",
      loading: false,
      finished: true,
      // 一次性加载的个数
      count: 4,
      // 4个为一页，上一次加载前四个，下一次page++，加载下4个
      page: 1
    };
  },
  mounted() {
    this.$store.dispatch("getBannerList");
    // this.postRecommend();
    this.$store
      .dispatch("postRecommend", {
        count: this.count,
        page: this.page
      })
      .then(length => {
        this.page++;
        this.loading = false;
        if (length < this.count) {
          // 已加载完成
          this.finished = true;
        } else {
          // 未加载完
          this.finished = false;
        }
      });
  },
  methods: {
    // load是上拉到规定距离时，触发请求数据。
    onLoad() {
      // this.postRecommend();
      this.$store
        .dispatch("postRecommend", {
          count: this.count,
          page: this.page
        })
        .then(length => {
          this.page++;
          this.loading = false;
          if (length < this.count) {
            // 已加载完成
            this.finished = true;
          } else {
            // 未加载完
            this.finished = false;
          }
        });
    },
    goToDetail(id) {
      this.$router.push("/detail/" + id);
    }
  },
  computed: {
    swiperList() {
      return this.$store.state.home.swiperList;
    },
    recommendList() {
      return this.$store.state.home.recommendList;
    }
  },
  // 因为vuex中保存着上拉加载后的count和page，是全局的。就算页面销毁，数据也存在。这样页面跳转后，在后退回来，页面中就会有已经请求好的商品列表，并会请求请求一遍。
  // 解决方法：在页面销毁前，也就是beforeDestroy钩子函数中，清空vuex中相关数据。
  beforeDestroy() {
    this.$store.commit("clearRecommend");
  }
};
</script>
<style lang="stylus" scoped>
.grid-img
  width 40px
  height 40px
section
  width 100%
  display flex
  flex-wrap wrap
  justify-content space-evenly
  article
    width 45%
    height 100px
    background rgb(255, 80, 0)
    margin-bottom 10px

.recommend
  .title
    font-size 14px
    font-weight bold
    margin-left 10px
    border-left 5px orange solid
    padding-left 5px
</style>
