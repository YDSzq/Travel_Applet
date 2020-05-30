<template>
	<view>
		<home v-if="pages == '主页'"></home>
		<user v-if="page == '我的'"></user>
		<view class="footer">
			<view class="footer-item" v-for="(item,index) in items" :key="index" @click="newNav" :data-page="item.text"
			 :style="'width:'+ 100/Object.keys(items).length +'%;'" :class="pages==item.text?'footer_this':''">
				<i :class="'footer-item-icon fa fa-'+item.icon"></i>
				<view class="footer-item-text">
					{{item.text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pages: '主页',
				items: [{
						text: '主页',
						icon: 'home'
					},
					{
						text: '我的',
						icon: 'user'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			newNav: function(e) {
				this.pages = e.currentTarget.dataset.page
			}
		}
	}
</script>

<style>
	.footer{
		width: 100%;
		padding: 1vw 0;
		font-size: 10vw;
		box-shadow: 0 0 10px #bbb;
		position: sticky;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 3vw;
		background-color: #eee;
		z-index: 999;
	}
	.footer-item{
		display: inline-block;
		text-align: center;
		color: #aaa;
		line-height: 5vw;
	}
	.footer_this {
		color: #f0ad4e;
	}
	
	.footer-item-icon {
		font-size: 6vw;
	}
</style>
