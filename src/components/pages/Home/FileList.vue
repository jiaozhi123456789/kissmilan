<template>
	<div class="file-list">
    {{name}}
   <div class="tupian">1</div>
	<div class="tupian">2</div>
	</div>
	
</template>
<script>

export default{
	name:'FileList',
	components:{},
	props:['url','name'],
	data(){
		return {
			films:'fff'
		}
	},
	methods:{
//		getData(){
//			//https://m.maizuo.com/v4/api/film/now-playing?__t=1541995011556&page=1&count=5
//			this.$axios.get('/api/v4/api/film/'+this.url,{params:{
//				__t:Date.now(),
//				page:1,
//				count:5
//			}})
//			.then((res)=>{
//				this.films=res.data.films
//				console.log(res)
//			})
//			.catch((err)=>{
//				console.log(err)
//			})
//		}
	}
//	created(){
//		this.getData();
//	}
}
</script>
<style lang="less" scoped>
 	
  .file-list{
  width: 100px;
  height: 400px;
  	  background: #282828;
  	.tupian{
  		 width: 100px;
  height: 400px;
  	  background: #282828;
  	}
  }
</style>