<template>
	<div class="goldMall">
		<ChildTop>
			<h4>金币商城</h4>
		</ChildTop>
		<div class="title">
			<div class="title_middle">
				<img src="../assets/Me/point.png"/>
			</div>
			<div class="title_bottom">
				<van-row>
					<router-link to="">
						<van-col span="8">
							<p>0</p>
							<p>余额</p>
						</van-col> 
					</router-link>
				    <router-link to="">
						<van-col span="8" class="title_bottom_m">
							<p>0</p>
							<p>积分</p>
						</van-col>
					</router-link>
				   <router-link to="">
					   <van-col span="8">
						   <p>0</p>
						   <p>金币</p>
					   </van-col>
				   </router-link>
				</van-row>
			</div>
		</div>
		
		<div class="middle">
			<van-row type="flex" justify="center">
				<router-link to="/signIn">
					<van-col span="11">
					  <img src="../assets/Me/d1.png" class="left"/>
					  <h4 class="left">签到活动 <van-icon name="arrow" /></h4>
					</van-col>		
				</router-link>
				
				<router-link to="">
					<van-col span="11">
						<img src="../assets/Me/d2.png" class="left"/>
						<h4 class="left">抽奖活动 <van-icon name="arrow" /></h4>
					</van-col>
				</router-link>
			</van-row>
		</div>
		
		<div class="content">
			<ul>
				<li v-for="good,index in goods" :key='index'>
					<img :src="good.imgs"/>
					<h4>{{good.desc}}</h4>
					<p><span>{{good.points}}</span>积分<span>{{good.other}}</span></p>
					<p>剩余{{good.num}}件</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'
	export default{
		name: 'GoldMall',
		data(){
			return{
				goods: this.$store.state.hotgoods,
			}
		},
		components:{
			ChildTop
		}
	}
</script>

<style scoped lang="less">
	.goldMall{
		margin-top: 60px;
		.left{
			float: left;
		}
		.title{
			height: 160px;
			background-image: url(../assets/Me/bgColor.png);
			color: white;
			text-align: center;
			span{
				margin: 3px 0 3px 4px;
			}
			.title_middle{
				height: 60px;
				width: 120px;
				line-height: 55px;
				padding: 27px 0 17px;
				margin: 0 auto;
				img{
					width: 50px;
					margin-right: 10px;
				}
			}
			.title_bottom {
				.van-col{
					color: white;
				}
				.title_bottom_m{
					border-left: 1px solid lightgray;
					border-right: 1px solid lightgray;
				}
			}
		}
		.middle{
			width: 97%;
			height: 80px;
			background-color: white;
			margin: 0 auto;
			margin-top: 10px;
			line-height: 80px;
			border-radius: 5px;
			.van-col--11{
				width: 170px;
				color: #000000;
			}
			img{
				width: 40px;
				height: 40px;
				margin: 20px 10px 0 20px;
			}
			
		}
		.content{
			width: 100%;
			border-radius: 3px;
			margin: 0 auto;
			margin-top: 10px;
			ul{
				width: 100%;
				li{
					width: 48%;
					height: 215px;
					float: left;
					background-color: white;
					margin: 0 3px 8px;
					img{
						height: 110px;
						width: 130px;
						margin-top: 11px;
					}
					h4{
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						margin: 9px 0 10px 10px;
						text-align: left;
						color: #000000;
					}
					p{
						font-size: 10px;
						margin: 2px 0 0 10px;
						text-align: left;
						color: grey;
						span{
							color: red;
							font-size: 17px;
							left: 4px;
							margin-right: 2px;
						}
					}
				}
			}
		}
	}
</style>

