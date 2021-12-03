<template>
	<div class="childTop">
		<div class="left">
			<van-icon name="arrow-left" @click="goback()"/>
			<slot></slot>
		</div>

		<TopBar />
	</div>
</template>

<script>
	import TopBar from '@/components/TopBar.vue'
	
	import Vue from 'vue';
	import { NavBar } from 'vant';
	
	Vue.use(NavBar);
	export default{
		name: 'ChildTop',
		components:{
			TopBar
		},
		methods:{
			goback() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped" lang='less'>
	.van-nav-bar{
		height: 100%;
	}
	@height: 60px;
	.childTop{
		display: flex;
		height: @height;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 99;
		div.left{
			z-index: 9999;
			display: flex;
			align-items: center;
			line-height: @height;
			color: #fff;
			h4{
				text-align: center;
				margin: 0;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
</style>
