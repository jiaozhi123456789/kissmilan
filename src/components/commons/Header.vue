<template>
	<div class="header">
	<div class="left">
	<i class="fa fa-map-marker"></i>

	
	<span>重庆</span>
	</div>
	
	<div class="logo">
		<a>
			<img src="http://oss.kissmilan.com/fixed/20170718/a7aecada618904f2.png" />
		</a>
	</div>
	
		<div class="right">
			<a>
	<i class="	fa fa-shopping-cart"></i>
	<span class="pa">2</span>
</a>
	</div>
	
	</div>
</template>
<script>
	export default{
		name:'Header',
		components:{},
		data(){
			return {
				name:'我是header'
			}
		}
	}
</script>
<style lang="less" scoped>
 @import '../../styles/main.less';	
 .header{
 	background:white;
 	position:fixed;
 	top:0;
 	left:0;
 	right:0;
 	z-index:999;
 	
 		box-sizing: border-box;
 	.padding(10,20,10,20);
 	font-size:16px;
 	
 .left{
 	.w(50);
 	.h(50);
 	float:left;
 	margin-left:30px;
 }
  .logo{
  		.w(160);
 	.h(50);
 		float:left;
 		img{
 			.w(100);
 	.h(30);
 		}
  }
   .right{
   		.w(30);
 	.h(50);
 		float:left;
   }
 }
</style>