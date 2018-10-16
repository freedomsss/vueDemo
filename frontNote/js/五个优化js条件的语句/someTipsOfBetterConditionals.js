// 作者：Hopsken
// 链接：https://juejin.im/post/5bb9e3085188255c352d7326
//   来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 使用Array.includes来处理多重条件

function redFruits (fruit) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
  if (redFruits.includes(fruit)) {
    console.log('red')
  }
}
redFruits('apple')

// 当发现无效条件时尽早返回 _/
// 如果没有提供水果，抛出错误。
// 如果该水果的数量大于 10，将其打印出来。

function test (fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']

  if (!fruit) throw new Error('No fruit!') // 条件 1：尽早抛出错误
  if (!redFruits.includes(fruit)) return // 条件 2：当 fruit 不是红色的时候，直接返回

  console.log('red')

  // 条件 3：必须是大量存在
  if (quantity > 10) {
    console.log('big quantity')
  }
}
// 这是错误的，但是到这里不会停下来，而是跳过
try {
  console.logg('c')
} catch (e) {
  console.log('error!!!')
}
