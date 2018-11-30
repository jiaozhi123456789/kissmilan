<template>
	<div>
		
		<header  class="flex">
		<div  class="l"  @click='goPage()'>
			<i   class="fa fa-angle-left"></i></div>
			<div  class="c tc t-ell "> 购物车  </div>
			<div  class="r" @click='clearCookie(goodslist)'>
				<i  class=" fa fa-trash-o" ></i>
					</span></div>
	</header>
	
	
	
	
<div id="div1">
	
	

<ul  class="cart" id="cart">

	<li   v-for="(item,index) in goodslist" :key="index" class="good">
		
	   <img  
		 :src="item.img" lazy="loaded">
	<p >{{item.name}}<br >
规格：{{item.specs}} <br >
￥{{item.price}}</p>
<i  class="fa fa-check-square-o pa" @click='deleone(goodslist,index )' style="color: #9a5b57;"></i>
<div  class="quantity pa">
	<span  @click="reduce(goodslist,index)">-</span>
	<span  class="num">{{item.qty}}</span>
	<span @click="add(goodslist,index)">+</span></div></li>

	
	
	
	</li>
	
</ul>










</div>

	<div class="hanlde" id="divzhong">
		<i class="fa fa-check-square-o cur" id="i2"></i>
		商品总价：￥{{totalCount}}
		<span class="fr"   @click="jie(goodslist,totalCount)">去结算</span>
	</div>
	

	</div>

</template>
<script>
	
	
	 import Vue from 'vue';
 import { Toast} from 'mint-ui';
import { MessageBox } from 'mint-ui';
 //  Vue.use(Toast,MessageBox);
  
	export default{
		name:'cart',
		components:{},
		data(){
		return {
			details:[1],
			count:0,
			goodslist:[]
		}
},
 computed:{
            // 计算商品总价
            totalCount(){
                let totalprice = 0;
                // 遍历拿到每一个商品对象的价格 和 数量，然后把乘积返回 
                 for(let i = 0; i < this.goodslist.length; i++){
                       let item = this.goodslist[i]
                       console.log(item)
                        console.log(item.price)
                         console.log(item.qty)
                       totalprice +=item.price * item.qty


                
            }
                 return totalprice;  
        }
            },

		methods:{
		getCookie(cname) {
	            var name = cname + "=";
	            var ca = document.cookie.split(';');
	            for(var i = 0; i < ca.length; i++) {
	                var c = ca[i];
	                while(c.charAt(0) == ' ') c = c.substring(1);
	                if(c.indexOf(name) != -1) return c.substring(name.length, c.length);
	            }
	            return "";
	            var divzhong=document.getElementById('divzhong')
            divzhong.style.visibility='visible';
      		},
      		 setCookie(cookieName, cookieValue, date, path){
				// 包装数据
//				var data = {
//					"val" : cookieValue
//				}
				// 编码
				var str = cookieName+"="+JSON.stringify(cookieValue);
				// 过期时间
				if( cookieValue ){
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
			}
						
		,
          reduce(goodslist,index){
            	
                goodslist[index].qty--
                if( goodslist[index].qty<=0){
                	 goodslist[index].qty=1
//              	  goodslist.splice(index,1)
//              	      this.setCookie('goodslist',goodslist,7);
//              let good = document.getElementsByClassName('good')[index]
//              let ul = document.getElementById('cart')
//              	  ul.removeChild(good)
//              	  
                }
             this.setCookie('goodslist',goodslist,7);
              console.log(this.goodslist.qty)
            },
            add(goodslist,index){
            	
                goodslist[index].qty++ 
             this.setCookie('goodslist',goodslist,7);
              console.log(this.goodslist.qty)
            }
            ,
            deleone(goodslist,index){
         	
         	
            MessageBox.confirm('确定删除该商品?').then(action => {
            	 goodslist[index].qty=0
                	  goodslist.splice(index,1)
              let good = document.getElementsByClassName('good')[index]
                     this.setCookie('goodslist',goodslist,7);
});
              

                  

            },


       clearCookie(goodslist){
                this.setCookie('goodslist',JSON.stringify(goodslist),-7);
             var aa=document.getElementById('div1')
                     aa.innerHTML="   <i class='fa fa-shopping-basket' style='margin-top: 200px;margin-left: 163px;color:#a36663;'></i> <p style='font-size: 13px;margin-left: 126px;color:#a36663;margin-top: 30px;'>您的购物车空空如也</p> <a href='/'><h1 style='margin-left:160px;font-size:12px;margin-top:14px;color:#a36663;'>去购物 &gt;&gt;</h1></a>"
          var divzhong=document.getElementById('divzhong')
          divzhong.style.visibility='hidden';
       
       },
       	getGoodsList(){
				this.goodslist = JSON.parse(this.getCookie('goodslist'))
				console.log(this.goodslist)
                
			},
			jie(goodslist,totalCount){
				
				if(totalCount==0){
					console.log('111')
                       Toast({
message: '亲，您的购物车还没有商品哦',
iconClass: 'fa fa-check',
duration:3000,
});
					 var aa=document.getElementById('div1')
                     aa.innerHTML="   <i class='fa fa-shopping-basket' style='margin-top: 200px;margin-left: 163px;color:#a36663;'></i> <p style='font-size: 13px;margin-left: 126px;color:#a36663;margin-top: 30px;'>您的购物车空空如也</p> <a href='/'><h1 style='margin-left:160px;font-size:12px;margin-top:14px;color:#a36663;'>去购物 &gt;&gt;</h1></a>"
          var divzhong=document.getElementById('divzhong')
          divzhong.style.visibility='hidden';
				}else{
		 

 MessageBox.confirm('亲，恭喜您购买成功').then(action => {
            	this.clearCookie(goodslist)
});
				}

			},
       goPage(){
			this.$router.go(-1)
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
        },	
	   
},

created(){
	//  this.getData(this.$route.params.id);
      this.getGoodsList()
       console.log('222')

}
}
//computed:{
//          
//          total : function(){
//              var total = 0;
//              for(var i in this.goodslist_list){
//                  total += this.goodslist_list[i].price * this.goodslist_list[i].num;
//              }
//              return total;
//          }
//      }

		
		
		
		
		
//		computed : {
//      carPanelData(){
//          return this.$store.state.carPanelData
//      },
//      count(){
//          return this.$store.getters.totleCount
//      },
//      totle(){
//           return this.$store.getters.totlePrice
//      }
//}


	
	
</script>
<style lang="less" scoped>
	  @import '../../../styles/main.less';	
	  *{
	  	 list-style: none;
	  }
	  .div1{
	  	    padding: 50px 0 60px;
    background: #fff;
    margin-top: 300px;
    
    
	  }
 .cart{
    padding-bottom: 70px;
    .fs(12);
     margin-top: 50px;
    

}
.cart li{
    position: relative;
    padding: 10px;
  
    box-shadow: 0 2px 10px #ccc;
}
.cart li>img{
    float: left;
    width: 100px;
    height: 100px;
    margin-right: 10px;
}
.cart li>p{
	margin-top: 50pxs;
    line-height: 33.3px;
    color: #9a5b57;
}
.cart li .fa-check-square-o{
    font-size: 20px;
    right: 15px;
    top: 33px;
    color: #ccc;
}
.pa {
    position: absolute;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.cart li .quantity{
    right: 10px;
    bottom: 13px;
    line-height: 30px;
}
.pa {
    position: absolute;
}
.cart li .quantity>span{
    height: 30px;
    width: 30px;
    text-align: center;
    margin: 0 2px;
    background: #9a5b57;
    color: #fff;
    border: 1px solid #9a5b57;
    display: inline-block;
    vertical-align: middle;
    border-radius: 3px;
}
.cart li .quantity>span.num{
    width: 45px;
    background: #fff;
    color: #9a5b57;
}

.cart li .quantity>span{
    height: 30px;
    width: 30px;
    text-align: center;
    margin: 0 2px;
    background: #9a5b57;
    color: #fff;
    border: 1px solid #9a5b57;
    display: inline-block;
    vertical-align: middle;
    border-radius: 3px;
}
.cart li .quantity>span{
    height: 30px;
    width: 30px;
    text-align: center;
    margin: 0 2px;
    background: #9a5b57;
    color: #fff;
    border: 1px solid #9a5b57;
    display: inline-block;
    vertical-align: middle;
    border-radius: 3px;
}

.hanlde {
	.fs(12);
 	.w(375);
 	.h(53);
 	.lh(53);
  position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e5e6e8;
    text-indent: 7px;
    color: #9a5b57;
    z-index: 1;
    visibility:'hidden';
    
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

.div6{
	.w(100);
	.h(400);
	background: red;
	font-size: 99px;
}
.null .fa-shopping-basket {
    font-size: 50px;
    margin: 30px 0;
}
.fa {
    display: inline-block;
   
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>



