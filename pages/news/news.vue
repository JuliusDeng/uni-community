<template>
	<view>
		<!-- 导航 -->
		<uni-nav-bar :border="false" :fixed="true" :statusBar="true" @click-right='openAddInput'>
			<view class="flex justify-center align-center font-weight-bold w-100">
				<view class="mx-1" @click="changeTab(index)" v-for="(item, index) in tabBars" :key="index" :class="tabIndex === index ? 'font-lg text-main' :'font-md text-light-muted'">
					{{item.name}}
				</view>
			</view>
			<text slot="right" class="iconfont icon-fatie_icon"></text>
			<!-- <text v-slot="right" class="iconfont icon-fatie_icon"></text> -->
		</uni-nav-bar>
		<!-- 关注列表 -->
		<swiper :current="tabIndex" @change="onChangeTab" :duration="150" :style="'height:' + scrollH +'px;'">
			 <!-- 关注 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH +'px;'" @scroll="loadmoreEvent">
					<block v-for="(item, index) in list" :key="index">
						<common-list :item="item" :index="index" :doSupport="doSupport"></common-list>
						<divider></divider>
					</block>
					<load-more :loadmore="loadmore"></load-more>
				</scroll-view>
			</swiper-item>
			 <!-- 话题 -->
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + scrollH +'px;'">
					<!-- 热门分类 -->
					<hot-cate :hotCate='hotCate'></hot-cate>
					<!-- 搜索框 -->
					<view class="p-2">
						<view class="py-1 rounded flex align-center justify-center text-secondary" style="background-color: #f5f5f5;">
							<text class="iconfont icon-sousuo mr-2"></text>搜索话题
						</view>
					</view>
					<!-- 轮播图 -->
					<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular class="px-2 pb-2">
						<swiper-item class="rounded">
							<image src="/static/demo/datapic/4.jpg" style="height: 300rpx;" class="w-100"></image>
						</swiper-item>
						<swiper-item class="rounded">
							<image src="/static/demo/datapic/2.jpg" style="height: 300rpx;" class="w-100"></image>
						</swiper-item>
						<swiper-item class="rounded">
							<image src="/static/demo/datapic/3.jpg" style="height: 300rpx;" class="w-100"></image>
						</swiper-item>
					</swiper>
					<divider></divider>
					<!-- 最近更新 -->
					<view class="m-2 font-md">最近更新</view>
					<block v-for="(item, index) in topicList" :key="index">
						<topic-list :item="item" :index="index"></topic-list>
					</block>	
					
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
			isFollow:true,
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
			isFollow:true,
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
			isFollow:true,
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
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import commonList from '@/components/common/common-list.vue'
	import loadMore from '@/components/common/load-more.vue'
	import hotCate from '@/components/news/hot-cate.vue'
	import topicList from '@/components/news/topic-list.vue'
	
	export default {
		components: {
			uniNavBar,
			commonList,
			loadMore,
			hotCate,
			topicList
		},
		data() {
			return {
				scrollH: 500,
				tabIndex: 0,
				tabBars: [
					{name: '关注'},
					{name: '话题'},
				],
				// 关注列表
				list: [],
				// 1.上拉加载更多  2.加载中... 3.没有更多了
				loadmore: "上拉加载更多",
				// 热门分类
				hotCate: [
					{name: '关注'},
					{name: '推荐'},
					{name: '体育'},
					{name: '热点'},
					{name: '财经'},
					{name: '娱乐'},
				],
				// 话题列表
				topicList: [
					{
						cover:"/static/demo/topicpic/1.jpeg",
						title: '话题名称',
						desc: '话题描述',
						today_count: 1,
						news_count: 22
					},
					{
						cover:"/static/demo/topicpic/1.jpeg",
						title: '话题名称',
						desc: '话题描述',
						today_count: 1,
						news_count: 22
					},
					{
						cover:"/static/demo/topicpic/1.jpeg",
						title: '话题名称',
						desc: '话题描述',
						today_count: 1,
						news_count: 22
					},
					{
						cover:"/static/demo/topicpic/1.jpeg",
						title: '话题名称',
						desc: '话题描述',
						today_count: 1,
						news_count: 22
					},
				]
				
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			}),
			// 加载测试数据
			this.list = demo
		},
		methods: {
			// 切换选项卡
			changeTab(index) {
				this.tabIndex = index
			},
			// 右上角打开发布页
			openAddInput() {
				uni.navigateTo({
					url: '../add-input/add-input'
				})
			},
			onChangeTab(e) {
				// console.log(e);
				this.tabIndex = e.detail.current
			},
			// 顶踩操作
			doSupport(e){
				// 拿到当前对象
				let item = this.list[e.index]
				let msg = e.type === 'support' ? '顶' : '踩'
				// 之前没有操作过
				if (item.support.type === '') {
					item.support[e.type+'_count']++
				} else if (item.support.type ==='support' && e.type === 'unsupport') {
					// 顶 - 1
					item.support.support_count--;
					// 踩 + 1
					item.support.unsupport_count++;
				} else if(item.support.type ==='unsupport' && e.type === 'support'){ 					// 之前踩了
					// 顶 + 1
					item.support.support_count++;
					// 踩 - 1
					item.support.unsupport_count--;
				}
				item.support.type = e.type
				uni.showToast({ title: msg + '成功' });
			},
			loadmoreEvent() {
				if(this.loadmore !== '上拉加载更多') {
					return
				}
				setTimeout(() => {
					this.loadmore = '加载中...'
					// 模拟请求数据
					setTimeout(() => {
						this.list = [...this.list, ...this.list]
						this.loadmore = '上拉加载更多'
					}, 3000)
				},3000)
			}
		}
	}
</script>

<style>

</style>
