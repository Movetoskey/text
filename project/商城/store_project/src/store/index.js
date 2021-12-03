import Vue from 'vue'

//引入vuex框架
import Vuex from 'vuex'

//使用vuex插件
Vue.use(Vuex)

import Storage from '../Storage.js'

//实例化
export default new Vuex.Store({
  state: {
	CartList: Storage.get(),
	selectGoods: [],
	orderGoods: [],
	totalPrice: 0,
	hotgoods:[
		{
			desc:'全自动雨伞自开自收男女晴雨两用伞自带挂钩防风三折大号防风加固折叠伞 天空蓝',
			price: 48.80,
			num: 1200,
			points: 666,
			imgs: require('../assets/home/goods1.jpg'),
			title: '恒时智选旗舰店',
			address: '杭州',
			otherImgs: [
				require('../assets/home/hotsGoods/goods1.1.jpg'),
				require('../assets/home/hotsGoods/goods1.2.jpg'),
				require('../assets/home/hotsGoods/goods1.3.jpg'),
				require('../assets/home/hotsGoods/goods1.4.jpg')
			]
		},
		{
			desc: '臻邦 热水袋暖水袋暖手宝暖宝宝注水电暖热宝 电暖贴身保暖 智能充电防爆水电分离超柔面料 灰色',
			price: 37.90,
			num: 100,
			points: 66,
			imgs: require('../assets/home/goods2.jpg'),
			title: '臻邦京东自营旗舰店',
			address: '江西',
			otherImgs: [
				require('../assets/home/hotsGoods/goods2.1.jpg'),
				require('../assets/home/hotsGoods/goods2.2.jpg'),
				require('../assets/home/hotsGoods/goods2.3.jpg'),
				require('../assets/home/hotsGoods/goods2.4.jpg')
			]
		},
		{
			desc:'鸡蛋糕整箱传统老式手工老人家吃的早餐晚上解饿零食充饥夜宵散装 老式鸡蛋糕2斤【实惠装】',
			price: 22.90,
			num: 1990,
			points: 126,
			imgs: require('../assets/home/goods3.jpg'),
			title: '怡瑞佳地方特产专营店',
			address: '四川成都',
			otherImgs: [
				require('../assets/home/hotsGoods/goods3.1.jpg'),
				require('../assets/home/hotsGoods/goods3.2.jpg'),
				require('../assets/home/hotsGoods/goods3.3.jpg'),
				require('../assets/home/hotsGoods/goods3.4.jpg')
			]
		},
		{
			desc: '家世华（JIA SHI HUA）简约时尚落地收纳架客厅多功能大容量省空间书架绘本架 【六层有柜门】60*24*162cm暖白色',
			price: 190,
			num: 100,
			points:44,
			imgs: require('../assets/home/goods4.jpg'),
			title: '京东好店家世华家具官方旗舰店',
			address: '杭州',
			otherImgs: [
				require('../assets/home/hotsGoods/goods4.1.jpg'),
				require('../assets/home/hotsGoods/goods4.2.jpg'),
				require('../assets/home/hotsGoods/goods4.3.jpg'),
				require('../assets/home/hotsGoods/goods4.4.jpg')
			]
		}
	],
	grands:[
		{
			title:'ERDOS闪购专场',
			path: require('@/assets/home/grand1.png')
		},
		{
			title:'MsShe冬焕新',
			path: require('@/assets/home/grand2.png')
		},
		{
			title:'斯凯奇品牌专场',
			path: require('@/assets/home/grand3.png')
		},
		{
			title:'雅鹿羽绒服专场',
			path: require('@/assets/home/grand4.png')
		}
	],
	likeLists:[
		{
			desc:'爱礼优 创意星空液体流沙宇航员钥匙扣挂件可爱卡通太空人桌面摆件男女个性潮流钥匙链学生书包挂件汽车 太空人 银色',
			price: 13.8,
			imgs: require('../assets/home/likeList1.jpg'),
			num: 1
			
		},
		{
			desc:'【佟丽娅推荐】友臣菠萝果粒吐司500g /750g夹心乳酸菌小口袋面包三明治早餐自营零食整箱批发 菠萝果粒吐司500g/约12个',
			price: 17.90,
			imgs: require('../assets/home/likeList2.jpg'),
			num: 1
		},
		{
			desc:'ORZ 304不锈钢S型挂钩 免钉免粘餐具挂钩 挂包钩挂衣钩金属钩子厨房厨具收纳挂钩 挂钩 4只(8挂钩) 304不锈钢',
			price: 21.9,
			imgs: require('../assets/home/likeList3.jpg'),
			num: 1
		},
		{
			desc:'桃壹佰水果罐头6罐整箱混合糖水新鲜黄桃杨梅菠萝橘子梨零食 方便速食罐头 童年回忆甜品饮料 【6罐装】黄桃6罐',
			price: 24.90,
			imgs: require('../assets/home/likeList4.jpg'),
			num: 1
		},
		{
			desc:'充电台灯学习床头灯护眼台灯宿舍灯充电灯夹子灯学生led小台灯卧室usb小夜灯夹式护眼灯寝室读写台风 充电夹子台灯+充电线+三色调光',
			price: 39.9,
			imgs: require('../assets/home/likeList5.jpg'),
			num: 1
		},
		{
			desc:'足疗沙发 电动沙发按摩床美甲美睫沙发躺椅泡脚特司悠采耳修脚床 钢木结构-天蓝科技布 USB遥控',
			price: 1398.90,
			imgs: require('../assets/home/likeList6.jpg'),
			num: 1
		},
		{
			desc:'新中式迎客松仿真盆景客厅酒店家居玄关装饰品样板间软装创意摆件 小号迎客松(拱桥型板) 雪山',
			price: 466.48,
			imgs: require('../assets/home/likeList7.jpg'),
			num: 1
		},
		{
			desc:'【赠300G资源 不改音响】汽车载U盘带歌曲2021抖音网络新歌网红流行音乐MP3听歌无损高音质优盘 推荐16G抖音款【1100首歌曲+100个MV】',
			price: 39.90,
			imgs: require('../assets/home/likeList8.jpg'),
			num: 1
		}
	],
	arrRegist: JSON.parse(window.localStorage.getItem('registerInfo')) || [],
	loginInfo: JSON.parse(window.sessionStorage.getItem('loginInfo')) || []
  },
  mutations: {
	
  },
  actions: {
	
  },
  modules: {
	
  },
  getters:{
	
  }
})
