// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由文件
import router from './router'
//引入echarts
import echarts from 'echarts'
//一般加一个$加到vue的原型链上，方便引用
Vue.prototype.$echarts = echarts

//在主要的js文件中引入myCharts.js文件，然后其他所有需要的图表都统一写在myCharts中
// import myCharts from './echarts/myCharts.js'
// Vue.use(myCharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
