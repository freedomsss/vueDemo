import axiosConfig from './http'

const install = (Vue) => {
  // eventBus
  Vue.prototype.$bus = new Vue()
  // 网络请求
  Vue.prototype.$axios = axiosConfig
}

export default install
