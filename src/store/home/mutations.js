export default {
  changeBanner(state, payload) {
    state.swiperList = payload;
  },
  changeRecommend(state, payload) {
    state.recommendList = payload;
  },
  // 清空recommendList
  clearRecommend(state) {
    state.recommendList = [];
  }
};
