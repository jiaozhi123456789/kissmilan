<template>
	<div class="home">
	
	<header data-v-4be4c334="" class="flex"><div data-v-4be4c334="" class="l t-ell" style="font-size: 12px;"><i data-v-4be4c334="" class="fa fa-map-marker"></i><span data-v-4be4c334="">选择城市</span></div><div data-v-4be4c334="" class="c tc pa"><a data-v-4be4c334="" href="/" class="router-link-exact-active router-link-active"><img data-v-4be4c334="" alt="Kissmilan官网" src="http://oss.kissmilan.com/fixed/20170718/a7aecada618904f2.png"></a></div><div data-v-4be4c334="" class="r"  @click='gocart()'><i data-v-4be4c334="" class="fa fa-shopping-cart"></i></div><!----></header>
		<Banner></Banner>
		 <CateList ></CateList> 
		 
		    <Bottom></Bottom>
	</div>
</template>
<script>

import Banner from '../../commons/Banner'//引入组件
import Header from '../../../components/commons/Header'//引入组件 
import Bottom from '../../../components/commons/Bottom'
import CateList from './CateList'//引入组件	
export default{
	
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'Home',
	components:{Banner,Header,Bottom,CateList},
	data(){
		return {
			name:'我是home页面',
			
		}

	},
	methods:{ gocart(){
			this.$router.push({path:'/cart'})
		}
	}
	
}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	
 header[data-v-4be4c334] {
    height: 50px;
    line-height: 50px;
    
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
.t-ell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
header .l .fa[data-v-4be4c334] {
    font-size: 22px;
    vertical-align: middle;
    margin-top: -3px;
    position: relative;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fa-map-marker:before {
    content: "\F041";
}
header .l>span[data-v-4be4c334] {
    padding-left: 3px;
}
header .c[data-v-4be4c334] {
    width: 65%;
    left: 17.5%;
    font-size: 14px;
    color: #a36663;
}
.tc {
    text-align: center;
}
.pa {
    position: absolute;
}
a {
    text-decoration: none;
}
a {
    background-color: transparent;
    
}
header .c img[data-v-4be4c334] {
    max-height: 25px;
    vertical-align: middle;
}
img {
    border-style: none;
}
header .r[data-v-4be4c334] {
    padding-right: 10px;
    color: #8f5451;
}
header .r .cart[data-v-4be4c334] {
    color: #8f5451;
}
.pr {
    position: relative;
}
a {
    text-decoration: none;
}
a {
    background-color: transparent;
    
}
header .r .fa[data-v-4be4c334] {
    font-size: 22px;
    vertical-align: middle;
    margin-top: -3px;
    position: relative;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

user agent stylesheet
i, cite, em, var, address, dfn {
    font-style: italic;
}
header .r .cart[data-v-4be4c334] {
    color: #8f5451;
}
.fa-shopping-cart:before {
    content: "\F07A";
}
header .r .cart>span[data-v-4be4c334] {
    top: -12px;
    right: -8px;
    border: 1px solid #fff;
    background: #8f5451;
    color: #fff;
    height: 17px;
    line-height: 18px;
    padding: 0 5px;
    border-radius: 50%;
    transform: scale(.8);
}
.pa {
    position: absolute;
}


</style>