import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/flashSale',
    name: 'FlashSale',
    component: () => import('../views/FlashSale.vue')
  },
  {
    path: '/goldMall',
    name: 'GoldMall',
    component: () => import('../views/GoldMall.vue')
  },
  {
    path: '/spellGroup',
    name: 'SpellGroup',
    component: () => import('../views/SpellGroup.vue')
  },
  {
    path: '/home_seeMore',
    name: 'SeeMore',
    component: () => import('../views/Home_SeeMore.vue')
  },
  {
    path: '/hotsDetail/:id',
    name: 'HotsDetail',
    component: () => import('../views/HotsDetail.vue')
  },
  {
	  path:'/serviceChat',
	  name: 'ServiceChat',
	  component: () => import('../views/ServiceChat.vue')
  },
  {
	path: '/buyNow',
	name: 'BuyNow',
	component: () => import('../views/BuyNow.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
	  path:'/settlement',
	  name: 'Settlement',
	  component: () => import('../views/Settlement.vue')
  },
  {
  	  path:'/paySuccess',
  	  name: 'PaySuccess',
  	  component: () => import('../views/PaySuccess.vue')
  },
  {
	  path: '/logistics',
	  name: 'Logistics',
	  component: () => import('../views/Logistics.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue')
  },
  {
    path: '/orders',
    name: 'MyOrders',
    component: () => import('../views/MyOrders.vue')
  },
  {
  	  path: '/afterSale',
  	  name: 'AfterSale',
  	  component: () => import('../views/AfterSale.vue')
  },
  {
	path: '/login',
	name: 'Login',
	component: () => import('../views/Login.vue')
  },
  {
  	path: '/register',
  	name: 'Register',
  	component: () => import('../views/Register.vue')
  },
  {
  	path: '/addressEdit',
  	name: 'AddressEdit',
  	component: () => import('../views/AddressEdit.vue')
  },
  {
  	path: '/addressList',
  	name: 'AddressList',
  	component: () => import('../views/AddressList.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
