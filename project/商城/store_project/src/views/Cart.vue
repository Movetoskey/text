<template>
	<div class="cart">
		<TopBar>
			<h4>我的购物车</h4>
		</TopBar>
		<div class="main" v-if="count==0 ? false : true">
			<div class="item_list" v-for="(cartList,index) in CartList">
				<!-- <input type="checkbox" @change="selectOne(cartList)" v-model="cartList.checked"> -->
				<van-checkbox v-model="cartList.checked" checked-color="#fa6e06" @change="selectOne(cartList)" icon-size="16px" ></van-checkbox>
				<van-swipe-cell>
					<van-card
						class="goods-card"
						:thumb="cartList.imgPath">
						<template #price>
							<div class="van-multi-ellipsis--l2">
							  {{cartList.oneprice | money}}
							</div>
						</template>
						<template #desc>
							<div class="van-multi-ellipsis--l2">
							  {{cartList.desc}}
							</div>
						</template>
						 <template #num>
						    <van-stepper v-model="cartList.num" max="100" integer button-size="18px" theme="round" :show-minus="cartList.num<=1 ? false : true"/>
						  </template>
					</van-card>
					<template #right>
						<van-button square text="删除" type="danger" class="delete-button" @click="deleteList(index)"/>
					</template>
				</van-swipe-cell>
			</div>
			<div class="cartBottom">
				<van-submit-bar button-text="去结算" @submit="onSubmit">
					<template #default>
						<div class="left">
							<span>
								<!-- <input type="checkbox" @click="selectAll()" v-model="ischeckAll">全选 -->
								<van-checkbox v-model="ischeckAll" checked-color="#fa6e06"@click="selectAll()" icon-size="14px">全选</van-checkbox>
							</span>
							<span @click="clearCart()">清空购物车</span>
						</div>
						<div class="right">
						   <span>合计：</span>
						   <em>{{getTotalPrice()}}</em>
						</div>
					</template>
				</van-submit-bar>
			</div>
		</div>
		<div class="emptyNav"  v-if="count==0 ? true : false">
			<van-empty description="购物车为空">
				<van-button round type="danger" class="bottom-button" to="/" color="rgba(253, 113, 19, 1.0)">去购物</van-button>
			</van-empty>
		</div>
		<div class="guesslike">
			<van-divider :style="{ borderColor: '#fa130b'}"><h4>猜你喜欢</h4></van-divider>
			<div class="content">
				<van-card v-for="(val,index) in likeLists" :key="val.id">
					<template #desc>
						<div class="van-multi-ellipsis--l2">
							<span class="desc">{{val.desc}}</span>
						</div>
				    </template>
					<template #price>
						<span class="price">{{val.price |money}}</span>
					 </template>
					<template #thumb>
						<img :src="val.imgs" alt="">
					</template>
					<template #footer>
						<van-button size="mini" class="btn"><van-icon name="like-o" color="orange"/>收藏</van-button>
						<van-button size="mini" class="btn" @click="addToCart(val,index)"><van-icon name="cart-o" color="red"/>加入购物车</van-button>
					</template>
				</van-card>
			</div>
			<van-divider :style="{ color: '#9b9b9b', borderColor: '#bdbdbd', padding: '0 16px' }">
			 没有更多了
			</van-divider>
		</div>
		<Navigation />
	</div>
</template>

<script>
	import Storage from '../Storage.js'
	import Navigation from '@/components/Navigation.vue'
	import TopBar from '@/components/TopBar.vue'
	import Vue from 'vue';
	import { Checkbox, CheckboxGroup } from 'vant';
	import { SwipeCell } from 'vant';
	import { SubmitBar } from 'vant';
	import { Stepper } from 'vant';
	import { Toast } from 'vant';

	Vue.use(SwipeCell);
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	Vue.use(SubmitBar);
	Vue.use(Stepper);
	
	export default{
		name: 'Cart',
		data(){
			return {
				CartList: Storage.get(),
				count:  Storage.get().length,
				checkNum: 0,
				value: '',
				ischeckAll: true ,//是否全选
				checked: true,
				likeLists: this.$store.state.likeLists,
			}
		},
		components:{
			Navigation,TopBar
		},
		watch:{
			//购物车内所有的商品
			CartList:{
				handler(val){
					Storage.set('CartList',val)
					this.count =  Storage.get().length
					// console.log(this.count)
				},
				deep: true
			},
		},
		methods:{
			//去结算
			onSubmit(){
				this.$store.state.selectGoods = []
				this.CartList.forEach(item =>{
					if(item.checked == true){
						this.$store.state.selectGoods.push(item)
					}
				})
				console.log(this.getTotalPrice())
				this.$router.push('/settlement')
			},
			
			//删除单个商品
			deleteList(index){
				this.$dialog.confirm({
					title: '删除',
					message: '确定要删除当前商品吗',
				})
				.then(() => {
					this.$delete(this.CartList,index);
					this.isCheckedAll()
				})
				.catch(() => {
					// on cancel
				});
			},
			
			//计算选中的商品数量
			getSelectNum(){
				var selectNum = 0
				this.CartList.forEach((item,index)=>{
					if(item.checked){
						var num = item.num
						selectNum += num
					}
				})
				return selectNum
			},
			
			//计算选中商品的总价
			getTotalPrice(){
				var totalPrice = this.$store.state.totalPrice
				this.CartList.forEach((item,index)=>{
					if(item.checked){
						var price = item.num * item.oneprice
						totalPrice += price
					}
				})
				return '￥'+totalPrice.toFixed(2)
			},
			
			goHome(){
				if(this.count == 0){
					this.$dialog.confirm({
						title: '购物车为空',
						message: '当前购物车没有商品啦，快去选购吧',
					})
					.then(() => {
						this.$router.push('/')
						return false
					})
					.catch(() => {
						return true
					});
				}else{
					return true
				}
			},
			
			//全选
			selectAll(){
				if(this.goHome()){
					this.CartList.forEach((item,index)=>{
						item.checked = this.ischeckAll
					})
				}
			},
			
			//单击商品列
			selectOne(cartList){
				// console.log(cartList)
				this.isCheckedAll()
			},
			
			//判断是否应该全选
			isCheckedAll(){
				if(this.CartList.length != 0){
					var checknum = 0;
					this.CartList.forEach(item => {
						if(item.checked){
							const num = item.num
							checknum++
						}
					})
					// console.log(checknum)
					checknum == this.CartList.length ? this.ischeckAll = true : this.ischeckAll = false
				}
			},
			//清空购物车
			clearCart(){
				if(this.goHome()){
					this.$dialog.confirm({
						title: '清空购物车',
						message: '确定要清空购物车吗',
					})
					.then(() => {
						this.CartList = []
						this.ischeckAll = false
					})
					.catch(() => {
						// on cancel
					});
				}
			},
			//加入购物车
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
				Toast.success('成功加入购物车');
				this.isCheckedAll()
			}
		},
		mounted() {
			this.CartList.forEach((item,index)=>{
				item.checked = true
			})
		}
	}
</script>

<style scoped="scoped" lang="less">
	.cart{
		.flex-center(){
			display: flex;
			justify-content: space-between;
		}
		.hidden{
			display: none;
		}
		.van-button--danger{
			background: linear-gradient(to right,#fe7f2b,#e38603);
		}
		.main{
			margin: 65px 0 60px;
			.item_list{
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				background-color: #fff;
				margin: 6px 5px;
				.van-swipe-cell{
					width: 340px;
					button{
						height: 100%;
					}
					.van-card__bottom{
						text-align: left;
					}
					.van-card__num{
						input{
							width: 30px;
							height: 20px;
						}
					}
					/deep/.van-stepper__plus{
						background-color: #fa6e06;
					}
					/deep/.van-stepper__minus{
						border: 1px solid #fa6e06;
					}
				}
			}
			.cartBottom{
				height: 66px;
				width: 100%;
				background-color: #fafafa;
				position: fixed;
				z-index: 99;
				bottom: 58px;
				.van-submit-bar{
					bottom: 70px;
				}
				span{
					margin-left: 5px;
				}
				.van-submit-bar__button{
					width: 82px;
				}
				.van-submit-bar__bar{
					justify-content: space-between;
				}
				.van-submit-bar__tip{
					background-color: #fff;
					color: red;
				}
				div.left{
					display: flex;
				}
				div.right{
					em{
						font-style: normal;
						font-size: 16px;
						color: red;
					}
				}
			}
		}
		.emptyNav{
			margin-top: 60px;
			.bottom-button {
				width: 160px;
				height: 40px;
			}
		}
		div.guesslike{
			margin-bottom: 120px;
			.van-divider{
				color: red;
				margin-bottom: 0;
			}
			.van-card{
				width: 178px;
				margin: 0 6px 10px 3px;
				border: 1px solid #eee;
			}
		}
		.content{
			.van-list{
				.flex-center();
				justify-content: center;
				flex-wrap: wrap;
			}
			.flex-center();
			flex-wrap: wrap;
			.van-card{
				width: 175px;
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
				.van-icon{
					margin-right: 2px;
				}
				.van-card__bottom {
					.flex-center();
				}
				.van-card__footer{
					.flex-center();
					margin-top: 3px;
				}
			}
		}
	}
</style>
