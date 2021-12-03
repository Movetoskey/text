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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  // 登录注册设置// 地址
  {
    path: '/set',
    name: 'Set',
    component: () => import('../views/Login/Set.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Login/Address.vue')
  },
  {
    path: '/edit/:index',
    name: 'Edit',
    component: () => import('../views/Login/Edit.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Login/Message.vue')
  },
  {
    path: '/logining',
    name: 'Logining',
    component: () => import('../views/Login/Logining.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Login/Register.vue')
  },
  // 详情页、Buy
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Buy/Search.vue')
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import('../views/Buy/Sell.vue')
  },
  {
    path: '/price',
    name: 'Price',
    component: () => import('../views/Buy/Price.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Buy/Detail.vue')
  },
  {
    path: '/detail_db/:id',
    name: 'Detail_db',
    component: () => import('../views/Buy/Detail_db.vue')
  },
  {
    path: '/settle',
    name: 'Settle',
    component: () => import('../views/Buy/Settle.vue')
  },
  {
    path: '/overbooking',
    name: 'Overbooking',
    component: () => import('../views/Buy/Overbooking.vue')
  },
  // 全部订单
  {
    path: '/orders/:index',
    name: 'Orders',
    component: () => import('../views/About/Orders.vue')
  },
  // Papers
  {
    path: '/Papers/weida',
    name: 'Weida',
    component: () => import('../views/Papers/Weida.vue')
  },
  {
    path: '/Papers/jie',
    name: 'Jie',
    component: () => import('../views/Papers/Jie.vue')
  },
  {
    path: '/Papers/qing',
    name: 'Qing',
    component: () => import('../views/Papers/Qing.vue')
  },
  {
    path: '/Papers/xin',
    name: 'Xin',
    component: () => import('../views/Papers/Xin.vue')
  },
  {
    path: '/Papers/pu',
    name: 'Pu',
    component: () => import('../views/Papers/Pu.vue')
  },
  {
    path: '/Papers/debao',
    name: 'Debao',
    component: () => import('../views/Papers/Debao.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
