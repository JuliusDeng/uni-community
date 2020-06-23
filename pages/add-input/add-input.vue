<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar left-icon="back" title="" statusBar :border="false">
			<view class="w-100 flex align-center justify-center ">
				所有人可见<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		<!-- 发布文本域 -->
		<textarea v-model="content" placeholder="说一句话吧~" class="uni-textarea px-2"/>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				content: ""
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
