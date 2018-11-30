<template>
  <div id="app">
  
     <router-view></router-view>
   
  </div>
</template>

<script>
import Home from './components/pages/Home/Home'//引入组件
//import Header from './components/commons/Header'//引入组件 
//import Bottom from './components/commons/Bottom'
import detail from './components/pages/detail/detail'//引入组件
import cart from './components/pages/cart/cart'
export default {
  name: 'App',//当前组件的名字
  components: {
    Home,detail ,cart //引入组件
  },
  data(){
    return {
      name:111
    }
  },
  methods:{
    add(){
      this.name++
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  },
  updated(){
    console.log('updated')
  }
}
</script>

<style>
#app {

}
</style>
