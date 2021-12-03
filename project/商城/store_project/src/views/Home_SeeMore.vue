<template>
	<div class="seeMore">
		<ChildTop>
			<h4>更多爆品</h4>
		</ChildTop>
		<div class="main">
			<van-card v-for="(hotgood,index) in lists" :key="hotgood.id" tag="热卖" >
				<template #desc>
					<div class="van-multi-ellipsis--l2">
						<span class="desc">{{hotgood.desc}}</span>
					</div>
				</template>
				<template #price>
					<span class="price">{{hotgood.price |money}}</span>
				 </template>
				<template #thumb>
					<router-link :to="{name:'HotsDetail',params:{id:index}}">
						<img :src="hotgood.imgs" alt="">
					</router-link>
				</template>
				<template #num>
					<span>销量999+</span>
				 </template>
			</van-card>
			<van-divider :style="{ color: '#9b9b9b', borderColor: '#bdbdbd', padding: '0 16px' }">没有更多了</van-divider>
		</div>
	</div>
</template>

<script>
	import ChildTop from '@/components/ChildTop.vue'
	export default{
		name: 'FlashSale',
		data(){
			return{
				lists: this.$store.state.likeLists,
			}
		},
		components:{
			ChildTop
		}
	}
</script>

<style scoped lang="less">
	.seeMore{
		margin-top: 60px;
		.main{
			.van-card{
				width: 100%;
				.van-card__header{
					.van-card__thumb{
						a{
							width: 100%;
							img{
								width: 100%;
							}
						}
					}
					.van-card__content{
						text-align: left;
					}
				}
			}
		}
	}
</style>