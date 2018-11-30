<template>
	<div class="reg">
		<div class="box">
		<div class="logo">
			<img src="http://oss.kissmilan.com/fixed/20170718/a7aecada618904f2.png">
		</div>
		<!--<form action="" method="post">
			<input type="submit" value=""/>
		</form>-->
		<input @blur="usconfirm()" v-model="us" type="number" name="" id="username" value="" placeholder="手机号" class="usname"/>
		<input v-model="ps" type="password" name="" id="password" value="" placeholder="请输入您的密码" class="psword"/>
		<input v-model="reps" type="password" name="" id="repassword" value="" placeholder="请重复输入您的密码" class="psword"/>
		<!--<input type="number" name="" id="usname" value="" placeholder="拖动下方滑块至缺口处获取验证码" class="usname"/>-->
		
		<input @click="reg()" type="button" name="" id="login-btn" value="" value="立即注册" class="login-btn"/>
	
		<!--<p>首次登陆请选择验证码登录</p>-->
		<span @click="login()">立即登录</span>
	</div>
    <!--{{title}}-->
   <!--<Bottom></Bottom>-->
	</div>
</template>
<script>
import Bottom from '../../../components/commons/Bottom'//引入组件
export default{
	name:'Reg',
	components:{Bottom},
	data(){
		return {
			title:'reg',
			us:'',
			ps:'',
			reps:'',
			isTrue:false,
		}
	},
	methods:{
		usconfirm(){
//			console.log(this.us)
			var phone = this.us;
		    if(!(/^1[34578]\d{9}$/.test(phone))){ 
		    	this.isTrue=false;
		        alert("手机号码有误，请重填");  
		    }else{
		    	this.isTrue=true;
		    }
			console.log('usconfirm')
		},
		login(){
			this.$router.replace('login')
		},
		reg(){
			console.log(this.us);
			console.log(this.ps);
			console.log(this.reps);
			if(this.us!=''&&this.ps!=''&&this.ps===this.reps&&this.isTrue===true){
					var storage=window.localStorage;
					var datas={
		                us:this.us,
		                ps:this.ps,
		            };
		            var d=JSON.stringify(datas);
		            storage.setItem("datas",d);
				alert('注册成功')
				this.$router.replace('/login')
			}else{
				alert('注册失败')
			}
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../../styles/main.less';
.reg{
	background: green;
	border-sizing:border-box;
	/*.margin(50,10,0,0);*/
	z-index:9999999;
	background: white;
	position:relative;
	.w(375);
		.h(667);
	.box{
		position:fixed;
		.top(80);
		.left(25);
		box-shadow: 1px 5px 20px 1px #aaa;
		border: 1px solid #c7c7c7;
		border-sizing:border-box;
		.w(285);
		.h(511);
		/*border:1px solid gray;*/
		.padding(10,20,0,20);
		text-align:center;
		/*.margin(50px,10px,0,10px)*/
		/*.mt(50);*/;
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
}
</style>
