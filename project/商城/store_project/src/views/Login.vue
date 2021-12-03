<template>
	<div class="login">
		<ChildTop>
			<h4>登录</h4>
		</ChildTop>
		
		<div class="me_background">
			<div class="me_content">
				<van-form validate-first @submit="onSubmit">
				  <!-- 通过 pattern 进行正则校验 -->
					<van-field
						v-model="userName"
						label="账号"
						placeholder="请输入手机号"
						left-icon="user-o"
						name="validator"
						:rules="[{ validator:validatorTel, message: '请输入有效手机号' }]"
					/>
					<!-- 通过 validator 进行函数校验 -->
					<van-field
						v-model="password"
						type="password"
						left-icon="bag-o"
						placeholder="请输入密码"
						label="密码"
						name="validator"
						:rules="[{ validator:validatorPass, message: '请输6-20位数字、字母或者下划线' }]"
					/>
					<div style="margin: 25px 16px;">
						<van-button block type="default" native-type="submit" color="rgba(252, 116, 20, 1)"><h3>登录</h3></van-button>
					</div>
				</van-form>
				
				<van-cell-group>
					<van-cell title="注册账号" value="忘记密码？" title-style="text-align: left;font-size:16px;font-weight:600;color:rgba(252, 116, 20, 1)" @click="goRegist()"/>
				</van-cell-group>
				
				<div class="otherLogin">
					<van-cell-group>
						<van-cell title="其他登录方式" title-style="color:rgba(252, 116, 20, 1)"/>
						<van-cell>
							<img src="../assets/Me/WeChat-icon.png" alt="">
							<img src="../assets/Me/weibo-icon.png" alt="">
							<img src="../assets/Me/message.png" alt="">
						</van-cell>
					</van-cell-group>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'
	import Vue from 'vue';
	import { Form } from 'vant';
	import { Field } from 'vant';
	import { Toast } from 'vant';
	
	Vue.use(Form);
	Vue.use(Field);
	export default{
		name: 'Login',
		data(){
			return{
				userName: '',
				password: '',
				flag1: false,
				flag2: false,
				registInfo: this.$store.state.arrRegist,
				loginInfo: this.$store.state.loginInfo,
				index: 0
			}
		},
		components:{
			ChildTop
		},
		methods: {
			// 校验函数返回 true 表示校验通过，false 表示不通过
			validatorTel(val) {
				if(val != ''){
					let pattern = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
					this.flag1 =  pattern.test(val)
					return this.flag1;
				}
			},
			validatorPass(val) {
				if(val != ''){
					let pattern =  /^[0-9a-zA-Z_]{6,20}$/
					this.flag2 =  pattern.test(val)
					return this.flag2;
				}
			},
			onFailed(errorInfo) {
				console.log('failed', errorInfo);
			},
			onSubmit() {
				if(this.flag1 && this.flag2){
					if(this.registInfo.length != 0){
						this.registInfo.forEach((item) => {
							// console.log(item)
							if((this.userName).indexOf(item.userName) != -1){
								this.index = this.registInfo.findIndex(item => item.userName == this.userName);
								console.log(this.index)
								if(this.password == this.registInfo[this.index].password){
									this.loginInfo = []
									this.$set(this.loginInfo,this.loginInfo.length,
										this.userName
									)
									//将登录信息存入sessionStorage缓存
									window.sessionStorage.setItem('loginInfo',JSON.stringify(this.loginInfo))
									Toast("登录成功")
									this.$router.go(-1)
								}else{
									Toast("密码错误，请重新输入")
									this.password = ''
								}
							}else{
								Toast("该用户不存在，请先进行注册")
							}
						})
					}else{
						Toast("该用户不存在，请先进行注册")
						this.$router.replace("/register")
					}
				}
			},
			goRegist(){
				this.$router.replace("/register")
			}
		},
	}
</script>

<style scoped lang="less">
	.login{
		.me_background{
			width: 100%;
			height: 200px;
			position: fixed;
			top: 60px;
			background: url(../assets/Me/bgColor.png) no-repeat;
			.me_content{
				width: 94%;
				margin: 0 auto;
				height: 330px;
				background-color: #fff;
				position: absolute;
				border-radius: 5px;
				left: 0;
				right: 0;
				top: 150px;
				box-shadow: 2px 3px 7px #b6b6b6;
				.van-form{
					padding: 0 10px;
					.van-field{
						border-bottom: 1px solid #dfdfdf;
						margin: 20px 0;
						height: 60px;
					}
				}
			}
			.otherLogin{
				position: absolute;
				bottom: -80px;
				left: 0;
				right: 0;
				padding: 10px 0;
				color: rgba(252, 116, 20, 1);
				.van-cell-group{
					.van-cell{
						background-color: #f7f7f7;
						.van-cell__value--alone{
							display: flex;
							justify-content: space-around;
							img{
								width: 20px;
							}
						}
					}
				}
			}
		}
	}
</style>
