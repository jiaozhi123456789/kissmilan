<template>
	
	<div class="hanlde">
		<i class="fa fa-check-square-o cur"></i>
		商品总价：￥148.00
		<span class="fr">去结算大修改2</span>
	</div>
	
</template>
<script>
	export default{
		name:'Bottomcart',
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
 


.div1{
  background-color: orange;
}
.hanlde>span {
    padding: 0 20px;
    background: #492321;
    text-indent: 0;
    font-size: 19px;
    letter-spacing: 2px;
}
 .fe{
   display: inline-block;
   font: normal normal normal 14px/1 FontAwesome;

   text-rendering: auto;
   -webkit-font-smoothing: antialiased;

 }
.fr {
	.w(50);
	.h(53);
    float: right;
    
}
 .fl {
   .w(50);
   .h(53);
   float: left;

 }

</style>
