<template>
  <div>
    <van-nav-bar title="登陆" left-arrow @click-left="onClickLeft" />

    <van-field
      v-model="phone"
      center
      clearable
      label="手机号码"
      placeholder="请输入手机号"
    >
      <template #button>
        <van-button
          size="small"
          type="primary"
          color="rgb(255, 80, 0)"
          @click="sendNum"
          >发送手机号</van-button
        >
      </template>
    </van-field>

    <van-cell-group>
      <van-field
        v-model="code"
        label="短信验证码"
        placeholder="请输入短信验证码"
      />
    </van-cell-group>

    <van-button
      type="primary"
      block
      size="small"
      color="rgb(255, 80, 0)"
      @click="login"
      >登陆</van-button
    >
  </div>
</template>

<script>
import { postMessage, postLogin } from "../utils/api";

export default {
  data() {
    return {
      phone: "",
      code: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 发送手机号，验证短信验证码
    async sendNum() {
      const res = await postMessage({
        phone: this.phone,
        templateId: "537707"
      });
      console.log(res);
    },
    // 登陆设置 token ，跳转至 mine 页面
    async login() {
      const res = await postLogin({
        phone: this.phone,
        code: this.code
      });
      sessionStorage.setItem("token", res.result.token);
      this.$router.replace("/mine");
    }
  }
};
</script>
<style lang="stylus" scoped></style>
