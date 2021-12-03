<template>
  <div class="home">
	<TopBar>
		<h4>商城</h4>
	</TopBar>
	<div class="main">
		<div class="carouselImgs">
			<router-link to="/search">
				<van-search v-model="value" placeholder="请输入搜索关键词" shape="round" background="transparent"/>
			</router-link>
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			  <van-swipe-item>
				  <img src="../assets/home/carousel1.jpg" alt="">
			  </van-swipe-item>
			  <van-swipe-item>
				  <img src="../assets/home/carousel2.jpg" alt="">
			  </van-swipe-item>
			  <van-swipe-item>
				  <img src="../assets/home/carousel3.jpg" alt="">
			  </van-swipe-item>
			  <van-swipe-item>
				  <img src="../assets/home/carousel4.jpg" alt="">
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="middle_container">
			<van-grid>
				<router-link to="/flashSale">
					<van-grid-item icon="fire-o" text="一元秒杀"/>
				</router-link>
				<router-link to="/spellGroup">
					<van-grid-item icon="gem-o" text="拼团" />
				</router-link>
				<router-link to="/goldMall">
					<van-grid-item icon="refund-o" text="金币商城" />
				</router-link>
				<router-link to="/signIn">
					<van-grid-item icon="calendar-o" text="签到" />
				</router-link>
			</van-grid>
			<van-notice-bar
			  left-icon="volume-o"
			  background="#f5f5f5"
			  text="商城抽奖活动结果大公布: 恭喜用户177****1200秒杀荣耀20一部"/>
		</div>
		<div class="lists">
			<div class="activities">
				<h4>精彩活动</h4>
				<img src="../assets/home/activities.png" alt="">
			</div>
			<div class="hotgood">
				<div class="title">
					<h4>每日爆品</h4>
					<router-link to="/home_seeMore">
						<span>查看更多<van-icon name="arrow" /></span>
					</router-link>
				</div>
				<div class="content">						
					<van-card v-for="(hotgood,index) in hotgoods" :key="hotgood.id" tag="热卖" >
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
							<span>销量{{hotgood.num}}</span>
						 </template>
					</van-card>
				</div>
			</div>
			<div class="grand">
				<h4>进口大牌</h4>
				<div class="content">
					<van-swipe :loop="false" :width="160" :show-indicators="false">
					  <van-swipe-item v-for="grand in grands" :key="grand.id">
						  <img :src="grand.path" alt="">
						  <span>{{grand.title}}</span>
					  </van-swipe-item>
					</van-swipe>
				</div>
			</div>
			
			<div class="tabItem">
				<van-tabs v-model="active" color="rgba(255, 83, 60, 1)" sticky :offset-top="60">
					<van-tab title="精选" class="content">
						<van-card v-for="(hotgood,index) in tabItem1" :key="hotgood.id" tag="精选" >
							<template #desc>
								<div class="van-multi-ellipsis--l2">
									<span class="desc">{{hotgood.desc}}</span>
								</div>
							</template>
							<template #price>
								<span class="price">{{hotgood.price |money}}</span>
							 </template>
							<template #thumb>
								<router-link to="">
									<img :src="hotgood.imgs" alt="">
								</router-link>
							</template>
						</van-card>
					</van-tab>
					<van-tab title="美食"  class="content">
						<van-card v-for="(hotgood,index) in tabItem2" :key="hotgood.id" tag="美食" >
							<template #desc>
								<div class="van-multi-ellipsis--l2">
									<span class="desc">{{hotgood.desc}}</span>
								</div>
							</template>
							<template #price>
								<span class="price">{{hotgood.price |money}}</span>
							 </template>
							<template #thumb>
								<router-link to="">
									<img :src="hotgood.imgs" alt="">
								</router-link>
							</template>
						</van-card>
					</van-tab>
					<van-tab title="百货"  class="content">
						<van-card v-for="(hotgood,index) in tabItem3" :key="hotgood.id" tag="百货" >
							<template #desc>
								<div class="van-multi-ellipsis--l2">
									<span class="desc">{{hotgood.desc}}</span>
								</div>
							</template>
							<template #price>
								<span class="price">{{hotgood.price |money}}</span>
							 </template>
							<template #thumb>
								<router-link to="">
									<img :src="hotgood.imgs" alt="">
								</router-link>
							</template>
						</van-card>
					</van-tab>
				</van-tabs>
			</div>
			
			<van-divider :style="{ color: '#9b9b9b', borderColor: '#bdbdbd', padding: '0 16px' }">没有更多了</van-divider>
		</div>
	</div>
	<Navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import TopBar from '@/components/TopBar.vue'

import Vue from 'vue';
import { NoticeBar } from 'vant';
import { Card } from 'vant';
import { Divider } from 'vant';
import { List,Cell } from 'vant';


Vue.use(NoticeBar);
Vue.use(Card);
Vue.use(Divider);
Vue.use(List);
Vue.use(Cell);

//导入定义好的缓存文件
import Storage from '../Storage.js'
export default {
  name: 'Home',
  data(){
	return {
		value: '',
		hotgoods: this.$store.state.hotgoods,
		grands: this.$store.state.grands,
		likeLists: this.$store.state.likeLists,
		CartList: Storage.get(),
		active: 0,
		tabItem1:[
			{
				desc:'爱礼优 创意星空液体流沙宇航员钥匙扣挂件可爱卡通太空人桌面摆件男女个性潮流钥匙链学生书包挂件汽车 太空人 银色',
				price: 13.8,
				imgs: require('../assets/home/likeList1.jpg'),
			},
			{
				desc:'【赠300G资源 不改音响】汽车载U盘带歌曲2021抖音网络新歌网红流行音乐MP3听歌无损高音质优盘 推荐16G抖音款【1100首歌曲+100个MV】',
				price: 39.90,
				imgs: require('../assets/home/likeList8.jpg'),
			},
			{
				desc:'ORZ 304不锈钢S型挂钩 免钉免粘餐具挂钩 挂包钩挂衣钩金属钩子厨房厨具收纳挂钩 挂钩 4只(8挂钩) 304不锈钢',
				price: 21.9,
				imgs: require('../assets/home/likeList3.jpg'),
			}
		],
		tabItem2:[
			{
				desc:'【佟丽娅推荐】友臣菠萝果粒吐司500g /750g夹心乳酸菌小口袋面包三明治早餐自营零食整箱批发 菠萝果粒吐司500g/约12个',
				price: 17.90,
				imgs: require('../assets/home/likeList2.jpg'),
			},
			{
				desc:'桃壹佰水果罐头6罐整箱混合糖水新鲜黄桃杨梅菠萝橘子梨零食 方便速食罐头 童年回忆甜品饮料 【6罐装】黄桃6罐',
				price: 24.90,
				imgs: require('../assets/home/likeList4.jpg'),
			},
			{
				desc:'鸡蛋糕整箱传统老式手工老人家吃的早餐晚上解饿零食充饥夜宵散装 老式鸡蛋糕2斤【实惠装】',
				price: 22.90,
				imgs: require('../assets/home/goods3.jpg'),
			},
		],
		tabItem3: [
			{
				desc:'充电台灯学习床头灯护眼台灯宿舍灯充电灯夹子灯学生led小台灯卧室usb小夜灯夹式护眼灯寝室读写台风 充电夹子台灯+充电线+三色调光',
				price: 39.9,
				imgs: require('../assets/home/likeList5.jpg'),
			},
			{
				desc:'足疗沙发 电动沙发按摩床美甲美睫沙发躺椅泡脚特司悠采耳修脚床 钢木结构-天蓝科技布 USB遥控',
				price: 1398.90,
				imgs: require('../assets/home/likeList6.jpg'),
			},
			{
				desc:'新中式迎客松仿真盆景客厅酒店家居玄关装饰品样板间软装创意摆件 小号迎客松(拱桥型板) 雪山',
				price: 466.48,
				imgs: require('../assets/home/likeList7.jpg'),
			},
			{
				desc:'ORZ 304不锈钢S型挂钩 免钉免粘餐具挂钩 挂包钩挂衣钩金属钩子厨房厨具收纳挂钩 挂钩 4只(8挂钩) 304不锈钢',
				price: 21.9,
				imgs: require('../assets/home/likeList3.jpg'),
			}
		]
	}  
  },
	components: {
		Navigation,TopBar
	},
	methods:{
		//封装加入缓存
		addList(index){
			// console.log(this.likeLists[index])
			console.log(this.CartList)
			this.$set(this.CartList,this.CartList.length,{
				imgPath: this.likeLists[index].imgs,
				desc: this.likeLists[index].desc,
				oneprice: this.likeLists[index].price,
				num: this.likeLists[index].num,
				checked: true,
			})
		},
		addToCart(obj,index){
			// console.log(obj.imgs)
			if(this.CartList.length != 0){
				if(JSON.stringify(this.CartList).indexOf(JSON.stringify(obj.imgs)) == -1){
					//不存在的商品直接加入购物车
					this.addList(index)
					// console.log('新增加');
				}else{
					// console.log('改变数量');
					//当前缓存中的商品下标
					let goodIndex = this.CartList.findIndex(item => item.imgPath == obj.imgs);
					// console.log(goodIndex)
					//已存在的商品数量加1
					this.CartList[goodIndex].num+=1
				}
			}else{
				this.addList(index)
			}
			this.$toast.success('成功加入购物车');
		}
	},
	computed:{
		
	},
	watch:{
		CartList:{
			handler(val){
				Storage.set('CartList',val)
			},
			deep: true
		}
	}
}
</script>

<style scoped lang="less">
	.home{
		.flex-center(){
			display: flex;
			justify-content: space-between;
		}
		
		div.main{
			margin: 60px 0;
			div.carouselImgs{
				height: 195px;
				overflow-y: hidden;
				position: relative;
				.van-search{
					position: absolute;
					z-index: 99;
					left: 0;
					right: 0;
					top: 0;
					.van-search__content{
						background-color: #f4f4f4;
						opacity: 0.9;
						height: 32px;
					}
				}
				img{
					width: 100%;
				}
				.van-swipe{
					height: 200px;
				}
			}
			div.middle_container{
				.van-grid{
					.flex-center()
				}
				a{
					width: 90px;
					color: rgba(255, 83, 60, 1);
				}
				.van-notice-bar{
					margin: 0 4px;
					border-radius: 8px;
				}
			}
			div.lists{
				h4{
					margin: 10px 15px;
					text-align: left;
				}
				div.activities{
					img{
						width: 100%;
					}
				}
				div.hotgood{
					padding: 0 11px;
					.title{
						.flex-center();
						span{
							height: 40px;
							line-height: 40px;
							margin-right: 10px;
							font-size: 12px;
							color: rgba(80, 80, 80, 1);
						}
					}
					.van-card{
						margin-bottom: 2px;
					}
				}
				div.grand{
					img{
						width: 100%;
					}
					span{
						font-size: 13px;
					}
					.van-swipe-item{
						display: block;
						background-color: #fff;
						padding: 10px;
						box-sizing: border-box;
						margin-right: 2px;
					}
					.van-swipe{
						margin: 0 3px;
					}
				}
				.tabItem{
					margin-top: 10px;
					.van-tab__pane{
						padding: 0 10px;
					}
				}
				.content{
					.flex-center();
					flex-wrap: wrap;
					.van-list{
						.flex-center();
						justify-content: center;
						flex-wrap: wrap;
					}
					.van-card{
						width: 175px;
						margin-bottom: 10px;
						&:not(:first-child){
							margin-top: 0;
						}
						.desc{
							line-height: 20px;
						}
						.van-multi-ellipsis--l2{
							margin-bottom: 6px;
						}
						.price{
							color: rgba(212, 48, 48, 1);
							font-size: 15px;
						}
						img{
							width: 95%;
							padding: 0 2px;
						}
						.van-card__content{
							min-height: 50px;
						}
						.van-card__header{
							display: block;
						}
						.van-card__bottom {
							.flex-center();
						}
					}
				}
			}
		}
	}
	
</style>
