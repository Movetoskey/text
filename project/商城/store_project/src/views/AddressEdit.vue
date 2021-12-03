<template>
	<div class="addressEdit">
		<ChildTop>
			<h4>地址编辑</h4>
		</ChildTop>
		<div>
			<van-address-edit
			  :area-list="areaList"
			  show-postal
			  show-delete
			  show-set-default
			  show-search-result
			  :search-result="searchResult"
			  :area-columns-placeholder="['请选择', '请选择', '请选择']"
			  @save="onSave"
			  @delete="onDelete"
			  @change-detail="onChangeDetail"
			/>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { AddressEdit } from 'vant';
	import { Toast } from 'vant';

	Vue.use(AddressEdit);
	import areaList from '@/assets/js/areaList.js';
	import ChildTop from '@/components/ChildTop.vue'
	export default {
		data() {
			return {
			  areaList,
			  searchResult: [],
			};
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			onSave() {
			    Toast('save');
			},
			onDelete() {
			    Toast('delete');
			},
			onChangeDetail(val) {
			    if (val) {
					this.searchResult = [
					{
						name: '黄龙万科中心',
						address: '杭州市西湖区',
					},
				];
				} else {
					this.searchResult = [];
				}
			},
		},
		components:{
			ChildTop
		}
	};
</script>

<style scoped lang="less">
	.addressEdit{
		width: 100%;
		margin-top: 60px;
		&::v-deep .van-button--danger{
			background-color: #fc7414;
			border: transparent;
		}
	}
</style>
