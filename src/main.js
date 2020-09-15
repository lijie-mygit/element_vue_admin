import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import htmlToPdf from '@/until/htmlToPdf'
// 注册-页面转PDF组件
Vue.use(htmlToPdf)


import Editor from '@/components/editor.vue'
Vue.component('Editor', Editor)

import echarts from 'echarts'
import axios from './api/axios'

Vue.prototype.$echarts = echarts
Vue.prototype.axios = axios


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')