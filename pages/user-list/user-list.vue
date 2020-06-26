<template>
	<view>
		ddd
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search'
			})
		},
		onNavigationBarButtonTap() {
			uni.navigateBack({
				delta: 1
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
