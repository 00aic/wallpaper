<template>
	<view class="notice">
		<view class="title">
			<view class="tag" v-if="detail.select">
				<uni-tag inverted text="置顶" type="error" />
			</view>
			<view>{{detail.title}}</view>
		</view>
		<view class="info">
			<view>{{detail.author}}</view>
			<uni-dateformat :date="detail.publish_date" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
		</view>
		<view class="content">
			<mp-html :content="detail.content" />
			<!-- <rich-text :nodes="detail.content"></rich-text> -->
		</view>

		<view class="count">
			阅读 {{detail.view_count}}
		</view>
	</view>
</template>

<script setup>
	import {
		apiNoticeDetail
	} from "@/api/api"
	import {
		ref
	} from "vue";
	import {
		onLoad
	} from "@dcloudio/uni-app"
	const detail = ref({})
	let noticeId
	onLoad((e) => {
		console.log('e', e)
		noticeId = e.id
		getNoticeDetail();
	})


	const getNoticeDetail = () => {
		apiNoticeDetail({
			id: noticeId
		}).then(res => {
			detail.value = res.data
		})
	}
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