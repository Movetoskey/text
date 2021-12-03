<template>
  <div class="more">
    <img :src="lists[index].pic" alt="" />
    <img :src="lists[index].pic1" alt="" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "More",
  props: ["index"],
  computed: {
    ...mapState({
      lists: "lists",
    }),
  },
};
</script>

<style lang="less" scoped>
.more {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  border-top: 1px solid #b2b2b2;
  img {
    width: 100%;
  }
}
</style>
