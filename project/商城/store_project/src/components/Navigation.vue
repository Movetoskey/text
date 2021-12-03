<template>
	<div id="nav">
		<router-link to="/">
			<span class="iconfont icon-shouye"></span>
			<h4>首页</h4>
		</router-link>
		<router-link to="/about">
			<span class="iconfont icon-yingyong"></span>
			<h4>分类</h4>
		</router-link>
		<router-link to="/cart">
			<span class="iconfont icon-gouwuche"></span>
			<h4>购物车</h4>
		</router-link> 
		<router-link to="/me">
			<span class="iconfont icon-wode-wode"></span>
			<h4>我的</h4>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Navigation'
	}
</script>

<style scoped lang="less">
#nav {
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	padding-top: 10px;
	display: flex;
	justify-content: space-between;
	background-color: white;
	a {
		font-weight: bold;
		color: rgba(120, 120, 120, 1.0);
		width: 25%;
		h4{
			margin: 3px 0 10px 0;
			font-size: 14px;
			font-weight: 500;
		}
		&.router-link-exact-active {
			color: #fa6e06;
		}
	}
}
</style>
