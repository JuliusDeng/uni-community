<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar left-icon="back" statusBar :border="false">
			<view class="w-100 flex align-center justify-center ">
				所有人可见<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		<!-- 发布文本域 -->
		<textarea v-model="content" placeholder="说一句话吧~" class="uni-textarea px-2"/>
		<!-- 多图上传 -->
		<unload-image :list='imageList' @change='change'></unload-image>
		
		<!-- 底部操作条 -->
		<view class="fixed-bottom border-danger flex align-center" style="height: 85rpx;">
			<view class="iconfont icon-caidan footer-btn animated" hover-class="flash"></view>
			<view class="iconfont icon-huati footer-btn animated" hover-class="flash"></view>
			<view class="iconfont icon-tupian footer-btn animated" hover-class="flash"></view>
			
			<view class="flex justify-center align-center ml-auto mr-2 text-white bg-main animated" hover-class="flash" style="width: 140rpx;height: 60rpx;">
				发送
			</view>	
		</view>
		
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import unloadImage from '@/components/common/upload-image.vue'
	export default {
		components: {
			uniNavBar,
			unloadImage
		},
		data() {
			return {
				content: "",
				imageList: [],
				// 是否已经弹出提示框
				showBack: false
			}
		},
		onBackPress() {
			if((this.content !== '' || this.imageList.length > 0) && !this.showBack) {
				console.log('out');
				uni.showModal({
					content:'是否保存为草稿？',
					showCancel:true,
					cancelText:'不保存',
					confirmText:'保存',
					success: (res) => {
						// 点击确认
						console.log(res);
						if(res.confirm) {
							this.store()
						}
						// 手动执行返回
						uni.navigateBack({})
						console.log('保存了222');
					}
				})
				this.showBack = true
				console.log('out222');
				return true
			}
		},
		// 页面加载时
		onLoad() {
			uni.getStorage({
				key: 'add-input',
				success: (res) => {
					console.log(res);
					if(res.data) {
						let result = JSON.parse(res.data)
						console.log(result);
						this.content = result.content
						this.imageList = result.imageList
					}
				}
			})
		},
		methods: {
			// 选中图片
			change(e) {
				this.imageList = e
			},
			// 保存草稿
			store() {
				uni.setStorage({
					key: 'add-input',
					data: JSON.stringify({
						content: this.content,
						imageList: this.imageList
					})
				})
			}
		}
	}
</script>

<style>
.footer-btn {
	width: 86rpx;
	height: 86rpx;
	display: flex;
	justify-content: center;
	align-content: center;
	font-size: 50rpx;
}
</style>
