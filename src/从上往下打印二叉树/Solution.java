package 从上往下打印二叉树;

import 重建二叉树.TreeNode;

import java.util.ArrayList;

/**
 * @Author Zhaolq
 * @Date: 2019/9/8 14:15
 * @Version 1.0
 */

/**
 * 题目描述
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * 解题思路 构建一个队列，将树的结点依次放入
 */
public class Solution {
    public static ArrayList<Integer> PrintFromTopToBottom(TreeNode root) {
        ArrayList<Integer> array = new ArrayList<>();
        ArrayList<TreeNode> queue = new ArrayList<>();
        if (root == null) return array;
        queue.add(root);
        while(queue.size() != 0) {
            root = queue.remove(0);
            if (root.left != null)
                queue.add(root.left);
            if (root.right != null)
                queue.add(root.right);

            array.add(root.val);
        }
        return array;
    }


    public static void main(String[] args) {
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(3);
        root.right = new TreeNode(4);
        root.right.right = new TreeNode(11);
        root.left.left = new TreeNode(5);
        root.left.left.left = new TreeNode(9);
        root.left.right = new TreeNode(7);
        ArrayList<Integer> temp = PrintFromTopToBottom(root);
        for (int i :
                temp) {
            System.out.println(i);
        }
    }

}
