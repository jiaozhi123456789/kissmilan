<template>
	<div class="info">
	<header  class="flex">
		<div  class="l"  @click='goPage()'>
			<i  class="fa fa-angle-left"></i></div>
			<div  class="c tc t-ell ">  会员中心</div>
				<div  class="r"  @click='gocart()' >
				<i  class="fa fa-shopping-cart"></i></div>
	</header>
    <!--{{title}}-->
    <div class="container">
    	<div class="info-top">
	    	<div class="info-top-left">
	    		<div class="circle">
	    			<img src="http://oss.kissmilan.com/fixed/20181011/67bc3378f89ec850.jpeg" />
	    		</div>
	    	</div>
	    	<div class="info-top-right">
	    		<p>
	    			<i class="icon-top fa fa-user-circle"></i>
	    			<span >昵称：{{ncheng}}</span>
	    		</p>
	    		<p>
	    			<i class="icon-top1 fa fa-mobile"></i>
	    			<span>{{getus}}</span>
	    		</p>
	    		<p>
	    			<i class="icon-top3 fa fa-cny"></i>
	    			<span>余额：0.00</span>
	    		</p>
	    		<p>
	    			<a><span class="chongzhi">充值</span></a>
	    			<span class="ma">我的二维码</span>
	    		</p>
	    		<!--<a @click="toggle"><i class="pa fa fa-angle-double-right"></i></a>-->
	    		<router-link to="/user/set"><i class="pa fa fa-angle-double-right"></i></router-link>
	    	</div>
    	</div>
    	<div class="info-main">
    		<ul>
    			<li>
    				<i class="fa fa-money"></i>
    				<span >待付款</span>
    			</li>
    			<li>
    				<i class="fa fa-truck"></i>
    				<span>待付款</span>
    			</li>
    			<li>
    				<i class="fa fa-check-square-o"></i>
    				<span>已完成</span>
    			</li>
    			<li>
    				<i class="fa fa-volume-control-phone"></i>
    				<span>客服</span>
    			</li>
    			<li class="angle-right">
    				<i class="fa fa-angle-right"></i>
    				<span></span>
    			</li>
    			<li>
    				<i class="fa fa-clipboard"></i>
    				<span>我的订单</span>
    			</li>
    			<li>
    				<i class="fa fa-map-pin"></i>
    				<span>收货地址</span>
    			</li>
    			<li>
    				<i class="">0</i>
    				<span>积分</span>
    			</li>
    			<li>
    				<i class="">0</i>
    				<span>我的礼券</span>
    			</li>
    			<li>
    				<i class="fa fa-gift"></i>
    				<span>礼券领取</span>
    			</li>
    			<li class="angle-right">
    				<i class="fa fa-angle-right"></i>
    				<span></span>
    			</li>
    			<li>
    				<i class="fa fa-google-wallet"></i>
    				<span>我的权益</span>
    			</li>
    		</ul>
    	</div>
    </div>
    <!--<button @click="logout">推出</button>-->
    <!--<InfoUpdate :show='isShow'></InfoUpdate>-->
   <Bottom></Bottom>
	</div>
</template>
<script> 
import Bottom from '../../../components/commons/Bottom'//引入组件
//import InfoUpdate from './InfoUpdate'
export default{
	name:'info',
	components:{Bottom},
	data(){
		return {
			title:'info',
			isShow:false,
			getus:'',
			ncheng:'暂无',
		}
	},
	methods:{
		gocart(){
			this.$router.push({path:'/cart'})
		},
		 goPage(){
			this.$router.go(-1)
		}
	},
	updated(){
		 var nc=storage.getItem("昵称");
            if(nc){
            	this.ncheng=nc;
            }else{
            	this.ncheng='暂无'
            }
	},
	created(){
//		console.log(this.isShow);
		var storage=window.localStorage;
			var json=storage.getItem("datas");
//			console.log(json)
            var jsonObj=JSON.parse(json);
            console.log(jsonObj);
            this.getus=jsonObj.us;
            
            var nc=storage.getItem("昵称");
            if(nc){
            	this.ncheng=nc;
            }else{
            	this.ncheng='暂无'
            }
            
		
	}

}
</script>
<style lang="less" scoped>
@import '../../../styles/main.less';
.info{	
	/*background: pink;*/
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

	 .container{
	 	border-sizing:border-box;
	 	.w(355);
	 	/*.h(667);*/
	 	.mt(71);
	 	.padding(0,10,0,10);
		.info-top{
			.mt(81);
			.h(106);
			.w(352.5);
			display:flex;
			
			.info-top-left{
				float:left;
				flex:1;
				.w(123.38);
				.h(100);
				.circle{
					img{
					.w(100);
					.h(100);
					/*border:1px solid blue;*/
					border-radius:50%;
				}
				}
				
			}
			.info-top-right{
				display:relative;
				flex:1;
				float:left;
				.w(229.13);
				.h(106);
				p{
					.h(25);
					.w(219.13);
					.fs(12);
					i{
						.fs(14);
						.w(14);
						text-align:center;
					}
					span{
						.ml(10)
					}
					a{
						.chongzhi{
							.padding(2,8,2,8);
							.w(40);
						.h(20);
						background:#a36663;
						color:white;
						}
						
					}
					.ma{
						.w(76);
						.h(20);
						.padding(2,8,2,8);
						background:#a36663;
						color:white;
					}
				}
				.pa{
					.w(13.72);
					.h(24);
					position:absolute;
					right: 10px;
				    top: 105px;
				    font-size: 24px;
				    color: #a36663;
				}
			}
		}
		
		
		.info-main{
			ul{
				.w(352.5);
				.h(100);
				/*display:flex;
				flex-direction:row;*/
				li{
					float:left;
					.w(66.97);
					.h(49);
					display:flex;
					flex-direction:column;
					/*align-items:center;*/
					/*border:1px solid gray;*/
					justify-content:center;
					align-content:center;
					text-align:center;
					color:#8f5451;
					i{
						.h(26);
						.fs(26);
					}
					span{
						.fs(12);
						.h(13);
					}
					
				}
				.angle-right{
						.w(17.63);
						.fs(14)
					}
			}
		}

	 }
	
	
}
</style>
