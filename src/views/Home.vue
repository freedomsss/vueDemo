<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h3>html</h3>
    <ul>
    </ul>
    <h3>css</h3>
    <ul>
      <li><router-link to="/menu"><van-tag type="success">光标下划线跟随的导航栏</van-tag></router-link></li>
      <li><router-link to="/canvasDemo"><van-tag type="success">边框</van-tag></router-link></li>
    </ul>
    <h3>js</h3>
    <ul>
      <li><router-link to="/sort"><van-tag type="success">排序动画</van-tag></router-link></li>
      <li><router-link to="/slider"><van-tag type="success">轮播切换效果</van-tag></router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Tag } from 'vant'

export default {
  name: 'home',
  components: {
    [Tag.name]: Tag,
    HelloWorld
  },
  mounted: function () {
    // this.test()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } else {
      alert('您的浏览器不支持使用HTML 5来获取地理位置服务')
    }

    // 定位数据获取成功响应
    function onSuccess (position) {
      console.log('纬度: ' + position.coords.latitude + '\n' +
        '经度: ' + position.coords.longitude + '\n' +
        '海拔: ' + position.coords.altitude + '\n' +
        '水平精度: ' + position.coords.accuracy + '\n' +
        '垂直精度: ' + position.coords.altitudeAccura)
    }
    // 定位数据获取失败响应
    function onError (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert('您拒绝对获取地理位置的请求')
          break
        case error.POSITION_UNAVAILABLE:
          alert('位置信息是不可用的')
          break
        case error.TIMEOUT:
          alert('请求您的地理位置超时')
          break
        case error.UNKNOWN_ERROR:
          alert('未知错误')
          break
      }
    }
  },
  methods: {
    test () {
      const poatData = {
        serviceId: 0,
        itemId: 0,
        channel: 0
      }
      this.$axios.post('/comm/shareRecords', poatData).then((res) => {
        console.log('res', res)
      }).catch(error => {
        console.log('error', error)
      })
    }
  }
}
</script>

<style lang="less">
  ul li{
    margin-top: 10px;
  }
  .van-tag{
    font-size: 18px;
  }
</style>
