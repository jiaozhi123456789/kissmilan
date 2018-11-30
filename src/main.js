// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.除了js可以引入 

//除了js可以引入 css
import  './styles/common/reset.less'
import Vue from 'vue'
//es6引入vue模块
import App from './App'
//引入路由
import  router from './router/index.js'
//引入axios
import Axios from 'axios'
//请求拦截
import  store from './store/index.js'
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log(1111)
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

Vue.prototype.$axios=Axios //挂载axios 便于组件使用
//引入app组件
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },//挂载app组件
  template: '<App/>'//用app组件来替换首页的 div元素
})
