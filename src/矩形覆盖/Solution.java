package 矩形覆盖;

/**
 * @Author Zhaolq
 * @Date: 2019/9/1 16:17
 * @Version 1.0
 */

/**
 * 题目描述
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * f(n) = f(n - 1) + f(n - 2)
 */
public class Solution {
    public static int RectCover(int target) {
        if (target <= 0) return 0;
        if (target == 1) return 1;
        if (target == 2) return 2;

        return RectCover(target - 1) + RectCover(target - 2);
    }

    public static void main(String[] args) {
        System.out.println(RectCover(5));
    }
}
