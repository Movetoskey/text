<template>
  <div class="moredb">
    <img :src="db[index].pic" alt="" />
    <img :src="db[index].pic1" alt="" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "Moredb",
  props: ["index"],
  computed: {
    ...mapState({
      db: "db",
    }),
  },
};
</script>

<style lang="less" scoped>
.moredb {
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
