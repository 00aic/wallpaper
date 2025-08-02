<template>
	<view class="search">
		<!-- <view class="header"> -->
		<uni-search-bar @confirm="onSearch" @cancel="onClear" @clear="onClear" focus placeholder="搜索"
			v-model="queryParams.keyword">
		</uni-search-bar>
		<!-- </view> -->
		<view class="body" v-if="!classList.length || noSearch">
			<view class="history" v-if="historySearch.length">
				<view class="title">
					<view class="text">最近搜索</view>
					<view class="icon" @click="removeHistory">
						<uni-icons type="trash" size="25"></uni-icons>
					</view>
				</view>
				<view class="tabs">
					<view class="tab" @click="clickTab(tab)" v-for="tab in historySearch" :key="tab">{{tab}}</view>
				</view>
			</view>
			<view class="history" v-if="recommendList.length">
				<view class="title">
					<view class="text">热门搜索</view>
					<view class="icon" @click="removeHistory">
						<uni-icons type="trash" size="25"></uni-icons>
					</view>
				</view>
				<view class="tabs">
					<view class="tab" @click="clickTab(tab)" v-for="tab in recommendList" :key="tab">{{tab}}</view>
				</view>
			</view>
		</view>
		<view class="noSearch" v-if="noSearch">
			<uv-empty mode="search" icon="http://cdn.uviewui.com/uview/empty/search.png"></uv-empty>
		</view>
		<view v-else>
			<view class="categorized-content">
				<navigator :url="`/pages/preview/preview?id=${item._id}`" v-for="item in classList" :key="item._id"
					class="categorized-content__item">
					<image class="categorized-content__item-image" :src="item.smallPicurl" mode="aspectFill"></image>
				</navigator>
			</view>
			<view class="loading-layout" v-if="classList.length || noData">
				<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import {
		onLoad,
		onUnload,
		onReachBottom
	} from "@dcloudio/uni-app";
	import {
		apiSearchData
	} from "../../api/api";
	//查询参数
	const queryParams = ref({
		pageNum: 1,
		pageSize: 12,
		keyword: ""
	})
	//搜索历史词
	const historySearch = ref(uni.getStorageSync("historySearch") || []);

	//热门搜索词
	const recommendList = ref(["美女", "帅哥", "宠物", "卡通"]);

	//没有更多
	const noData = ref(false);
	//没有搜索结果
	const noSearch = ref(false);

	//搜索结果列表
	const classList = ref([]);
	//点击搜索
	const onSearch = () => {
		uni.showLoading()
		historySearch.value = [...new Set([queryParams.value.keyword, ...historySearch.value])].slice(0, 10);
		uni.setStorageSync("historySearch", historySearch.value)
		initParams(queryParams.value.keyword)
		searchData()
	}

	//点击清除按钮
	const onClear = () => {
		initParams()
	}




	//点击标签进行搜索
	const clickTab = (value) => {
		initParams(value)
		onSearch()
	}


	//点击清空搜索记录
	const removeHistory = () => {
		uni.showModal({
			title: "是否清空历史搜索？",
			success: res => {
				if (res.confirm) {
					uni.removeStorageSync("historySearch");
					historySearch.value = []
				}
			}
		})
	}

	const searchData = async () => {
		try {
			const res = await apiSearchData(queryParams.value)
			classList.value = [...classList.value, ...res.data]
			uni.setStorageSync("storgClassList", classList.value)
			if (queryParams.value.pageSize > res.data.length) {
				noData.value = true
			}
			if (res.data.length === 0 && classList.value.length === 0) {
				noSearch.value = true
			}
		} finally {
			uni.hideLoading()
		}
	}
	const initParams = (value = '') => {
		classList.value = [];
		noData.value = false;
		noSearch.value = false;
		queryParams.value = {
			pageNum: 1,
			pageSize: 12,
			keyword: value || ""
		}
	}
	//触底加载更多
	onReachBottom(() => {
		if (noData.value) return;
		queryParams.value.pageNum++
		searchData();
	})

	//关闭有页面
	onUnload(() => {
		uni.removeStorageSync("storgClassList", classList.value);
	})
</script>

<style lang="scss" scoped>
	.search {
		display: flex;
		flex-direction: column;
		gap: 30rpx;
		padding: 30rpx;

		.body {
			display: flex;
			flex-direction: column;
			gap: 30rpx;

			.history {
				display: flex;
				flex-direction: column;


				.title {
					display: flex;
					justify-content: space-between;
				}

				.tabs {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					padding-top: 20rpx;

					.tab {
						background: #F4F4F4;
						font-size: 28rpx;
						color: #333;
						padding: 10rpx 28rpx;
						border-radius: 50rpx;
						margin-right: 20rpx;
						margin-top: 20rpx;
					}
				}
			}
		}

		.categorized {
			&-content {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 10rpx;
				padding: 30rpx;

				&__item {
					aspect-ratio: 4 / 10;

					&-image {
						height: 100%;
						width: 100%;
						object-fit: cover;
						border-radius: 10rpx;
						display: block;
					}
				}
			}


		}
	}
</style>