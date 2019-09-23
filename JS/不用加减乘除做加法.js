/*
 * @Author: Zhaolq 
 * @Date: 2019-09-19 13:57:44 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-19 14:14:57
 */
/**
 * 题目描述
写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
 */
function Add(num1, num2) {
    return num2 ? Add(num1 ^ num2, (num1 & num2) << 1) : num1
}
console.log(Add(4, 5))