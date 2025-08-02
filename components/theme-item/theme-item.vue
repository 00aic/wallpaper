<template>
	<view class="theme-item">
		<navigator :url="`/pages/categorized-list/categorized-list?id=${data._id}&name=${data.name}`"
			class="theme-item-card" v-if="!isMore">
			<image class="theme-item-card__image" :src="data.picurl" mode="aspectFill"></image>
			<view class="theme-item-card__header" v-if="compareTimestamp(data.updateTime)">
				{{compareTimestamp(data.updateTime)}}前更新
			</view>
			<view class="theme-item-card__mask">{{data.name}}</view>
		</navigator>

		<navigator url="/pages/classify/classify" open-type="switchTab" class="theme-item-card theme-item-more" v-else>
			<image class="theme-item-card__image" src="@/common/images/more.jpg" mode="aspectFill"></image>
			<view class="theme-item-card__mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<text class="theme-item-card__mask-text">更多</text>
			</view>
		</navigator>

	</view>
</template>

<script setup>
	import {
		compareTimestamp
	} from '@/utils/common'
	defineProps({
		isMore: {
			type: Boolean,
			default: false
		},
		data: {
			type: Object,
			default () {
				return {}
			}
		}
	})
</script>

<style lang="scss" scoped>
	.theme-item {
		&-card {
			// height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;
			aspect-ratio: 3 / 4;

			&__image {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			&__header {
				position: absolute;
				top: 0;
				left: 0;
				background-color: #ee9a79;
				backdrop-filter: blur(20rpx);
				color: #fff;
				border-radius: 0 0 15rpx 0;
				padding: 5rpx 10rpx;
				font-size: 16rpx;

			}

			&__mask {
				position: absolute;
				bottom: 0;
				left: 0;
				color: #fff;
				background-color: rgba(0, 0, 0, 0.2);
				padding: 5rpx 10rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 25rpx;
				width: 100%;
				backdrop-filter: blur(20rpx);

				.theme-item-card.theme-item-more & {
					height: 100%;
					flex-direction: column;

					&-text {
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>