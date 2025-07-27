<template>
	<view class="notice">
		<view class="title">
			<view class="tag">
				<uni-tag inverted text="置顶" type="error" />
			</view>
			<view>这个区域填写标题</view>
		</view>
		<view class="info">
			<view>咸虾米</view>
			<uni-dateformat :date="Date.now()" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
		</view>
		<view class="content">
			内容区域
		</view>

		<view class="count">
			阅读 5588
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.notice {
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		gap: 30rpx;

		.title {
			font-size: 40rpx;
			color: #111;
			line-height: 1.6em;
			display: flex;
			gap: 30rpx;

			.tag {
				transform: scale(0.8);
				transform-origin: left center;
				flex-shrink: 0;
			}
		}

		.info {
			display: flex;
			gap: 20rpx;
			color: #999;
			font-size: 28rpx;
			align-items: center;
		}

		.content {
			padding: 30rpx 0;
		}

		.count {
			color: #999;
			font-size: 28rpx;
		}
	}
</style>