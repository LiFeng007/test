import axios from 'axios';
import vm from '../main'
// import store from '../plugins/redux'

// 添加一个请求的拦截
axios.interceptors.request.use((config) => {
  
  // console.log('axios请求拦截',config);

  //1抓取本地token，携带在请求头里
  // let user = store.getState().user;
  // console.log('axios',user)
  // user = user ? qs.parse(user) : '';
  // user = user ? JSON.parse(user) : '';
  // config.headers={'token': user.token};


  //显示loading...
  vm.isLoading = true
  return config;//2返回请求

}, function(error) {
  // 请求错误时做点事
  return Promise.reject(error);
});

//添加一个响应拦截
axios.interceptors.response.use(function(response) {

  // console.log('axios响应拦截',response);

  // store.dispatch(actionLoading(false));
  vm.isLoading = false
  // let router=new Router();   // {history,default:组件本身,xxxx}

  //token过期: 返回值2,当前路由不是login时跳转
  // if (response.data.err === 2 && !router.history.location.pathname.includes('/login')) {

  //   console.log('token 失败 跳转到login',router);

  //   //历史记录模式跳转
  //   window.location.href=baseUrl+'/login?path='+router.history.location.pathname

  //   //hash 模式可以，history模式有问题

  //   /*router.history.push({
  //     pathname: '/login',
  //     search: "path="+router.history.location.pathname
  //   })*/

  // }
  return response;

}, function(error) {

  return Promise.reject(error);
});



export default axios;