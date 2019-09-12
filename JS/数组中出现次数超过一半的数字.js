/*
 * @Author: Zhaolq 
 * @Date: 2019-09-10 13:26:32 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-10 16:18:50
 */
/**
 * 
 * 题目描述
    数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
    由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 * 
 * 
 */

function MoreThanHalfNum_Solution(numbers) {
    // write code here
    var myMap = new Map()
    var max = -1;
    var maxIndex = -1;
    for(let i = 0; i < numbers.length; i++) {
        if(myMap.has(numbers[i])) {
            var cnt = myMap.get(numbers[i])
            cnt++
            myMap.set(numbers[i], cnt)
        } else myMap.set(numbers[i],1)
    }
    for (var key of myMap.keys()) {
        if(max < myMap.get(key)) {
            maxIndex = key
            max = myMap.get(key)
        }
    }
    if(max > numbers.length / 2) return maxIndex
    return 0
}

console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]))