/*
 * @Author: Zhaolq 
 * @Date: 2019-09-10 13:26:53 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-10 13:34:33
 */

/**
 * 题目描述
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 * 输入描述:
 * 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
 */


// function Permutation(str) {
//     var strArr = []
//     function per(str) {
//         if(str === "") return strArr
//         strArr.push(str)
//         var temp1 = -1
//         var temp2 = -1
//         for (let index = str.length - 2; index >= 0; index--) {
//             if(str[index] < str[index + 1]) {
//                 temp1 = index
//                 break
//             }
//         }
//         if(temp1 === -1) return strArr
//         for (let index = str.length - 1; index >= 0; index--) {
//             if(str[temp1] < str[index]) {
//                 temp2 = index
//                 break
//             }
//         }
//         str = exChange(str, temp1, temp2)
//         // 将temp1 之后的字符串逆序
//         str = reverse(str, temp1)
//         per(str)
//         return strArr
//     }
//     function exChange(str, index1, index2) {
//         var arr = str.split("")
//         var temp = arr[index1]
//         arr[index1] = arr[index2]
//         arr[index2] = temp
//         return arr.join("")
//     }
    
//     function reverse(str, index) {
//         var strTemp = ""
//         if(index === str.length - 1) return str
//         for(let i = str.length - 1; i > index; i--) {
//             strTemp += str.charAt(i)
//         }
//         str = str.substring(0, index + 1) + strTemp
//         return str
//     }
//     return per(str)
// }

function Permutation(str)
{
    // write code here
    if(str.length == 0)return '';
    let str_arr = str.split('');
    str_arr.sort();
    let res = [];
    for(let i = 0; i < str_arr.length; i++){
        if(i > 0 && str_arr[i] === str_arr[i-1])continue;
        let front = str_arr.slice(0,i);
        let end = str_arr.slice(i+1);
        PermutationHelp(res,str_arr[i],front.concat(end));
    }
    return res;
     
}
function PermutationHelp(res,temp, arr){
    if (arr.length === 0) {
        res.push(temp);
    } else {
        for(let i = 0; i < arr.length; i++){
            if(i > 0 && arr[i] === arr[i-1])continue;
            let front = arr.slice(0,i);
            let end = arr.slice(i+1);
            console.log(front, end)
            PermutationHelp(res,temp+arr[i],front.concat(end));
        }
    }
}

console.log(Permutation("abc"))