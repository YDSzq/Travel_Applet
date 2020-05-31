<script>
	import './static/font-awesome/css/font-awesome.min.css'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
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

	/* 解决小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}
	/* #endif */
</style>
