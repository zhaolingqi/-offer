/*
 * @Author: Zhaolq 
 * @Date: 2019-09-18 13:38:33 
 * @Last Modified by:   Zhaolq 
 * @Last Modified time: 2019-09-18 13:38:33 
 */

/**
 * 题目描述
输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 */

function IsBalanced_Solution(pRoot) {
    if(pRoot === null) return true
    var leftDepth = TreeDepth(pRoot.left)
    var rightDepth = TreeDepth(pRoot.right)
    if(Math.abs(leftDepth - rightDepth) <=1) {
        if(leftDepth <= 1) return true
        return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
    }
    return false
}

function TreeDepth(pRoot) {
    if(pRoot === null) return 0
    var maxDepth = 0
    var curDepth = 0
    return Search(pRoot, curDepth, maxDepth)
}

function Search(root, curDepth, maxDepth) {
    curDepth ++
    if(maxDepth < curDepth) maxDepth = curDepth
    if(root.left !== null) maxDepth = Search(root.left, curDepth, maxDepth)
    if(root.right !== null) maxDepth = Search(root.right, curDepth, maxDepth)
    return maxDepth
}