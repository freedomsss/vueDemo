<!--suppress ALL -->
<template>
  <div class="container">
    <div class="bg">
      <!--<canvas id="canvas2"></canvas>-->
    </div>
    <div class="filter mask"></div>
  </div>
</template>
<script>
  // 好玩的mask属性
  // https://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/
export default {
  /*
* @var star_r：star半径系数，系数越大，半径越大
* @var star_alpha：生成star的透明度，star_alpha越大，透明度越低
* @var initStarsPopulation：初始化stars的个数
* @var move_distance：star位移的距离，数值越大，位移越大
* @var dot_r : dot半径系数，系数越大，半径越大
* @var dot_speeds : dots运动的速度
* @var dot_alpha : dots的透明度
* @var aReduction：dot消失条件，透明度小于aReduction时消失
* @var dotsMinDist：dot最小距离
* @var maxDistFromCursor：dot最大距离
* */
  data () {
    return {
      config: {
        star_r: 3,
        star_alpha: 5,
        initStarsPopulation: 150,
        move_distance: 0.25,
        dot_r: 5,
        dot_speeds: 0.5,
        dot_alpha: 0.5,
        dot_aReduction: 0.01,
        dotsMinDist: 5,
        maxDistFromCursor: 50
      },
      stars: [],
      dots: [],
      // canvas: document.getElementById('canvas2'),
      // ctx: canvas.getContext('2d'),
      WIDTH: '',
      HEIGHT: '',
      mouseMoving: false,
      mouseMoveChecker: undefined,
      mouseX: '',
      mouseY: ''
    }
  },
  mounted () {
    // this.Star(100, 100)
  },
  methods: {
    /* 设置单个 star
     * @param id：id
     * @param x：x坐标
     * @param y：y坐标
     * @param useCache：是否使用缓存
     * */
    Star (x, y) {
      // this.id = id
      this.x = x
      this.y = y
      // this.cacheCanvas = document.createElement('canvas')
      this.cacheCanvas = document.getElementById('canvas2')
      this.cacheCtx = this.cacheCanvas.getContext('2d')
      this.r = Math.floor(Math.random() * this.config.star_r) + 1
      this.cacheCtx.width = 6 * this.r
      this.cacheCtx.height = 6 * this.r
      var alpha = (Math.floor(Math.random() * 10) + 1) / this.config.star_alpha
      this.color = 'rgba(255,255,255,' + alpha + ')'
      // if (useCache) {
      //   // this.cache()
      // }
    }
  }
}
</script>
<style lang="less" scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  /*.filter {*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*background: #fe5757;*/
    /*animation: colorChange 30s ease-in-out infinite;*/
    /*animation-fill-mode: both;*/
    /*mix-blend-mode: overlay;*/
  /*}*/
  .bg {
    background: url(https://sp-webfront.skypixel.com/skypixel/v2/public/website/assets/1535027674204-f6eca6369ec03e70262b58b0e25cda7b.jpg);
    background-size: cover;
    position: fixed;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    filter: blur(15px);
    z-index: -1;
  }
  .mask {
    width: 340px;
    height: 196px;
    animation: move 40s infinite;
    background-image: url(https://sp-webfront.skypixel.com/skypixel/v2/public/website/assets/1535027674204-f6eca6369ec03e70262b58b0e25cda7b.jpg);
    background-size: cover;
    mask: url(http://static.w3ctrain.com/upload_cae6fcb079f57792a47202cb67bbc04a-dji-seeklogo.com.svg);
    mask-size: cover;
    margin-top: 160px;
    &:hover{
      width: 400px;
      height: 220px;
      transition: all 2s linear;
    }
  }
  @keyframes colorChange {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: .7;
    }
  }
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 0;
    }
  }
</style>
