/*
 * @Author: Zhaolq 
 * @Date: 2019-09-16 14:25:52 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-16 16:31:13
 */
/* 
题目描述
在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
并返回它的位置, 如果没有则返回 -1（需要区分大小写）. */

function FirstNotRepeatingChar(str) {
    // 暴力解法
    // let i, j = 0
    // for(i = 0; i < str.length; i++) {
    //     let tempChar = str.charAt(i)
    //     for(j = 0; j < str.length; j++) {
    //         if(j === i) continue
    //         if(tempChar === str.charAt(j)) break
    //     }
    //     if(j === str.length) return i
    // }
    // return -1

    // hashMap 思想，利用键值对，记录每个字符出现的次数
    // let N = str.length
    // let list = new Map()
    // for(let i = 0; i < N; i++) {
    //     if(!list.has(str[i])) {
    //         list.set(str[i], 1)
    //     } else {
    //         let val = list.get(str[i])
    //         list.set(str[i], val + 1)
    //     }
    // }
    // let entries = list.entries()
    // for([key, val] of entries) {
    //     if(val === 1) return str.indexOf(key)
    // }
    // return -1

    // 利用js string indexOf lastIndexOf 方法

    for(let i = 0; i < str.length; i++) {
        let index = str.indexOf(str[i])
        if(index === str.lastIndexOf(str[i])) {
            return index
        }
    }
    return -1
}

console.log(FirstNotRepeatingChar('Googlwwooe'))