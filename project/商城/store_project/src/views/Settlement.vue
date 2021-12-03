<template>
	<div class="settlement">
		<ChildTop>
			<h4>结算页面</h4>
		</ChildTop>
		<!-- <div>{{settlementGoods}}</div> -->
		<div class="main">
			<div class="address">
				<van-cell title="冉某 12xxxx6153" size="large" label="重庆市 南岸区盈讯天地 三号楼" is-link to="/addressList"/>
			</div>
			<div class="goodsList">
				<van-card v-for="orderList in settlementGoods"
				  :num="orderList.num"
				  :title="orderList.desc"
				  :thumb="orderList.imgPath">
					<template #price>
						<span>{{orderList.oneprice | money}}</span>
					</template>
				</van-card>
			</div>
			<div class="totalPrice">
				<van-cell-group>
				  <van-cell title-style="text-align:right;">
					  <template #default>
							<span>小计：<em>{{getTotalPrice() | money}}</em></span>
					  </template>
					  <template #title>
							<span>共<em>{{getSelectNum()}}</em>件商品</span>
					  </template>
				  </van-cell>
				</van-cell-group>
				<van-row>
					<van-col span="24">		
						<!-- 优惠券单元格 -->
						<van-coupon-cell
						  :coupons="coupons"
						  :chosen-coupon="chosenCoupon"
						  @click="showList = true"
						/>
						<!-- 优惠券列表 -->
						<van-popup
						  v-model="showList"
						  round
						  position="bottom"
						  style="height: 90%; padding-top: 4px;">
						  <van-coupon-list
							:coupons="coupons"
							:chosen-coupon="chosenCoupon"
							:disabled-coupons="disabledCoupons"
							@change="onChange"
							@exchange="onExchange"/>
						</van-popup>
					</van-col>
				</van-row> 
				<van-cell-group>
					<van-cell title="配送方式" value="包邮"/>
					<van-cell title="商品运费" value="免运费险" />
					<van-field
						v-model='msg'
						rows="2"
						autosize
						label="留言"
						type="textarea"
						maxlength="50"
						placeholder="请输入留言"
						show-word-limit
					/>
				</van-cell-group>
			
				<van-submit-bar button-text="提交订单" @submit="onSubmit">
					<template #default>
						<span class="submitPrice">合计：<em>{{getTotalPrice() | money}}</em></span>
					</template>
				</van-submit-bar>
			</div>
		</div>
		<van-action-sheet v-model="show" title="付款详情">
			<div class="content">
				<van-cell-group>
				  <van-cell title="支付宝账号" value="xxxasd.qqcsd" />
				  <van-cell title="付款方式" value="建设银行卡(6666)" />
				  <van-cell title="需付款" :value="getTotalPrice() | money" />
				</van-cell-group>
				<van-button type="danger" @click="pay()">确认付款</van-button>
			</div>
		</van-action-sheet>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'
	import Vue from 'vue';
	import { SubmitBar } from 'vant';
	import { Popup,CouponCell, CouponList } from 'vant';
	import { Checkbox, CheckboxGroup } from 'vant';
	import { Field } from 'vant';
	import { Toast } from 'vant';

	Vue.use(Field);
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	Vue.use(Popup);
	Vue.use(CouponCell);
	Vue.use(CouponList);
	Vue.use(SubmitBar);
	const coupon = {
	  available: 1,
	  condition: '无使用门槛\n最多优惠5元',
	  reason: '',
	  value: 500,
	  name: '优惠券名称',
	  startAt: 1594174000,
	  endAt: 1666074000,
	  valueDesc: '5',
	  unitDesc: '元',
	};
	
	export default{
		name: 'Settlement',
		data(){
			return{
				settlementGoods: this.$store.state.selectGoods,
				show: false,
				showList:false,
				chosenCoupon: -1,
				coupons: [coupon],
				disabledCoupons: [coupon],
				checked: true,
				msg: ''
			}
		},
		components:{
			ChildTop
		},
		methods:{
			onChange(index) {
			    this.showList = false;
			    this.chosenCoupon = index;
			},
			onExchange(code) {
			    this.coupons.push(coupon);
			},
			//计算选中的商品数量
			getSelectNum(){
				var orderNum = 0
				this.settlementGoods.forEach((item,index)=>{
					if(item.checked){
						var num = item.num
						orderNum += num
					}
				})
				return orderNum
			},
			//计算总价
			getTotalPrice(){
				var totalPrice = 0
				this.settlementGoods.forEach((item,index)=>{
					if(item.checked){
						var price = item.num * item.oneprice
						totalPrice += price
					}
				})
				return totalPrice
			},
			onSubmit(){
				this.show = true
			},
			pay(){
				Toast('付款成功')
				this.settlementGoods.forEach((item,index)=>{
					this.$store.state.orderGoods.push(item)
				})
				this.$router.replace('/paySuccess')
			}
		}
	}
</script>

<style scoped lang="less">
	.settlement{
		margin: 60px 0;
		.van-cell__title{
			text-align: left;
		}
		.goodsList{
			margin-top: 10px;
			.van-card__content{
				text-align: left;
			}
		}
		.totalPrice{
			margin-top: 10px;
			span{
				em{
					font-style: normal;
					color: #f96909;
					font-size: 16px;
					font-weight: 600;
				}
				&.submitPrice{
					margin: 0 10px;
				}
			}
			.settle_content_left{
				background-color: white;
			}
			.van-col--4 span{
				background-color: #E91F3C;
				padding: 3px 4px;
				border-radius: 1.6vw;
				color: white;
				font-size: 12px;
			}
		}
		.van-action-sheet__header{
			background-color: #f4f1f4;
			font-size: 19px;
			height: 60px;
			line-height: 60px;
			color: black;
		}
		.content {
			padding: 30px 16px 30px;
			button{
				width: 250px;
				height: 40px;
				margin-top: 50px;
			}
		}
	}
</style>

