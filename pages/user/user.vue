<template>
	<view>
		<view class="user-top">
			<view class="setup">
				<i class="iconfont icon-header-15"></i>
			</view>
		</view>
		<view class="user_top">
			<view class="user-box">
				<view class="user_headimg" :style="'background-image:url('+user.headimg+')'" :mode="user.name"></view>
				<view class="user_name">
					{{user.name}}
				</view>
			</view>
		</view>
		<br>
		<br>
		<br>
		<view class="user-box">
			<view class="">
				我的收藏
			</view>
			<view class="">
				我的足迹
			</view>
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
		height: 10vw;
		padding-top: 20vw;
		background-color: #F0AD4E;
		color: #555;
		font-size: 5vw;
	}

	.user_name {
		color: #333;
		font-size: 8vw;
		margin-left: 25vw;
		margin-top: 5vw;
		position: absolute;
		width: 40vw;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
	}

	.user_headimg {
		width: 16vw;
		height: 16vw;
		border-radius: 50%;
		background-color: #ddd;
		background-position: center;
		background-size: cover;
		left: 10vw;
		margin-top: 2vw;
		position: absolute;
	}

	.user-box {
		width: 90%;
		height: 20vw;
		margin: auto;
		border-radius: 5vw;
		background-color: #fff;
		box-shadow: 0 1px 5px #bbb;
	}
</style>
