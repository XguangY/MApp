import Vue from 'vue'
import App from './App'
import router from './router'
// 引入全局css
import 'common/stylus/index.styl'
import 'babel-polyfill'
// 移动端点击300ms延迟解决方案
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
