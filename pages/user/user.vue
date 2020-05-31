<template>
	<view>
		<view class="user-top">
			<view class="setup">
				<i class="iconfont icon-header-15"></i>
			</view>
		</view>
		<view class="user_top">
			<view class="user_top-box">
				<view class="user_headimg" :style="'background-image:url('+user.headimg+')'" :mode="user.name"></view>
				<view class="user_name">
					{{user.name}}
				</view>
			</view>
		</view>
		<view class="user_content-box">
			
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
		background-color: #F0AD4E;
		font-size: 5vw;
		padding: 5vw 0;
		border-radius: 0 0 10vw 10vw;
	}

	.user_name {
		color: #555;
		font-size: 8vw;
		font-weight: 600;
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

	.user_top-box {
		width: 90%;
		height: 20vw;
		margin: auto;
	}
	.user_content-box {
		width: 90%;
		margin: 1vw auto;
		border-radius: 2vw;
		background-color: #fff;
		box-shadow: 0 1px 5px #bbb;
	}
</style>
