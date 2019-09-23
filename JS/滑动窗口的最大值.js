/*
 * @Author: Zhaolq 
 * @Date: 2019-09-22 09:24:00 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-22 10:12:21
 */
/**
 * 题目描述
给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 
针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
{[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}，
 {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 */
function maxInWindows(num, size) {
    if(num === null) return null
    if(num.length < size) return null
    var N = num.length
    var arr = []
    var max = Number.NEGATIVE_INFINITY
    for(let i = 0; i <= N - size; i++) {
        max = Number.NEGATIVE_INFINITY
        for(let j = i; j < size + i; j++) {
            if(num[j] > max) max = num[j]
        }
        arr.push(max)
    }
    return arr
}
maxInWindows([],0)