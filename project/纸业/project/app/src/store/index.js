import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 原始数据
    lists:[
      {
        path:require('@/assets/pro1.webp'),
        text:'洁柔手帕纸巾小包可湿水面巾纸餐巾纸',
        price:29,
        pic:require('@/assets/xq-pro1.jpg'),
      },
      {
        path:require('@/assets/pro2.webp'),
        text:'得宝手帕纸巾小包迷你面巾纸餐巾纸',
        price:49,
        pic:require('@/assets/xq-pro2.jpg'),
      },
      {
        path:require('@/assets/pro3.webp'),
        text:'得宝纯棉纸巾干湿两用全棉柔巾90抽',
        price:39,
        pic: require('@/assets/xq-pro3.jpg'),
      },
      {
        path:require('@/assets/pro4.webp'),
        text:'本色抽纸巾3层面巾纸食品级低白度餐巾原浆家庭实惠装',
        price:19,
        pic:require('@/assets/xq-pro4.jpg'),
          
        
      },
      {
        path:require('@/assets/pro5.webp'),
        text:'抽纸批发箱装家庭装特价纸巾原浆抽纸实惠装',
        price:89,
        pic:require('@/assets/xq-pro5.jpg'),
          
        
      },
      {
        path:require('@/assets/pro6.webp'),
        text:'厨房用纸厨房纸料理专用',
        price:49,
        pic:require('@/assets/xq-pro6.jpg'),
          
        
      },
      {
        path:require('@/assets/pro7.webp'),
        text:'湿巾批发茶语超便携迷你',
        price:19,
        pic:require('@/assets/xq-pro7.jpg'),
        pic1:require('@/assets/xq-pro77.jpg'),
        
      },
      {
        path:require('@/assets/pro8.webp'),
        text:'纸巾餐巾纸面巾纸无香擦手纸面纸方巾纸抽',
        price:59,
        pic:require('@/assets/xq-pro8.jpg'),
        
      },
      {
        path:require('@/assets/pro9.webp'),
        text:'手帕纸本色原浆低白度纸巾家用卫生餐巾纸',
        price:19,
        pic:require('@/assets/xq-pro4.jpg'),
      },
      {
        path:require('@/assets/pro10.webp'),
        text:'无芯卷纸本色卫生纸批发',
        price:30,
        pic:require('@/assets/xq-pro9.jpg'),
        pic1:require('@/assets/xq-pro99.jpg'),
        
      },
    ],
    items:[
        {
          path:require('@/assets/pro2.webp'),
          text:'Tempo得宝',
          bg:require('@/assets/goodsbg1.png'),
          name:'Debao',
          price:49
        },
        {
          path:require('@/assets/jr.webp'),
          text:'洁柔',
          bg:require('@/assets/goodsbg2.png'),
          name:'Jie',
          price:60
        },
        {
          path:require('@/assets/qf.webp'),
          text:'清风',
          bg:require('@/assets/goodsbg3.png'),
          name:'Qing',
          price:48
        },
        {
          path:require('@/assets/x.webp'),
          text:'心相印',
          bg:require('@/assets/goodsbg4.png'),
          name:'Xin',
          price:37
        },
        {
          path:require('@/assets/wd.webp'),
          text:'维达',
          bg:require('@/assets/goodsbg5.png'),
          name:'Weida',
          price:45
        },
        {
          path:require('@/assets/pz.webp'),
          text:'璞竹',
          bg:require('@/assets/goodsbg6.png'),
          name:'Pu',
          price:27
        },

    ],
    // 分类 得宝
    db:[
      {
        path: require("@/assets/pro3.webp"),
        text: "得宝纯棉纸巾干湿两用全棉柔巾90抽",
        price: 39,
        pic: require('@/assets/xq-pro3.jpg'),
      },
      {
        path: require("@/assets/pro2.webp"),
        text: "得宝手帕纸巾小包迷你面巾纸餐巾纸",
        price: 49,
        pic:require('@/assets/xq-pro2.jpg'),
      },
      {
        path: require("@/assets/pro6.webp"),
        text: "厨房用纸厨房纸料理专用",
        price: 49,
        pic:require('@/assets/xq-pro6.jpg'),
      },
      {
        path: require("@/assets/pro10.webp"),
        text: "无芯卷纸本色卫生纸批发",
        price: 30,
        pic:require('@/assets/xq-pro9.jpg'),
        pic1:require('@/assets/xq-pro99.jpg'),
      },
      {
        path: require("@/assets/pro7.webp"),
        text: "湿巾批发茶语超便携迷你",
        price: 19,
        pic:require('@/assets/xq-pro7.jpg'),
        pic1:require('@/assets/xq-pro77.jpg'),
      },
      {
        path: require("@/assets/pro8.webp"),
        text: "纸巾餐巾纸面巾纸无香擦手纸面纸方巾纸抽",
        price: 59,
        pic:require('@/assets/xq-pro8.jpg'),
      },
      {
        path: require("@/assets/pro9.webp"),
        text: "手帕纸本色原浆低白度纸巾家用卫生餐巾纸",
        price: 19,
        pic:require('@/assets/xq-pro4.jpg'),
        pic1:require('@/assets/xq-pro4.jpg'),
      },
    ],
    
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
