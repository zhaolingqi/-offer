/*
 * @Author: Zhaolq 
 * @Date: 2019-09-21 15:27:06 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-21 16:17:24
 */
/**
 * 题目描述
请实现一个函数，用来判断一颗二叉树是不是对称的。
注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 */
// 求出二叉树的镜像，判断是否相同
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function isSymmetrical(pRoot) {
    if(pRoot === null) return true
    // var mirrorRoot = Mirror(pRoot)
    // 遍历，将树放入数组或堆栈中进行比较
    // var arr1 = InOrderTraverse(pRoot, arr1)
    // var arr2 = InOrderTraverse(mirrorRoot, arr2)
    // for(let i = 0; i < arr1.length; i++) {
    //     if(arr1[i] !== arr2[i]) return false
    // }
    // return true
    // return InOrderTraverse(pRoot, mirrorRoot)
    return InOrder(pRoot.left, pRoot.right)
}

function InOrder(left, right) {
    if(left === null && right === null) return true
    if(left === null || right === null) return false
    if(left.val !== right.val) return false
    return InOrder(left.left,right.right) && InOrder(left.right, right.left)
}

// function InOrderTraverse(root, mirrorRoot) {
//     var flag1 = true
//     var flag2 = true
//     var flag = true
//     if(root !== null || mirrorRoot !== null) {
//         flag1 = InOrderTraverse(root.left, mirrorRoot.left)
//         console.log(root.val, mirrorRoot.val)
//         if(root !== mirrorRoot) flag = false
//         flag2 = InOrderTraverse(root.right, mirrorRoot.right)
//     }
//     return flag && flag1 && flag2
// }

// function Mirror(root) {
//     return subChange(root)
// }
// function subChange(x) {
//     if(x === null) return null
//     if(x.left !== null || x.right !== null) {
//         var temp = x.left
//         x.left = x.right
//         x.right = temp
//     }
//     x.left = subChange(x.left)
//     x.right = subChange(x.right)
//     return x
// }
var x = new TreeNode(8)
x.left = new TreeNode(6)
x.right = new TreeNode(9)
x.left.left = new TreeNode(5)
x.left.right = new TreeNode(7)
x.right.left = new TreeNode(7)
x.right.right = new TreeNode(5)
console.log(isSymmetrical(x))
