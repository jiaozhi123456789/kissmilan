<template>
	
	<div class="hanlde">
		<i class="fa fa-check-square-o cur"></i>
		商品总价：￥148.00
		<span class="fr">去结算</span>
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
 
.hanlde {
	.fs(12);
 	.w(375);
 	.h(53);
 	.lh(53);
  position: fixed;
    bottom: 0;
    left: 0;
    right:50px;

   
    background: #e5e6e8;
    text-indent: 7px;
    color: #9a5b57;
    z-index: 1;
}

.hanlde>.fa.cur  {
    color: #9a5b57;
}

.hanlde>.fa {
    font-size: 22px;
    vertical-align: middle;
    margin-right: 20px;
  
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
 
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;

}
.fa-check-square-o:before {
	.w(17.28);
	.h(22);
    content: "\F046";
}
.hanlde>span {
    padding: 0 20px;
    background: #492321;
    color: #fff;
    text-indent: 0;
    font-size: 14px;
    letter-spacing: 2px;
}
.fr {
	.w(50);
	.h(53);
    float: right;
    
}


</style>
