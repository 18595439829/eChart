// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import eCharts from 'echarts'
import iView from 'iview'
import 'echarts/lib/chart/map'
import 'echarts/map/js/china.js'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = eCharts 
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
