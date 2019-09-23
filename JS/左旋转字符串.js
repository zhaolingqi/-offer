/*
 * @Author: Zhaolq 
 * @Date: 2019-09-19 09:26:49 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-19 09:52:17
 */
/**
 * 题目描述
汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。
对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，
即“XYZdefabc”。是不是很简单？OK，搞定它！
 */

function LeftRotateString(str, n) {
    // if(str === "" || str === null) return str
    // var strArr = str.split('')
    // var length = strArr.length
    // while(n >= length) {
    //     n = n - length
    // }
    // var leftArr = strArr.splice(0, n)
    // str = strArr.concat(leftArr).join('')
    // console.log(typeof str)
    // return str

    if(str === "" || str === null) return str
    var strArr = str.split('')
    var length = strArr.length
    while(n >= length) {
        n = n - length
    }
    

}

console.log(LeftRotateString("",6))