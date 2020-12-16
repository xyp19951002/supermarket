<template>
  <div class="classify">
    <van-nav-bar title="分类" />
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div class="class-main">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="item in list"
          :key="item.type"
          :title="item.title"
          @click="itemclick"
        />
      </van-sidebar>

      <div class="class-right">
        <div class="product">
          <div
            class="single"
            v-for="item in classList"
            :key="item.productId"
            @click="goToDetail(item.productId)"
          >
            <img :src="item.imgUrl" alt="" />
            <p class="title">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      list: [
        {
          title: "推荐分类",
          type: "1"
        },
        {
          title: "全球奶粉",
          type: "2"
        },
        {
          title: "尿不湿",
          type: "3"
        },
        {
          title: "营养辅食",
          type: "4"
        },
        {
          title: "喂养用品",
          type: "5"
        },
        {
          title: "宝宝护洗",
          type: "6"
        },
        {
          title: "清洁用品",
          type: "7"
        },
        {
          title: "孕产母乳",
          type: "8"
        },
        {
          title: "婴幼儿服饰",
          type: "9"
        }
      ],
      type: "1"
    };
  },
  mounted() {
    this.$store.dispatch("postClass", {
      type: this.type
    });
  },
  methods: {
    itemclick(index) {
      this.type = this.list[index].type;
      this.$store.dispatch("postClass", {
        type: this.type
      });
    },
    goToDetail(id) {
      this.$router.push("/detail/" + id);
    }
  },
  computed: {
    classList() {
      return this.$store.state.classify.classList;
    }
  }
};
</script>

<style lang="stylus" scoped>
.class-main
  display flex
  position absolute
  top 100px
  bottom 50px
  left 0
  right 0
  .class-right
    flex 1
    .product
      display flex
      flex-wrap wrap
      .single
        display flex
        flex-direction column
        justify-content center
        margin 15px
        img
          width 50px
          height 50px
        .title
          font-size 14px
          text-align center
          width 50px
          font-size 12px
</style>
