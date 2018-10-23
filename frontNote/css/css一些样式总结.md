作者：Dunizb

链接：https://juejin.im/post/5a954add6fb9a06348538c0d

来源：掘金
### 1.position 几个属性的作用

position 的常见四个属性值: relative，absolute，fixed，static。一般都要配合"left"、"top"、"right" 以及 "bottom" 属性使用。

* static:默认位置，在一般情况下，我们不需要特别的去声明它，但有时候遇到继承的情况，我们不愿意见到元素所继承的属性影响本身，从而可以用Position:static取消继承，即还原元素定位的默认值。设置为 static 的元素，它始终会处于页面流给予的位置(static 元素会忽略任何 top、 bottom、left 或 right 声明)。一般不常用。

* relative:相对定位，相对定位是相对于元素默认的位置的定位，它偏移的 top，right，bottom，left 的值都以它原来的位置为基准偏移，而不管其他元素会怎么 样。注意 relative 移动后的元素在原来的位置仍占据空间。
absolute:绝对定位，设置为 absolute 的元素，如果它的 父容器设置了 position 属性，并且 position 的属性值为 absolute 或者 relative，那么就会依据父容器进行偏移。如果其父容器没有设置 position 属性，那么偏移是以 body 为依据。注意设置 absolute 属性的元素在标准流中不占位置。

* fixed:固定定位，位置被设置为 fixed 的元素，可定位于相对于浏览器窗口的指定坐标。不论窗口滚动与否，元素都会留在那个位置。它始终是以 body 为依据的。 注意设置 fixed 属性的元素在标准流中不占位置。

----
### 2.浮动与清除浮动

* 浮动相关知识

    float属性的取值：

     left：元素向左浮动。
     
     right：元素向右浮动。

    none：默认值。元素不浮动，并会显示在其在文本中出现的位置。

* 浮动的特性：

   浮动元素会从普通文档流中脱离，但浮动元素影响的不仅是自己，它会影响周围的元素对齐进行环绕。
   不管一个元素是行内元素还是块级元素，如果被设置了浮动，那浮动元素会生成一个块级框，
   可以设置它的width和height，因此float常常用于制作横向配列的菜单，可以设置大小并且横向排列。

* 浮动元素的展示在不同情况下会有不同的规则：

   浮动元素在浮动的时候，其margin不会超过包含块的padding。PS：如果想要元素超出，可以设置margin属性
如果两个元素一个向左浮动，一个向右浮动，左浮动元素的marginRight不会和右浮动元素的marginLeft相邻。
如果有多个浮动元素，浮动元素会按顺序排下来而不会发生重叠的现象。
如果有多个浮动元素，后面的元素高度不会超过前面的元素，并且不会超过包含块。
如果有非浮动元素和浮动元素同时存在，并且非浮动元素在前，则浮动元素不会高于非浮动元素
浮动元素会尽可能地向顶端对齐、向左或向右对齐

* 重叠问题

  行内元素与浮动元素发生重叠，其边框，背景和内容都会显示在浮动元素之上
块级元素与浮动元素发生重叠时，边框和背景会显示在浮动元素之下，内容会显示在浮动元素之上

* clear属性

  clear属性：确保当前元素的左右两侧不会有浮动元素。clear只对元素本身的布局起作用。
取值：left、right、both

* 父元素高度塌陷问题

  为什么要清除浮动，父元素高度塌陷
解决父元素高度塌陷问题：一个块级元素如果没有设置height，其height是由子元素撑开的。对子元素使用了浮动之后，子元素会脱离标准文档流，也就是说，父级元素中没有内容可以撑开其高度，这样父级元素的height就会被忽略，这就是所谓的高度塌陷。

* 清除浮动的方法

        .clearfix:after {
            content:”\200B”; 
            display:block; 
            height:0; 
            clear:both;
        }
        .clearfix { *zoom:1; } 照顾IE6，IE7就可以了
        
浮动详细介绍[浮动知识点](https://juejin.im/post/5a954add6fb9a06348538c0d)  
     
### 3. `box-sizing`是什么
设置CSS盒模型为标准模型或IE模型。标准模型的宽度只包括content，二IE模型包括border和padding
box-sizing属性可以为三个值之一：

* `content-box`，默认值，只计算内容的宽度，`border`和`padding`不计算入width之内

* `padding-box`，`padding`计算入宽度内

* `border-box`，`border`和`padding`计算入宽度之内

### 4.px、em、rem的区别

px 像素(Pixel)。绝对单位。像素 px 是相对于显示器屏幕分辨率而言的，是一个虚拟长度单位，是计算 机系统的数字化图像长度单位，如果 px 要换算成物理长度，需要指定精度 DPI。

em 是相对长度单位，相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置， 则相对于浏览器的默认字体尺寸。它会继承父级元素的字体大小，因此并不是一个固定的值。

rem 是 CSS3 新增的一个相对单位(root em，根 em)，使用 rem 为元素设定字体大小时，仍然是相对大小， 但相对的只是 HTML 根元素。

### 5.css引入的方式有哪些？`link`和`@import`的区别

有四种：内联(元素上的style属性)、内嵌(style标签)、外链(link)、导入(@import)
link和@import的区别：

link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。

link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。

link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。

link支持使用Javascript控制DOM去改变样式；而@import不支持。

### 6.css隐藏元素的几种方式

* `display:none`
 
  元素在页面上将彻底消失，元素本来占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘。
  
  不会触发其点击事件
  
* `visibility:hidden`

  和`display:none`的区别在于，<font color="#dd0000">元素在页面消失后，其占据的空间依旧会保留着</font>，所以它只会导致浏览器重绘而不会重排。
  
  无法触发其点击事件
  
  适用于那些元素隐藏后不希望页面布局会发生变化的场景

* `opacity:0`  
  
  将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的，这算是一种隐藏元素的方法
  
  和`visibility:hidden`的一个共同点是元素隐藏后依旧占据着空间，但我们都知道，设置透明度为0后，元素只是隐身了，它依旧存在页面中。
  
  可以触发点击事件
  
* 其他方法
  
  设置元素的position与left，top，bottom，right等，将元素移出至屏幕外
  
  设置元素的position与z-index，将z-index设置成尽量小的负数
  
  设置height，width等盒模型属性为0

### 7.消除图片底部间隙的方法

  图片块状化 - 无基线对齐：`img { display: block; }`
  
  图片底线对齐：`img { vertical-align: bottom; }`
  
  行高足够小 - 基线位置上移：`.box { line-height: 0; }`

### 8.display:inline-block的间隙问题和解决办法

  移除空格
  
  * 使用margin负值
  
  * 使用font-size:0
  
  * letter-spacing
  
  * word-spacing
  
### PNG,GIF,JPG的区别及如何选

  * GIF
  
     * 8位像素，256色
     * 无损压缩
     * 支持简单动画
     * 支持boolean透明
     * 适合简单动画
    
  * JPEG
  
      * 颜色限于256
      * 有损压缩
      * 可控制压缩质量
      * 不支持透明
      * 适合照片
      
  * PNG
      * 有PNG8和truecolor PNG
      * PNG8类似GIF颜色上限为256，文件小，支持alpha透明度，无动画
      * 适合图标、背景、按钮

  
