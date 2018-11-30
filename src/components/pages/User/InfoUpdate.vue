<template>
	<div class="infoUpdate">
			<ul>
				<li  @click="revise(item,index,$event.currentTarget)" v-for="(item,index) in lis" :key="index">
					<span class="tit">{{item.name}}</span>
					<span class="cont">{{item.content}}</span>
					<span class="info-arrows fr fa fa-angle-double-right"></span>
				</li>
				<li  @click="sexuality()" >
					<span class="tit">性别</span>
					<span class="cont" >{{sexcont}}</span>
					<span class="info-arrows fr fa fa-angle-double-right"></span>
				</li>
				<mt-actionsheet 
				  :actions="actions"
				  v-model="sheetVisible">
				</mt-actionsheet>
			</ul>
		<div class="out" @click="logout()">
				安全退出
		</div>
		
	</div>
</template>
<script>
import Vue from 'vue'
import {MessageBox}  from 'mint-ui'
import '../../../../node_modules/mint-ui/lib/message-box/style.css'
import '../../../../node_modules/mint-ui/lib/actionsheet/style.css';
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

	export default{
		name:'InfoUpdate',
		component:{},
		props:['show'],
		data(){
			return{
				 dateTime: '',
      			startDate: new Date(),

				pickerVisible:false,
				sheetVisible:false,
				title:'InfoUpdate',
				lis:[{name:'昵称',content:'暂无'},
				{name:'姓名',content:'暂无'},
				{name:'邮箱',content:'暂无'},
				{name:'生日',content:'暂无'},
				],
				sexcont:'',
				actions:[{name:'保密',method:this.baomi},{name:'男',method:this.boy},{name:'女',method:this.girl}],

			}
		},
		methods:{
			sexuality(){
				this.sheetVisible=true;
			},
			baomi(){
				console.log('保密')
				this.sex('保密')
			},
			boy(){
				console.log('男')
				this.sex('男')
			},
			girl(){
				console.log('女')
				this.sex('女')
			},
			sex(sex){
				window.localStorage.setItem('性别',sex);
			},
			revise(item,index,event){
				console.log(event)
//				console.log(event.children[0].innerHTML)
				var tits=event.children[0].innerHTML
				var cont =event.children[1].innerHTML
				MessageBox.prompt('',{
					message:'请输入您的'+item.name,
					title:'',
			          cancelButtonClass:'cancelButton',
			          confirmButtonClass:'confirmButton',
				})
				.then(({ value, action }) => {
					if(index==2){
					 var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
						 if(re.test(value)){
						 	var names=item.name;
							 window.localStorage.setItem(names,value);
							 this.lis[index].content=value;
							 event.content =this.reNext(names);
						 }else{
						 	alert('邮箱格式错误')
						 }
					}else if(index==3){
						var regs = /^(19|20)\d{2}(-|.)(1[0-2]|0?[1-9])(-|.)(0?[1-9]|[1-2][0-9]|3[0-1])$/;
						if(regs.test(value)){
							 var names=item.name;
							 window.localStorage.setItem(names,value);
							 this.lis[index].content=value;
							 event.content =this.reNext(names);
							 }else{
							 	alert('生日必须精确且用“-”或“.”连接')
							 }
					}
					else{
					 var names=item.name;
					 window.localStorage.setItem(names,value);
	//				 var ind=Number(index);
					 this.lis[index].content=value;
					 event.content =this.reNext(names);
					 console.log(this.lis)
					}
                 
				})
				.catch((err)=>{
					console.log(err)
				})
			},
		reNext(names){
			var storage=window.localStorage;
			var json=storage.getItem(names);
			return json;
		},
		logout(){
			this.$store.commit('changeLogin',false); 
        	window.localStorage.setItem('login',false);
			this.$router.replace('/login');
		}
		},
		mounted(){
		},
		updated(){
			var ss=window.localStorage.getItem('性别')
			this.sexcont=ss
		},
		created(){
			if(window.localStorage.getItem('性别')){
				this.sexcont=ss
			}else{
				this.sexcont='保密'
			}
			if(this.$store.state.login){
				
				this.$router.push('/user/set')
			}else{
				
				this.$router.replace('/login')
			}
			for(var i in this.lis){
			if(window.localStorage.getItem(this.lis[i].name)){
				this.lis[i].content=window.localStorage.getItem(this.lis[i].name);
			}
			
			}
		}
	}
</script>
<style lang="less" scoped>
@import '../../../styles/main.less';
	.infoUpdate{
		z-index:300;
		position:fixed;
		.top(71);
		.left(0);
		.w(375);
		.h(618);
		background:white;
		ul{
			li{
				.w(375);
				.h(50);
				.fs(12);
				.lh(50);
				border-bottom:1px solid #a36663;
				display:flex;
				color:#522725;
				span{
					flex:1;
				}
				.tit{
					flex: 2;
					text-align: center;
				}
				.cont{
					flex:7
				}
				.info-arrows{
					float:right;
					.fs(22);
					.lh(50)
				}
			}
		}
		.out{
			position: fixed;
			bottom:0;
			left:0;
			.w(375);
			.h(60);
			color: white;
			.fs(14);
			background: #a36663;
			text-align: center;
			.lh(60);
		}
	}
</style>
