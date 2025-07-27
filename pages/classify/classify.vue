<template>
	<nav-bar title="分类"></nav-bar>
	<view class="classify">
		<theme-item v-for="item in 16" :key="item"></theme-item>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.classify {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10rpx;
		padding: 30rpx;
	}
</style>