<template>
  <div>
    <div :title="title" @click="sayHello">{{message}}</div>
    <TodoItem :items="manyMessage"></TodoItem>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <div>计算属性的运用</div>
    <div>{{reversedMessage}}</div>
    <div>
      fullName: {{fullName}}
    </div>
    <div>样式：class与style绑定</div>
    <div :class="{active: isActive, danger: isDanger}">hhhh</div>
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
      isButtonDisabled: 1,
      firstName: 'li',
      lastName: 'hao',
      isActive: false,
      isDanger: true
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split(' ').reverse().join(' ')
    },
    fullName: {
      get () {
        return this.firstName + ' ' + this.lastName
      },
      set (newValue) {
        console.log(newValue)
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  mounted () {
    window.vm.message = this.message
    // this.fullName = '' // 计算属性重新赋值时会触发set函数
    // console.log(window.vm)
    // console.log(window.vm.reversedMessage)
  },
  methods: {
    sayHello () {
      Toast.success('hello world!')
    }
  }
}
</script>

<style lang="less" scoped>
  .active{
    color: aqua;
  }
  .danger{
    color: red;
  }
</style>
