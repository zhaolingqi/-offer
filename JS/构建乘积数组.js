/*
 * @Author: Zhaolq 
 * @Date: 2019-09-20 09:33:22 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-20 09:46:58
 */
/**
 * 题目描述
给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 */
function multiply(array) {
    if(array === null) return null
    var N = array.length
    arrayB = []
    for(let i = 0; i < N; i++) {
        var temp = 1
        for(let j = 0; j < N; j++) {
            if(j !== i)
                temp *= array[j]
        }
        arrayB[i] = temp
    }
}

multiply([1,2,3])