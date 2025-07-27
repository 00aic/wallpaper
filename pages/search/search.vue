<template>
	<view class="search">
		<!-- <view class="header"> -->
		<uni-search-bar @confirm="onSearch" @cancel="onClear" @clear="onClear" focus placeholder="搜索"
			v-model="queryParams.keyword">
		</uni-search-bar>
		<!-- </view> -->
		<view class="history">
			<view class="title">
				<view class="z">最近搜索</view>
				<view class="icon" @click="removeHistory">
					<uni-icons type="trash" size="25"></uni-icons>
				</view>
			</view>
			<view class="tabs">
				<view class="tab" v-for="tab in historySearch" :key="tab"></view>
			</view>
		</view>
		<view class="history">
			<view class="noSearch">
				<uv-empty mode="search" icon="http://cdn.uviewui.com/uview/empty/search.png"></uv-empty>
			</view>
			<view class="title">
				<view class="z">热门搜索</view>
				<view class="icon" @click="removeHistory">
					<uni-icons type="trash" size="25"></uni-icons>
				</view>
			</view>
			<view class="tabs">
				<view class="tab" v-for="tab in recommendList" :key="tab"></view>
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
	//查询参数
	const queryParams = ref({
		pageNum: 1,
		pageSize: 12,
		keyword: ""
	})
	//搜索历史词
	const historySearch = ref(['搜索词1', '搜索词2', '搜索词3', '搜索词4']);

	//热门搜索词
	const recommendList = ref(["美女", "帅哥", "宠物", "卡通"]);

	//没有更多
	const noData = ref(false);
	//没有搜索结果
	const noSearch = ref(false);

	//搜索结果列表
	const classList = ref([{
		_id: 123123,
		smallPicurl: 'https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/xxmBizhi/20231102/1698905562410_0_small.webp'
	}]);
	//点击搜索
	const onSearch = () => {

	}

	//点击清除按钮
	const onClear = () => {

	}




	//点击标签进行搜索
	const clickTab = (value) => {

	}


	//点击清空搜索记录
	const removeHistory = () => {
		uni.showModal({
			title: "是否清空历史搜索？",
			success: res => {
				if (res.confirm) {
					console.log("确认删除");
				}
			}
		})
	}

	//触底加载更多
	onReachBottom(() => {

	})

	//关闭有页面
	onUnload(() => {

	})
</script>

<style lang="scss" scoped>

</style>