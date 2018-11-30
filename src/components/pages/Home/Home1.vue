<template>
	<div class="home">
	 <Header></Header>
		<Banner></Banner>
		 <FileList ></FileList> 
		    <Bottom></Bottom>

	  
	</div>
</template>
<script>

import Banner from '../../commons/Banner'//引入组件
import Header from '../../../components/commons/Header'//引入组件 
import Bottom from '../../../components/commons/Bottom'
import FileList from './FileList'//引入组件	
export default{
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'Home',
	components:{Banner,FileList,Header,Bottom,},
	data(){
		return {
			name:'我是home页面',
			
		}

	}
}
</script>
<style lang="less" scoped>

</style>