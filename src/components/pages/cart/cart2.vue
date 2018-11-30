<template>
	<div calss="car">
		<ul>
			<li class="good" v-for="(item,index) in goodsList">
				<img :src="item.src"/>
				<div class="desc">
					<p class="good-name">{{ item.name }}</p>
					<p class="specs">{{ item.specs }}</p>
					<p class="good-price">￥ {{item.price}}</p>
					<input type="checkBox" name="good" id="" value="item.qty" />
				</div>
				<div class="caozuo">
					<button class="reduce" @click="reduce($event,item,index)">-</button>
					<input type="number" name="" id="" :value="item.qty*1" />
					<button class="add" @click="add($event,item,index)">+</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'car',
		data:{
			totalPrice:0,
			goodsList:[]
		},
		methods:{
			add(event,item,index){
				let qty = event.target.previousElementSibling
				 qty.value++
				 console.log(this.goodsList1[index])
				this.goodsList1[index]['qty']= qty.value
				console.log(this.goodsList1[index]['qty'])
				this.setCookie('goodslist',this.goodsList1())
			},
			reduce(event,item,index) {
				event.target.nextElementSibling.value++			
			},
			getGoodsList(){
				this.goodsList = JSON.parse(this.getCookie('goodslist'))
				this.goodsList.forEach((item,index)=>{
					this.totalPrice+=item.price*item.qty
				})
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
			}
						
		},
		computed:{
			goodsList1(){
				return this.goodsList
			}
		},
		created(){
			this.getGoodsList()
		}
		
	}
</script>

<style>
</style>