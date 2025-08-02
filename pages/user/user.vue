<template>
	<view class="user pageBg" v-if="userInfo">
		<view class="header" :style="{paddingTop: getNavBarHeight() + 'px'}">
			<view class="avatar">
				<image class="avatar__img" src="@/static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">{{userInfo.IP}}</view>
			<view class="address">来自：{{userInfo.address.city || userInfo.address.province || userInfo.address.country}}
			</view>
		</view>
		<view class="session">
			<navigator url="/pages/categorized-list/categorized-list?name=我的下载&type=download">
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">
							{{userInfo.downloadSize}}
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/categorized-list/categorized-list?name=我的评分&type=score">
				<view class="row">
					<view class="left">
						<uni-icons type="star-filled" size="20"></uni-icons>
						<view class="text">我的评分</view>
					</view>
					<view class="right">
						<view class="text">
							{{userInfo.scoreSize}}
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</navigator>
			<view class="row">
				<view class="left">
					<uni-icons type="chatboxes-filled" size="20"></uni-icons>
					<view class="text">联系客服</view>
				</view>
				<view class="right">
					<view class="text"></view>
					<uni-icons type="right" size="15" color="#aaa"></uni-icons>
				</view>
				<!-- #ifdef MP -->
				<button class="button" open-type="contact">联系客服</button>
				<!-- #endif -->
				<!-- #ifndef MP -->
				<button class="button" @click="clickContact">拨打电话</button>
				<!-- #endif -->
			</view>
		</view>
		<view class="session">
			<navigator class="row" url="/pages/notice/notice?id=653507c6466d417a3718e94b">
				<view class="left">
					<uni-icons type="notification-filled" size="20"></uni-icons>
					<view class="text">订阅更新</view>
				</view>
				<view class="right">
					<uni-icons type="right" size="15" color="#aaa"></uni-icons>
				</view>
			</navigator>
			<navigator class="row" url="/pages/notice/notice?id=6536358ce0ec19c8d67fbe82">
				<view class="left">
					<uni-icons type="flag-filled" size="20"></uni-icons>
					<view class="text">常见问题</view>
				</view>
				<view class="right">
					<uni-icons type="right" size="15" color="#aaa"></uni-icons>
				</view>
			</navigator>

		</view>
	</view>
	<view class="loadingLayout" v-else>
		<view :style="{height:getNavBarHeight()+'px'}"></view>
		<uni-load-more status="loading"></uni-load-more>
	</view>
</template>

<script setup>
	import {
		getNavBarHeight
	} from '@/utils/system'
	import {
		apiUserInfo
	} from "@/api/api"
	import {
		ref
	} from "vue"
	const userInfo = ref(null)
	const getUserInfo = () => {
		apiUserInfo().then(res => {
			console.log(res);
			userInfo.value = res.data
		})
	}

	getUserInfo()
	const clickContact = () => {
		uni.makePhoneCall({
			phoneNumber: "114"
		})
	}
</script>

<style lang="scss" scoped>
	.user {
		.header {
			display: flex;
			flex-direction: column;
			gap: 20rpx;
			justify-content: center;
			align-items: center;

			.avatar {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;

				&__img {
					width: 100%;
					height: 100%;

				}
			}

			.ip {
				font-size: 44rpx;
				color: #333;
			}

			.address {
				font-size: 28rpx;
				color: #aaa;
			}
		}

		.session {
			display: flex;
			flex-direction: column;
			border: 1px solid #eee;
			margin: 100rpx 30rpx;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

			&:last-child {
				border-bottom: none;
			}

			.row {
				display: flex;
				background: #fff;
				justify-content: space-between;
				border-bottom: 1px solid #eee;
				padding: 30rpx 30rpx;
				position: relative;

				.right,
				.left {
					display: flex;
					align-items: center;
					gap: 10rpx;

					.text {
						color: #666
					}
				}

				.left {
					:deep() {
						.uni-icons {
							color: $banner-primary-color !important;
						}
					}
				}

				.button {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					opacity: 0;
				}

			}
		}
	}
</style>