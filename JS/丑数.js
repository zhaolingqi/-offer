/*
 * @Author: Zhaolq 
 * @Date: 2019-09-16 10:25:07 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-16 14:25:02
 */

 /**
  * 题目描述
    把只包含质因子2、3和5的数称作丑数（Ugly Number）。
    例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
  */

  /* 后续的丑数肯定是现有的丑数乘2，3，5得到的  */

function GetUhlyNumber_Solution(index) {
    if(index === 0) return 0
    if(index === 1) return 1
    let count = 1
    let arr = [1]
    let p2 = 0, p3 = 0, p5 = 0
    let temp2 = arr[p2] * 2
    let temp3 = arr[p3] * 3
    let temp5 = arr[p5] * 5
    while(count <= index) {
        console.log(temp2, temp3, temp5)
        if(temp2 < temp3 && temp2 < temp5) {
            console.log('qwe66')
            arr.push(temp2)
            count ++
            if(count === index) break
            p2 ++
            temp2 = arr[p2] * 2
            while(temp2 === temp3 || temp2 === temp5) {
                p2 ++
                temp2 = arr[p2] * 2
            }
            continue
        } else if(temp3 < temp2 && temp3 < temp5) {
            console.log('qwe43')
            arr.push(temp3)
            count ++
            if(count === index) break
            p3 ++
            temp3 = arr[p3] * 3
            while(temp3 === temp2 || temp3 === temp5) {
                p3 ++
                temp3 = arr[p3] * 3
            }
            continue
        } else if(temp5 < temp2 && temp5 < temp3) {
            console.log('qwe32')
            arr.push(temp5)
            count ++
            if(count === index) break
            p5 ++
            temp5 = arr[p5] * 5
            while(temp5 === temp2 || temp5 === temp3) {
                p5 ++
                temp5 = arr[p5] * 5
            }
            continue
        }
    }
    console.log(arr)
    return arr[index - 1]
}

console.log(GetUhlyNumber_Solution(18))