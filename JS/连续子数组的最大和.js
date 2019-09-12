/*
 * @Author: Zhaolq 
 * @Date: 2019-09-11 16:35:26 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-12 10:19:15
 */

/* 题目描述
HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,
他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,
问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？
例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，
返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1) 

*/

function FindGreatestSumOfSubArray(array){
    var max = array[0]
    var tempMax = array[0]
    var N = array.length
    for(let i = 1; i < N; i++) {
        if(tempMax < 0) tempMax = array[i]
        else {
            tempMax = tempMax + array[i]
        }
        if(tempMax > max) max = tempMax
        console.log(i, max, tempMax)
    }
    return max
}

console.log(FindGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5]))