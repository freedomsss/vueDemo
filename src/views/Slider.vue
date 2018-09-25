<template>
    <div>
      <div class="container">
        <div
          class="item"
          :class="{'next-item' : nextIndex === evenIndex}"
          ref="evenTask"
        >
          <h5>{{contents[currentIndex].title}}</h5>
          <p>{{contents[currentIndex].content}}</p>
        </div>
        <div
          class="item"
          :class="{'next-item' : nextIndex === oddIndex}"
          ref="oddTask"
        >
          <h5>{{contents[currentIndex].title}}</h5>
          <p>{{contents[currentIndex].content}}</p>
        </div>
      </div>
        <button class="btn" @click="changeTab">下一页</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      contents: [],
      currentIndex: 0, // 当前显示的index
      nextIndex: 1, // 表示下一张index,值为currentIndex + 1
      evenIndex: 0, // 偶数的index
      oddIndex: 1 // 奇数index
    }
  },
  created () {
    this.contents = [{
      title: '标题1',
      content: 'Vue实例是进入Vue的第一步，创建一个Vue的实例也是学习Vue的起点。'
    }, {
      title: '标题2',
      content: '实际上，Vue框架的入口就是Vue实例，其实就是框架中的View Model，'
    }, {
      title: '标题3',
      content: '它包含页面中的业务处理逻辑、数据模型等，它的生命周期中有多个事件'
    }, {
      title: '标题4',
      content: '钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。Vue实'
    }]
  },
  methods: {
    changeTab () {
      this.currentIndex = (this.currentIndex + 1) % this.contents.length
      console.log(this.currentIndex)
      this._slideToNext()
    },
    _slideToNext () {
      let currentType = this.currentIndex % 2 ? 'even' : 'odd'
      let nextType = this.currentIndex % 2 ? 'odd' : 'even'
      let $nextSlide = this.$refs[`${nextType}Task`]
      console.log($nextSlide)
      $nextSlide.style.display = 'block'
      // $nextSlide.style.transform = 'translateX(0)'
      setTimeout(() => {
        $nextSlide.style.transform = 'translateX(0)'
        setTimeout(() => {
          this.nextIndex = (this.currentIndex + 1) % this.contents.length
          console.log(this.nextIndex)
          this[`${nextType}Index`] = this.currentIndex
          this[`${currentType}Index`] = this.nextIndex
        }, 500)
      }, 0)
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    width: 302px;
    margin: 0 auto;
    overflow: hidden;
    height: 200px;
    /*display: flex;*/
    position: relative;
  }
  .item{
    width: 300px;
    margin: 0 auto;
    border: 1px solid aqua;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    h5{
      width: 100%;
      height: 30px;
      line-height: 30px;
      background-color: aqua;
      color: #fff;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
    p{
      padding: 20px;
      height: 100px;
      background-color: #fff;
    }
  }
  .next-item{
    display: none;
    transform: translateX(100%);
    transition: transform 0.5s ease;
    z-index: 2;
  }
  .btn{
    width: 100px;
    height: 35px;
    margin-top: 100px;
    user-select: none;
  }
</style>
