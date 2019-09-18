/*
 * @Author: Zhaolq 
 * @Date: 2019-09-17 15:44:18 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-17 17:45:46
 */

/* 
题目描述
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007 
*/
function InversePairs(data) {
    // write code here
    var N = data.length
    if(N <= 1) return 0
    var num = 0
    var arr1 = data.slice(0, N/2)
    var arr2 = data.slice(N/2, N)
    num = InversePairs(arr1) + InversePairs(arr2) + Merge(arr1, arr2)
    return num % 1000000007
}

function Merge(arr1, arr2) {
    var N = arr1.length
    var M = arr2.length
    var temp1 = arr1.slice()
    var temp2 = arr2.slice()
    var num = 0
    var i = 0
    var j = 0
    temp1.sort((a, b) => {return b - a})
    temp2.sort((a, b) => {return b - a})
    
    while(i < N && j < M) {
        if(temp1[i] > temp2[j]) {
            num += M - j
            i++
        } else if(temp1[i] < temp2[j]) {
            j++
        }
    }
    console.log(arr1,arr2, temp1, temp2,num)
    return num
}

// function InversePairs1(data) {
//     if (!data || data.length < 2) return 0;
//     const copy = data.slice();
//     let count = 0;
//     count = mergeCount(data, copy, 0, data.length - 1);
//     return count % 1000000007;
//   }
//   function mergeCount(data, copy, start, end) {
//     if (start === end) return 0;
//     const mid = end - start >> 1,
//       left = mergeCount(copy, data, start, start + mid), // 注意参数，copy作为data传入
//       right = mergeCount(copy, data, start + mid + 1, end); // 注意参数，copy作为data传入
//     let [p, q, count, copyIndex] = [start + mid, end, 0, end];
//     while (p >= start && q >= start + mid + 1) {
//       if (data[p] > data[q]) {
//         copy[copyIndex--] = data[p--];
//         count = count + q - start - mid;
//       } else {
//         copy[copyIndex--] = data[q--];
//       }
//     }
//     while (p >= start) {
//       copy[copyIndex--] = data[p--];
//     }
//     while (q >= start + mid + 1) {
//       copy[copyIndex--] = data[q--];
//     }
//     return count + left + right;
//   }

num = [364,637,341,406,747,995,234,971,571,219,993,407,416,366,315,301,601,650,418,355,460,505,360,965,516,648,727,667,465,849,455,181,486,149,588,233,144,174,557,67,746,550,474,162,268,142,463,221,882,576,604,739,288,569,256,936,275,401,497,82,935,983,583,523,697,478,147,795,380,973,958,115,773,870,259,655,446,863,735,784,3,671,433,630,425,930,64,266,235,187,284,665,874,80,45,848,38,811,267,575]
// num.sort((a, b) => {return b - a})
// console.log(num)
console.log(InversePairs(num))
// console.log(InversePairs1(num))