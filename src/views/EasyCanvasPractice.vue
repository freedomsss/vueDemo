<template>
  <div class="box">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {
    const canvas = document.getElementById('canvas')
    canvas.width = 800
    canvas.height = 800
    const context = canvas.getContext('2d')
    context.fillStyle = 'pink' // 实心矩形的填充色
    context.strokeStyle = 'darkred'
    /**
     * fillRect(x,y,width,height) 绘制实心矩形
     * 起点的x坐标
     * 起始点的y坐标
     * width矩形的宽
     * height矩形的高
     */
    context.fillRect(0, 0, 100, 100)
    context.fillRect(120, 120, 100, 100)
    /**
     * strokeRect(x,y,width,height) 绘制空心矩形
     * 起点的x坐标
     * 起始点的y坐标
     * width矩形的宽
     * height矩形的高
     */
    context.strokeRect(120, 0, 100, 100)
    context.strokeRect(0, 120, 100, 100)
    /**
     * strokeRect(x,y,width,height) 清除矩形
     * 清除矩形起点的x坐标
     * 清除矩形起始点的y坐标
     * width矩形的宽
     * height矩形的高
     */
    context.clearRect(50, 50, 120, 120)
    /**
     * 实心圆
     * context.arc(x, y, radius, starAngle,endAngle, anticlockwise)
     * x : 圆心的 x 坐标
     * y：圆心的 y 坐标
     * radius ： 半径
     * starAngle ：开始角度
     * endAngle：结束角度
     * anticlockwise ：是否逆时针（true）为逆时针，(false)为顺时针
     */
    context.beginPath()
    context.fillStyle = 'rgba(0,255,0,0.25)'
    context.arc(300, 350, 100, 0, Math.PI * 2, true)
    context.closePath()
    context.fill()
    // 1/4实心圆
    context.beginPath()
    context.arc(500, 350, 100, 0, Math.PI * 0.5, true)
    context.fillStyle = 'pink'
    context.closePath()
    context.fill()
  }
}
</script>

<style lang="less" scoped>
  .box{
    width: 800px;
    height: 800px;
    margin: 0 auto;
    #canvas{
      /*display: inline;*/
      /*width: 100%;*/
      /*height: 100%;*/
    }
  }
</style>
