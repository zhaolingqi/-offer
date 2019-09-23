/*
 * @Author: Zhaolq 
 * @Date: 2019-09-19 10:39:55 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-19 11:06:26
 */
/**
 * 题目描述
求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 */
function Sum_Solution(n) {
    var sum = n
    n === 1 || (sum += Sum_Solution(n - 1))
    return sum

}
console.log(Sum_Solution(1))
