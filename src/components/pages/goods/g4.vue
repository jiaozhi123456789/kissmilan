<template>	
	<div >
	<ul class="list">
<!--<li @click="selItem(item)" :class="sel===item?'hl':''" v-for="(item,index) in nav" :key="index">{{item}}</li>
-->		

<li class="inline" v-for="(item,index) in goods" :key="index"   @click='goPage(item.id)'> 
		
			<img  alt="Little Pig 小猪"  :src="item.cover.pc_cover">
			<p  class="name"> {{item.name}}</p>
		
		
			<p  class="price">
			<span >
			<label >{{item.specs[0].price}}</label>
			<label  class="gray">
				<br ></label>
				<label >{{item.specs[0].name}}</label>
			</span>
		<i  class="fa fa-cart-plus"></i></p>
		</li>
		<p data-v-d510fde2="" class="tc loadmore" style="display: none;">加载中...</p>
		<p data-v-d510fde2="" class="tc loadmore">到底啦</p>
	<div data-v-d510fde2=""><footer data-v-6c21a020="" data-v-d510fde2="" class="tc">客服中心：<a data-v-6c21a020="" href="tel:4001-023-866">4001-023-866</a> <br data-v-6c21a020="">
渝ICP备13001878号  COPYRIGHT©2013-2022 Kissmilan 版权所有 <br data-v-6c21a020="">
技术支持：迈小步科技<br data-v-6c21a020=""><p data-v-6c21a020="">重庆市江北区北滨一路456号S1栋四层商业3号商铺</p></footer></div>
	</ul>

	</div>
</template>
<script>

//import Headertwo from '../../../components/commons/Headertwo'//引入组件	

export default{
	name:'g4',
	components:{ },
	data(){
		return {
			name:'卡通9',
//			goods:['小猪','Little Pig','￥148.00','一只']
			zhu:'小猪',
			pig:'Little Pig',
			price:'￥148.00',
			zhi:'一只',
			goods:[],
			shop_id:5,
			category_id:9,
			page:1,
			page_size:8
			
		}
},
methods:{
	getData(){
	// http://anode.kissmilan.com/o/home/product?shop_id=5&category_id=9&page=1&page_size=8
		this.$axios.get('api/o/home/product?shop_id=5&category_id=4&page=1&page_size=8')
			.then((res)=>{
				this.goods=res.data.data
				console.log(res.data.data[0].cover.wap_cover);
					console.log(res.data.data[0]);
				//this.page++
				//this.toast.close();
			})
			.catch((err)=>{
				//this.toast.close();
				console.log(err)
			})
},

// `/describe/${id}`
///describe/:id

goPage(id){
			this.$router.push({ path: `/goods/detail/${id}`})
		},

},

created(){
       this.getData();
        console.log('卡通');
	}
}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	
.list {
	.fs(12);
    margin-top: 92px;   
}
.list>li {
    width: 50%;
    margin-bottom: 10px;
}
.inline {
    display: inline-block;
}
.list>li>a {
    display: block;
}
a {
    text-decoration: none;
     background-color: transparent;
}
.list>li img {
    width: 100%;
    vertical-align: middle;
    margin-bottom: 10px;
}
.list>li .name {
   .padding(0,10,0,10);
    color: #492321;
   .lh(20);
    .h(20);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.list>li .price {
    color: #bba080;
    .padding(0,10,0,10);
    .lh(25);
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
}
.list>li .price span {
   .lh(15);
    width: 85%;
    word-break: break-all;
    display: inline-block;
}
.list>li .price span {
    .lh(15);
    width: 85%;
    word-break: break-all;
    display: inline-block;
}
.list>li .price>i {
    .fs(20);
    color: #492321;
    position: absolute;
    bottom: 10px;
    right: 10px;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    }

/*加载中*/
.loadmore {
    width: 100%;
    padding: 10px 0 30px;
    color: #492321;
}
.tc {
    text-align: center;
}
footer[data-v-6c21a020] {
    color: #8f5451;
    line-height: 1.3;
    padding: 15px 0;
}
footer a[data-v-6c21a020] {
    color: #8f5451;
}


















</style>