import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios
// 引入完毕
// 引入echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
// 引入完毕

import api from './utils/api'
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
