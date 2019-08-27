package 跳台阶;

/**
 * @Author Zhaolq
 * @Date 2019/8/27 16:07
 * @Version 1.0
 */
/**
 * 跳台阶
 * 题目描述
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 * 解题思路： 斐波那契数列，使用迭代法计算
 */
public class Solution {
    public int JumpFloor(int target) {
        if (target == 1) return 1;
        if (target == 2) return 2;
        int cnt = 0;
        int temp1 = 1;
        int temp2 = 2;
        for (int i = 2; i < target; i++) {
            cnt = temp1 + temp2;
            temp1 = temp2;
            temp2 = cnt;
        }
        return cnt;
    }
}
