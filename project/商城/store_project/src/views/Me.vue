<template>
	<div class="me">
		<TopBar>
			<h4>我的</h4>
		</TopBar>
		
		<div class="me_background">
			<img src="../assets/Me/unregist.png" class="left img_left"/>
			<div class="info">
				<h4 v-if="loginInfo.length==0?true:false">请先
					<router-link to="/login">登录</router-link>
					<router-link to="/register"> / 注册</router-link>
				</h4>
				<h4 v-if="loginInfo.length==0?false:true">
					欢迎用户：{{loginInfo[0]}} 登录
				</h4>
			</div>
		</div>
		<div class="me_content">
			<div class="me_property">
				<h4 class="title">我的资产</h4>
				<ul>
					<router-link to="/goldMall">
						<li class="left">
							<p><span>0</span></p>
							<p>余额</p>
						</li>
					</router-link>
					
					<router-link to="/goldMall">
						<li class="left">
							<p><span>0</span></p>
							<p>积分</p>
						</li>
					</router-link>
					
					<router-link to="/goldMall">
						<li class="left">
							<p><span>0</span></p>
							<p>金币</p>
						</li>
					</router-link>
				</ul>
			</div>
			
			<div class="me_orders">
				<h4><van-cell is-link title="我的订单" to="/orders"/></h4>
				<van-grid :column-num="5">
					<router-link to="/orders">
						<van-grid-item icon="cash-back-record" text="待付款"/>
					</router-link>
					
					<router-link to="/orders">
						<van-grid-item icon="logistics" text="待发货" />
					</router-link>
					
				    <router-link to="/orders">
						<van-grid-item icon="debit-pay" text="待收货" />
					</router-link>
					
					<router-link to="/orders">
						<van-grid-item icon="certificate" text="已完成" />
					</router-link>
					
					<router-link to="/afterSale">
						<van-grid-item icon="description" text="待评价" />
					</router-link>
				
				</van-grid>
			</div>
			
			<div class="me_function">
				<h4><van-cell title="更多服务"/></h4>
				<van-grid :column-num="4">
					<router-link to="/goldMall">
						<van-grid-item icon="vip-card-o" text="商城" />
					</router-link>
					<router-link to="/addressList">
						<van-grid-item icon="location" text="收货管理" />
					</router-link>
					<router-link to="/afterSale">
						<van-grid-item icon="shield-o" text="退款/售后" />
					</router-link>
					<router-link to="/flashSale">
						<van-grid-item icon="underway-o" text="秒杀" />
					</router-link>
					<router-link to="">
						<van-grid-item icon="cluster-o" text="我的推广" />
					</router-link>
					<router-link to="">
						<van-grid-item icon="friends-o" text="我的拼团" />
					</router-link>
					<router-link to="">
						<van-grid-item icon="cash-back-record" text="充值" />
					</router-link>
					<router-link to="/serviceChat">
						<van-grid-item icon="service" text="联系客服" />
					</router-link>
				</van-grid>
			</div>
			
			<div class="setting">
				<van-cell is-link title="设置" to=""/>
			</div>
		</div>
		
		<Navigation />
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation.vue'
	import TopBar from '@/components/TopBar.vue'
	export default{
		name: 'Me',
		data(){
			return {
				loginInfo: JSON.parse(window.sessionStorage.getItem('loginInfo')) || []
			}
		},
		components:{
			Navigation,TopBar
		}
	}
</script>

<style scoped lang="less">
	.me{
		margin-bottom: 65px;
		.left{
			float: left;
		}
		.me_background{
			width: 100%;
			height: 170px;
			background-image: url(../assets/Me/bgColor.png);
			position: fixed;
			top: 60px;
			.img_left{
				width: 60px;
				height: 60px;
				margin: 45px 10px;
				border-radius: 50px;
				border: 1px solid white;
			}
			.info{
				float: left;
				margin: 65px 0 0 9px;
				color: #fff;
				text-align: left;
				h4{
					margin-bottom: 2px;
					float: left;
					a{
						color: #fff;
					}
				}
			}
			.img_right{
				width: 25px;
				height: 25px;
				margin: 65px 20px;
			}
		}
		.me_content{
			@width: 95%;
			position: relative;
			margin-top: 180px;
			.van-cell__title{
				text-align: left;
			}
			.title{
				text-align: left;
				margin: 10px;
				padding-top: 6px;
			}
			.me_property{
				width: @width;
				height: 100px;
				margin: 0 auto;
				background-color: white;
				border-radius: 8px;
				li{
					width: 33%;
					margin-top: 8px;
				}
				span{
					color: red;
					font-size: 14px;
					margin: 0 2px;
				}
				p{
					font-size: 12px;
					color: #808080;
				}
			}
			.me_orders{
				margin: 33px auto;
				width: @width;
				height: 120px;
				background-color: white;
				border-radius: 8px;
				margin-top: 10px;
				margin-bottom: 18px;
				.van-grid {
					a{
						width: 20%;
						color: rgba(252, 116, 20, 1);
					}
				}
			}
			.me_function{
				margin: 0 10px 10px;
				width: @width;
				background-color: white;
				border-radius: 8px;
				a{
					width: 25%;
					color: #454545;
				}
			}
			.setting{
				width: @width;
				margin: 0 auto;
				border-radius: 8px;
			}
			
		}
	}
</style>

