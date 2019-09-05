package 二叉树的镜像;

import 重建二叉树.TreeNode;

/**
 * @Author Zhaolq
 * @Date: 2019/9/5 10:44
 * @Version 1.0
 */

/**
 * 题目描述
 * 操作给定的二叉树，将其变换为源二叉树的镜像。
 */
public class Solution {
    public void Mirror(TreeNode root) {
        root = subChange(root);
    }
    private TreeNode subChange(TreeNode x) {
        if (x == null) return null;
        if (!(x.left == null && x.right == null)) {
            TreeNode temp = x.left;
            x.left = x.right;
            x.right = temp;
        }
        x.left = subChange(x.left);
        x.right = subChange(x.right);
        return x;
    }
}
