/**
 * Number
 * 整型： 123
 * 浮点数： 22.33
 * 科学计数： 1.32e3
 * 负数： -123
 * NaN 无法计算时用NaN表示
 * Infinity 表示无限大
 */
/**
 * 字符
 * 例如: 'aaa'
 * 字符串拼接的方法
 * var message = '你好, ' + name + ', 你今年' + age + '岁了!'; // 加号
 *  `你好, ${name}, 你今年${age}岁了!`; // 模板字符串
 *  操作字符串
 *  var s = 'Hello, world!';
    s.length; // 13
    s[0]; // 'H' 可通过下标索引但不可赋值，不会报错，但是也没有任何效果
 */
// 字符串常见方法
var s = 'Hello, world!'
console.log(s.toUpperCase()) // toUpperCase()把一个字符串全部变为大写
console.log(s.toLocaleLowerCase()) // toLowerCase()把一个字符串全部变为小写
console.log(s.indexOf('world')) // 返回 7 检索指定字符串的位置
console.log(s.indexOf('World')) // 返回 -1 未检索到的字符串则返回-1
// s.substring(0, 7)方法参数理解：小于0为零，如果有两位参数，按参数大小从小到大取值，如果以为参数，则该参数为起始位直到最后
console.log(s.substring(0, 7)) // substring()返回指定索引区间的子串
console.log(s.substring(7)) // world!
console.log(s.substring(-1)) // Hello, world!
console.log(s.substring(0)) // Hello, world!
console.log('substring', s.substring(7, 0)) // Hello, world!
/**
 * 布尔值
 * true false
 * false == 0; // true
 false === 0; // false
 * NaN === NaN; // false
 * isNaN(NaN); // true 唯一能判断NaN的方法是通过isNaN()函数：
 * 1 / 3 === (1 - 2 / 3); // false 浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等
 * Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true 要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：
 */
/**
 * null和undefined
 * 用null表示一个空的值，而undefined表示值未定义。
 * null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。
 * undefined 表示“未定义”。undefined仅仅在判断函数参数是否传递的情况下有用。
 */
/**
 * 数组
 * 数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。
 * 以下为两种创建方式
 * new Array(1, 2, 3); // 创建了数组[1, 2, 3]
 * [1, 2, 3.14, 'Hello', null, true];
 */
var arr = [1, 2, 3]
console.log(arr.length) // 3
arr.length = 6
console.log(arr) // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2
console.log(arr) // arr变为[1, 2]
/**
 * 对象
 * JavaScript的对象是一组由键-值组成的无序集合,对象的键都是字符串类型，值可以是任意数据类型。每个键又称为对象的属性
 * var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
 * 访问对象属性方法
 * person.name // 'Bob'
 * person[name] // 'Bob'
 */
