/**
 * 题目描述
给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 */
function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}
/**
 * 中序遍历  左根右
 * pNode有右子树，那么下一个结点就是pNode右子树最左的结点
 * pNode没有右子树
 *      若pNode为父结点的左结点，则下一个结点是父结点
 *      若pNode为父节点的右结点， 则向上找父节点，直到其中一个父节点是它的父节点的左孩子
 * @param {*} pNode 
 */
function GetNext(pNode) {
    if(pNode === null) return null
    if(pNode.right !== null) {
        pNode = pNode.right
        while(pNode.left !== null) {
            pNode = pNode.left
        }
        return pNode
    }
    while(pNode.next !== null) {
        if(pNode.next.left === pNode) return pNode.next
        pNode = pNode.next
    }
    return pNode.next
}