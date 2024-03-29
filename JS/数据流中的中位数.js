/*
 * @Author: Zhaolq 
 * @Date: 2019-09-21 21:11:10 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-21 21:21:42
 */
/**
 * 题目描述
如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，
那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，
那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，
使用GetMedian()方法获取当前读取数据的中位数。
 */
var arr = []
function Insert(num) {
    arr.push(num)
}
function GetMedian() {
    var N = arr.length
    if (N < 1) return 0
    arr.sort((a, b) => {return a - b})
    if(N % 2 === 1) {
        let mid = parseInt(N / 2)
        return arr[parseInt(N / 2)]
    } else {
        let mid = parseInt(N / 2)
        return (arr[mid] + arr[mid - 1]) / 2
    }
}
arr = [1,2,3,4]
console.log(GetMedian())