<template>
	<div class="myOrders">
		<ChildTop>
			<h4>我的订单</h4>
		</ChildTop>
		<div class="orderitems_tab">
			<van-tabs v-model="active">
				<van-tab title="待发货" class="tab1">
					<van-empty description="暂无待发货订单" :class="{show:isShow}">
						<van-button round type="danger" class="bottom-button" @click="goShop()">去购物</van-button>
					</van-empty>
					<div class="goodsList" :class="{show: !isShow}">
						<div v-for="orderList in orderGoods" class="list">
							<van-card
							  :num="orderList.num"
							  :title="orderList.desc"
							  :thumb="orderList.imgPath">
								<template #desc>
									<p class="descInfo">待发货</p>
								</template>
								<template #price>
									<span>{{orderList.oneprice | money}}</span>
								</template>
							</van-card>
							<div class="totalPrice">
								<p>实付：<span>{{(orderList.num*orderList.oneprice) | money}}</span></p>
							</div>
						</div>
					</div>
				</van-tab>
				<van-tab title="待收货" class="tab2">
					<van-empty description="暂无待收货订单">
						<van-button type="danger" class="bottom-button" @click="goShop()">去购物</van-button>
					</van-empty>
				</van-tab>
				<van-tab title="待付款" class="tab3">
					<van-empty description="暂无待付款订单" />
				</van-tab>
				<van-tab title="已完成" class="tab4">
					<div class="goodsList">
						<van-card v-for="orderList in finishGoods"
						  :num="orderList.num"
						  :title="orderList.desc"
						  :thumb="orderList.imgs">
							<template #desc>
								<div class="descInfo">
									<p>实付：{{(orderList.num*orderList.price) | money}}</p>
									<span>已完成</span>
								</div>
							</template>
							<template #price>
								<span>{{orderList.price | money}}</span>
							</template>
						</van-card>
					</div>
				</van-tab>
			</van-tabs>
			
		</div>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'
	
	export default{
		name: 'MyOrders',
		components:{
			ChildTop
		},
		data(){
			return{
				active: 0,
				isLoading: false,
				isShow: false,
				value1: 0,
				orderGoods: this.$store.state.orderGoods,
				finishGoods: [
					{
						desc:'全自动雨伞自开自收男女晴雨两用伞自带挂钩防风三折大号防风加固折叠伞 天空蓝',
						price: 48.80,
						num: 1,
						imgs: require('../assets/home/goods1.jpg'),
						title: '恒时智选旗舰店',
					},
					{
						desc: '臻邦 热水袋暖水袋暖手宝暖宝宝注水电暖热宝 电暖贴身保暖 智能充电防爆水电分离超柔面料 灰色',
						price: 37.90,
						num: 3,
						imgs: require('../assets/home/goods2.jpg'),
						title: '臻邦京东自营旗舰店',
					},
				]
			}
		},
		methods:{
			goShop(){
				this.$router.push('/cart')
			},
		},
		created(){
			if(this.orderGoods!=undefined && this.orderGoods.length >= 1){
				this.isShow = !this.isShow;
			}
			else{
				this.isShow = this.isShow;
			}
		}
	}
</script>

<style scoped lang="less">
	.myOrders{
		margin-top: 60px;
		.show{
			display: none;
		}
		.orderitems_tab{
			@width: 150px;
			@height: 40px;
			text-align: left;
			.btn(){
				width: @width;
				height: @height;
				background-color: #ff7618;
			}
			.tab1{
				.van-button--round{
					.btn()
				}
				.goodsList{
					div.list{
						margin-top: 10px;
						.descInfo{
							margin: 10px 0;
							display: flex;
							float: right;
							color: red;
						}
					}
					
				}
				.totalPrice{
					display: flex;
					justify-content: end;
					background-color: #fff;
					padding: 10px;
					margin-top: 2px;
					span{
						color: #EE881B;
						font-size: 18px;
					}
				}
			}
			.tab2{
				.van-button--normal{
					.btn()
				}
			}
			.tab3{
				.van-button--normal{
					.btn();
					background-color: #EE881B;
				}
			}
			.tab4{
				.goodsList{
					.descInfo{
						margin: 10px 0;
						display: flex;
						justify-content: space-between;
						span{
							padding: 3px;
							border: 1px solid #EE7C2B;
							width: 40px;
							color: #EE7C2B;
							border-radius: 5px;
							font-size: 12px;
						}
						p{
							color: red;
						}
					}
				}
			}
		}
	}
</style>

