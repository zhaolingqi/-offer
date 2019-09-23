/**
 * 题目描述
将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，
但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 
数值为0或者字符串不是一个合法的数值则返回0。
输入描述:
输入一个字符串,包括数字字母符号,可以为空
输出描述:
如果是合法的数值表达则返回该数字，否则返回0
 */
function StrToInt(str) {
    if(str === null) return 0
    var strArr = str.split('')
    var flag = 1
    var num = 0
    var N = strArr.length
    if(strArr[0] === '-') flag = -1
    else if(strArr[0] === '+') flag = 1

    for(let i = ((strArr[0] === '-' || strArr[0] === '+') ? 1 : 0); i < strArr.length; i++) {
        if(strArr[i] > '9' || strArr[i] < '0') return 0
        num = num * 10 + (str[i] - '0') * true
    }
    return num * flag

}

// function StrToInt(str)
// {
//     // write code here
//     if(str==null || str.length<=0) return 0;
//     var len=str.length,index=0,flag=false;
//     var arr=str.split('')  //字符串变为字符数组
//     if(arr[0]=='+'){  //为加号
//         index++
//     }else if(arr[0]=='-'){  //为减号，则是负数
//         flag=true
//         index++
//     }      
//     var num=strToIntCore(arr,index,len,flag)
//     return num;
// }
 
// function strToIntCore(arr,start,length,minus){
//         var number=0;
//         if(arr==null||start>=length) return number;
//         while(start<length){
//             if(arr[start]>='0'&& arr[start]<='9'){
//                 var flag=minus?-1:1;
//                 number=number*10+(arr[start]-'0')*flag
//                 console.log(number)
//                 start++
//             }else{
//                 number=0;
//                 break;
//             }
//         }
//         return number;
// }


console.log(StrToInt('-132123'))