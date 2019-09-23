/*
 * @Author: Zhaolq 
 * @Date: 2019-09-21 16:19:07 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-21 19:36:19
 */
/**
 * 题目描述
请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，
第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
// 类似于层次遍历的方法，
// 奇数行队列存储，  
function Print(pRoot) {
    if(pRoot === null) return []
    var n = 0
    var arr = []
    var arrNum = []
    var print = []
    var tempPrint = []
    arr.push(pRoot)
    arrNum[0] = 1
    var preNum = 0 // 该层已经遍历的结点数
    var tempNum = 0 // 下一层的结点数
    var temp = arr.shift()
    //preNum ++
    while(temp != null) {
        preNum ++
        tempPrint.push(temp.val)
        if(n % 2 === 0) {
            if(temp.left !== null) {
                arr.push(temp.left)
                // console.log(temp.val)
                tempNum ++
            }
            if(temp.right !== null) {
                arr.push(temp.right)
                tempNum ++
            }
            if(preNum === arrNum[n]) {
                temp = arr.pop()
            } else {
                temp = arr.shift()
            }
            //preNum++
        } else {
            if(temp.right !== null) {
                arr.unshift(temp.right)
                tempNum ++
            }
            if(temp.left !== null) {
                arr.unshift(temp.left)
                tempNum ++
            }
            if(preNum === arrNum[n]) {
                temp = arr.shift()
            } else {
                temp = arr.pop()
            }
            //preNum ++
        }
        if(preNum === arrNum[n]){
            n++
            print.push(tempPrint)
            tempPrint = []
            arrNum[n] = tempNum
            tempNum = 0
            preNum = 0
        }
    }
    return print
}
var x = new TreeNode(8)
x.left = new TreeNode(6)
x.right = new TreeNode(10)
x.left.left = new TreeNode(5)
x.left.right = new TreeNode(7)
x.right.left = new TreeNode(9)
x.right.right = new TreeNode(11)
var a = Print(x)
console.log(a)