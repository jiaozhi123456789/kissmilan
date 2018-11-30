import Vue from 'vue'// vue实例
import Router from 'vue-router' //vue router


import Home from '../components/pages/Home/Home' //某一个组件
import goods from '../components/pages/goods/goods' //某一个组件
import Ding from '../components/pages/Ding/Ding' //某一个组件
import Hui from '../components/pages/Hui/Hui' //某一个组件

import User from '../components/pages/User/User'
import Order from '../components/pages/Ding/Ding'
import Set from '../components/pages/User/InfoUpdate'


import Login from '../components/pages/User/Login'
import Reg from '../components/pages/User/Reg'





import eight from '../components/pages/goods/g8' //某一个组件
import nine from '../components/pages/goods/g9' //某一个组件
import one from '../components/pages/goods/g1' //某一个组件
import two from '../components/pages/goods/g2' //某一个组件
import three from '../components/pages/goods/g3' //某一个组件
import four from '../components/pages/goods/g4' //某一个组件
import zero from '../components/pages/goods/g0' //某一个组件
import  detail from '../components/pages/detail/detail' //某一个组件
import  cart from '../components/pages/cart/cart' //某一个组件
Vue.use(Router)











export default new Router({

  routes: [
     {
        path: '/',//匹配的hash地址
        redirect:'/home'//重定向
      },
    {
      path: '/home',//匹配的hash地址
      name: 'Home',//路由的名字
      component: Home// 该路由所引用的组件
    },
    {
      path: '/cart',//匹配的hash地址
      name: 'cart',//路由的名字
      component: cart// 该路由所引用的组件
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      children:[
      { path: '9',name:  'g8',component: eight },
       { path: '8',name: 'g9',component: nine},
        { path: '1',name: 'g1',component:one },
        { path: '2',name:  'g2',component: two },
       { path: '3',name: 'g3',component: three},
        { path: '4',name: 'g4',component: four},
         { path: '0',name: 'g0',component: zero}
           
       
      ]
    }, {
      path: '/goods/detail/:id',
      name: 'detail',
      component: detail
    },
    
//   {
//    path: '/Ding',
//    name: 'Ding',
//    component: Ding
//  },
     {
      path: '/Hui',
      name: 'Hui',
      component: Hui
    },
    {path: '/user/order',name: 'Order', component: Order},
    {
      path: '/user',
      name: 'User',
      component: User,
	    children:[
	    
	    {path: 'set',name: 'set', component: Set},
	    ]
    },
    {path:'/login',name:'login',component:Login},
     {path:'/reg',name:'reg',component:Reg}

  ]
})

/*
下载路由插件  vue init  webpack  
通过<router-view> 开辟一片空间
检测hash变化 地址栏#后边那一块
匹配相应的组件信息  进行挂载显示

要在vue的实例中挂载router

a 标签可以实现跳转  一般我们用内置的router-link
<router-link  tag='li' class="fa fa-bars"  to="/goods">
to 跳转hash
tag 渲染元素

*/  

