/*
 * @Author: Zhaolq 
 * @Date: 2019-09-21 20:29:58 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-21 21:10:31
 */
/**
 * 题目描述
给定一棵二叉搜索树，请找出其中的第k小的结点。
例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。
 */
// 中序遍历二叉搜索树

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function KthNode(pRoot, k) {
    if(pRoot === null) return null
    if(k < 1) return null
    var arr = []
    arr = InorderTraversal(pRoot, arr)
    if(k > arr.length) return null
    return(arr[k - 1])
}

function InorderTraversal(root, arr) {
    if(root === null) return arr
    else {
        arr = InorderTraversal(root.left, arr)
        arr.push(root)
        arr = InorderTraversal(root.right, arr)
    }
    return arr
}

var x = new TreeNode(8)
x.left = new TreeNode(6)
x.right = new TreeNode(10)
x.left.left = new TreeNode(5)
x.left.right = new TreeNode(7)
x.right.left = new TreeNode(9)
x.right.right = new TreeNode(11)
KthNode(x, 2)

