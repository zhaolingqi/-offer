/*
 * @Author: Zhaolq 
 * @Date: 2019-09-12 14:09:34 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-16 10:22:24
 */
/* 
题目描述
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。 */

// 将数组元素转换为字符串 a + b < b + a 则将a放在b之前 反之b在前 
// 并对数组进行遍历
function PrintMinNumber(numbers) {
    if(numbers.length === 0) return ""
    numbers.sort((a, b) => {
        var tempA = String(a)
        var tempB = String(b)
        return tempA + tempB > tempB + tempA 
    })
    return numbers.join("")
    // return numbers.reduce((sum, val, index, arr) => {
    //     if(index === 0) return arr[index]
    //     let preCur = String(sum) + String(arr[index])
    //     let curPre = String(arr[index]) + String(sum)
    //     if(preCur > curPre) return curPre
    //     return preCur
    // })
}

console.log(PrintMinNumber([]))
// var a = 12
// var b = 321
// console.log(String(a) + String(b) > String(b) + String(a))
// var a = "3214"
// console.log(a.charAt(4) > a.charAt(3))