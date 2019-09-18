/*
 * @Author: Zhaolq 
 * @Date: 2019-09-18 10:09:11 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-18 10:21:06
 */
/**
 * 题目描述
统计一个数字在排序数组中出现的次数。
 */

function GetNumberOfK(data, k) {
    if(data.length === 0) return 0
    var N = data.length
    var lo = 0, hi = N - 1
    while(lo <= hi) {
        if(data[lo] !== k && data[hi] !== k) {
            lo ++
            hi --
        } else if(data[lo] !== k && data[hi] === k) lo ++
        else if(data[lo] === k && data[hi] !== k) hi --
        else {
            return hi - lo + 1
        }
    }
    return 0
}
console.log(GetNumberOfK([1,2,4,4,4,5], 3))