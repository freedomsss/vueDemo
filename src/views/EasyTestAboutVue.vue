<template>
  <div>
    <div :title="title" @click="sayHello">{{message}}</div>
    <TodoItem :items="manyMessage"></TodoItem>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <div>{{reversedMessage}}</div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import TodoItem from '../components/TodoItem'

export default {
  components: {
    TodoItem
  },
  data () {
    return {
      message: 'say hello ww',
      title: `信息加载与 ${new Date().toLocaleString()}`,
      manyMessage: ['hahah', 'lalala', 'xoixixix'],
      isButtonDisabled: 1
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split(' ').reverse().join(' ')
    }
  },
  mounted () {
    window.vm.message = this.message
    console.log(window.vm)
    console.log(window.vm.reversedMessage)
  },
  methods: {
    sayHello () {
      Toast.success('hello world!')
    }
  }
}
</script>
