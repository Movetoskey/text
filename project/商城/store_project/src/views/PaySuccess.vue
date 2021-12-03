<template>
	<div class="paySuccess">
		<ChildTop>
			<h4>订单详情</h4>
		</ChildTop>
		<div class="main">
			<img src="../assets/Orders/bg.png" alt="">
			<van-cell title="等待商家发货" icon="orders-o" title-style="text-align:left;" lable="下单时间" to="/logistics">
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
				<template #right-icon>
					<van-icon name="arrow" />
				</template>
			</van-cell>
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
			<div class="main_order">
				<van-cell-group>
					<van-cell>
						<template #default>
							<p><em>订单号: </em>3214435462435454</p>
							<p><em>下单时间:</em>2021-10-12 12：01：21 </p>
						</template>
					</van-cell>
					<van-cell>
						<template #default>
							<p><em>支付方式: </em>银行卡</p>
							<p><em>支付时间:</em>2021-10-12 12：01：21 </p>
						</template>
					</van-cell>
					<van-cell>
						<template #default>
							<p><em>配送方式: </em>菜鸟</p>
							<p><em>预计到达时间:</em>2021-10-15 15：12：34 </p>
						</template>
					</van-cell>
				</van-cell-group>
			</div>
			<div class="address">
				<van-cell>
					<template #default>
						<p><em>收货人: </em>冉某</p>
						<p><em>收货地址:</em>重庆市 南岸区盈讯天地 三号楼</p>
					</template>
				</van-cell>
			</div>
			<div class="price">
				<van-cell>
					<template #default>
						<p><em>商品价格: </em><span>{{getTotalPrice() | money}}</span></p>
						<p><em>商品运费:</em><span>免运费</span></p>
						<p class="payPrice">实付：<span>{{getTotalPrice() | money}}</span></p>
					</template>
				</van-cell>
			</div>
			<div class="btn">
				<van-cell>
					<van-button plain type="primary" size="small" round to="/orders">查看订单</van-button>
					<van-button plain type="info" size="small" round to="/afterSale">申请售后</van-button>
				</van-cell>
			</div>
		</div>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'

	
	export default{
		name: 'PaySuccess',
		data(){
			return{
				settlementGoods: this.$store.state.selectGoods,
			}
		},
		components:{
			ChildTop
		},
		methods:{
			//计算总价
			getTotalPrice(){
				var totalPrice = 0
				this.settlementGoods.forEach((item,index)=>{
					var price = item.num * item.oneprice
					totalPrice += price
				})
				return totalPrice
			},
		}
	}
</script>

<style scoped lang="less">
	.paySuccess{
		.main{
			margin-top: 60px;
			img{
				width: 100%;
			}
			.van-card__content{
				text-align: left;
			}
			.van-cell{
				text-align: left;
				font-size: 14px;
				p{
					color: rgba(128, 128, 128, 1);
					em{
						font-style: normal;
						font-weight: bold;
						margin-right: 10px;
						color: rgba(56, 56, 56, 1);
					}
				}
			}
			.main_order{
				margin: 10px 0;
			}
			.price{
				margin-top: 10px;
				.van-cell{
					p{
						display: flex;
						justify-content: space-between;
						font-weight: 700;
						color: #000;
						&.payPrice{
							justify-content: end;
							margin-top: 10px;
							span{
								color: #f46709;
								font-size: 18px;
							}
						}
					}
					
				}
			}
			.btn{
				margin-top: 10px;
				.van-cell__value--alone{
					text-align: right;
					button{
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>

