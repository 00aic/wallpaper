<template>
	<view class="categorized">
		<navigator url="/pages/preview/preview" v-for="item in 15" :key="item">
			<image class="categorized-image" src="/common/images/classify1.jpg" mode="aspectFill"></image>
		</navigator>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.categorized {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10rpx;
		aspect-ratio: 4 / 10;
		padding: 30rpx;

		&-image {
			height: 100%;
			width: 100%;
			object-fit: cover;
			border-radius: 10rpx;
		}
	}
</style>