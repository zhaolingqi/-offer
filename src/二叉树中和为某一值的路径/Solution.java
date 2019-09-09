package 二叉树中和为某一值的路径;

import sun.reflect.generics.tree.Tree;
import 重建二叉树.TreeNode;

import java.util.ArrayList;
import java.util.Comparator;

/**
 * @Author Zhaolq
 * @Date: 2019/9/9 10:32
 * @Version 1.0
 */

/**
 * 题目描述
 * 输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
 */
public class Solution {
    public static ArrayList<ArrayList<Integer>> FindPath(TreeNode root, int target) {
        if (root == null) return new ArrayList<ArrayList<Integer>>();
        if (target - root.val < 0) return null;
        ArrayList<ArrayList<Integer>> pathArray = new ArrayList<ArrayList<Integer>>();
        ArrayList<Integer> path = new ArrayList<>();
        path.add(root.val);
        if (target - root.val == 0) {
            pathArray.add(path);
            return pathArray;
        }
        pathArray = FindPath(pathArray, path, root.left, target - root.val);
        pathArray = FindPath(pathArray, path, root.right, target - root.val);
        pathArray.sort(new Comparator<ArrayList<Integer>>() {
            @Override
            public int compare(ArrayList<Integer> a1, ArrayList<Integer> a2) {
                    int i = a1.size() > a2.size() ? -1 : 1;
                    return i;
            }
        });
        return pathArray;
    }

    private static ArrayList<ArrayList<Integer>> FindPath(ArrayList<ArrayList<Integer>> pathArray, ArrayList<Integer> path, TreeNode x, int target) {
        if (x == null) return pathArray;
        if (target - x.val < 0) return pathArray;
        ArrayList<Integer> newPath = new ArrayList<>(path);
        if (target - x.val > 0) {
            newPath.add(x.val);
            pathArray = FindPath(pathArray, newPath, x.left, target - x.val);
            pathArray = FindPath(pathArray, newPath, x.right, target - x.val);
        } else if (target - x.val == 0) {
            if (x.left == null && x.right == null) {
                newPath.add(x.val);
                pathArray.add(newPath);
            }
        }
        return pathArray;
    }

    public static void main(String[] args) {
        TreeNode x = new TreeNode(10);
        x.left = new TreeNode(5);
        x.right = new TreeNode(12);
        x.left.left = new TreeNode(4);
        x.left.right = new TreeNode(7);
        ArrayList<ArrayList<Integer>> pathArray = FindPath(x, 15);
        for (ArrayList<Integer> arr :
                pathArray) {
            for (int i = 0; i < arr.size(); i++) {
                System.out.print(arr.get(i) + "  ");
            }
            System.out.println("  ");
        }
    }
}
