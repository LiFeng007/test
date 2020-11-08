import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import './assets/css/reset.css'
// 拦截器
import './plugins/axios'
// 请求工具全局化
import axios from 'axios'
Vue.prototype.$http = axios
// 状态管理
import store from '@/plugins/vuex'
Vue.use(ElementUI)
Vue.config.productionTip = false


let vm = new Vue({
	data:{
		// loading显示
		isLoading:false,
	},
  render: h => h(App),
	router:router,
	store
}).$mount('#app')
export default vm;
