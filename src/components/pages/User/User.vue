<template>
	<div class="user">
    <!--{{name}}-->
    <!--{{this.$store.state.login}}-->
    <Info></Info>
    <router-view></router-view>
    <!--<button @click="loginOut">退出</button>-->
   <!--<Bottom></Bottom>-->
	</div>
	
</template>
<script>
import Bottom from '../../../components/commons/Bottom'//引入组件

import Info from './Info'
export default{
	name:'User',
	components:{Bottom,Info},
	
	data(){
		return {
			name:'会员中心'
		}
	},
	methods:{
//		loginOut(){
//			this.$store.commit('changeLogin',false)
//			this.$router.replace('/login')
//			}
	},
	created(){
		if(this.$store.state.login){
			console.log(this.$store.state.login);
			this.$router.replace('/user')
		}else{
		this.$router.push('/login')
		}
	}

}
</script>
<style lang="less" scoped>
</style>