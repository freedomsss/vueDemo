## html篇
[本文出处](https://juejin.im/entry/58c60601da2f605dc5a90282)

#### http状态码及其含义
1. 1xx:信息状态码
    * `100 continue` 继续，一般在发送post请求时，已发送了HTTP header 之后服务端将返回此信息，表示确认，之后发送具体参数
2. 2xx:成功状态码
    * `200 ok` 正常返回信息
    * `201 Created` 请求成功并且服务器创建了新的资源
    * `202 Accepted` 服务器已接受请求但尚未处理
3. 3XX：重定向
    * `301 Moved Permanently` 请求的网页已永久移动到新的位置。
    * `302 Found` 临时性重定向。
    * `303 See Other` 临时性重定向，且总是使用GET请求新的URI（A Uniform Resource Identifier (URI) 是一个紧凑的字符串用来标示抽象或物理资源。）  
    * `304 Not Modified` 自从删词请求后，请求的网页未修改过。
4. 4XX：客户端错误
    * `400 Bad Request` 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
    * `401 Unauthorized` 请求为=未授权。
    * `403 Forbidden` 禁止访问。
    * `404 Not Found` 找不到如何与URI相配的资源。
5. 5XX：服务器错误
    * `500 Internal Server Error` 常见的服务器端错误。
    * `503 Service Unavailable` 服务器端暂时无法处理请求（可能是过载或维护）
----

#### 浏览器内核

  * 主要分成两部分：渲染引擎(`layout engineer`或`Rendering Engine`)和JS引擎
  
  * 渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核
  
  * JS引擎则：解析和执行javascript来实现网页的动态效果
  最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎      
    
#### `cookies`，`sessionStorage` 和 `localStorage` 的区别？

  * `cookie`是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）
  * `cookie`数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递
  * `sessionStorage`和`localStorage`不会自动把数据发给服务器，仅在本地保存
  * 存储大小
    * `cookie`限制大小，约4k左右，不适合存储业务数据，尤其是数据量较大的值
    * `sessionStorage`和`localStorage`虽然也有存储大小的限制，但比`cookie`大得多，可以达到5M或更大
  * 有效时间
    * `localStorage` 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
    * `sessionStorage` 数据在当前浏览器窗口关闭后自动删除
    * `cookie` 设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭
    
    
    1.Cookie适合存储一些session信息：
    
    cookie限制大小，约4k左右，不适合存储业务数据，尤其是数据量较大的值
    存在有效期，到期自动销毁
    cookie会每次随http请求一起发送，浪费宽
    cookie设置了domain可以在子域共享跨域
    可以使用爬虫抓取
    
    
    2.localstroage适合存储应用共享的地址信息等：
    
    存储数据量大，5M或者更大
    有效期为永久
    不会随http请求一起发送
    不能跨域，但是可以使用postMessage和iframe消除这个影响,例如：cross-storage
    在浏览器的隐私模式下不能读取
    不能被爬虫读取
    
    
    3.sessionstroage适合存储浏览状态等：
    
    存储数据量大，5M或者更大
    有效期为到浏览器关闭
    不会随http请求一起发送
    不能被爬虫读取
    
    作者：梦想攻城狮
    链接：https://juejin.im/post/5bb1cc2af265da0ae5052496
    来源：掘金
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
