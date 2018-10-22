<template>
  <div class="box">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
// 来源：https://segmentfault.com/p/1210000010536257/read
export default {
  mounted () {
    const canvas = document.getElementById('canvas')
    canvas.width = 1000
    canvas.height = 1000
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
    // 太极绘图练习
    context.beginPath()
    context.arc(500, 350, 100, Math.PI * 0.5, Math.PI * 1.5, true)
    context.fillStyle = '#fff'
    context.closePath()
    context.fill()
    context.beginPath()
    context.beginPath()
    context.arc(500, 350, 100, Math.PI * 1.5, Math.PI * 0.5, true)
    context.fillStyle = '#000'
    context.closePath()
    context.fill()
    context.beginPath()
    context.arc(500, 300, 50, Math.PI * 1.5, Math.PI * 0.5, true)
    context.fillStyle = '#fff'
    context.closePath()
    context.fill()
    context.beginPath()
    context.arc(500, 300, 12, 0, Math.PI * 2, true)
    context.fillStyle = '#000'
    context.closePath()
    context.fill()
    context.beginPath()
    context.arc(500, 400, 50, Math.PI * 0.5, Math.PI * 1.5, true)
    context.fillStyle = '#000'
    context.closePath()
    context.fill()
    context.beginPath()
    context.arc(500, 400, 12, 0, Math.PI * 2, true)
    context.fillStyle = '#fff'
    context.closePath()
    context.fill()
    // 绘制线段
    var n = 0
    var dx = 100
    var dy = 450
    var s = 100
    context.beginPath()
    context.fillStyle = 'pink'
    context.strokeStyle = 'rgb(0,0,100)'
    var x = Math.sin(0)
    var y = Math.cos(0)
    var dig = Math.PI / 15 * 7
    for (var i = 0; i < 30; i++) {
      var x = Math.sin(i * dig)
      var y = Math.cos(i * dig)
      context.lineTo(dx + x * s, dy + y * s)
      // console.log( x, y)
    }
    context.closePath()
    context.fill()
    context.stroke()
    /**
     * var lg= context.createLinearGradient(xStart,yStart,xEnd,yEnd)
     * lg.addColorStop(offset,color)
     * xstart:渐变开始点x坐标
     * ystart:渐变开始点y坐标
     * xEnd:渐变结束点x坐标
     * yEnd:渐变结束点y坐标
     * offset:设定的颜色离渐变结束点的偏移量(0~1)
     * color:绘制时要使用的颜色
     */
    var g1 = context.createLinearGradient(0, 0, 0, 300)
    g1.addColorStop(0, '#E55D87')
    g1.addColorStop(1, '#5FC3E4')
    context.fillStyle = g1
    context.fillRect(600, 0, 400, 300)
    /**
     * 同心圆径向渐变
     *xStart：发散开始圆心x坐标
      yStart：发散开始圆心y坐标
      radiusStart：发散开始圆的半径
      xEnd：发散结束圆心的x坐标
      yEnd：发散结束圆心的y坐标
      radiusEnd：发散结束圆的半径
      offset：设定的颜色离渐变结束点的偏移量(0~1)
      color：绘制时要使用的颜色
     * @type {CanvasGradient}
     */
    var g2 = context.createRadialGradient(200, 150, 0, 200, 750, 200)
    g2.addColorStop(0.1, '#F09819')
    g1.addColorStop(1, '#ff00aa')
    context.fillStyle = g2
    context.beginPath()
    context.arc(200, 650, 100, 0, Math.PI * 2, true)
    context.closePath()
    context.fill()
    context.fillStyle = 'white'
    context.beginPath()
    context.arc(100, 100, 10, 0, 2 * Math.PI)
    context.shadowColor = 'white'
    context.shadowBlur = 10
    context.fill()
    context.closePath()
    context.font = '40px Arial'
    context.fillText('Hello world', 200, 200)
    context.strokeText('Hello world', 200, 300)
  }
}
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    height: 2000px;
    margin: 0 auto;
    #canvas{
      /*display: inline;*/
      /*width: 100%;*/
      /*height: 100%;*/
    }
  }
</style>
