package 二叉搜索树与双向链表;

/**
 * @Author Zhaolq
 * @Date: 2019/9/9 15:09
 * @Version 1.0
 */

import 重建二叉树.TreeNode;

/**
 * 题目描述
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
 */
public class Solution {

    TreeNode head = null;
    TreeNode realHead = null;
    public TreeNode Convert(TreeNode pRootOfTree) {
        ConvertSub(pRootOfTree);
        return realHead;
    }

    private void ConvertSub(TreeNode pRootOfTree) {
        if(pRootOfTree==null) return;
        ConvertSub(pRootOfTree.left);
        if (head == null) {
            head = pRootOfTree;
            realHead = pRootOfTree;
        } else {
            head.right = pRootOfTree;
            pRootOfTree.left = head;
            head = pRootOfTree;
        }
        ConvertSub(pRootOfTree.right);
    }


    public static void main(String[] args) {
        TreeNode x = new TreeNode(10);
        x.left = new TreeNode(7);
        x.right = new TreeNode(15);
        x.left.left = new TreeNode(5);
        x.left.left.left = new TreeNode(3);
        x.left.left.right = new TreeNode(6);
        x.left.right = new TreeNode(8);
        x.right = new TreeNode(15);
        x.right.right = new TreeNode(19);
        x.right.right.left = new TreeNode(17);
        LDR(x, x);
    }
}
