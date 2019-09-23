/*
 * @Author: Zhaolq 
 * @Date: 2019-09-21 19:38:13 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-21 20:05:02
 */
/**
 * 题目描述
从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 */

 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Print(pRoot) {
    if(pRoot === null) return []
    var arr = [] // 模拟队列，先进先出存放结点
    var print = [] // 输出数组
    var tempPrint = [] // 每层输出
    var n = 0 // 当前层数
    var curNum = 1 // 当前层结点数
    var countNum = 0 // 当前层已打印的结点数
    var nextNum = 0 // 下一层结点数
    var temp = pRoot
    while(temp !== undefined) {
        countNum ++
        tempPrint.push(temp.val)
        if(temp.left !== null) {
            arr.push(temp.left)
            nextNum ++
        }
        if(temp.right !== null) {
            arr.push(temp.right)
            nextNum ++
        }
        temp = arr.shift()
        if(countNum === curNum) {
            countNum = 0
            curNum = nextNum
            nextNum = 0
            print.push(tempPrint)
            tempPrint = []
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