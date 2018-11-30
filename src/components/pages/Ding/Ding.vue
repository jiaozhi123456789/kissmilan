<template>
	<div class="order">
	<header  class="flex">
		<div  class="l"  @click='goPage()'>
			<i  class="fa fa-angle-left"></i></div>
			<div  class="c tc t-ell ">  我的订单</div>
				<div  class="r"  @click='gocart()' >
				<i  class="fa fa-shopping-cart"></i></div>
	</header>
    {{name}}
    <ul>
    	<li @click="setItem(item)" :class="sel===item?'h1':''" v-for="(item,index) in list" :key="index">
    		<span>{{item}}</span>
    	</li>
    </ul>
  <Bottom></Bottom>
	</div>
</template>
<script>
//import Header from '../../../components/commons/Header'
import Bottom from '../../../components/commons/Bottom'//引入组件
export default{
	name:'Order',
	components:{Bottom},
	data(){
		return {
			name:'我的订单',
			list:['我的订单','门店订单'],
			sel:'我的订单',
		}
	},
	methods:{
	setItem(item){
		this.sel=item;
	},
	 gocart(){
			this.$router.push({path:'/cart'})
		},
		 goPage(){
			this.$router.go(-1)
		}
},

	created(){
		if(this.$store.state.login){
			console.log(this.$store.state.login);
			this.$router.replace('/user/order')
		}else{
		this.$router.push('/login')
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../../styles/main.less';
 	.order{
 		.h1{
 			border-top:1px solid #854d4b;
 			border-right:10px solid #854d4b;
 			border-bottom:1px solid #854d4b;
 			border-left:1px solid #854d4b;
 		}
 		position:absolute;
 		.top(0);
 		.left(0);
 		z-index:333;
 		.w(375);
 		.h(567);
 		background:white;
 		ul{
 			.w(375);
 			.h(53);
 			.mt(20);
 			/*.padding(0,5,0,5);*/
 			border-bottom: 1px solid #ddd;
 			li{
 				border:1px solid gray;
 				.ml(22);
 				.w(150);
 				.h(30);
 				.lh(30);
 				text-align:center;
 				float: left;
 				.fs(12);
 				    color: #a36663;
 			}
 			
 		}
 		
 	}
 
  
  
  
  
  header {
	
    .h(50) ;
    .lh(50);
    -ms-flex-pack: justify;
    justify-content: space-between;
    box-shadow: 0 -2px 10px #ccc;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 10;
}
.flex {
    display: flex;
}
header .l {
    .padding(0,0,0,10);
    max-width: 25%;
    color: #8f5451;
}
header .l .fa.fa-angle-left {
    .fs (28);
}
header .l .fa {
  
    vertical-align: middle;
    margin-top: -3px;
    position: relative;
}
.fa-angle-left:before {
    content: "\F104";
}
header .c {
    width: 65%;
    left: 17.5%;
    font-size: 14px;
    color: #a36663;
}
.t-ell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.tc {
    text-align: center;
}
.pa {
    position: absolute;
}
header .r {
   .padding(0,10,0,10);
    color: #8f5451;
}
header .r .cart {
    color: #8f5451;
}
div {
    display: block;
}
.pr {
    position: relative;
}
header .r .fa {
  .fs(22);
    vertical-align: middle;
    margin-top: -3px;
    position: relative;
}
.fa-shopping-cart:before {
    content: "\F07A";
}
header .r .cart>span {
	  .fs(12);
	display: block;
    top:6px;
    right: -8px;
    border: 1px solid #fff;
    background: #8f5451;
    color: #fff;
    height: 17px;
    .lh(18);
 
    .padding(0,5,0,5);
    border-radius: 50%;
    transform: scale(.8);
}
.pa {
    position: absolute;
    
}

.img5{
.w(100);
.h(100);
}


</style>
