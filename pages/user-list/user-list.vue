<template>
	<view>
		<!-- tab -->
		<view class="flex align-center py-2">
			<view class="flex-1 flex align-center justify-center"
			v-for="(item,index) in tabBars" :key="index"
			:class="index === tabIndex ? 'font-lg font-weight-bold text-main':'font-md'"
			@click="changeTab(index)">
			{{item.name}} <text v-if="item.num > 0" class="ml-2">{{item.num}}</text></view>
		</view>
		
		<!-- 列表 -->
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab"
		:style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
				@scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<!-- 列表 -->
						<block v-for="(item2,index2) in item.list" :key="index2">
							
							<!-- 列表样式 -->
							<view class="p-2 flex align-center border-bottom border-light-secondary">
								<image src="/static/default.jpg"
								style="width: 100rpx;height: 100rpx;"
								class="rounded-circle mr-2"></image>
								<view class="flex flex-column flex-1">
									<text class="font-md text-dark">昵称</text>
									<text>性别</text>
								</view> 
								<view class="uni-icon uni-icon-checkbox-filled text-light-muted"></view>
							</view>
							
							
							
							
						</block>
						<!-- 上拉加载 -->
						<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<!-- 无数据 -->
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		
	</view>
</template>

<script>
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components: {
			loadMore,
		},
		data() {
			return {
				// 列表高度
				scrollH:600,
				tabIndex:0,
				tabBars:[{
					name:"互关",
					num:0
				},{
					name:"关注",
					num:2
				},{
					name:"粉丝",
					num:30
				}],
				
				newsList:[]
			}
		},
		// 监听点击输入框事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search',
			});
		},
		onNavigationBarButtonTap() {
			uni.navigateBack({
				delta: 1
			});
		},
		onLoad() {
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - uni.upx2px(101)
				}
			})
			// 根据选项生成列表
			this.getData()
		},
		methods: {
			// 获取数据
			getData(){
				var arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					// 生成列表模板
					let obj = {
						// 1.上拉加载更多  2.加载中... 3.没有更多了
						loadmore:"上拉加载更多",
						list:[]
					}
					if (i < 2) {
						obj.list = [1,2,3,4,5]
					}
					arr.push(obj)
				}
				this.newsList = arr
			},
			// tab切换
			changeTab(index){
				this.tabIndex = index
			},
			// 监听滑动
			onChangeTab(e){
				this.changeTab(e.detail.current)
			},
			// 上拉加载更多
			loadmore(index){
				// 拿到当前列表
				let item = this.newsList[index]
				// 判断是否处于可加载状态（上拉加载更多）
				if (item.loadmore !== '上拉加载更多') return;
				// 修改当前列表加载状态
				item.loadmore = '加载中...'
				// 模拟数据请求
				setTimeout(()=>{
					// 加载数据
					item.list = [...item.list,...item.list]
					// 恢复加载状态
					item.loadmore = '上拉加载更多'
				},10000)
			}
		}
	}
</script>

<style>

</style>
