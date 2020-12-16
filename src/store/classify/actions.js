import { postClassApi } from "../../utils/api";

export default {
  async postClass({ commit }, obj) {
    const res = await postClassApi({
      type: obj.type
    });
    commit("changeClass", res.result);
  }
};
