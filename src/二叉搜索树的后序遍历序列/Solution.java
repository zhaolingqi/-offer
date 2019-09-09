package 二叉搜索树的后序遍历序列;

/**
 * @Author Zhaolq
 * @Date: 2019/9/9 9:27
 * @Version 1.0
 */

/**
 * 题目描述
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 * 二叉搜索树: 左子树 < 根 < 右子树
 * 后序遍历：左 右 根
 */
public class Solution {
    public static boolean VerifySquenceOfBST(int[] sequence) {
        if (sequence == null) return false;
        int N = sequence.length;
        if (N == 0) return false;
        System.out.println(N);
        int root = sequence[N - 1];
        int k = -1;
        for (int i = N - 1; i >= 0 ; i--) {
            if (sequence[i] < root) {
                k = i;
                break;
            }
        }
        if (VerifyLess(sequence, 0, k, root) && VerifyMore(sequence, k + 1, N - 2, root)) {
            return VerifySquenceOfBST(sequence, 0, k) && VerifySquenceOfBST(sequence, k + 1, N - 2);
        }
        return false;
    }

    private static boolean VerifySquenceOfBST(int[] sequence, int lo, int hi) {
        if (lo >= hi) return true;
        int root = sequence[hi];
        int k = lo - 1;
        for (int i = hi - 1; i >= lo ; i--) {
            if (sequence[i] < root) {
                k = i;
                break;
            }
        }
        if (VerifyLess(sequence, lo, k, root) && VerifyMore(sequence, k + 1, hi - 1, root)) {
            return VerifySquenceOfBST(sequence, lo, k) && VerifySquenceOfBST(sequence, k + 1, hi - 1);
        }
        return false;
    }

    private static boolean VerifyLess(int[] sequence, int lo, int hi, int root) {
        for (int i = lo; i <= hi; i++) {
            if (sequence[i] < root) continue;
            else return false;
        }
        return true;
    }
    private static boolean VerifyMore(int[] sequence, int lo, int hi, int root) {
        for (int i = lo; i <= hi; i++) {
            if (sequence[i] > root) continue;
            else return false;
        }
        return true;
    }

    public static void main(String[] args) {
//        int[] seq = {5,7,8,10,9,12,15,14,11};
        int[] seq = null;
        System.out.println(VerifySquenceOfBST(seq));
    }
}
