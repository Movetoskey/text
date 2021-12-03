<template>
	<div class="hotsDetail">
		<ChildTop>
			<h4>商品详情</h4>
		</ChildTop>
		<div class="main">
			<van-tabs v-model="activeName" sticky :offset-top="60">
				<van-tab title="商品" name="main1" class="main1">
					<div class="content">
						<div class="swipImg">
							<van-swipe @change="onChange">
								<van-swipe-item v-for="sImgs in hotsDetails.otherImgs">
									<img :src="sImgs" />
								</van-swipe-item>
								<template #indicator>
									<div class="custom-indicator">{{ current + 1 }}/4</div>
								</template>
							</van-swipe>
						</div>
						<div class="goodDesc">
							<div class="desc">
								<div class="van-multi-ellipsis--l2">
									<p>{{hotsDetails.desc}}</p>
								</div>
								<van-cell @click="showShare = true" class="share iconfont icon-fenxiang"/>
								<van-share-sheet
								  v-model="showShare"
								  title="立即分享给好友"
								  :options="options"
								  @select="onSelect"/>
							</div>
							<div class="info">
								<p class="price">{{hotsDetails.price | money}}</p>
								<p class="other">
									<span>快递：0.00</span>
									<span>月销：{{hotsDetails.num}}</span>
									<span>{{hotsDetails.address}}</span>
								</p>
							</div>
						</div>
						
						<div class="goodsSelect">
							<div>
								<span>产品参数：</span>
								<span class="iconfont icon-gengduo"></span>
							</div>
							<div>
								<span>配送：</span>
								<span>商家配送</span>
								<span class="iconfont icon-gengduo"></span>
							</div>
						</div>
						
						<div class="shopInfo">
							<div>
								<van-cell :title="hotsDetails.title" size="large">
									<template #label>
										<img :src="hotsDetails.imgs" alt="">
									</template>
								</van-cell>
								<van-grid>
									<van-grid-item>
										<template #default>
											<p>212</p>
											<span>全部宝贝</span>
										</template>
									</van-grid-item>
									<van-grid-item>
										<template #default>
											<p>12</p>
											<span>上新宝贝</span>
										</template>
									</van-grid-item>
									<van-grid-item>
										<template #default>
											<p>66.1万</p>
											<span>关注人数</span>
										</template>
									</van-grid-item>
									<van-grid-item>
										<template #default>
											<span>宝贝描述：4.8</span>
											<span>卖家服务：4.5</span>
											<span>物流服务：4.3</span>
										</template>
									</van-grid-item>
								</van-grid>
							</div>
						</div>
						
						<div class="main1_bottom">
							<van-goods-action>
							  <van-goods-action-icon icon="chat-o" text="客服" to="/serviceChat" color="red"/>
							  <van-goods-action-icon icon="shop-o" text="店铺" color="red"/>
							  <van-goods-action-icon icon="cart-o" text="购物车" to="/cart" color="red"/>
							  <van-goods-action-button type="warning" text="加入购物车" @click="onClickCart()"/>
							  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton()"/>
							</van-goods-action>
						</div>
						
						<div class="selectList">
							<van-action-sheet v-model="show" title="选择商品">
								<div class="list">
									<div class="head">
										<img :src="hotsDetails.imgs" alt="">
										<span>
											<p class="van-multi-ellipsis--l2">{{hotsDetails.desc}}</p>
											<p class="price">{{hotsDetails.price | money}}</p>
										</span>
									</div>
									<div class="parameter">
										<div>
											<h5>包装</h5>
										</div>
										<div>
											<h5>数量</h5>
											<van-stepper v-model="selectValue" input-width="40px"  button-size="22px" />
										</div>
									</div>
									<van-button type="warning" class="btn" @click="addToCart()">加入购物车</van-button>
									
								</div>
							</van-action-sheet>
						</div>
						<div class="selectList BuyList">
							<van-action-sheet v-model="buyshow" title="选择商品">
								<div class="list">
									<div class="head">
										<img :src="hotsDetails.imgs" alt="">
										<span>
											<p class="van-multi-ellipsis--l2">{{hotsDetails.desc}}</p>
											<p class="price">{{hotsDetails.price | money}}</p>
										</span>
									</div>
									<div class="parameter">
										<div>
											<h5>包装</h5>
										</div>
										<div>
											<h5>数量</h5>
											<van-stepper v-model="selectValue" input-width="40px"  button-size="22px" />
										</div>
									</div>
									<van-button type="warning" class="btn" @click="buyNow()">立即购买</van-button>
									
								</div>
							</van-action-sheet>
						</div>
					</div>
				</van-tab>
				<van-tab title="详情" name="main2" class="main2">
					<div class="content">
						<div class="content1 con">
							<p class="title">优惠券</p>
							<van-swipe :loop="false" :width="220" :show-indicators="false">
								<van-swipe-item>
									<div class="left">
										<p>
											<span>￥5</span>
											<em>满99元使用</em>
										</p>
										<p>有效期 2021.10.12-2021.11.11</p>
									</div>
									<div class="right">领取</div>
								</van-swipe-item>
								<van-swipe-item>
									<div class="left">
										<p>
											<span>￥5</span>
											<em>满99元使用</em>
										</p>
										<p>有效期 2021.10.12-2021.11.11</p>
									</div>
									<div class="right">领取</div>
								</van-swipe-item>
								<van-swipe-item>
									<div class="left">
										<p>
											<span>￥5</span>
											<em>满99元使用</em>
										</p>
										<p>有效期 2021.10.12-2021.11.11</p>
									</div>
									<div class="right">领取</div>
								</van-swipe-item>
							</van-swipe>
						</div>
						<div class="content2 con">
							<p class="title">图片详情</p>
							<span v-for="sImgs in hotsDetails.otherImgs">
								<img :src="sImgs" />
							</span>
						</div>
					</div>
				</van-tab>
				<van-tab title="评价" name="main3" class="main3">
					<div class="head">
						<van-tabs type="card" color="#eea004" sticky :offset-top="104" title-active-color="#fff" title-inactive-color="#686868">
							<van-tab title="全部(4)">
								<div class="info" v-for="discussList in discussList">
									<p class="name">
										{{discussList.name}}
									</p>
									<p class="desc">
										{{discussList.desc}}
									</p>
									<div class="pics">
										<span v-for="imgs in discussList.img">
											<img :src="imgs" alt="">
										</span>
									</div>
									<p class="time">
										<span>{{discussList.time}}</span>
										<span>{{discussList.color}}</span>
										<span>{{discussList.service}}</span>
									</p>
								</div>
							</van-tab>
							<van-tab title="有图评价(2)">
								<div class="info" v-for="imgList in imgList">
									<p class="name">
										{{imgList.name}}
									</p>
									<p class="desc">
										{{imgList.desc}}
									</p>
									<div class="pics">
										<span v-for="imgs in imgList.img">
											<img :src="imgs" alt="">
										</span>
									</div>
									<p class="time">
										<span>{{imgList.time}}</span>
										<span>{{imgList.color}}</span>
										<span>{{imgList.service}}</span>
									</p>
								</div>
							</van-tab>
							<van-tab title="差评(2)">
								<div class="info" v-for="appendList in appendList">
									<p class="name">
										{{appendList.name}}
									</p>
									<p class="desc">
										{{appendList.desc}}
									</p>
									<div class="pics">
										<span v-for="imgs in appendList.img">
											<img :src="imgs" alt="">
										</span>
									</div>
									<p class="time">
										<span>{{appendList.time}}</span>
										<span>{{appendList.color}}</span>
										<span>{{appendList.service}}</span>
									</p>
								</div>
							</van-tab>
						</van-tabs>
					</div>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import Storage from '../Storage.js'
	import ChildTop from '@/components/ChildTop.vue'
	import Vue from 'vue';
	
	import { Lazyload } from 'vant';
	import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
	import { Tag } from 'vant';
	import { ShareSheet } from 'vant';
	import { Sku } from 'vant';
	import { Toast } from 'vant';
	import { Stepper } from 'vant';
	
	Vue.use(Stepper);
	Vue.use(Sku);
	Vue.use(ShareSheet);
	Vue.use(Tag);
	Vue.use(GoodsAction);
	Vue.use(GoodsActionButton);
	Vue.use(GoodsActionIcon);
	Vue.use(Lazyload);
	export default{
		name: 'HotsDetail',
		data(){
			return{
				hotsDetails: this.$store.state.hotgoods[this.$route.params.id],
				swipImgs: this.$store.state.hotgoods[this.$route.params.id].otherImgs,
				current: 0,
				activeName: 'main1',
				showShare: false,
				show: false,
				buyshow: false,
				options: [
					[
						{ name: '微信', icon: 'wechat' },
						{ name: '朋友圈', icon: 'wechat-moments' },
						{ name: '微博', icon: 'weibo' },
						{ name: 'QQ', icon: 'qq' },
					],
					[
						{ name: '复制链接', icon: 'link' },
						{ name: '分享海报', icon: 'poster' },
						{ name: '二维码', icon: 'qrcode' },
						{ name: '小程序码', icon: 'weapp-qrcode' },
					],
				],
				selectValue: 1,
				CartList: this.$store.state.CartList,
				discussList:[
					{
						name: 't***1',
						desc: '东西很好，我很喜欢',
						time: '2021.08.21',
						color: '颜色分类：高级灰',
						service: '物流快，满意',
						img: [
							require('@/assets/goodsDetail/img.png'),
							require('@/assets/goodsDetail/img.png'),
						]
					},
					{
						name: 'ds***9',
						desc: '东西一点都不喜欢',
						time: '2021.08.11',
						color: '颜色分类：高级灰',
						service: '服务态度很好，满意',
						img: [
							require('@/assets/goodsDetail/img.png'),
							require('@/assets/goodsDetail/img.png'),
						]
					},
					{
						name: 't***2',
						desc: '东西一般吧，不是很喜欢，物流很慢',
						time: '2021.02.11',
						color: '颜色分类：高级灰',
						service: '不满意',
						img: []
					},
					{
						name: 't***3',
						desc: '宝贝收到了 和卖家描述的一样 质量不错',
						time: '2021.01.18',
						color: '颜色分类：高级灰',
						service: '比较满意',
						img: [
							require('@/assets/goodsDetail/img.png'),
							require('@/assets/goodsDetail/img.png'),
						]
					}
				],
				appendList:[
					{
						name: 'ds***9',
						desc: '东西一点都不喜欢',
						time: '2021.08.11',
						color: '颜色分类：高级灰',
						service: '服务态度很好，满意',
						img: [
							require('@/assets/goodsDetail/img.png'),
							require('@/assets/goodsDetail/img.png'),
						]
					},
					{
						name: 'cp***2',
						desc: '东西一般吧，不是很喜欢，物流很慢',
						time: '2021.02.11',
						color: '颜色分类：高级灰',
						service: '不满意',
						img: []
					}
				],
				imgList:[
					{
						name: 'r***1',
						desc: '东西很好，我很喜欢',
						time: '2021.08.21',
						color: '颜色分类：高级灰',
						service: '服务态度很好，满意',
						img: [
							require('@/assets/goodsDetail/img.png'),
							require('@/assets/goodsDetail/img.png'),
						]
					},
					{
						name: 'r***3',
						desc: '宝贝收到了 和卖家描述的一样 质量不错 虽然稍微有点小瑕疵，不过自己用没问呢提...',
						time: '2021.01.18',
						color: '颜色分类：高级灰',
						service: '比较满意',
						img: [
							require('@/assets/goodsDetail/img.png'),
							require('@/assets/goodsDetail/img.png'),
						]
					}
				]
			}
		},
		components:{
			ChildTop
		},
		methods:{
			onChange(index) {
				this.current = index;
			},
			onClickCart() {
				this.show = true
			},
			onClickButton() {
				this.buyshow = true
			},
			onSelect(option) {
				Toast(option.name);
				this.showShare = false;
			},
			//加入购物车
			addList(){
				console.log(this.hotsDetails)
				this.$set(this.CartList,this.CartList.length,{
					imgPath: this.hotsDetails.imgs,
					desc: this.hotsDetails.desc,
					oneprice: this.hotsDetails.price,
					num: this.selectValue,
					checked: true,
				})
			},
			addToCart(){
				if(this.CartList.length != 0){
					if(JSON.stringify(this.CartList).indexOf(JSON.stringify(this.hotsDetails.imgs)) == -1){
						//不存在的商品直接加入购物车
						this.addList()
					}else{
						//当前缓存中的商品下标
						let goodIndex = this.CartList.findIndex(item => item.imgPath == this.hotsDetails.imgs);
						this.CartList[goodIndex].num+=this.selectValue
					}
				}else{
					this.addList()
				}
				Toast.success('成功加入购物车');
				this.show = false
			},
			
			//立即购买
			buyNow(){
				this.$store.state.selectGoods = []
				this.$set(this.$store.state.selectGoods,this.$store.state.selectGoods.length,{
					imgPath: this.hotsDetails.imgs,
					desc: this.hotsDetails.desc,
					oneprice: this.hotsDetails.price,
					num: this.selectValue,
				})
				this.$router.push('/buyNow')
			}
		},
		watch:{
			//购物车内所有的商品
			CartList:{
				handler(val){
					Storage.set('CartList',val)
				},
				deep: true
			},
		},
	}
</script>

<style scoped lang="less">
	.hotsDetail{
		.main{
			margin: 60px 0;
			.main1{
				.content{
					.swipImg{
						.custom-indicator {
							position: absolute;
							color: #fff;
							right: 5px;
							bottom: 5px;
							padding: 2px 5px;
							font-size: 12px;
							background: rgba(0, 0, 0, 0.1);
						}
						img{
							width: 100%;
							height: 340px;
						}
					}
					.goodDesc{
						background-color: #fff;
						padding: 0 16px 10px;
						.desc{
							display: flex;
							justify-content: space-around;
							align-items: center;
							.van-multi-ellipsis--l2{
								height: 35px;
							}
							p{
								font-size: 14px;
								text-align: left;
							}
							.share{
								width: 50px;
								background-color: transparent;
								font-size: 26px;
								margin-top: 10px;
							}
						}
						.info{
							p{
								text-align: left;
								font-size: 14px;
								margin: 4px 0;
								color: dimgray;
								&.price{
									color: #F06431;
									font-size: 18px;
								}
								&.other{
									display: flex;
									justify-content: space-between;
								}
							}
						}
					}
					.main1_bottom{
						.van-goods-action{
							z-index: 999;
						}
					}
					
					.goodsSelect{
						margin-top: 10px;
						background-color: #fff;
						padding: 0 10px;
						div{
							display: flex;
							height: 35px;
							justify-content: space-between;
							border-bottom: 1px solid #eee;
							span{
								line-height: 35px;
								font-size: 14px;
							}
						}
					}
					
					.shopInfo{
						background-color: #fff;
						margin-top: 10px;
						img{
							width: 40px;
							margin: 0 4px;
						}
						.van-cell__title{
							display: flex;
							flex-direction: row-reverse;
							justify-content: left;
							align-items: center;
						}
						.van-grid{
							p{
								margin-bottom: 0;
								font-size: 14px;
							}
							span{
								font-size: 12px;
								color: #959595;
							}
						}
					}
					.selectList{
						.list{
							padding: 16px 16px 30px;
							.head{
								display: flex;
								justify-content: space-between;
								img{
									width: 80px;
								}
								span{
									height: 45px;
									text-align: left;
									line-height: 25px;
									padding: 0 10px;
									.price{
										line-height: 45px;
										color: red;
									}
								}
							}
							.parameter{
								text-align: left;
								margin-top: 10px;
								div{
									display: flex;
									justify-content: space-between;
									margin-top: 5px;
								}
							}
							.btn{
								background-color: #e6640d;
								width: 70%;
								margin: 30px auto 0;
								color: #fff;
								border-radius: 10px;
							}
						}
					}
				}
			}
			
			.main2{
				.content{
					.title{
						margin: 4px;
					}
					.con{
						text-align: left;
						background-color: #fff;
						padding: 10px;
						margin-top: 3px;
					}
					.content1{
						&::v-deep .van-swipe-item{
							text-align: center;
						}
						.van-swipe-item{
							display: flex;
							color: #fff;
							line-height: 30px;
							font-size: 14px;
							margin: 2px 5px;
							.left{
								width: 100%;
								background-color: #ffaa03;
								p{
									font-size: 12px;
									height: 20px;
									padding: 5px;
									display: flex;
									span{
										font-size: 18px;
										margin-right: 10px;
									}
									em{
										font-style: normal;
									}
								}
							}
							.right{
								background-color: #f89e02;
							}
						}
					}
					.content2{
						span{
							display: inline-block;
							text-align: center;
							width: 100%;
							img{
								width: 100%;
							}
						}
					}
				}
			}
			.main3{
				margin-bottom: 10px;
				.head{
					&::v-deep .van-tabs__wrap{
						background-color: #fff;
						padding-top: 10px;
					}
					.info{
						text-align: left;
						padding: 10px 20px;
						background-color: #fff;
						margin-bottom: 10px;
						line-height: 20px;
						.desc{
							font-size: 14px;
						}
						.pics{
							margin: 4px 0;
							span{
								display: inline-block;
								width: 70px;
								margin-right: 4px;
								img{
									width: 100%;
								}
							}
						}
						.time{
							font-size: 12px;
							span{
								margin-right: 10px;
							}
						}
					}
				}
			}
		}
	}
</style>
