<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
    <button v-on:click="$emit('showHidden', 11)">显示与隐藏（子组件向父组件发送消息）</button>
    <!--<div>显示与隐藏</div>-->
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    showHidden () {
      console.log(1)
    }
  }
}
</script>
