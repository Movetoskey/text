import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入矢量图标样式
import './assets/iconfont/iconfont.css'

//引入vuex配置文件
import store from './store'
// 引入组件
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
import { NavBar } from 'vant';
import { Icon,Button} from 'vant';
import { Dialog } from 'vant';
import { Tab, Tabs } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Grid, GridItem } from 'vant';
import { Empty } from 'vant';
import { Col, Row } from 'vant';
import { Sidebar, SidebarItem} from 'vant';
import { Image } from 'vant';
import { ActionSheet } from 'vant';
import { Toast } from 'vant';


// 全局注册
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Dialog);
Vue.use(Search);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Button);
// Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Empty);
Vue.use(Col);
Vue.use(Row);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Image);
Vue.use(ActionSheet);

Vue.config.productionTip = false

// 全局过滤器（所有组件都可以使用)
Vue.filter('money',function(val){
	return `￥${val.toFixed(2)}`;
})

new Vue({
  router,
  store,  //挂载
  render: h => h(App)
}).$mount('#app')
