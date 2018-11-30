<template>
	<div class="banner">
      <div class="swiper-container">
	    <!-- Additional required wrapper -->
	    <div class="swiper-wrapper">
	       

			<div @click="Link(item)" class="swiper-slide" v-for='(item ,index) in list ' :key='index'>
				<img  :src="item.name"  alt="">
	        </div>

	    </div>
	    <!-- If we need scrollbar -->
	    <div class="swiper-scrollbar"></div>
	</div>
	</div>
</template>
<script>
	
import Swiper from 'swiper';
import Vue from 'vue'
	
	export default{
		name:'Banner',
		components:{},
		data(){
			return {
				name:'我是header',
				list:[
					{'name':'http://oss.kissmilan.com/slide_picture/20181023/fc9589e0d276e614.jpg' ,'id':'1'},
					{'name':'http://oss.kissmilan.com/slide_picture/20181121/9ea4d48274c9daf2.jpg' ,'id':'6'},
					{'name':'http://oss.kissmilan.com/slide_picture/20180808/b515c09552b227e9.jpg' ,'id':'69'},
					{'name':'http://oss.kissmilan.com/slide_picture/20181016/f65b02534006a15f.jpg' ,'id':'73'},
					{'name':'http://oss.kissmilan.com/slide_picture/20181009/5a2a3eaa91b0de74.jpg' ,'id':'72'},
					{'name':'http://oss.kissmilan.com/slide_picture/20180201/9c8ba72202e0ba57.jpg' ,'id':'54'},
				]
			}
		},
		methods:{
           getBanner(){
           	console.log(this)
//			Vue.nextTick(()=>{
           			this.mySwiper = new Swiper('.swiper-container', {
							 loop: true,
							 autoplay: {
					    		stopOnLastSlide: true,
					    		disableOnInteraction:false 
						  	}

						});	
//         		})
    
           	
           },
           
           Link(item){
           	this.$router.push('/goods/detail/'+item.id)
           }
		},
		updated(){
		},
		mounted(){
			this.getBanner()
		},
		created(){
		},
		destroyed(){
//             this.mySwiper=null
            delete this.mySwiper
		}
	}
</script>
<style lang="less" scoped>
 @import '../../styles/main.less';
 @import '../../../node_modules/swiper/dist/css/swiper.css';
.banner{
	/*border:1px solid red;*/
	z-index:0;
	.h(567);
	.padding(50,0,0,0);
	.swiper-slide{
		.w(375);
		.h(567);
		img{
			.w(375);
			.h(600);
		}
	}
}
</style>