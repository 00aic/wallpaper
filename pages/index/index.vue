<template>
	<view class="home pageBg">
		<nav-bar title="推荐"></nav-bar>
		<view class="banner">
			<swiper circular indicator-dots autoplay indicator-color="rgba(255,255,255,0.5)"
				indicator-active-color="#fff">
				<swiper-item v-for="item in banners" :key="item._id">
					<navigator v-if="item.target === 'miniProgram'" :url="item.url" target="miniProgram"
						:app-id="item.appid" class="navigator">
						<image class="image" :src="item.picurl" mode="aspectFill"></image>
					</navigator>
					<navigator v-else :url="`/pages/categorized-list/categorized-list?${item.url}`" class="navigator">
						<image class="image" :src="item.picurl" mode="aspectFill"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<view class="bulletin">
			<view class="title">
				<uni-icons type="sound" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<swiper vertical interval="1500" circular autoplay class=" swiper">
				<swiper-item v-for="item in notices" :key="item._id" class="swiper-item">
					<navigator :url='`/pages/notice/notice?id=${item._id}`' class="swiper-navigator">{{item.title}}
					</navigator>
				</swiper-item>
			</swiper>
			<uni-icons type="forward" size="20" class="forward"></uni-icons>
		</view>
		<view class="recommendation">
			<common-title title="每日推荐">
				<view class="rec-header">
					<uni-icons type="calendar" size="15"></uni-icons>
					<uni-dateformat :date="Date.now()" format="dd号"></uni-dateformat>
				</view>
			</common-title>
			<scroll-view scroll-x class="content">
				<view @click="goToPreview(item._id)" v-for="item in dayRandoms" :key="item._id" class="content__card">
					<image class="content__card-image" :src="item.smallPicurl" mode="aspectFill">
					</image>
				</view>
			</scroll-view>
		</view>
		<view class="theme">
			<common-title title="专题精选">
				<navigator class="theme-header" url="/pages/classify/classify" open-type="switchTab">More+</navigator>
			</common-title>
			<view class="theme-content">
				<theme-item v-for="item in classifys" :key="item._id" :data="item"></theme-item>
				<theme-item :is-more="true"></theme-item>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		apiGetBanner,
		apiGetDayRandom,
		apiGetNotice,
		apiGetClassify
	} from '@/api/api'
	import {
		ref
	} from 'vue'
	import {
		onShareAppMessage,
		onShareTimeline
	} from '@dcloudio/uni-app'

	const banners = ref([])
	const notices = ref([])
	const dayRandoms = ref([])
	const classifys = ref([])
	const getBanners = async () => {
		banners.value = (await apiGetBanner()).data
	}
	const getNotices = async () => {
		notices.value = (await apiGetNotice({
			select: true
		})).data
	}
	const getDayRandoms = async () => {
		dayRandoms.value = (await apiGetDayRandom()).data
	}
	const getClassify = async () => {
		classifys.value = (await apiGetClassify({
			select: true
		})).data
	}
	getBanners()
	getNotices()
	getDayRandoms()
	getClassify()

	const goToPreview = (id) => {
		uni.setStorageSync("storgClassList", dayRandoms.value)
		uni.navigateTo({
			url: `/pages/preview/preview?id=${id}`
		})
	}

	// 分享给好友
	onShareAppMessage((e) => {
		return {
			title: "咸虾米壁纸，好看的手机壁纸",
			path: '/pages/classify/classify'
		}
	})
	//分享朋友圈
	onShareTimeline(() => {
		return {
			title: "咸虾米壁纸，好看的手机壁纸"
		}
	})
</script>

<style lang="scss" scoped>
	.home {
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				// height: 340rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					aspect-ratio: 4 / 10;

					.navigator {
						width: 100%;
						height: 100%;

						.image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
							object-fit: cover;
						}
					}


				}
			}
		}

		.bulletin {
			display: flex;
			height: 70rpx;
			margin: 0 30rpx;
			align-items: center;
			justify-content: center;
			gap: 10rpx;
			background-color: #f9f9f9;
			border-radius: 70rpx;
			padding: 0 20rpx;

			.title {
				width: fit-content;
				display: flex;
				align-items: center;
				justify-content: center;


				:deep(.uni-icons) {
					color: $banner-primary-color !important;
				}

				.text {
					color: $banner-primary-color;
					font-size: 30rpx;
				}
			}

			.swiper {
				height: 100%;
				flex: 1;
				padding: 0 10rpx;
				display: flex;
				align-items: center;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 30rpx;

				&-item {
					height: 100%;
					display: flex;
					align-items: center;
				}

				&-navigator {
					color: $color-1;
				}

			}

			.forward {
				:deep(.uni-icons) {
					color: $color-1;
				}
			}
		}

		.recommendation {
			padding: 60rpx 30rpx;

			.rec-header {
				display: flex;
				align-items: center;
				gap: 10rpx;
				color: $banner-primary-color;
				font-size: 25rpx;

				:deep(.uni-icons) {
					color: $banner-primary-color !important;
				}
			}

			.content {
				// .scroll {
				white-space: nowrap;
				padding-top: 40rpx;

				&__card {
					width: 200rpx;
					height: 430rpx;
					display: inline-block;
					margin-right: 15rpx;

					&-image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}

					&:last-child {
						margin-right: 0;
					}
				}

				// }


			}
		}

		.theme {
			padding: 60rpx 30rpx;

			&-header {
				color: $color-1;
				font-size: 25rpx;
			}

			&-content {
				padding-top: 40rpx;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 10rpx;
			}
		}
	}
</style>