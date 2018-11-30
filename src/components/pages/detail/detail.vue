<template>	
<div>

	<header  class="flex">
		<div  class="l"  @click='goPage()'>
			<i  class="fa fa-angle-left"></i></div>
			<div  class="c tc t-ell ">  {{details.name}}</div>
				<div  class="r"  @click='gocart()' >
				<i  class="fa fa-shopping-cart"></i></div>
	</header>
	
	<div data-v-1d5181a3="" class="goods-detail content" style="overflow-y: visible;">
	<div class="mint-swipe" style="height: 375px;">
	<div class="mint-swipe-items-wrap">
	<div class="mint-swipe-item is-active">
	<!--:src="item.cover.origin"-->
	<img :src="details.wap_pictures[0].wap_picture" width="100%">
	</div></div> 
	<div class="mint-swipe-indicators">
	<div class="mint-swipe-indicator is-active">
	</div>
	</div>
	</div>
	<div class="info"><h1 class="name"> {{details.name}}</h1>
	<div class="desc">
	
	
	
	
	
<p class="MsoNormal" style="line-height: 15.75pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
	<span style="font-family: 微软雅黑; color: rgb(118, 54, 31); font-size: 9pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
	<font face="微软雅黑">使用新西兰天然牧场乳脂奶油，搭配柔软的戚风蛋糕坯，口感细腻。精髓在于蛋糕夹层中的杏仁片，细细咀嚼，回味绵长。</font></span>
	<span style="font-family: 微软雅黑; color: rgb(118, 54, 31); font-size: 9pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
	<o:p></o:p>
	</span></p>
	
	
	
	</div>
	<div class="flex link" ><span style="width: 230.33px;height:33px;font-size:13px;" >规格数量选择  （{{details.specs[0].name}}）    ×  1</span>
	<i class="fa fa-angle-double-right"></i></div>
	<div class="proinfo"><img src="http://oss.kissmilan.com/editor/20180920/c6749c0a2174f546.">
	
	
	<!--:src="details.wap_pictures[0].wap_picture-->
	<img  :src="details.cover.pc_cover" style="width:345px;">
	<img :src="details.pc_pictures[2].pc_picture">
	
	<img    :src="details.cover.pc_cover">
	<img    :src="details.pc_pictures[1].pc_picture">
<!--	<img :src="details.pc_pictures[3].pc_picture" class="img5">-->
	
	<!--<div  v-html='wap_description' class="div1">{{wap_description}}</div>-->
	
	</div></div>
	</div>

	<div class="handle tc">
		<span @click="jiacart(details.id,details.name,details.specs[0].name,details.specs[0].discount_price,details.cover.pc_cover)" >加入购物车</span>
		<span class="now">立即订购</span>
	</div>
	

</div>
</template>
<script>
  import Vue from 'vue';
 import { Toast} from 'mint-ui';

   Vue.use(Toast);
		//import Headerdetail from '../../../components/commons/Headerdetail'//引入组件	
// import  Bottomdetail  from '../../../components/commons/Bottomdetail'//引入组件	
export default{

       
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'detailmiddle',
	components:{},
	data(){
		return {
			
			sel:'全部',
			details:[],
			pc_description:[],
			wap_description:[],
			total:[],
			page:1,
			count:8,
			shop_id:5,
			category_id:8,
			goods:''
		}
},
methods:{
goPage(id){
			this.$router.push({ path: `/goods/detail/${id}`})
		},
	getData(id){
	//http://anode.kissmilan.com/o/home/product/71/5
	//"api/o/home/product/"+item.id+"/5"
//	this.toast=Toast({
//			  message: '添加成功',
//			  iconClass: 'icon icon-success'
//			   			});//发起请求
		this.$axios.get("api/o/home/product/"+id+"/5")
			.then((res)=>{
				//this.details=res.data.describe
			
			this.details=res.data
//				this.pc_description=res.data.pc_description
				this.wap_description=res.data.wap_description
//				this.total=this.details.concat(this.pc_description)
//				this.total=res.data
				
				console.log(res.data.pc_pictures[1].pc_picture)
				//this.page++
				//this.toast.close();
				//console.log(res.data.wap_pictures[0].wap_picture)
			//	console.log(res.data.wap_description)
			//	console.log(res.data.pc_pictures[2].pc_picture)
				
				
				
				
				
			})
			.catch((err)=>{
				//this.toast.close();
				console.log(err)
			})
},
  goPage(){
			this.$router.go(-1)
		},
		 setCookie(cookieName, cookieValue, date, path){
	// 包装数据
	var data = {
		"val" : cookieValue
	}
	// 编码
	var str = cookieName+"="+encodeURIComponent(JSON.stringify(data));
	// 过期时间
	if( date ){
		var dt = new Date();
		dt.setDate(dt.getDate()+date);
		str += ";expires="+dt.toGMTString();
	}
	// path属性
	if( path ){
		str += ";path="+path;
	}
	// 设置cookie
	document.cookie = str;
},
		
		
		    getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while(c.charAt(0) == ' ') c = c.substring(1);
                if(c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        }
,
		
		
		
		
   gocart(){
			this.$router.push({path:'/cart'})
		},
		
		
  jiacart(id,name,specs,price,img){
  
      Toast({
  message: '添加成功',
  iconClass: 'fa fa-check',
  duration:2000
});
  
		console.log(id)
		   var idx
		   
		var goodslist = this.getCookie('goodslist') ||[]
 
	 if(typeof goodslist === 'string'){
			goodslist = JSON.parse(goodslist);
		}
		     console.log(goodslist)
		
		  var idx;
   
		 var has = goodslist.some(function(g,i){//0，1，2，3，4
					// 遍历goodslist，当得到一个true时，终止遍历
					idx = i;
					return g.id === id;
				});

                   if(has){
					// 如果存在，则qty++
					goodslist[idx].qty++;
					console.log(goodslist[idx].qty)
				}
				else{
				var goods = {
					id:id,
						name:name,
						specs:specs,
						price:price,
						img:img,
						qty:1
					}
goodslist.push(goods);
						}
						
				
         
 document.cookie = 'goodslist='+ JSON.stringify(goodslist);
	},
		     

selItem(){
			
router.push({ path: 'goods/detail', query: { plan: 'private' }})
			
		}
},
  aa(){
//this.toast=Toast({
//			  message: '添加成功',
//			  iconClass: 'icon icon-success'
//			   
//		});//发起请求
//this.toast.show();
console.log('111')
     },
   

created(){
       this.getData(this.$route.params.id);
        console.log('卡通');
         console.log(this.$route.params.id);
         let a=document.querySelector(".div1 p img")
	console.log()
},
mounted(){
	let a=document.querySelector(".div1 p img")
	console.log(a)
//	this.aa()
}

}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	
 
.content[data-v-1d5181a3] {
    padding: 50px 0 60px;
    background: #fff;
}
.mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    
}
.mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 100%;
}
.mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    
    height: 100%;
}
img {
    border-style: none;
}
.mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
  
    transform: translateX(-50%);
}
.mint-swipe-indicator.is-active {
    background: #fff;
}
.goods-detail .info {
    padding: 0 15px 20px;
    background: #fff;
}
.goods-detail .info .name {
    color: #522725;
    font-size: 14px;
    margin: 10px 0;
    line-height: 1.3;
}
.goods-detail .info .desc, .goods-detail .info .proinfo {
    margin: 10px 0;
}
element.style {
    line-height: 15.75pt;
    background-image: initial;
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
}

element.style {
    font-family: 微软雅黑;
    color: rgb(118, 54, 31);
    font-size: 9pt;
    background-image: initial;
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
}
.goods-detail .info .link {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 33px;
    line-height: 33px;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    color: #76361f;
    margin-top: -1px;
}
.flex {
    display: flex;
}
.goods-detail .info .link .fa {
    margin-top: 7px;
    font-size: 18px;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fa-angle-double-right:before {
    content: "\F101";
}
.goods-detail .info .desc, .goods-detail .info .proinfo {
    margin: 10px 0;
}
.goods-detail .info img {
    max-width: 100%!important;
}
img {
    border-style: none;
}
.div1 img{

.w(345);
.h(191.66);
}
/*
bottom*/
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

.img5{
.w(100);
.h(100);
}





</style>
