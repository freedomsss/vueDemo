function chunk (array, size) {
  if (size === undefined) {
    size = 1
  } else {
    /**
     * 用Math.max判断size是否大于零，大于0则为size本身否则为0
     * 如果传入的size非数值类型，则将其转换为数值类型
     * 没有参数返回Infinity（正无穷大）
     *如果有任一参数不能被转换为数值，则结果为 NaN。
     */
    size = Math.max(size, 0)
  }
  /**
   * 判断数组是否存在，如果数组不存在或者数组长度为零则函数返回空数组
   */
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  /**
   * Math.ceil(length / size)
   * Math.ceil() 函数返回大于或等于一个给定数字的最小整数。
   * Math.ceil() === 向上取整
   *
   * [element0, element1, ..., elementN]
   * new Array(element0, element1[, ...[, elementN]])
   * new Array(arrayLength)
   * arrayLength
   * 一个范围在 0 到 232-1 之间的整数，此时将返回一个 length 的值等于 arrayLength
   * 的数组对象（言外之意就是该数组此时并没有包含任何实际的元素，不能理所当然地认为
   * 它包含 arrayLength 个值为 undefined 的元素）。如果传入的参数不是有效值，
   * 则会抛出 RangeError 异常。
   */
  const result = new Array(Math.ceil(length / size))
  console.log(result)
  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size))
  }
  return result
}

function baseSlice (array, start, end) {
  var index = -1,
    length = array.length

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0
  console.log('33', length)
  var result = Array(length)
  while (++index < length) {
    result[index] = array[index + start]
    console.log('22', result)
  }
  console.log('11', result)
  return result
}

console.log(chunk(['a', 'b', 'c', 'd'], '3'))
