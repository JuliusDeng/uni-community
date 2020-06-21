<template>
	<view>
		<template v-if="searchList.length === 0">
			<view class="ml-2 mt-4 mb-2 font-md">搜索历史</view>
			<view class="flex flex-wrap">
				<view v-for="(item, index) in list" :key="index" class="mx-2 px-2 mt-2 border rounded" hover-class="bg-light" @click="clickSearchHistory(item)">
					{{item}}
				</view>
			</view>
		</template>
		
		<template v-else>
			<!-- 数据列表 -->
			<block v-for="(item, index) in searchList" :key="index">
				<common-list :item='item' :index='index'></common-list>
			</block>
		</template>
		
	</view>
</template>

<script>
	const demo = [{
			username:"昵称",
			userpic:"/static/default.jpg",
			newstime:"2019-10-20 下午04:30",
			isFollow:false,
			title:"我是标题",
			titlepic:"/static/demo/datapic/11.jpg",
			support:{
				type:"support", // 顶
				support_count:1,
				unsupport_count:2
			},
			comment_count:2,
			share_num:2
		},
		{
			username:"昵称",
			userpic:"/static/default.jpg",
			newstime:"2019-10-20 下午04:30",
			isFollow:false,
			title:"我是标题",
			titlepic:"",
			support:{
				type:"unsupport", // 踩
				support_count:1,
				unsupport_count:2
			},
			comment_count:2,
			share_num:2
		},
		{
			username:"昵称",
			userpic:"/static/default.jpg",
			newstime:"2019-10-20 下午04:30",
			isFollow:false,
			title:"我是标题",
			titlepic:"",
			support:{
				type:"", // 未操作
				support_count:1,
				unsupport_count:2
			},
			comment_count:2,
			share_num:2
	}];
	
	import commonList from '@/components/common/common-list.vue'
	
	export default {
		components: {
			commonList
		},
		data() {
			return {
				list: ['我爱你，不畏人海的距离', '想把我唱给你听', '你是我的幸福', '人民的名义', '咱们结婚吧'],
				searchText: '',
				searchList: []
			}
		},
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(e) {
			console.log(e);
			this.searchText = e.text  // 实时获取输入框里的值
		},
		// 监听点击导航搜索按钮
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				this.searchEvent()
			}
		},
		methods: {
			// 点击搜索历史
			clickSearchHistory(text) {
				this.searchText = text
				this.searchEvent()
			},
			// 搜索事件
			searchEvent() {
				// 收起键盘
				uni.hideKeyboard()
				// 显示loading状态
				uni.showLoading({
					title: '加载中...',
					mask: false
				})
				// 请求搜索
				setTimeout(() => {
					this.searchList = demo
					// 隐藏loading
					uni.hideLoading()
				}, 3000)
			}
			
		}
	}
</script>

<style>

</style>
