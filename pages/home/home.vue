<template>
	<view>
		<view class="top">
			<view class="search">
				<i class="fa fa-search"></i>
				<input v-model="search_word" type="text" @keydown.enter.native="entersearch" placeholder="搜索目的地/景点/攻略" />
			</view>
			<view class="search-go" @click="search">搜索</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
					 :duration="duration">
						<swiper-item v-for="(rc,index) in rcs" :key="index">
							<navigator :url="rc.to">
								<view class="rc" :style="'background-image: url('+ rc.img +');'"></view>
							</navigator>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="column">
				<image src="http://112.126.63.94:8080/images/icon_5.jpg"></image>
				<text>热门推荐</text>
				<navigator url="" class="column-more">查看更多</navigator>
			</view>
			<view class="item"></view>
			<view class="item"></view>
			<view class="item"></view>
			<view class="item"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_word: '',
				rcs: [{
					img: 'http://112.126.63.94:8080/images/banner_2.jpg',
					to: '/'
				}, {
					img: 'http://112.126.63.94:8080/images/banner_3.jpg',
					to: '/'
				}, {
					img: 'http://112.126.63.94:8080/images/banner_1.jpg',
					to: '/'
				}, ],
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 700,
				content: [{
					id: 1,

				}]
			}
		},
		methods: {
			search: function() {
				uni.navigateTo({
					url: '../search/search?wd=' + this.search_word
				})
			},
			entersearch: function() {
				var event = window.event || arguments.callee.caller.arguments[0];
				if (event.keyCode == 13) {
					uni.navigateTo({
						url: '../search/search?wd=' + this.search_word
					})
				}
			}
		},
		created: function() {
			h: {
				console.log("!")
				uni.request({
					url: "/api/downPriceGoodsInterface/getDownPriceGoodsList",
					method: 'GET',
					dataType: 'json',
					header: {
						'Content-Length':'3336',
						'Content-Type': 'application/json;charset=utf-8'
					},
					success: function(res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>
	.uni-swiper {
		height: 40vw;
	}

	.rc {
		width: 100%;
		height: 40vw;
		background-position: center;
		background-size: cover;
	}

	.top {
		position: sticky;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		height: 8vw;
		padding: 2vw;
		box-shadow: 0 0 5px #bbb;
		z-index: 999;
		background-color: #fff;
	}

	.search {
		width: 78%;
		margin: auto;
		margin-left: 1%;
		margin-right: 1%;
		height: 8vw;
		position: relative;
		background-color: #eee;
		border-radius: 4vw;
		float: left;
	}

	.search i {
		width: 8vw;
		height: 8vw;
		text-align: center;
		line-height: 8vw;
		position: absolute;
		left: 0.5vw;
		font-size: 4vw;
	}

	.search input {
		display: block;
		margin-left: 9vw;
		height: 100%;
		line-height: 8vw;
		color: #555;
		font-size: 3.5vw
	}

	.search-go {
		width: 15%;
		line-height: 8vw;
		height: 8vw;
		font-size: 5vw;
		text-align: center;
		float: left;
	}

	.content {
		width: 100%;
		margin: 5vw auto;
	}

	.content .column {
		width: 90%;
		margin: auto;
		padding: 1vw 0;
	}
	.content .column-text {
		display: block;
		font-size: 5vw;
		color: #444;
	}
	.content .column-more {
		float: right;
		font-size: 3vw;
		color: #bbb;
	}.content .column-more::after {
		content: ' >';
	}

	.content .column image {
		vertical-align: top;
		float: left;
		width: 7.5vw;
		height: 6vw;
	}
	.content .item{
		width: 45vw;
		display: inline-block;
		margin-left: 2.5vw;
		margin-top: 2.5vw;
		height: 50vw;
		border-radius: 5vw;
		box-shadow: 0 1px 4px #ccc;
	}
</style>
