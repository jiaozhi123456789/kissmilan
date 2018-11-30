<template>	
<div>
	<Headerdetail></Headerdetail>
	<div  v-html='wap_description' class="div1">{{wap_description}}</div>
	<Bottomdetail></Bottomdetail>

</div>
</template>
<script>
		import Headerdetail from '../../../components/commons/Headerdetail'//引入组件	
import  Bottomdetail  from '../../../components/commons/Bottomdetail'//引入组件	
export default{
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'detailmiddle',
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
	getData(id){
	//http://anode.kissmilan.com/o/home/product/71/5
	//"api/o/home/product/"+item.id+"/5"
		this.$axios.get("api/o/home/product/"+id+"/5")
			.then((res)=>{
				//this.details=res.data.describe
			
				this.details=res.data.describe
				this.pc_description=res.data.pc_description
				this.wap_description=res.data.wap_description
				this.total=this.details.concat(this.pc_description)
				this.total=res.data
				//console.log(res.data)
				
				//this.page++
				//this.toast.close();
			})
			.catch((err)=>{
				//this.toast.close();
				console.log(err)
			})
},
aa(){
	let arr=document.querySelector(".div1 p img");
	console.log(arr)
},
selItem(){
			
router.push({ path: 'goods/detail', query: { plan: 'private' }})
			
		}
},

created(){
       this.getData(this.$route.params.id);
        console.log('卡通');
         console.log(this.$route.params.id);
         let a=document.querySelector(".div1 p img")
	console.log(this.wap_description)
},
mounted(){
	let a=document.querySelector(".div1 p img")
	console.log(a)
//	this.aa()
}

}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	
.div1{
	
    margin: 0;
    height: 100vh;
    font-size: 12px;
    

    padding: 50px 0 60px;
    background: #fff;
    p{
    	img{
		 	.w(375);
		 }
    }
 
}














</style>
