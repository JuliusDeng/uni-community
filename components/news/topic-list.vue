<template>
	<view class="flex mx-2">
		<image :src="item.cover" style="width: 150rpx;height: 150rpx;" class="rounded mr-2"></image>
		<view class="flex flex-column flex-1">
			<text class="font-md">#{{item.title}}#</text>
			<text class="text-secondary">{{item.desc}}</text>
			<view class="flex text-secondary">
				<text class="mr-1">动态{{item.news_count}}</text>
				<text>今日{{item.today_count}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['item', 'index']
		// props:{
		// 	item: Object,
		// 	index: Number
		// }
	}
</script>

<style>
</style>
