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
    </ul>
    <h3>js</h3>
    <ul>
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
  mounted () {
    // this.test()
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
