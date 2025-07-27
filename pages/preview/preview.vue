<template>
	<view class="preview">
		<swiper class="preview-swiper" circular>
			<swiper-item v-for="item in 3" :key="item" @click="showMask">
				<image class="preview-swiper__image" src="/common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="preview-mask" v-if="isShowMask">
			<view class="preview-mask__back" :style="{top: getTitleBarHeight() + 'px'}" @click="goBack"><uni-icons
					type="back" size="20" color="#fff"></uni-icons></view>
			<view class="preview-mask__size">9 / 12</view>
			<view class="preview-mask__time">
				<uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="preview-mask__date">
				<uni-dateformat :date="Date.now()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="preview-mask__footer">
				<view class="preview-mask__footer-content" @click="openInfoPopup">
					<uni-icons type="info" size="20"></uni-icons>
					<view class="preview-mask__footer-content-text">
						信息
					</view>
				</view>
				<view class="preview-mask__footer-content" @click="openRatePopup">
					<uni-icons type="star" size="20"></uni-icons>
					<view class="preview-mask__footer-content-text">
						评分
					</view>
				</view>
				<view class="preview-mask__footer-content">
					<uni-icons type="download" size="20"></uni-icons>
					<view class="preview-mask__footer-content-text">
						下载
					</view>
				</view>
			</view>

			<uni-popup ref="infoPopup" type='bottom'>
				<view class="preview-popup preview-popup-info">
					<view class="preview-popup-header">
						<view class="preview-popup-header__title">
							壁纸信息
						</view>
						<view class="preview-popup-header__icon" @click="closeInfoPopup"><uni-icons class=""
								type="closeempty" size="15"></uni-icons></view>
					</view>
					<scroll-view scroll-y class="preview-popup-info-body">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text class="value">
								aaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaa</text>
						</view>
						<view class="row">
							<view class="label">发布者：</view>
							<text class="value">小咪想吃鱼</text>
						</view>
						<view class="row">
							<view class="label">评分：</view>
							<view class="value rate">
								<uni-rate :readonly="true" :value="2" />
								<view class="score">
									2分
								</view>
							</view>

						</view>
						<view class="row">
							<view class="label">标签：</view>
							<view class="value tabs">
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
								<view class="tab">小吃鱼ddddd</view>
							</view>
						</view>
						<view class="row">
							<view class="label">摘要：</view>
							<text class="value">小鱼</text>
						</view>
						<view class="copyright">
							声明：本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平台，邮箱513894357@qq.com，管理将删除侵权壁纸，维护您的权益。
						</view>
					</scroll-view>
				</view>
			</uni-popup>
			<uni-popup ref="ratePopup">
				<view class="preview-popup preview-popup-rate">
					<view class="preview-popup-header">
						<view class="preview-popup-header__title">
							壁纸信息
						</view>
						<view class="preview-popup-header__icon" @click="closeRatePopup"><uni-icons class=""
								type="closeempty" size="15"></uni-icons></view>
					</view>
					<view class="preview-popup-rate-body">
						<uni-rate v-model="score" allowHalf />
						<text class="preview-popup-rate-body__text">{{score}}分</text>
					</view>
					<button @click="submitScore" :disabled="!score" class="preview-popup-rate-submit" size="mini"
						plain>确认评分</button>
				</view>
			</uni-popup>
		</view>




	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		getStatusBarHeight,
		getTitleBarHeight
	} from '@/utils/system'
	const infoPopup = ref(null)
	const ratePopup = ref(null)
	const isShowMask = ref(true)
	const score = ref(3)
	const showMask = () => {
		isShowMask.value = !isShowMask.value
	}
	// 返回上一层
	const goBack = () => {
		uni.navigateBack()
	}

	const openInfoPopup = () => {
		infoPopup.value.open()
	}
	const closeInfoPopup = () => {
		infoPopup.value.close()
	}

	const openRatePopup = () => {
		ratePopup.value.open()
	}
	const closeRatePopup = () => {
		ratePopup.value.close()
	}

	const submitScore = () => {
		console.log("评分了");
	}
</script>

<style lang="scss" scoped>
	.preview {
		&-swiper {
			width: 100vw;
			height: 100vh;
			position: relative;

			&__image {
				width: 100%;
				height: 100%;
			}


		}

		&-mask {
			&>view {
				position: absolute;
				color: #fff;

			}

			&__back {
				border: 1rpx solid rgba(255, 255, 255, 0.3);
				border-radius: 40rpx;
				top: 2vh;
				height: 70rpx;
				width: 70rpx;
				left: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			&__size {
				top: 12vh;
				background-color: rgba(0, 0, 0, 0.3);
				width: fit-content;
				font-size: 28rpx;
				border-radius: 28rpx;
				padding: 8rpx 28rpx;
				right: 0;
				left: 0;
				margin: auto;
				backdrop-filter: blur(10rpx);

			}

			&__time {
				top: calc(10vh + 80rpx);
				left: 0;
				right: 0;
				margin: auto;
				width: fit-content;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
				font-size: 140rpx;
				line-height: 1;
			}

			&__date {
				top: calc(10vh + 230rpx);
				left: 0;
				right: 0;
				margin: auto;
				width: fit-content;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
				font-size: 34rpx;
			}

			&__footer {
				bottom: 10vh;
				left: 0;
				right: 0;
				margin: auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 65vw;
				background-color: rgba(255, 255, 255, 0.8);
				border-radius: 35vw;
				padding: 10rpx 45rpx;

				&-content {
					display: flex;
					flex-direction: column;
					gap: 10rpx;
					color: $color-1;
					font-size: 26rpx;
				}
			}
		}

		&-popup {
			background-color: #fff;
			padding: 30rpx;
			overflow: hidden;

			&-header {
				display: flex;
				justify-content: center;

				&__title {
					font-size: 26rpx;
					color: $color-1;
					flex: 1;
					text-align: center;
				}

				&__icon {
					margin-left: auto;
				}
			}

			&-info {
				width: 100vw;
				border-radius: 30rpx 30rpx 0 0;

				&-body {
					max-height: 60vh;


					.row {
						display: flex;
						padding: 16rpx 0;
						font-size: 32rpx;

						.label {
							text-align: right;
							font-size: 30rpx;
							color: $color-1;
							width: 150rpx;
						}

						.value {
							color: #000;
							flex: 1;
							width: 0; // 不会因为value值过长而挤压到label
							overflow-wrap: break-word;
							// flex-wrap: wrap;
						}

						.rate {
							display: flex;
							gap: 5rpx;
							align-items: center;

							.score {
								font-size: 26rpx;
							}
						}

						.tabs {
							display: flex;
							flex-wrap: wrap;

							.tab {
								border: 1px solid seagreen;
								color: seagreen;
								font-size: 22rpx;
								padding: 10rpx 12rpx;
								border-radius: 22rpx;
							}
						}


					}

					.copyright {
						font-size: 28rpx;
						color: $color-1;
						padding: 20rpx;
						background: #F6F6F6;
						color: #666;
						border-radius: 10rpx;
					}
				}
			}

			&-rate {
				width: 70vw;
				border-radius: 30rpx;

				&-body {
					display: flex;
					justify-content: center;
					padding: 30rpx 0;

					&__text {
						color: #FFCA3E;
						padding-left: 10rpx;
					}
				}

				&-submit {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 5rpx 15rpx;
					width: fit-content;
				}
			}
		}

	}
</style>