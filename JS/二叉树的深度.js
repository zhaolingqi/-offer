/*
 * @Author: Zhaolq 
 * @Date: 2019-09-18 10:22:04 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-18 15:16:48
 */
/**
 * 题目描述
输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
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
    console.log(root.val, curDepth, maxDepth)
    if(root.left !== null) maxDepth = Search(root.left, curDepth, maxDepth)
    if(root.right !== null) maxDepth = Search(root.right, curDepth, maxDepth)
    return maxDepth
}

pRoot = new TreeNode(1)
pRoot.left = new TreeNode(2)
pRoot.right = new TreeNode(3)
pRoot.left.left = new TreeNode(4)
pRoot.left.right = new TreeNode(5)
pRoot.right.right = new TreeNode(6)
pRoot.left.right.left = new TreeNode(7)
console.log(TreeDepth(pRoot))