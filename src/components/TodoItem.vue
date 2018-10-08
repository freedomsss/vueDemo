<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>
