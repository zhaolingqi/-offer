/*
 * @Author: Zhaolq 
 * @Date: 2019-09-21 20:05:27 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-21 20:19:14
 */
/**
 * 题目描述
请实现两个函数，分别用来序列化和反序列化二叉树

二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，
从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，
序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。

二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。
 */
var arr = []
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Serialize(pRoot)
{
    // write code here
    if(pRoot === null) arr.push('#')
    else {
        Serialize(pRoot.left)
        arr.push(pRoot.val)
        Serialize(pRoot.right)
    }
}
function Deserialize(s)
{
    // write code here
    if(s.length < 1) return null
    var node = null
    var array = s.split("")
    var num = array.shift()
    if(typeof num === 'number') {
        node.left = Deserialize(arr)
        node = new TreeNode(num)
        node.right = Deserialize(arr)
    }
    return node
}

// var arr = [];
// function Serialize(pRoot)
// {
//     // write code here
//     if(pRoot === null){
//         arr.push('$');
//         return;
//     }
//     arr.push(pRoot.val);
//     Serialize(pRoot.left);
//     Serialize(pRoot.right);
// }
// function Deserialize(s)
// {
//     // write code here
//     if(arr === null){
//         return null;
//     }
//     if(arr.length < 1){
//         return null;
//     }
//     var root = null;
//     var temp = arr.shift();
//     if(typeof temp === 'number'){
//         root = new TreeNode(temp);
//         root.left = Deserialize(arr);
//         root.right = Deserialize(arr);
//     }
//     return root;
// }