/*
 * @Author: Zhaolq 
 * @Date: 2019-09-18 13:38:39 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-18 14:15:47
 */

 /**
  * 题目描述
一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
  */

function FindNumsAppearOnce(array) {
    var list = []
    var myMap = new Map()
    for(let i = 0; i < array.length; i++) {
        if(!myMap.has(array[i])) {
            myMap.set(array[i],1)
        } else {
            let val = myMap.get(array[i])
            myMap.set(array[i], val + 1)
        }
    }
    myMap.forEach((value, key, map) => {
        if(value === 1) list.push(key)
    })
    return list
}
console.log(FindNumsAppearOnce([1,2,33,33,44,44,55,66,66,55]))