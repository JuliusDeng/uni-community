<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-row" :scroll-into-view="scrollInto" scroll-with-animation>
			<view v-for="(item, index) in tabBars" :key="index" class="scroll-row-item px-3 py-2 font-md" :id="'tab' + index" :class="tabIndex === index ? 'text-main font-lg font-weight-bold' : ''" @click="changeTab(index)">
				{{item.name}}
			</view>
		</scroll-view>
		<!-- 列表样式 -->
		<block v-for="(item, index) in list" :key="index">
			<common-list v-bind:item="item" v-bind:index="index" v-on:follow="follow" @doSupport='doSupport'></common-list>
			<divider/>
		</block>
		
	</view>
</template>

<script>
	import commonList from "@/components/common/common-list.vue"
	
	export default {
		components: {
			commonList,
		},
		data() {
			return {
				scrollInto: '',
				tabIndex: 0,
				tabBars: [{
				    name: '关注',
				}, {
				    name: '推荐',
				}, {
				    name: '体育',
				}, {
				    name: '热点',
				}, {
				    name: '财经',
				}, {
				    name: '娱乐',
				}, {
				    name: '军事',
				}, {
				    name: '历史',
				}, {
				    name: '本地',
				}],
				list:[
					{
						username:"昵称",
						userpic:"/static/default.jpg",
						newstime:"2019-10-20 下午04:30",
						isFollow:false,
						title:"我是标题",
						titlepic:"/static/demo/datapic/11.jpg",
						support:{
							type:"",
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
							type:"support",
							support_count:2,
							unsupport_count:3
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
						titlepic:"/static/demo/datapic/11.jpg",
						support:{
							type:"unsupport",
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
						titlepic:"/static/demo/datapic/11.jpg",
						support:{
							type:"support",
							support_count:1,
							unsupport_count:2
						},
						comment_count:2,
						share_num:2
					},
					
				]
			}
		},
		onLoad() {

		},
		methods: {
			// 顶部 切换选项卡
			changeTab(index) {
				if(this.tabIndex === index) {
					return
				}
				this.tabIndex = index
				// 滚到指定元素
				this.scrollInto = 'tab' + index
			},
			// 关注
			follow(e) {
				this.list[e].isFollow = true
				uni.showToast({
					title: '关注成功'
				})
			},
			// 顶踩操作
			doSupport(e) {
				console.log(e, e.type, e.index);
				// 拿到当前对象
				let item = this.list[e.index]
				// 判断之前没有顶踩过
				if (item.support.type === '') {
					// 控制顶踩数目变化
					item.support[e.type + '_count']++
				} else if (item.support.type === 'support' && e.type === 'unsupport') {
					// 之前顶过，现在传踩
					item.support.support_count--;
					item.support.unsupport_count++;
				} else if (item.support.type === 'unsupport' && e.type === 'support') {
					// 之前踩过，现在传顶
					item.support.support_count++;
					item.support.unsupport_count--;
				}
				// 控制点击顶踩之后的颜色变化
				item.support.type = e.type	
			}
		}
	}
</script>

<style>
	
</style>
