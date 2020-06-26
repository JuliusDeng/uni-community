<template>
	<view>
		<view class="flex justify-between align-center px-2">
			<text class="font-md">热门分类</text>
			<view class="flex align-center text-secondary animated" hover-class="jello" @click="openMore">
				更多<text class="iconfont icon-jinru"></text>
			</view>
		</view>
		<!-- 推荐展示 -->
		<view class="mx-2 py-3 flex align-center border-bottom">
			<view class="border rounded bg-light mx-1 px-2 text-secondary animated" hover-class="jello" v-for="(item, index) in hotCate" :key="index" @click="openDetail(item)">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['hotCate'],
		methods: {
			openMore() {
				uni.navigateTo({
					url: '../../pages/topic-nav/topic-nav'
				})
			},
			openDetail() {
				console.log('打开热门分类详情');
			}
		}
	}
</script>

<style>
</style>
