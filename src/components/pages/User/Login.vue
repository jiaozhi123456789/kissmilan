<template>
	<div class="login">
	<div class="box">
		<div class="logo">
			<img src="http://oss.kissmilan.com/fixed/20170718/a7aecada618904f2.png">
		</div>
		<ul>
			<!--<router-link tag='li' active-class='active' v-for="(item,index) in list" :key="index">{{item}}</router-link>-->
			<li :class="sel===item?'h1':''"  @click="setItem(item)" v-for="(item,index) in list" :key="index">{{item}}</li>
		</ul>
		<input v-model="us" type="number" name="" id="username" value="" placeholder="手机号" class="usname"/>
		<input v-model="ps" type="password" name="" id="password" value="" placeholder="密码" class="psword"/>
		<input @click="Login()" type="button" name="" id="login-btn" value="" value="登录" class="login-btn"/>
	
		<p>首次登陆请选择验证码登录</p>
		<span @click="reg()">注册账户</span>
	</div>
    <!--{{title}}-->
   <!--<Bottom></Bottom>-->
	</div>
</template>
<script>
import Bottom from '../../../components/commons/Bottom'//引入组件
export default{
	name:'Login',
	components:{Bottom},
//	props:['show'],
	data(){
		return {
			title:'login',
			list:['手机验证码登录','账号密码登录'],
			sel:'账号密码登录',
			us:'',
			ps:'',
		}
	},
	methods:{
		reg(){
			this.$router.replace('reg')
		},
		setItem(item){
			this.sel=item;
		},
		Login(){
			var storage=window.localStorage;
			var json=storage.getItem("datas");
//			console.log(json);
            var jsonObj=JSON.parse(json);
            console.log(jsonObj);
            if(this.us===jsonObj.us&&this.ps===jsonObj.ps){
            	console.log('ok')
            	this.$store.commit('changeLogin',true); 
            	window.localStorage.setItem('login',true);
				this.$router.go(-1);
            }else{
            	alert('请输入正确的信息');
            }
//			
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../../styles/main.less';
.active{
	background: #482a2a;
}
.login{
	border-sizing:border-box;
	/*.margin(50,10,0,0);*/
	z-index:9999999;
	background: white;
	position:relative;
	
	.w(375);
		.h(667);
	.box{
		position: fixed;
		.top(150);
		.left(15);
		/*.margin(150,15,150,15);*/
		/*.mt(150);
		.ml(15);*/
		border-sizing:border-box;
		.w(300);
		.h(333.03);
		border:1px solid gray;
		.padding(10,20,0,20);
		text-align:center;
		box-shadow: 1px 5px 20px 1px #aaa;
		border: 1px solid #c7c7c7;
		.logo{
			.w(285);
			.h(42.75);
			text-align:center;
			/*border:1px solid red;*/
			img{
				
				.w(145.34);
			.h(30.75)
			}
		}
		ul{
			display:inline;
			text-align:center;
			display:flex;
			.w(258);
			.fs(12);
			.h(40);
			.lh(40);
			.ml(20);
				/*border:1px solid blue;*/
				/*.mt(10)*/
			li{
				
				/*border:1px solid red;*/
				flex:1;
				/*.w(129);*/
				.h(40);
				.lh(40);
				float: left;
				text-align:center;
			}
		}
		.usname{
			.w(262);
			.h(34);
		}
		.psword{
			.w(262);
			.h(34);
		}
		.login-btn{
			.w(262);
			.h(34);
			background:#482a2a;
			color:#fff;
		}
		p{
			.fs(12);
			color:red;
		}
		span{
			.fs(12)
		}
	}
	.h1{
		background: #482a2a;
		color: white;
	}
}
</style>