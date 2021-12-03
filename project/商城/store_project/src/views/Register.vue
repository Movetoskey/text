<template>
	<div class="login">
		<ChildTop>
			<h4>注册</h4>
		</ChildTop>
		
		<div class="me_background">
			<img src="../assets/Me/unregist.png" alt="" class="registHeader">
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
					<van-field
						v-model="repassword"
						type="password"
						left-icon="bag-o"
						placeholder="请再一次确认密码"
						label="重新输入密码"
						name="validator"
						:rules="[{ validator:validatorRePass, message: '请再次确认密码' }]"
					/>
					<div style="margin: 25px 16px;">
						<van-button block type="default" native-type="submit" color="rgba(252, 116, 20, 1)"><h3>进行注册</h3></van-button>
					</div>
				</van-form>
				
				<van-cell-group>
					<van-cell title="已有账号" value="去登录" title-style="text-align: left;font-size:16px;font-weight:600;color:rgba(252, 116, 20, 1)" @click="goLogin()"/>
				</van-cell-group>
				
				<div class="otherLogin">
					<van-cell-group>
						<van-cell title="注册即代表同意用户协议" title-style="color:rgba(252, 116, 20, 1)"/>
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
				repassword: '',
				flag1: false,
				flag2: false,
				flag3: false,
				arrRegist: this.$store.state.arrRegist
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
					// console.log(this.flag1)
					return this.flag1;
				}
			},
			validatorPass(val) {
				if(val != ''){
					let pattern =  /^[0-9a-zA-Z_]{6,20}$/
					this.flag2 =  pattern.test(val)
					// console.log(this.flag2)
					return this.flag2;
				}
			},
			validatorRePass(val){
				if(val != ''){
					if(val == this.password){
						this.flag3 = true
						// console.log(11111)
						return this.flag3
					}else{
						return false
					}
				}
			},
			onFailed(errorInfo) {
				console.log('failed', errorInfo);
			},
			addInfo(){
				this.$set(this.arrRegist,this.arrRegist.length,{
					userName: this.userName,
					password: this.password
				})
				//将注册信息存入缓存
				window.localStorage.setItem('registerInfo',JSON.stringify(this.arrRegist))
				Toast('注册成功，请去登录')
				this.$router.replace("/login")
			},
			onSubmit(values) {
				if(this.flag1 && this.flag2 && this.flag3){
					if(this.arrRegist.length != 0){
						this.arrRegist.forEach((item) => {
							// console.log(item.userName)
							if((this.userName).indexOf(item.userName) == -1){
								this.addInfo()
							}else{
								Toast("该用户已存在，请直接登录")
								this.userName = ''
								this.password = ''
								this.repassword = ''
							}
						})
					}else{
						this.addInfo()
					}
				}
			},
			goLogin(){
				this.$router.replace("/login")
			}
		},
	}
</script>

<style scoped lang="less">
	.login{
		.registHeader{
			width: 80px;
			border-radius: 50%;
			margin-top: 40px;
		}
		.me_background{
			width: 100%;
			height: 200px;
			position: fixed;
			top: 60px;
			background: url(../assets/Me/bgColor.png) no-repeat;
			.me_content{
				width: 94%;
				margin: 0 auto;
				height: 350px;
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
						margin: 10px 0;
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
						background-color: #f5f5f5;
					}
				}
			}
		}
	}
</style>
