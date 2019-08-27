package 变态跳台阶;

/**
 * @Author Zhaolq
 * @Date 2019/8/27 16:07
 * @Version 1.0
 */
/**
 * 变态跳台阶
 * 题目描述
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
public class Solution {
    public int JumpFloorII(int target) {
        if (target == 1) return 1;
        if (target == 0) return 1;
        int cnt = 0;
        for (int i = 0; i < target; i++) {
            cnt += JumpFloorII(i);
        }
        return cnt;
    }
}
