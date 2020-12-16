<template>
  <div></div>
</template>

<script>
import { postMine } from "../utils/api";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    this.postMineData();
  },

  methods: {
    async postMineData() {
      const res = await postMine({
        token: sessionStorage.getItem("token")
      });
      console.log(res);
    }
  }
};
</script>
<style lang="stylus" scoped></style>
