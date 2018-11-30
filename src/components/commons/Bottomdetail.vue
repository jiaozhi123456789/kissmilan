<template>
	
	<div class="handle tc">
		<span  @click="tishi()">加入购物车</span>
		<span class="now">立即订购</span>
	</div>
	
</template>
<script>
	 import Vue from 'vue';
 import { Toast} from 'mint-ui';
   Vue.use(Toast);
	export default{
		name:'Bottomdetail',
		components:{},
		data(){
			return {
				name:'我是bottom',
				toast:''
			}
		},
		methods:{
				tishi(){
				 this.toast=Toast({
			  message: '添加成功',
			  iconClass: 'icon icon-success'
//			    position: 'bottom',
//duration: 500
		});//发起请求
			}	
		}	
	}	
	
</script>
<style lang="less" scoped>
 @import '../../styles/main.less';	
 

 .handle {
 	.w(375);
 	.h(50);
 	.lh(30);
    position: fixed;
      .padding(10,0,10,0);
  
    background: #e1e1e1;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.tc {
    text-align: center;
}
 .handle>span {
  .h(40);
    .lh(40);
    background: #4a2321;
    color: #fff;
    width: 45%;
    margin: 0 1%;
    .fs(14);
    text-align: center;
    display: inline-block;
}
 .handle .now {
    background: #7b4342;
}



</style>