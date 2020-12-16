import { postDetailApi } from "../../utils/api";

export default {
  async postDetailApi({ commit }, payload) {
    const res = await postDetailApi({
      productId: payload.id
    });
    commit("changeDetail", res.result);
  }
};
