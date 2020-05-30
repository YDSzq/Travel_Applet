<template>
	<view>
		<view>
			{{wd}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				wd:''
			}
		},
		onLoad:function(options){
			this.wd = options.wd
		}
	}
</script>

<style>
</style>
