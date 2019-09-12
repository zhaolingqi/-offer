/*
 * @Author: Zhaolq 
 * @Date: 2019-09-12 10:19:46 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-12 11:52:03
 */
/* 
题目描述
求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,
可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。 */

function NumberOf1Between1AndN_Solution(n) {
    var sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += Count1(i)
    }
    return sum
}

function Count1(num) {
    var count = 0;
    while(num > 0) {
        if(num % 10 === 1) {
            count++
        }
        num = parseInt(num / 10)
    }
    return count
}

console.log(Count1(1113))