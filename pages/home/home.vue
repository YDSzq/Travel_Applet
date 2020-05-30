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
		<view class="content" v-for="(ct,index) in content" :key="index">
			<view class="column">
				<image :src="ct.icon"></image>
				<text>{{ct.column}}</text>
				<navigator url="" class="column-more">查看更多</navigator>
			</view>
			<view class="item" v-for="(item,index) in ct.items" :key="index">
				<view class="item-img" :style="'background-image:url('+item.img+')'"></view>
				<text>{{item.name}}</text>
				<uni-rate :value="item.star" size="18" style="margin: 2vw;"></uni-rate>
				<text class="item-price">{{item.price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				triggered: false,
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
					column: '热门目的地',
					icon: 'http://112.126.63.94:8080/images/icon_5.jpg',
					items: [{
						id: 1,
						img: 'http://112.126.63.94:8080/images/jiangxuan_4.jpg',
						name: '上海某旅游景点某旅游景点',
						to: '/',
						star: 4.5,
						price: 1100
					}, {
						id: 2,
						img: 'http://112.126.63.94:8080/images/jiangxuan_4.jpg',
						name: '上海某旅游景点',
						to: '/',
						star: 5.0,
						price: 500
					}, {
						id: 3,
						img: 'http://112.126.63.94:8080/images/jiangxuan_4.jpg',
						name: '上海某旅游景点',
						to: '/',
						star: 4.5,
						price: 1100
					}, {
						id: 4,
						img: 'http://112.126.63.94:8080/images/jiangxuan_4.jpg',
						name: '上海某旅游景点',
						to: '/',
						star: 5.0,
						price: 500
					}]
				}, {
					id: 2,
					column: '国内游',
					icon: 'http://112.126.63.94:8080/images/icon_6.jpg',
					items: [{
						id: 1,
						img: 'http://112.126.63.94:8080/images/jiangxuan_4.jpg',
						name: '上海某旅游景点',
						to: '/',
						star: 3.0,
						price: 1100
					}, {
						id: 1,
						img: 'http://112.126.63.94:8080/images/jiangxuan_4.jpg',
						name: '上海某旅游景点',
						to: '/',
						star: 3.0,
						price: 1100
					}, {
						id: 1,
						img: 'http://112.126.63.94:8080/images/jiangxuan_4.jpg',
						name: '上海某旅游景点',
						to: '/',
						star: 3.0,
						price: 1100
					}, {
						id: 2,
						img: 'http://112.126.63.94:8080/images/jiangxuan_4.jpg',
						name: '上海某旅游景点上海某旅游景点上海某旅游景点',
						to: '/',
						star: 4.3,
						price: 500
					}]
				}]
			}
		},
		onLoad() {
			this._freshing = false;
			setTimeout(() => {
				this.triggered = true;
			}, 1000)
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
			},
			onPulling: function(e) {
				console.log("onpulling", e);
			},
			onRefresh: function() {
				if (this._freshing) return;
				this._freshing = true;
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
				}, 3000)
			},
			onRestore: function() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort: function() {
				console.log("onAbort");
			}
		},
		created: function() {
			h: {
				console.log("!")
				// uni.request({
				// 	url: "/api/downPriceGoodsInterface/getDownPriceGoodsList",
				// 	method: 'GET',
				// 	dataType: 'json',
				// 	header: {
				// 		'Content-Length': '3336',
				// 		'Content-Type': 'application/json;charset=utf-8'
				// 	},
				// 	success: function(res) {
				// 		console.log(res)
				// 	}
				// })
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
	}

	.content .column-more::after {
		content: ' >';
	}

	.content .column image {
		vertical-align: top;
		float: left;
		width: 7.5vw;
		height: 6vw;
	}

	.content .item {
		width: 45vw;
		display: inline-block;
		margin-left: 2.5vw;
		margin-top: 2.5vw;
		height: 50vw;
		border-radius: 3vw;
		box-shadow: 0 1px 4px #ccc;
		position: relative;
		overflow: hidden;
	}

	.content .item .item-img {
		width: 100%;
		height: 30vw;
		background-position: center;
		background-size: cover;
	}

	.content .item text {
		margin: auto;
		color: #333;
		width: 90%;
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}.content .item .item-price {
		color: #DD524D;
		font-size: 5vw;
	}.content .item .item-price::before{
		content: "￥";
		font-weight: 600;
	}
	
</style>
