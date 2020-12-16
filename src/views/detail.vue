<template>
  <div v-if="goodsList.title" class="detail">
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />

    <van-swipe @change="onChange" class="sw" autoplay="3000">
      <van-swipe-item v-for="item in goodsList.imgArr" :key="item">
        <img :src="item" alt="" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }} / {{ goodsList.imgArr.length }}
        </div>
      </template>
    </van-swipe>
    <p>{{ goodsList.currentPrice }}</p>
    <p>{{ goodsList.originalPrice }}</p>
    <p>{{ goodsList.productName }}</p>

    <van-cell-group class="cell">
      <van-cell title="单元格" is-link @click="show = true" />
    </van-cell-group>

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      current: 0,
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            largeImageMode: true //  是否展示大图模式
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      },
      goodsId: "1"
    };
  },

  computed: {
    goodsList() {
      return this.$store.state.detail.goodsList;
    }
  },

  mounted() {
    this.$store.dispatch("postDetailApi", {
      id: this.id
    });
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    onBuyClicked() {
      console.log("buy");
    },
    onAddCartClicked() {
      console.log("cart");
    }
  }
};
</script>
<style lang="stylus" scoped>
.custom-indicator
  position absolute
  right 5px
  bottom 5px
  padding 2px 10px
  font-size 10px
  background rgba(0, 0, 0, 0.3)
  color #fff
  border-radius 13px
.detail
  .sw
    img
      width 100%
      height 250px
  p
    font-size 12px
    margin 0
    background #eee
  .cell
    margin-top 15px
</style>
