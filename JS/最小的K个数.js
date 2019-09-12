/*
 * @Author: Zhaolq 
 * @Date: 2019-09-10 16:19:51 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-10 16:31:31
 */

/* 题目描述
输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
利用快排

*/

function GetLeastNumbers_Solution(input, k){
    // write code here
    if(k > input.length) return []
    input.sort()
    return input.slice(0,k) 
}

// 快速排序
function QuickSort(input, lo, hi) {
    var k = partiton(input, lo, hi)
    var cmp = input[0]
    
}

function patition(input, lo, hi) {
    var temp = input[lo]
    
}

console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8], 4))