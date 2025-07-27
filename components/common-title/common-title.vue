<template>
	<view class="title">
		<view class="title__left">
			{{title}}
		</view>
		<!-- <view class="title__right"> -->
		<slot></slot>
		<!-- </view> -->
	</view>
</template>

<script setup>
	defineProps({
		title: {
			type: String
		}
	})
</script>

<style lang="scss" scoped>
	.title {
		display: flex;
		justify-content: space-between;

		&__left {
			font-size: 35rpx;
			font-weight: 600;
		}
	}
</style>