<template>
	
	
	<div class="goods">
		
	<header  class="flex">
		<div  class="l">
			<i  class="fa fa-angle-left"></i></div>
			<div  class="c tc t-ell pa">蛋糕名录  </div>
			
			<div  class="r"  @click='gocart()' >
				<i  class="fa fa-shopping-cart"></i><span  class="pa">
					</span></div>
	</header>
	
	 
<div class='contain'>
            <nav>
				<ul>
					<li @click="selItem(item)" :class="sel===item?'hl':''" v-for="(item,index) in nav" :key="index">{{item}}</li>
				</ul>
			</nav>
			</div>
			


<router-view :hello='nav'></router-view>
	<Bottom></Bottom>
	
	</div>
</template>
<script>
//import Headertwo from '../../../components/commons/Headertwo'//引入组件	

import Bottom from '../../../components/commons/Bottom'//引入组件
import g8 from './g8'
import g9 from './g9'
import g1 from './g1'
import g2 from './g2'
import g3 from './g3'
import g4 from './g4'
import g0 from './g0'
export default{
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'goods',
	components:{Bottom,g8 ,g9,g1,g2 ,g3,g4,g0 },
	data(){
		return {
			nav:['全部','卡通系列','礼盒系列','慕斯蛋糕','乳脂奶油蛋糕','芝士蛋糕','巧克力蛋糕'],
			sel:'',
			moviegoods:[],
			page:1,
			count:8,
			shop_id:5,
			category_id:4
			
		}
},
methods:{
		loadMore(){
			this.getData();
		},
		 gocart(){
			this.$router.push({path:'/cart'})
		},
		selItem(item){
			
			if(item=='卡通系列')
//			  this.$router.push({
//        path: '/describe',
//        query: {
//          id: id
//        }
//      })
			this.$router.push({path:'/goods/9'})
			if(item=='礼盒系列')
			this.$router.push({path:'/goods/8'})
				if(item=='慕斯蛋糕')
			this.$router.push({path:'/goods/1'})
			if(item=='乳脂奶油蛋糕')
			this.$router.push({path:'/goods/2'})
			if(item=='芝士蛋糕')
			this.$router.push({path:'/goods/3'})
				if(item=='巧克力蛋糕')
			this.$router.push({path:'/goods/4'})
				if(item=='全部')
			this.$router.push({path:'/goods/0'})
			this.sel=item
		},
		getData(){
         
			//http://anode.kissmilan.com/o/home/product?shop_id=5&category_id=0&page=1&page_size=8
//			https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
			this.toast=Toast({
			  message: 'loading',
			  iconClass: 'fa fa-spinner'
			});
			发起请求
          //   oss.kissmilan.com/product/20181009/01c0840ebe014427.jpg
           //  http://anode.kissmilan.com/o/home/product?shop_id=5&category_id=0&page=1&page_size=8
			this.$axios.get('/api/o/home/product')
			,{params:{
				shop_id:5,
				category_id:0,
				page:1,
				page_size:8
			}}
			.then((res)=>{
				console.log(res)
				this.moviegoods=res.data
				console.log(res.data);
				//this.page++
				//this.toast.close();
			})
			.catch((err)=>{
				//this.toast.close();
				console.log(err)
			})
		}
	},
	created(){   
         var aa= this.$route.params.id
           console.log(aa)
         
        this.getData();
	}
	

}











</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	


.contain{
	   border-bottom: 1px solid #492321;
	.w(357);
.fs(12);
	 width: 100%;
    position: fixed;
   left: 0;
   top: 50px;
		 white-space: nowrap;
		  overflow: hidden;
   overflow-x: scroll;
   
		ul{.fs(12);
			 .h(35);
			
    .lh(35);
		  
		   display: flex;
		   justify-content: space-between;
		   border-bottom:1px solid #492321; 
		   li{.fs(12);
               width: 50%;
            background:#fff;
              .h(35);
              .lh(45);
              text-align:center;
              border-bottom: 2px solid #fff;
                  padding: 0 15px;
    display: inline-block;
    color: #492321;
    opacity:0.8;
		   }
		   .hl{
		   	color:#492321;
		   	border-bottom: 8px solid #492321;
		   }
		}
		.goods-contain{
			.goods-item{
			border-bottom:4px dashed #bbb;
				.w(345);
				.h(125);
				img{
					.w(60);
					.h(82);
				}
			}
		}
	}

/*.category {
	
.w(357);
.fs(12);
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0;
    overflow: hidden;
   overflow-x: scroll;
  .h(35);
    .lh(35);
    border-bottom: 1px solid #492321;
    white-space: nowrap;
    background: #fff;
}



.category>a{
    padding: 0 15px;
      .padding(0,15,0,15);
    display: inline-block;
    color: #492321;
}
.category>a {
    padding: 0 15px;
    display: inline-block;
    color: #492321;
}

.router-link-active {
    position: relative;
   
}
.router-link-active:after {
    content: "";
    position: absolute;
    height: 3px;
    background: #492321;
    width: 100%;
    left: 0;
    bottom: 0;
}
*/
/*header*/
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