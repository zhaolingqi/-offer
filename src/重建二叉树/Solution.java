package 重建二叉树;

/**
 * @Author Zhaolq
 * @Date 2019/8/27 16:07
 * @Version 1.0
 */
/**
 * Definition for binary tree
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
/**
 * 重建二叉树
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 * 前序遍历（根--左--右）
 * 中序遍历（左--根--右）
 * 后序遍历（左--右--根）
 * 解题思路：前序第一个元素为根结点，然后利用在中序遍历中根结点位置区分出左右子树，再不断递归
 */
public class Solution {
    public TreeNode reConstructBinaryTree(int [] pre,int [] in) {
        if (pre.length == 1) {
            TreeNode end = new TreeNode(pre[0]);
            end.left = null;
            end.right = null;
            return end;
        }
        if (pre.length == 0) return null;
        TreeNode root = new TreeNode(pre[0]);
        root.val = pre[0];
        int length = 0;
        for (length = 0; length < in.length; length++) {
            if (in[length] == pre[0]) break;
        }
        int[] newl_pre = new int[length];
        int[] newl_in = new int[length];
        for (int i = 0; i < length; i++) {
            newl_pre[i] = pre[i + 1];
            newl_in[i] = in[i];
        }
        int[] newr_pre = new int[pre.length - length - 1];
        int[] newr_in = new int[pre.length - length - 1];
        for (int i = length + 1, j = 0; i < in.length; i++, j++) {
            newr_pre[j] = pre[i];
            newr_in[j] = in[i];
        }
        root.left = reConstructBinaryTree(newl_pre, newl_in);
        root.right = reConstructBinaryTree(newr_pre, newr_in);
        return root;
    }
}
