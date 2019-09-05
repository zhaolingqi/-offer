package 树的子结构;

/**
 * @Author Zhaolq
 * @Date: 2019/9/4 15:54
 * @Version 1.0
 */
/**
 public class TreeNode {
 int val = 0;
 TreeNode left = null;
 TreeNode right = null;

 public TreeNode(int val) {
 this.val = val;

 }
 }
 */
import 重建二叉树.TreeNode;

/**
 * 题目描述
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */
public class Solution {
    public static boolean HasSubtree(TreeNode root1, TreeNode root2) {
        if (root2 == null) return false;
        if (root1 == null) return false;
        TreeNode temp = get(root2, root1);
        System.out.println("temp:" + temp.val + "  " + root2.val);
        if (temp == null) return false;
        return hasSameChildren(temp, root2);
    }

    /**
     * 查找root2的根结点在root1中的位置
     * @param x
     * @return
     */
    private static TreeNode get(TreeNode x, TreeNode root1) {
        TreeNode h = new TreeNode(0);
        if (root1 == null) return null;
        if (x.val < root1.val) h = get(x, root1.left);
        else if (x.val > root1.val) h = get(x, root1.right);
        else h = root1;
        return h;
    }
    private static boolean hasSameChildren(TreeNode x1, TreeNode x2) {
        if ((x1 == null && x2 != null)||(x1 != null && x2 == null)) return false;
        if (x1 == null && x2 == null) return true;
        if (x1.val == x2.val) {
            return hasSameChildren(x1.left,x2.left) && hasSameChildren(x1.right, x2.right);
        }
        return false;
    }

    public static void main(String[] args) {
        TreeNode x1 = new TreeNode(10);
        x1.left = new TreeNode(7);
        x1.left.left = new TreeNode(5);
        x1.left.left.left = new TreeNode(3);
        x1.left.right = new TreeNode(8);
        x1.right = new TreeNode(15);
        TreeNode x2 = new TreeNode(7);
        x2.left = new TreeNode(5);
        x2.left.left = new TreeNode(3);
        x2.right = new TreeNode(13);
        x2 = null;
//        System.out.println(x2.left.val);
        System.out.println(HasSubtree(x1,x2));
    }

}
