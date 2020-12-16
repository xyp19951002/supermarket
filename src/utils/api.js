import http from "./http";

export const getBannerListApi = params => http.get("/home/banner", params);

export const postRecommendApi = params => http.post("/home/recommend", params);

export const postClassApi = params => http.post("/classify", params);

export const postDetailApi = params => http.post("/detail", params);

export const postMessage = params => http.post("/register/getCode", params);

export const postLogin = params => http.post("/register", params);

export const postMine = params => http.post("/userinfo/get", params);
