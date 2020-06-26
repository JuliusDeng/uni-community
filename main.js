import Vue from 'vue'
import App from './App'

// 引入全局divider分割组件
import divider from "@/components/common/divider.vue"
Vue.component('divider', divider)
// 引入全局nothing组件
import nothing from "@/components/common/nothing.vue"
Vue.component('nothing', nothing)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
