<template>
	<div class="addressList">
		<ChildTop>
			<h4>收货地址</h4>
		</ChildTop>
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		  :disabled-list="disabledList"
		  disabled-text="以下地址超出配送范围"
		  default-tag-text="默认"
		  @add="onAdd"
		  @edit="onEdit"
		/>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'
	import Vue from 'vue';
	import { AddressList } from 'vant';
	import { Toast } from 'vant';
	
	Vue.use(AddressList);
	export default{
		name:'orderItems',
		data(){
			return{
			 chosenAddressId: '1',
			  list: [
				{
				  id: '1',
				  name: '冉某',
				  tel: '12xxxx6153',
				  address: '重庆市 南岸区盈讯天地 三号楼',
				  isDefault: true,
				},
				{
				  id: '2',
				  name: '小冉',
				  tel: '1310000000',
				  address: '重庆市 南岸区盈讯天地员工之家 c303',
				}
			  ],
			  disabledList: [
			    {
				  id: '3',
				  name: '李四',
				  tel: '1320000000',
				  address: '重庆市永川区 红河大道 50 号',
			    },
				{
				  id: '4',
				  name: '王五',
				  tel: '1330000000',
				  address: '重庆市忠县 丽江花园 11号',
				},
			  ],
			};
		},
		methods: {
			onAdd() {
			  this.$router.push({name:'AddressEdit'})
			},
			onEdit(item, index) {
			  Toast('编辑地址:' + index);
			},
			goback(){
				this.$router.go(-1)
			}
		},
		components:{
			ChildTop
		}
	};
</script>

<style lang="less" scoped>
	.addressList{
		width: 100%;
		margin-top: 60px;
		&::v-deep .van-button--danger{
			background-color: #fc7414;
		}
	}
</style>
