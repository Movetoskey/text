<template>
	<div class="topBar">
		<slot></slot>
		<div class="icon">
			<span class="iconfont icon-gengduo"></span>
			<span class="iconfont icon-icon_quanquan"></span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'TopBar'
	}
</script>

<style scoped lang="less">
	@height: 60px;
	.topBar{
		height: @height;
		z-index: 999;
		width: 100%;
		background-color: #fa6e06;
		color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		h4{
			height: 35px;
			margin: 0;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-30%);
			color: #fff;
		}
		.icon{
			position: absolute;
			top: 50%;
			z-index: 999;
			transform: translateY(-50%);
			right: 10px;
			padding: 1px 7px;
			border: 1px solid #cdcdcd;
			border-radius: 14px;
			span{
				margin: 0 2px;
				&.icon-gengduo::after{
					content: '';
					width: 1px;
					height: 12px;
					top: 50%;
					transform: translateY(-50%);
					background-color: #cdcdcd;
					position: absolute;
					margin-left: 2px;
				}
			}
		}
	}
</style>
