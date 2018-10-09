<template>
  <div>
    <div :title="title" @click="sayHello">{{message}}</div>
    <TodoItem :items="manyMessage" v-on:showHidden="showHidden"></TodoItem>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <div>计算属性的运用</div>
    <div>{{reversedMessage}}</div>
    <div>
      fullName: {{fullName}}
    </div>
    <div>样式：class与style绑定</div>
    <div :class="{active: isActive, danger: isDanger}">hhhh</div>
    <div v-show="isShow">被控制的显示与隐藏的文字</div>
    <custom-input v-model="searchText" :value="searchText" v-on:input="searchText = $event"></custom-input>
    <p>{{searchText}}</p>
    <alert-box>something wrong... </alert-box>
  </div>
</template>

<script>
import { Toast } from 'vant'
import TodoItem from '../components/TodoItem'
import CustomInput from '../components/CustomInput'
import AlertBox from '../components/AlertBox'

export default {
  components: {
    TodoItem,
    AlertBox,
    CustomInput
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
      isShow: true,
      isDanger: true,
      searchText: ''
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
    },
    showHidden (data) {
      this.isShow = !this.isShow
      console.log(data)
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
