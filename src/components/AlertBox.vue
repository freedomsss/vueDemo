<template>
  <div class="error-box">
    <strong>Error!</strong>
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
  .error-box{
    padding: 20px;
    text-align: left;
    background-color: #f3beb8;
    border-color: #f09898;
  }
</style>
