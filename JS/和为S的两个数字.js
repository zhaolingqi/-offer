/*
 * @Author: Zhaolq 
 * @Date: 2019-09-18 15:25:25 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-18 15:32:24
 */

 /**
  * 题目描述
    输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
    输出描述:
    对应每个测试案例，输出两个数，小的先输出。
  */

function FindNumbersWithSum(array, sum) {
    var N = array.length
    var first = 0
    var end = N - 1
    var seq = []
    while(first < end) {
        if(array[first] + array[end] > sum) end--
        else if(array[first] + array[end] < sum) first++
        else {
            seq.push(array[first])
            seq.push(array[end])
            return seq
        }
    }
    return seq
}
console.log(N)