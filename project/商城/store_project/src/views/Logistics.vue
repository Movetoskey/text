<template>
	<div class="logistics">
		<ChildTop>
			<h4>物流详情</h4>
		</ChildTop>
		<div class="main">
			<div class="main_order">
				<van-cell-group>
					<van-cell>
						<template #default>
							<span><em>运单号: </em>3214435462435454</span>
						</template>
					</van-cell>
					<van-cell>
						<template #default>
							<span><em>承运快递: </em>菜鸟</span>
						</template>
					</van-cell>
					<van-cell>
						<template #default>
							<span><em>预计送达: </em> 2021-11-11</span>
						</template>
					</van-cell>
				</van-cell-group>
			</div>
			<van-steps direction="vertical" :active="0">
			  <van-step>
			    <h3>已下单，等待商家发货</h3>
				<p>2021-10-16 14:00:23</p>
			  </van-step>
			  <van-step>
			    <h3>系统已确认，等待发货</h3>
			    <p>2021-10-16 10:40:10</p>
			  </van-step>
			  <van-step>
			    <h3>您提交了订单，系统等待确定</h3>
			    <p>2021-10-16 09:30:12</p>
			  </van-step>
			</van-steps>
		</div>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'
	import Vue from 'vue';
	import { Step, Steps } from 'vant';
	
	Vue.use(Step);
	Vue.use(Steps);
	
	export default{
		name: 'Logistics',
		data(){
			return{
				
			}
		},
		components:{
			ChildTop
		},
	}
</script>

<style scoped lang="less">
	.logistics{
		margin-top: 60px;
		.main_order{
			margin: 10px 0;
			.van-cell{
				text-align: left;
				span{
					em{
						font-style: normal;
						font-weight: 700;
						margin-right: 10px;
					}
				}
			}
		}
		.van-step--vertical{
			text-align: left;
			.van-step__title{
				h3{
					font-size: 14px;
					font-weight: 400;
				}
				p{
					font-size: 12px;
				}
			}
		}
	}
</style>

