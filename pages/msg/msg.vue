<template>
	<view>
		<template v-if="list.length > 0">
			<!-- 消息列表 -->
			<block v-for="(item,index) in list" :key="index">
				<msg-list :item="item" :index="index"></msg-list>
			</block>
		</template>
		<template v-else>
			<nothing></nothing>
		</template>
		 <!-- 顶部的弹出层 -->
		<uni-popup ref="popup" type="top">
			<view class="flex align-center justify-center font-md border-bottom py-2" hover-class="bg-light" @click="popupEvent('friend')">
				<text class="iconfont icon-sousuo mr-2"></text> 添加好友
			</view>
			<view class="flex align-center justify-center font-md py-2" hover-class="bg-light"  @click="popupEvent('clear')">
				<text class="iconfont icon-shanchu mr-2"></text> 清除列表
			</view>
		</uni-popup>
		
		
	</view>
</template>

<script>
	const demo = [{
			avatar:"/static/default.jpg",
			username:"帝莎编程",
			update_time:1570718427,
			data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			noread:'1'
		},{
			avatar:"/static/default.jpg",
			username:"帝莎编程",
			update_time:1570718427,
			data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			noread:'2'
		}];
	
	import msgList from '@/components/msg/msg-list.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue'
	export default {
		components: {
			msgList,
			uniPopup
		},
		data() {
			return {
				list:[]
			}
		},
		// 页面加载
		onLoad() {
			this.list = demo
			// setTimeout(function () {
			// 		console.log('111');
			// 		uni.startPullDownRefresh();
			// }, 2000);
			
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.refresh()
			 console.log('222');
			        // setTimeout(function () {
			        //     uni.stopPullDownRefresh();
			        // }, 2000); 
		},
		// 监听原生导航栏的按钮事件
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0 : // 点击的左边按钮
					this.$refs.popup.close()
					break;
				case 1 : // 点击的右边按钮
					this.$refs.popup.open()
					break;
			}
		},
		methods: {
			// 下拉刷新
			refresh(){
				setTimeout(()=>{
					console.log(333);
					console.log('上：', this.list);
					this.list = [...this.list, ...this.list]
					console.log('下：', this.list);
					// 停止下拉刷新
					uni.stopPullDownRefresh()
				},2000)
			},
			// 弹出层选项点击事件
			popupEvent(e) {
				// 如果 JavaScript 遇到 break 关键词，它会跳出 switch 代码块。此举将停止代码块中更多代码的执行以及 case 测试。
				switch (e) {
					case 'friend': 
						console.log('friend');
						break;
					case 'clear': 
						console.log('clear');
						break;
				};
				// 关闭弹出层
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>

</style>
