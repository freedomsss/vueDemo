var obj1 = {
  a: 1
}
var obj2 = obj1
obj2.a = 2
console.log(obj1, obj2)

// 浅拷贝
function shallowClone (source) {
  var target = {}
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i]
    }
  }
  return target
}
var obj3 = shallowClone(obj1)
obj2.a = 3
console.log(obj1, obj2, obj3)
