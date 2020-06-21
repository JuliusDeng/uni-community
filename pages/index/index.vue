<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-row" :scroll-into-view="scrollInto" scroll-with-animation style="height: 100rpx;">
			<view v-for="(item, index) in tabBars" :key="index" class="scroll-row-item px-3 py-2 font-md" :id="'tab' + index" :class="tabIndex === index ? 'text-main font-lg font-weight-bold' : ''" @click="changeTab(index)">
				{{item.name}}
			</view>
		</scroll-view>
		<!-- 对应滑块区域 -->
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:' + scrollH + 'px'">
			<swiper-item v-for="(item, index) in newsList" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<!-- 列表样式 -->
						<block v-for="(item2, index2) in item.list" :key="index2">
							<common-list v-bind:item="item2" v-bind:index="index2" v-on:follow="follow" @doSupport='doSupport'></common-list>
							<divider/>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<template v-else>
						<nothing></nothing>
					</template>
					
				</scroll-view>
			</swiper-item>
		</swiper>
		
		
	</view>
</template>

<script>
	const demo = [
		{
			username:"昵称",
			userpic:"/static/default.jpg",
			newstime:"2019-10-20 下午04:30",
			isFollow:false,
			title:"我是标题1",
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
			title:"我是标题2",
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
			title:"我是标题3",
			titlepic:"/static/demo/datapic/11.jpg",
			support:{
				type:"unsupport",
				support_count:1,
				unsupport_count:2
			},
			comment_count:2,
			share_num:2
		},
	]
	import commonList from "@/components/common/common-list.vue"
	import loadMore from "@/components/common/load-more.vue"
	
	export default {
		components: {
			commonList,
			loadMore
		},
		data() {
			return {
				// 列表高度设置
				scrollH: 555,
				// 顶部选项卡
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
				newsList: []
			}
		},		
		// 监听原生标题栏搜索输入框点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
			});
		},
		// 监听页面加载，其参数为上个页面传递的数据（可用于页面间通讯哦）		
		onLoad() {
			// 获取屏幕列表高度
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			})
			// 根据选项卡生成列表
			this.getData()
		},
		methods: {
			// 获取数据
			getData() {
				var arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					// 生成列表模板
					let obj = {
						// 1.上拉加载更多  2.加载中... 3.没有更多了
						loadmore: '上拉加载更多',
						list:[]
					}
					if(i < 2) {
						obj.list = demo
					}
					arr.push(obj)
				}
				// newsList = [obj] 而obj里面有loadmore和list:[],	obj.list = demo,这个demo才是模拟的数据]
				this.newsList = arr
			},
			// 切换 顶部选项卡
			changeTab(index) {
				if(this.tabIndex === index) {
					return
				}
				this.tabIndex = index
				// 滚到指定元素
				this.scrollInto = 'tab' + index
			},
			// 监听滑动
			onChangeTab(e) {
				console.log(e);
				this.changeTab(e.detail.current)
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
			},
			// 上拉加载更多
			loadmore(index) {
				// 拿到当前列表
				let item = this.newsList[index]
				// （优化）判断是否处于可加载状态（如果是已经处于“加载中”或“没有更多了”是不应该触发加载的）
				if(item.loadmore !== '上拉加载更多') return
				// 修改当前列表的加载状态
				item.loadmore = '加载中...'
				console.log('上拉加载更多');
				// 模拟获取后端数据
				setTimeout(() => {
					// 加载数据
					item.list = [...item.list, ...item.list]
					// 恢复加载状态
					item.loadmore = '上拉加载更多'
				}, 8000)
			}
			
		}
	}
</script>

<style>
	
</style>
