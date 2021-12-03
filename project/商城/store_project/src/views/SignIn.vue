<template>
	<div class="signIn">
		<ChildTop>
			<h4>签到</h4>
		</ChildTop>
		
		<div class="signin_background">
			<div class="background_content">
				<img src="../assets/Me/unregist.png" class="left img_left"/>
				<div class="info">
					<h2>xxx</h2>
					<span>积分:{{score}}</span>
				</div>
				<div class="signin_background_right right">
					<p>活动规则</p>
					<p>我的奖品</p>
				</div>
			</div>
		</div>
		
		<div class="signin_middle">
			<h3 class="info"><span>{{daynum}}</span>天</h3>
			<div class="signin_button" @click="Signin()" :class="{show:!isShow}">签到</div>
			<div class="signin_button" @click="Signin()" :class="{show:isShow}">今日已签到</div>
		</div>
		<div class="signin_calendar">
			<van-calendar
			  title="签到记录"
			  :poppable="false"
			  :show-confirm="false"
			  :style="{ height: '500px' }"
			  color="#ff8226"
			/>
		</div>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'
	import Vue from 'vue';
	import { Calendar } from 'vant';
	import { Toast } from 'vant';
	
	Vue.use(Calendar);
	Vue.use(Toast)
	export default{
		name: 'SignIn',
		data(){
			return{
				daynum:0,
				score:0,
				isShow: true,
			}
		},
		components:{
			ChildTop
		},
		methods:{
			Signin(){
				this.daynum = 1;
				this.score = 15
				Toast('已签到成功！');
				console.log(this.daynum);
				if(this.daynum = 1){
					this.isShow = false;
					console.log("121")
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.signIn{
		margin-top: 60px;
		.left{
			float: left;
		}
		.right{
			float: right;
		}
		.show{
			display: none;
		}
		.signin_background{
			width: 100%;
			height: 140px;
			background-image: url(../assets/Me/bgColor.png);
			position: relative;
			.background_content{
				.img_left{
					width: 80px;
					height: 80px;
					margin: 35px 10px;
					border-radius: 50px;
					border: 1px solid white;
				}
				.info{
					width: 26%;
					margin: 14% 0;
					float: left;
					color: white;
				}
				.signin_background_right{
					margin: 44px 20px;
					p{
						width: 80px;
						height: 20px;
						border-radius: 10px;
						color: #fafafa;
						background-color: #fabab2;
						padding: 5px;
						margin: 4px 0;
					}
				}
			}
		}
		.signin_middle{
			position: relative;
			top: 15px;
			background: white;
			width: 98%;
			padding: 10px 0;
			border-radius: 10px;
			margin: 0 auto;
			height: 80px;
			line-height: 23px;
			color: #ff8226;
			text-align: center;
			.signin_button{
				width: 150px;
				background-color: #ff8226;
				border-radius: 20px;
				color: white;
				margin: 0 auto;
				height: 42px;
				line-height: 42px;
				font-weight: 600;
			}
			h3{
				margin-bottom: 10px;
				span{
					position: absolute;
					left: 43%;
				}
			}
		}
		.signin_calendar{
			width: 100%;
			margin: 10px auto;
			position: relative;
			top: 10px;
			height: 515px;
		}
	}
</style>
