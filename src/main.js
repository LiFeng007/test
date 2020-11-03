import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import './assets/css/reset.css'
import './plugins/axios'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.config.productionTip = false


let vm = new Vue({
	data:{
		isLoading:false,
	},
  render: h => h(App),
  router:router,
}).$mount('#app')
export default vm;
