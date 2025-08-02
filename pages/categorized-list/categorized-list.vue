<template>
	<view class="categorized">
		<view class="loading-layout" v-if="!classList.length && !noData">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="categorized-content">
			<navigator :url="`/pages/preview/preview?id=${item._id}`" v-for="item in classList" :key="item._id"
				class="categorized-content__item">
				<image class="categorized-content__item-image" :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="loading-layout" v-if="classList.length || noData">
			<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
		</view>
		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script setup>
	import {
		apiGetClassList,
		apiGetHistoryList
	} from '@/api/api'
	import {
		onLoad,
		onReachBottom,
		onShareAppMessage,
		onShareTimeline,
		onUnload
	} from '@dcloudio/uni-app'
	import {
		ref
	} from 'vue'
	//分类列表数据
	const classList = ref([]);
	const noData = ref(false)

	//定义data参数
	const queryParams = {
		pageNum: 1,
		pageSize: 12
	}
	const pageName = ref('')

	//获取分类列表网络数据
	const getClassList = async () => {
		let res;
		if (queryParams.classid) res = await apiGetClassList(queryParams);
		if (queryParams.type) res = await apiGetHistoryList(queryParams);

		classList.value = [...classList.value, ...res.data];
		if (queryParams.pageSize > res.data.length) noData.value = true;
		uni.setStorageSync("storgClassList", classList.value);
	}

	onLoad((e) => {
		const {
			id,
			name,
			type
		} = e;
		if (type) {
			queryParams.type = type
		}
		if (id) {
			queryParams.classid = id
		}
		pageName.value = name
		uni.setNavigationBarTitle({
			title: name
		})
		//执行获取分类列表方法
		getClassList();
	})
	onUnload(() => {

		uni.removeStorageSync("storgClassList")
	})
	onReachBottom(() => {
		if (noData.value) return;
		queryParams.pageNum++;
		getClassList();
	})

	// 分享给好友
	onShareAppMessage((e) => {
		return {
			title: "咸虾米壁纸-" + pageName.value,
			path: `/pages/categorized-list/categorized-list?id=${queryParams.classid}&name=${pageName.value}`
		}
	})
	//分享朋友圈
	onShareTimeline(() => {
		return {
			title: "咸虾米壁纸-" + pageName.value,
		}
	})
</script>

<style lang="scss" scoped>
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
</style>