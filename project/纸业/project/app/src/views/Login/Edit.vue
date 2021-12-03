<template>
  <div class="edit">
    <Header :Title="this.title" />
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      @change-default="onChangeDefault"
      :address-info="save"
    />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Storage from "@/views/Storage.js";
import Vue from "vue";
import { AddressEdit } from "vant";
import { areaList } from "@vant/area-data";
import { Toast } from "vant";

Vue.use(AddressEdit);
export default {
  name: "Edit",
  components: {
    Header,
  },
  data() {
    return {
      title: "地址信息",
      areaList,
      searchResult: [],
      addressLists: Storage.get("addressLists"),
      isDefault: false,
      save: {},
      areaCode: "",
    };
  },
  methods: {
    onSave(content) {
      Toast("save");
      // 新增
      if (this.save == undefined) {
        this.$set(this.addressLists, this.addressLists.length, {
          id: this.addressLists.length,
          name: content.name,
          tel: content.tel,
          address: `${content.province}${content.city}${content.county}${content.addressDetail}`,
          addressDetail: content.addressDetail,
          isDefault: this.isDefault,
        });
        // 编辑
      } else {
        this.$set(this.addressLists, this.$route.params.index, {
          id: this.$route.params.index,
          name: content.name,
          tel: content.tel,
          address: `${content.province}${content.city}${content.county}${content.addressDetail}`,
          addressDetail: content.addressDetail,
          isDefault: this.isDefault,
        });
      }

      // this.$router.go(-1);
    },
    onDelete() {
      Toast("已删除");
      this.$delete(this.addressLists, this.$route.params.index);
      this.$router.go(-1);
    },
    onChangeDefault() {
      // 新增
      if (this.save == undefined) {
        this.isDefault = !this.isDefault;
        console.log(this.isDefault);
        // 编辑
      } else {
        this.isDefault = this.save.isDefault;
        this.isDefault = !this.isDefault;
        console.log(this.isDefault);
      }
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "羊村",
            address: "青青草原",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  watch: {
    addressLists: {
      handler() {
        Storage.set("addressLists", this.addressLists);
      },
      deep: true,
    },
  },
  created() {
    this.save = this.addressLists[this.$route.params.index];
    // console.log(this.save);
  },
};
</script>

<style lang="less" scoped></style>
