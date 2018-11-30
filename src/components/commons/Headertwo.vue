<template>
	<div>
	<header  class="flex">
		<div  class="l">
			<i  class="fa fa-angle-left"></i></div>
			<div  class="c tc t-ell pa">蛋糕名录  </div>
			
			<div  class="r"  @click='goPage()' ><a   class="cart pr">
				<i  class="fa fa-shopping-cart"></i><span  class="pa">
					2</span></a></div>
	</header>
	
	</div>

</template>
<script>
	export default{
		name:'Headertwo',
		components:{},
		data(){
			return {
				name:'我是header'
			}
		},
		methods:{
	
goPage(id){
			this.$router.push({ path:'/cart' })
		},

}

	}
</script>
<style lang="less" scoped>
 @import '../../styles/main.less';	
 
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





</style>



