<template>
	<div class="bottom">
		<ul>
				
				 <router-link  tag='li'   to="/">
				 	
				 	  <i class="fa fa-home" aria-hidden="true"></i>
                            <span>首页14(jiaozhi13.16)</span>
				</router-link>
		
			
	
				 <router-link  tag='li'  to="/goods/0">
				<i class="fa fa-th-large" aria-hidden="true"></i>

					<span>蛋糕名录rwu5</span>
           <span>蛋糕名录rwu5</span>
           <span>蛋糕名录rwu5</span>
           <span>蛋糕名录rwu5（远程增加一行代码）</span>
           <span>蛋糕名录rwu5</span>
           <span>蛋糕名录rwu5</span>
           <span>蛋糕名录rwu5（本地增加一行代码）</span>
           <span>蛋糕名录rwu5</span>
					</router-link>
			
		
				 <router-link tag='li'   to="/user/order">
                       <i class="fa fa-file-text" aria-hidden="true"></i>

				<span>我的订单14</span>
				</router-link>
		
		
				
			
 <router-link tag='li'  to="/user">
 	<i class="fa fa-user" aria-hidden="true"></i>


			</router-link>
			
		</ul>
	</div>
</template>
<script>
	export default{
		name:'Bottom',
		components:{},
		data(){
			return {
				name:'我是bottom'
			}
		}
	}
</script>
<style lang="less" scoped>
 @import '../../styles/main.less';	
 

.bottom{
	.h(50);
	background:white;
	position:fixed;
 	bottom: 0;
	    right: 0;
	    left: 0;
	    z-index:300;
	    /*z-index:999*/
	ul{
		display: flex;
 		/*flex-direction:row;*/
 		/*flex-direction:column;*/
		li{
				box-sizing: border-box;
			.padding(6,0,0,0);
			.lh(14);
			.fs(8);
			flex:1;
			display: flex;
		flex-direction:column;
		justify-content:center;
		color:#b58c78;
		/*align-content:center;*/
		/*align-items:*/
				/*.w(103.5);*/
 		.h(60);
 		
 		.fa{
 			/*font-size:35px;*/
 			.fs(20);
 			color:#b58c78;
 			/*.w(103.5);*/
 		 .h(25);
 		 /*align-items:center;*/
 		 text-align:center;
 		}
			span{
				display: block;
 		
 		 /*.w(103.5);*/
 		 .h(35);
 		 color:#b58c78;
 		 /*align-items:center;*/
 		 text-align:center;
 	}
		}
	}
	
}

</style>
