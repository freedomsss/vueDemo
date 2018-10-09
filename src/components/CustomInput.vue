<template>
  <div class="my-input">
    <label>自定义的输入框组件</label>
    <input type="text" :value="value" v-on:input="$emit('input', $event.target.value)" autocomplete="off">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
  .my-input{
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 300px;
    input{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
    }
    input:focus{
      outline: none;
      border-color: #409eff;
    }
    /*input:hover{*/
      /*outline: none;*/
      /*border-color: #606265;*/
    /*}*/
  }
</style>
