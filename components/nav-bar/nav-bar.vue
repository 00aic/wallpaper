<template>
	<view class="nav">
		<view :style="{height: getStatusBarHeight() + 'px'}"></view>
		<view class="title-bar" :style="{height: getTitleBarHeight() + 'px'}">
			<view class="title">
				{{title}}
			</view>
			<navigator url="/pages/search/search" class="search">
				<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
				<text class="text">搜索</text>
			</navigator>

		</view>
	</view>

	<view class="fill" :style="{height:getNavBarHeight()+'px'}">
	</view>
</template>

<script setup>
	import {
		getStatusBarHeight,
		getTitleBarHeight,
		getNavBarHeight
	} from '@/utils/system'
	defineProps({
		title: {
			type: String,
			default: "壁纸"
		}
	})
</script>

<style lang="scss" scoped>
	.nav {
		background:
			linear-gradient(to bottom, transparent, #fff 400rpx),
			linear-gradient(to right, #beecd8 20%, #F4E2D8);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100vw;

		.title-bar {
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			gap: 30rpx;

			.title {
				font-size: 22px;
				font-weight: 700;
				color: #000;
			}
		}

		.search {
			display: flex;
			align-items: center;
			gap: 5rpx;
			color: #999;
			font-size: 28rpx;
			width: 220rpx;
			height: 50rpx;
			border-radius: 60rpx;
			background: rgba(255, 255, 255, 0.4);
			border: 1px solid #fff;
		}
	}
</style>