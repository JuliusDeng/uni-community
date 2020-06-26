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
	export default {
		components: {
			msgList,
		},
		data() {
			return {
				list:[]
			}
		},
		// 页面加载
		onLoad() {
			this.list = demo
			setTimeout(function () {
					console.log('111');
					uni.startPullDownRefresh();
			}, 2000);
			
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.refresh()
			 console.log('222');
			        // setTimeout(function () {
			        //     uni.stopPullDownRefresh();
			        // }, 2000); 
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
			}
		}
	}
</script>

<style>

</style>
