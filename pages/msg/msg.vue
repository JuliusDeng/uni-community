<template>
	<view>
		
		<!-- 消息列表 -->
		<block v-for="(item,index) in list" :key="index">
			<msg-list :item="item" :index="index"></msg-list>
		</block>
		
	</view>
</template>

<script>
	import msgList from '@/components/msg/msg-list.vue';
	export default {
		components: {
			msgList
		},
		data() {
			return {
				list:[{
					avatar:"/static/default.jpg",
					username:"帝莎编程",
					update_time:1593164037,
					data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
					noread:20
				},{
					avatar:"/static/default.jpg",
					username:"帝莎编程",
					update_time:1593164037,
					data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
					noread:20
				},{
					avatar:"/static/default.jpg",
					username:"帝莎编程",
					update_time:1593164037,
					data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
					noread:20
				},{
					avatar:"/static/default.jpg",
					username:"帝莎编程",
					update_time:1593164037,
					data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
					noread:20
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
