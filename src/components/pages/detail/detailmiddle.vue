<template>	

	
	<div  v-html='details'><div  >{{details}}</div></div>
	


	


</template>
<script>
	
export default{
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'detailmiddle',
	components:{},
	data(){
		return {
			nav:['全部','卡通系列','礼盒系列','慕斯蛋糕','乳脂奶油蛋糕','芝士蛋糕','巧克力蛋糕'],
			sel:'全部',
			details:'<div style="width:300px;height:600px;background:red;">111</div>',
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
				this.details=res.data.describe
				//console.log(res.data.describe)
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

mounted(){
      // this.getData();
        console.log('detailmiddle');
	}

}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	















</style>
