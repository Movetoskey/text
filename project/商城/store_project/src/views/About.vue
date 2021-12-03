<template>
	<div class="about">
		<TopBar>
			<h4>分类</h4>
		</TopBar>
		<div class="main">
			<div class="search">
				<van-search
				  v-model="value"
				  placeholder="请输入搜索关键词"
				  input-align="center"
				/>
			</div>
			<div class="content">
				<div class="content_main">
					<van-row>
						<!--类别 -->
						<van-col span="19" class="content_main_right">
							<van-index-bar :index-list="indexList" class="leftBar" :sticky-offset-top="105">
								<van-grid :column-num="3" v-for="list in lists">
									<van-index-anchor :index="list.type" class="contentNav"/>
									<van-grid-item v-for="good in list.item" :key="good.id" text="文字">
										<van-image :src="good.img"/>
										<van-cell :title="good.title" />
									</van-grid-item>
								</van-grid>
							</van-index-bar>
						</van-col>
					</van-row>	
				</div>
			</div>
		</div>
			
		<Navigation />
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation.vue'
	import TopBar from '@/components/TopBar.vue'
	
	import Vue from 'vue';
	import { Tab, Tabs } from 'vant';
	import { IndexBar, IndexAnchor } from 'vant';
	
	Vue.use(IndexBar);
	Vue.use(IndexAnchor);
	Vue.use(Tab);
	Vue.use(Tabs);
	export default{
		name: 'About',
		data(){
			return {
				value:'',
				indexList: ['热卖','家居','手机','零食','电脑','智能','音响','生活'],
				lists:[
					{
						type:'热卖',
						item:[
							{
								title:'潮流T恤',
								img:require('@/assets/about/list1.1.jpg'),
							},
							{
								title:'茶吧机',
								img:require('@/assets/about/list1.2.jpg'),
							},
							{
								title:'转接口',
								img:require('@/assets/about/list1.3.jpg'),
							},
							{
								title:'项链',
								img:require('@/assets/about/list1.4.jpg'),
							},
							{
								title:'口红',
								img:require('@/assets/about/list1.5.jpg'),
							},
							{
								title:'钱包',
								img:require('@/assets/about/list1.6.jpg'),
							}
						]
					},
					{
						type:'家居',
						item:[
							{
								title:'床品',
								img:require('@/assets/about/list2.1.jpg'),
							},
							{
								title:'马桶垫',
								img:require('@/assets/about/list2.2.jpg'),
							},
							{
								title:'床头灯',
								img:require('@/assets/about/list2.3.jpg'),
							},
							{
								title:'无痕挂钩',
								img:require('@/assets/about/list2.4.jpg'),
							}
						]
					},
					{
						type:'手机',
						item:[
							{
								title:'华为',
								img:require('@/assets/about/list3.1.jpg'),
							},
							{
								title:'小米',
								img:require('@/assets/about/list3.2.jpg'),
							},
							{
								title:'vivo',
								img:require('@/assets/about/list3.3.jpg'),
							},
							{
								title:'OPPO',
								img:require('@/assets/about/list3.4.jpg'),
							},
							{
								title:'宜家',
								img:require('@/assets/about/list3.5.jpg'),
							}
						]
					},
					{
						type:'零食',
						item:[
							{
								title:'肉类',
								img:require('@/assets/about/list4.1.jpg'),
							},
							{
								title:'面包',
								img:require('@/assets/about/list4.2.jpg'),
							},
							{
								title:'钙片',
								img:require('@/assets/about/list4.3.jpg'),
							},
							{
								title:'饼干',
								img:require('@/assets/about/list4.4.jpg'),
							}
						]
					},
					{
						type:'电脑',
						item:[
							{
								title:'宏硕',
								img:require('@/assets/about/list5.1.jpg'),
							},
							{
								title:'联想',
								img:require('@/assets/about/list5.2.jpg'),
							},
							{
								title:'戴尔',
								img:require('@/assets/about/list5.3.jpg'),
							}
						]
					},
					{
						type:'智能',
						item:[
							{
								title:'智能音响',
								img:require('@/assets/about/list6.1.jpg'),
							},
							{
								title:'智能手表',
								img:require('@/assets/about/list6.2.jpg'),
							},
							{
								title:'机器人',
								img:require('@/assets/about/list6.3.jpg'),
							}
						]
					},
					{
						type:'耳机',
						item:[
							{
								title:'有线',
								img:require('@/assets/about/list7.1.jpg'),
							},
							{
								title:'蓝牙款',
								img:require('@/assets/about/list7.2.jpg'),
							},
							{
								title:'运行型',
								img:require('@/assets/about/list7.3.jpg'),
							}
						]
					},
					{
						type:'生活',
						item:[
							{
								title:'马桶刷',
								img:require('@/assets/about/list8.1.jpg'),
							},
							{
								title:'洗澡桶',
								img:require('@/assets/about/list8.2.jpg'),
							},
							{
								title:'纸杯',
								img:require('@/assets/about/list8.3.jpg'),
							},
							{
								title:'剪刀',
								img:require('@/assets/about/list8.4.jpg'),
							}
						]
					}
				]
			}
		},
		components:{
			Navigation,TopBar
		},

		methods:{
		}
	}
</script>

<style scoped lang="less">
	.about{
		background-color: #f6f6f6;
		.main{
			padding: 60px 0;
			box-sizing: border-box;
			.search{
				position: fixed;
				width: 100%;
				z-index: 99;
			}
			.content{
				margin-top: 60px;
				.content_main{
					.content_main_right{
						float: right;
						.contentNav{
							width: 100%;
						}
						.leftBar{
							&::v-deep .van-index-bar__sidebar{
								left: 0;
								right: auto;
							}
							&::v-deep .van-index-bar__index{
								font-size: 14px;
								line-height: 40px;
								border: 1px solid #eee;
								background-color: #fff;
								padding: 0 20px;
							}
							&::v-deep .van-cell__title{
								font-size: 12px;
							}
							&::v-deep .van-index-bar__index--active{
								background-color: #ff8226;
								color: #fff;
							}
						}
					}
				}
				
			}
			.fixed{
				position:fixed;
				top: 120px;
				left: 0px;
			}
			
		}
	}
</style>
