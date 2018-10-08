import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import common from './utils/common'
import { Toast } from 'vant'
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'

// Vue.use(Vant)

Vue.use(common)
Vue.use(Toast)

Vue.config.productionTip = false // 生产环境去掉vue的警告信息

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
