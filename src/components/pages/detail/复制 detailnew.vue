<template>	
	<div >
	<Headerdetail></Headerdetail>
	<div class="mint-swipe" style="height: 375px;">
		<div class="mint-swipe-items-wrap">
			<div class="mint-swipe-item is-active">
	<img src="http://oss.kissmilan.com/product/20180920/b6978f8ed94963bd.jpg" width="100%">
</div></div> 
<div class="mint-swipe-indicators">
	
	<div class="info"><h1 class="name"><!----> Little Pig 小猪</h1></div>
		<!--<div class="desc">
	
	
	
	
	
	<div class="mint-swipe-indicator is-active">
		-->
	</div>
</div>
	</div>
	
	
	<div v-html="total" >{{total}}</div>
	
<Bottomdetail></Bottomdetail>
	

	</div>
</template>
<script>
	import Headerdetail from '../../../components/commons/Headerdetail'//引入组件	
import  Bottomdetail  from '../../../components/commons/Bottomdetail'//引入组件	
export default{
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'goods',
	components:{Headerdetail,Bottomdetail},
	data(){
		return {
			nav:['全部','卡通系列','礼盒系列','慕斯蛋糕','乳脂奶油蛋糕','芝士蛋糕','巧克力蛋糕'],
			sel:'全部',
			describe:[],
			pc_description:[],
			wap_description:[],
			total:[],
			page:1,
			count:8,
			shop_id:5,
			category_id:8,
			goods:''
		}
},
methods:{
	getData(){
	//http://anode.kissmilan.com/o/home/product/71/5
		this.$axios.get('api/o/home/product/71/5')
			.then((res)=>{
				//this.details=res.data.describe
				this.details=res.data.describe
				this.pc_description=res.data.pc_description
				this.wap_description=res.data.wap_description
				//this.total=this.details.concat(this.pc_description,this.wap_description)
				this.total=res.data
				console.log(res.data.total)
				//this.page++
				//this.toast.close();
			})
			.catch((err)=>{
				//this.toast.close();
				console.log(err)
			})
},
selItem(){
			
router.push({ path: 'goods/detail', query: { plan: 'private' }})
			
		}
},

created(){
       this.getData();
        console.log('卡通');
	}

}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	
.mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 100%;
}

.goods-detail .info {
    padding: 0 15px 20px;
    background: #fff;
}
.goods-detail .info .name {
    color: #522725;
    font-size: 14px;
    margin: 10px 0;
    line-height: 1.3;
}











</style>
