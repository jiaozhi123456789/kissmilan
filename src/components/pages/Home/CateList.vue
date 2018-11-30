<template>
	<div class="cate-list">
	    <ul>
	    	<li @click='goPage("goods/"+item.id)' v-for="(item,index) in cates" :key="index">
				<img :src="item.pic" alt="">
			</li>
	    	 </ul>
	    	 
	    	 <footer   class="tc">客服中心：<a  href="tel:4001-023-866">4001-023-866</a> <br >
渝ICP备13001878号  COPYRIGHT©2013-2022 Kissmilan 版权所有 <br >
技术支持：迈小步科技<br ><p >重庆市江北区北滨一路456号S1栋四层商业3号商铺</p></footer>
	</div> 
</template>
<script>
export default{
	name:'CateList',
	components:{},
	props:['url','name'],
	data(){
		return {
			cates:[],
		}
	},
	methods:{
//		goPage(id){
//			this.$router.push({ path: `/goods/detail/${id}`})
//		}
		goPage(id){
			this.$router.push({ path: `/${id}`})
		},
		getData(){
			this.$axios.get('/api/o/home/category')
			.then((res)=>{
				console.log(res.data);
//				for(var i=0;i<6;i++){
//					this.cates.push(res.data[i].pic);
//				}
				this.cates=res.data
				console.log(this.cates)
			})
			.catch((err)=>{
				console.log(err)
			})
		}
	},
	created(){
		this.getData()
	}
}
</script>
<style lang="less" scoped>
@import '../../../styles/main.less';
  .cate-list{
  	border-sizing:border-box;
  	/*.margin(717,0,0,0)
  	.mt(717);*/
  	/*margin-top:100px;*/
  	margin-bottom:60px;
  	ul{
  		/*background:red;*/
  		li{
  			.w(375);
  			.h(149.67);
  			/*border:1px solid blue;*/
  		}
  		img{
  			.w(375);
  			.h(139.67);
  		}
  	}
  }
  
  
  footer {
  	.fs(12);
    color: #8f5451;
    line-height: 1.3;
    padding: 15px 0;
}
.tc {
    text-align: center;
}
footer a {
    color: #8f5451;
}
a {
    text-decoration: none;
}
a {
    background-color: transparent;
   
}

  
  
</style>