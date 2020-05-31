<template>
	<view>
		<view class="user_top">
			<view class="user_top-box">
				<view class="user_headimg" :style="'background-image:url('+user.headimg+')'" :mode="user.name"></view>
				<view class="user_name">
					{{user.name}}
				</view>
			</view>
		</view>
		<view class="user_content-box">
			<view class="box_iconbox">
				<i class="fa fa-file-text" style="color: #1280ff;"></i>
				<text>我的订单</text>
			</view>
			<view class="box_iconbox">
				<i class="fa fa-map" style="color: #ff1e47;"></i>
				<text>我的优劵</text>
			</view>
			<view class="box_iconbox">
				<i class="fa fa-star" style="color: #ffbf2a;"></i>
				<text>我的收藏</text>
			</view>
			<view class="box_iconbox">
				<i class="fa fa-file-text"></i>
				<text>我的……</text>
			</view>
		</view>
		<view class="user_content-box">
			<uni-list>
				<uni-list-item title="标题文字" note="描述信息"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					"name": "laizq",
					"headimg": "https://static.codemao.cn/FpPGH_EvIeIVIWU8HOP4-frnvN6Q",
				},
			}
		}
	}
</script>

<style>
	.user_top {
		width: 100%;
		font-size: 5vw;
		position: relative;
	}
	.user_top::after{
		content: "";
		position: fixed;
		top: 0;
		z-index: -111;
		width: 100%;
		height: 10vw;
		background-color: #F0AD4E;
		border-radius:0 0 5vw 5vw;
	}

	.user_name {
		color: #555;
		font-size: 5vw;
		font-weight: 600;
		margin-left: 17vw;
		margin-top: 4vw;
		position: absolute;
		width: 40vw;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
	}

	.user_headimg {
		width: 10vw;
		height: 10vw;
		border-radius: 50%;
		background-color: #ddd;
		background-position: center;
		background-size: cover;
		left: 10vw;
		margin-top: 2vw;
		position: absolute;
	}

	.user_top-box {
		width: 90%;
		height: 15vw;
		margin: auto;
		border-radius: 2vw;
		background-color: #fff;
		box-shadow: 0 1px 5px #bbb;
	}

	.user_content-box {
		width: 90%;
		margin: 2vw auto;
		margin-top: 5vw;
		border-radius: 2vw;
		background-color: #fff;
		box-shadow: 0 1px 5px #bbb;
		overflow: hidden;
	}
	.box_iconbox{
		width: 25%;
		display: inline-block;
		padding: 2vw 0;
		text-align: center;
	}.box_iconbox i{
		width: 100%;
		display: block;
		height: 13vw;
		line-height: 13vw;
		font-size: 7vw;
	}.box_iconbox text{
		width: 100%;
		display: block;
		height: 5vw;
		line-height: 5vw;
		font-size: 4vw;
	}
</style>
