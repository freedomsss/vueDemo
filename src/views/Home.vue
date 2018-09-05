<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'vant'

export default {
  name: 'home',
  components: {
    [Button.name]: Button,
    HelloWorld
  },
  mounted () {
    this.test()
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
