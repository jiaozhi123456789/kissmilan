<template>
	<Headertwo></Headertwo>
	<div class='contain'>
            <nav>
				<ul>
					<li @click="selItem(item)" :class="sel===item?'hl':''" v-for="(item,index) in nav" :key="index">{{item}}</li>
				</ul>
			</nav>
			
		
			
			
			
			
			
			<!--<div class="all" v-if="nav==0">1</div>
			<div class="all" v-if="nav==1">2</div>
			<div class="all"v-if="nav==2">3</div>
			<div class="all"v-if="nav==3">4</div>
			<div class="all"v-if="nav==4">5</div>
			<div class="all"v-if="nav==5">6</div>
			<div class="all"v-if="nav==6">7</div>
	</div>
			-->
			
		</div>
			
			
		
</template>
<script>
	
import ListOne from './ListOne'
export default{
	// https://m.maizuo.com/v4/api/film/now-playing?__t=1542011462447&page=1&count=5
	//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542011462450&page=1&count=3
	name:'ListNav',
	components:{ListOne},
	data(){
		return {
			nav:['全部','卡通系列','礼盒系列','慕斯蛋糕','乳脂奶油蛋糕','芝士蛋糕','巧克力蛋糕'],
			sel:'全部',
			movielist:[],
			page:1,
			count:8,
			shop_id:5,
			category_id:8
		}
},
computed:{
	navPosition(){
		return this.nav.indexOf(this.sel)
	}
},

  methods:{
		loadMore(){
			this.getData();
		},
		selItem(item){
			if(item=='卡通系列')
			this.$router.push({path:'/ListOne',query:{id:'555'}})
			if(item=='礼盒系列')
			this.$router.push({path:'/ListNav',query:{id:'666'}})
			this.sel=item
		},
		getData(){
			//http://anode.kissmilan.com/o/home/product?shop_id=5&category_id=0&page=1&page_size=8
			//https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
//			this.toast=Toast({
//			  message: 'loading',
//			  iconClass: 'fa fa-spinner'
//			});
			//发起请求
             // oss.kissmilan.com/product/20181009/01c0840ebe014427.jpg
          //  http://anode.kissmilan.com/o/home/product?shop_id=5&category_id=0&page=1&page_size=8
			this.$axios.get('api/o/home/product?shop_id=5&category_id=0&page=1&page_size=8')
			.then((res)=>{
				console.log(res)
				this.movielist=res.data
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
        console.log(this.nav)
        this.getData();console.log(this.$route)
		this.sel = this.nav[this.$route.query.id]
		
	},
	
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
		   background: #fff;
		   display: flex;
		   justify-content: space-between;
		   border-bottom:1px solid #492321; 
		   li{.fs(12);
               width: 50%;
            
              .h(35);
              .lh(45);
              text-align:center;
              border-bottom: 2px solid #fff;
                  padding: 0 15px;
    display: inline-block;
    color: #492321;
		   }
		   .hl{
		   	color:#492321;
		   	border-bottom: 8px solid #492321;
		   }
		}
		.list-contain{
			.list-item{
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
	</style>