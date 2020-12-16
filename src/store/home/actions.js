import { getBannerListApi, postRecommendApi } from "../../utils/api";

export default {
  async getBannerList({ commit }) {
    const res = await getBannerListApi();
    commit("changeBanner", res.result.list);
  },
  postRecommend({ commit, state }, payload) {
    return new Promise(resolve => {
      // 请求数据------------------------------------------------------------------
      postRecommendApi({
        count: payload.count,
        page: payload.page
      }).then(res => {
        let list = [...state.recommendList, ...res.result.list];
        commit("changeRecommend", list);
        resolve(res.result.list.length);
      });
    });
  }
};
