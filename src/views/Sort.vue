<template>
    <div>
        <div class="container">
            <transition-group name="flip-lis" tag="div">
                <div
                    class="sort"
                    v-for="(item, index) in arr"
                    :key="index"
                    :style="{
                    left: index * 30 + 'px'
                    }"
                    :id="index"
                >
                    {{item}}
                </div>
            </transition-group>
        </div>
        <div class="start" @click="startSort">开始排序</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [5, 4, 8, 9, 6, 5, 4, 12, 3, 6, 7, 8, 56]
    }
  },
  methods: {
    startSort () {
      let arr = this.arr
      for (let i = 0; i < this.arr.length; i++) {
        for (let j = 0; j < this.arr.length - i; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          }
        }
      }
      this.$set(arr)
      // this.arr = _.shuffle(arr)
    }
  }
}
</script>

<style scoped lang="less">
    .container{
        margin: 100px;
        height: 20px;
        position: relative;
        top: 0;
        .sort{
            width: 20px;
            height: 20px;
            border: 1px solid #ff0081;
            text-align: center;
            line-height: 20px;
            position: absolute;
            top: 0;
            transition: all .6s linear;
        }
    }
    .start{
        width: 100px;
        height: 36px;
        margin-left: 100px;
        line-height: 36px;
        text-align: center;
        color: #fff;
        background-color: #ff0081;
        &:hover{
            transform: scale(1.1);
            background-color: red;
        }
    }
</style>
