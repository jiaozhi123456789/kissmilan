<template>	
	<div class="body" >
	
	<div data-v-1d5181a3=""><div data-v-4be4c334="" data-v-1d5181a3=""><header data-v-4be4c334="" class="flex"><div data-v-4be4c334="" class="l"><i data-v-4be4c334="" class="fa fa-angle-left"></i></div><div data-v-4be4c334="" class="c tc t-ell pa">Little Pig 小猪  </div><div data-v-4be4c334="" class="r"><a data-v-4be4c334="" href="/cart" class="cart pr"><i data-v-4be4c334="" class="fa fa-shopping-cart"></i><span data-v-4be4c334="" class="pa">3</span></a></div><!----></header><div data-v-4be4c334="" class="city-box" style="display: none;"><div data-v-4be4c334="" class="cv"></div><div data-v-4be4c334="" class="m"><h1 data-v-4be4c334="">选择城市</h1><span data-v-4be4c334="" class="fsz12">成都</span><span data-v-4be4c334="" class="fsz12">重庆</span></div></div></div><div data-v-1d5181a3="" class="goods-detail content" style="overflow-y: visible;"><div class="mint-swipe" style="height: 375px;"><div class="mint-swipe-items-wrap"><div class="mint-swipe-item is-active"><img src="http://oss.kissmilan.com/product/20180920/b6978f8ed94963bd.jpg" width="100%"></div></div> <div class="mint-swipe-indicators"><div class="mint-swipe-indicator is-active"></div></div></div><div class="info"><h1 class="name"><!----> Little Pig 小猪</h1><div class="desc"><p class="MsoNormal" style="line-height: 15.75pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 微软雅黑; color: rgb(118, 54, 31); font-size: 9pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="微软雅黑">使用新西兰天然牧场乳脂奶油，搭配柔软的戚风蛋糕坯，口感细腻。精髓在于蛋糕夹层中的杏仁片，细细咀嚼，回味绵长。</font></span><span style="font-family: 微软雅黑; color: rgb(118, 54, 31); font-size: 9pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p></div><div class="flex link"><span>规格数量选择  （一只 ）&nbsp;&nbsp;&nbsp;&nbsp;×  1</span><i class="fa fa-angle-double-right"></i></div><!----><!----><div class="proinfo"><img src="http://oss.kissmilan.com/editor/20180920/c6749c0a2174f546."><img src="http://oss.kissmilan.com/editor/20180920/8fbd8e4aa8b2093c."><img src="http://oss.kissmilan.com/editor/20180920/5f65ea586d915770."><img src="http://oss.kissmilan.com/editor/20180920/308acd824e38a618."><img src="http://oss.kissmilan.com/editor/20180920/10c4e3441e2e6dbe."></div></div><div class="mint-actionsheet" style="display: none;"><ul class="mint-actionsheet-list" style="margin-bottom: 5px;"></ul> <a class="mint-actionsheet-button">取消</a></div><div class="attr-box" style="display: none;"><h1>￥148.00</h1><!----><img src="http://oss.kissmilan.com/spec_picture/20180920/85e3caed46b0c363.jpg"><div class="specs"><span class="cur">一只</span></div><div class="quantity"><label>数量</label><div class="set inline"><span>-</span><span class="num">1</span><span>+</span></div><!----></div><p class="tc"><span class="btn">确定</span></p><p class="flex join-handle" style="display: none;"><span class="cancel">取消</span><span class="confirm">确定参团</span></p></div><div style=""><div class="handle tc"><span>加入购物车</span><span class="now">立即订购</span></div></div><div data-v-e6de2eb4="" class="follow-tip tc" style="display: none;"><img data-v-e6de2eb4="" src=""><p data-v-e6de2eb4="">需要关注公众号才能参团哦 <br data-v-e6de2eb4="">（长按二维码识别后关注）</p></div></div><nav data-v-a09a8fe8="" data-v-1d5181a3="" class="flex" style="display: none;"><a data-v-a09a8fe8="" href="/" class="router-link-active"><div data-v-a09a8fe8=""><i data-v-a09a8fe8="" class="fa fa-home"></i><p data-v-a09a8fe8="">首页</p></div></a><a data-v-a09a8fe8="" href="/goods/0" class=""><div data-v-a09a8fe8=""><i data-v-a09a8fe8="" class="fa fa-th-large"></i><p data-v-a09a8fe8="">蛋糕名录</p></div></a><a data-v-a09a8fe8="" href="/user/order" class=""><div data-v-a09a8fe8=""><i data-v-a09a8fe8="" class="fa fa-file-text"></i><p data-v-a09a8fe8="">我的订单</p></div></a><a data-v-a09a8fe8="" href="/user" class=""><div data-v-a09a8fe8=""><i data-v-a09a8fe8="" class="fa fa-user"></i><p data-v-a09a8fe8="">会员中心</p></div></a></nav></div>

	</div>
</template>
<script>
	//import Headerdetail from '../../../components/commons/Headerdetail'//引入组件	
//import  Bottomdetail  from '../../../components/commons/Bottomdetail'//引入组件	
export default{
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'detailmiddle',
	components:{},
	data(){
		return {
			nav:['全部','卡通系列','礼盒系列','慕斯蛋糕','乳脂奶油蛋糕','芝士蛋糕','巧克力蛋糕'],
			sel:'全部',
			describe:[],
			pc_description:[],
			wap_description:[],
			total:[],
			page:1,
			count:8,
			shop_id:5,
			category_id:8,
			goods:''
		}
}

}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	


	.body {
    margin: 0;
    height: 100vh;
    font-size: 12px;
}
.content[data-v-1d5181a3] {
    padding: 50px 0 60px;
    background: #fff;
}
nav[data-v-a09a8fe8] {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 7px 0;
    background: #fff;
    box-shadow: 0 2px 10px #ccc;
    z-index: 0;
}
div {
    display: block;
}
header[data-v-4be4c334] {
    height: 50px;
    line-height: 50px;
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
header .l[data-v-4be4c334] {
    padding-left: 10px;
    max-width: 25%;
    color: #8f5451;
}
header .c[data-v-4be4c334] {
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
.city-box[data-v-4be4c334] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 111;
}
.city-box .cv[data-v-4be4c334] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: .5;
}
.city-box .m[data-v-4be4c334] {
    position: absolute;
    background: #fff;
    padding-bottom: 10px;
    width: 90%;
    left: 5%;
    top: 20%;
    z-index: 1;
}
.city-box .m h1[data-v-4be4c334] {
    line-height: 60px;
    color: #8f5451;
    border-top: 3px solid #8f5451;
    font-size: 18px;
    font-weight: 100;
    text-indent: 10px;
}
.city-box .m span[data-v-4be4c334] {
    display: inline-block;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    margin: 0 5px 5px;
    color: #8f5451;
    background: #f7f7f8;
}
.city-box .m span[data-v-4be4c334] {
    display: inline-block;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    margin: 0 5px 5px;
    color: #8f5451;
    background: #f7f7f8;
}
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
.mint-swipe-items-wrap>div.is-active {
    display: block;
  
    transform: none;
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
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fa-angle-double-right:before {
    content: "\F101";
}
.goods-detail .info img {
    max-width: 100%!important;
}
img {
    border-style: none;
}
.mint-actionsheet {
    position: fixed;
    background: #e0e0e0;
    width: 100%;
    text-align: center;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%,0,0);

    backface-visibility: hidden;
    transition: transform .3s ease-out;
}
.mint-actionsheet-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
.mint-actionsheet-button, .mint-actionsheet-listitem {
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 18px;
    color: #333;
    background-color: #fff;
}
a {
    text-decoration: none;
}
.mint-actionsheet {
    position: fixed;
    background: #e0e0e0;
    width: 100%;
    text-align: center;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%,0,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: transform .3s ease-out;
}
.goods-detail .attr-box {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    background: hsla(0,0%,100%,.9);
    bottom: 0;
    z-index: 2;
    overflow: auto;
    padding-bottom: 20px;
}
.goods-detail .attr-box>h1 {
    color: #522725;
    font-size: 16px;
    padding-top: 10px;
}

.goods-detail .attr-box>* {
    padding-left: 15px;
    padding-right: 15px;
}
.goods-detail .attr-box>img {
    width: 100%;
    margin: 10px 0;
    padding: 0;
}
.goods-detail .attr-box>* {
    padding-left: 15px;
    padding-right: 15px;
}
.goods-detail .attr-box .specs>span.cur {
    background: #fff;
    border: 1px solid #753724;
    position: relative;
}

.goods-detail .attr-box .specs>span {
    margin: 5px;
 
    color: #753724;
    padding: 8px 15px;
 
    display: inline-block;
}
.goods-detail .attr-box>* {
    padding-left: 15px;
    padding-right: 15px;
}
.goods-detail .attr-box .quantity {
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
}
label {
    cursor: default;
}
.goods-detail .attr-box .quantity .set {
    margin-left: 20px;
}
.inline {
    display: inline-block;
}
.goods-detail .attr-box .quantity .set>span {
    height: 28px;
    width: 28px;
    text-align: center;
    display: inline-block;
    color: #fff;
    background: #753724;
    border: 1px solid #753724;
    margin: 0 2px;
    font-size: 16px;
    vertical-align: middle;
}
.goods-detail .attr-box .quantity .set>span.num {
    background: #fff;
    color: #753724;
    font-size: 12px;
}
.goods-detail .attr-box .quantity .set>span {
    height: 28px;
    width: 28px;
    text-align: center;
    display: inline-block;
   
    background: #753724;
    border: 1px solid #753724;
    margin: 0 2px;

    vertical-align: middle;
}
.goods-detail .attr-box .quantity .set>span {
    height: 28px;
    width: 28px;
    text-align: center;
    display: inline-block;
    color: #fff;
    background: #753724;
    border: 1px solid #753724;
    margin: 0 2px;
    font-size: 16px;
    vertical-align: middle;
}
.goods-detail .attr-box>* {
    padding-left: 15px;
    padding-right: 15px;
}
.tc {
    text-align: center;
}
.goods-detail .attr-box .btn {
    border: 1px solid #7b4342;
    height: 30px;
    line-height: 30px;
    color: #7b4342;
    display: inline-block;
    padding: 0 20px;
    margin-top: 30px;
}
.goods-detail .join-handle {
    padding-top: 20px;
}

.goods-detail .attr-box>* {
    padding-left: 15px;
    padding-right: 15px;
}
.goods-detail .join-handle .cancel {
    background: #ccc;
}

.goods-detail .join-handle>span {
    height: 35px;
    line-height: 35px;
    width: 50%;
    text-align: center;
    color: #fff;
}
.goods-detail .join-handle .confirm {
    background: #8f5450;
}

.goods-detail .join-handle>span {
    height: 35px;
    line-height: 35px;
    width: 50%;
    text-align: center;
    color: #fff;
}
.goods-detail .handle {
    position: fixed;
    padding: 10px 0;
    background: #e1e1e1;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.tc {
    text-align: center;
}
.goods-detail .handle>span {
    height: 40px;
    line-height: 40px;
    background: #4a2321;
    color: #fff;
    width: 45%;
    margin: 0 1%;
    font-size: 14px;
    text-align: center;
    display: inline-block;
}
.goods-detail .handle .now {
    background: #7b4342;
}

.goods-detail .handle>span {
    height: 40px;
    line-height: 40px;

    color: #fff;
    width: 45%;
    margin: 0 1%;
    font-size: 14px;
    text-align: center;
    display: inline-block;
}
.follow-tip[data-v-e6de2eb4] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.8);
    z-index: 2;
}
.follow-tip>img[data-v-e6de2eb4] {
    width: 150px;
    margin: 100px 0 20px;
}
.follow-tip p[data-v-e6de2eb4] {
    color: #fff;
    line-height: 1.5;
}
nav[data-v-a09a8fe8] {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 7px 0;
    background: #fff;
    box-shadow: 0 2px 10px #ccc;
    z-index: 0;
}
nav>a[data-v-a09a8fe8] {
    text-align: center;
    width: 25%;
    color: #b58c78;

    display: flex;
 
    justify-content: center;
}
nav>a i[data-v-a09a8fe8] {
    font-size: 20px;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
 
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
nav>a p[data-v-a09a8fe8] {
    margin-top: 3px;
}
nav>a[data-v-a09a8fe8] {
    text-align: center;
    width: 25%;
    color: #b58c78;

    display: flex;
 
    justify-content: center;
}
nav>a i[data-v-a09a8fe8] {
    font-size: 20px;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
 
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
nav>a p[data-v-a09a8fe8] {
    margin-top: 3px;
}
</style>
