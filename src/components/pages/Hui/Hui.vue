<template>
	<div class="Hui">
    {{name}}
   <Bottom></Bottom>
	</div>
	
</template>
<script>
import Bottom from '../../../components/commons/Bottom'//引入组件
export default{
	name:'Hui',
	components:{Bottom},
	
	data(){
		return {
			name:'会员中心'
		}
	},
	methods:{
	}

}
</script>
<style lang="less" scoped>
</style>