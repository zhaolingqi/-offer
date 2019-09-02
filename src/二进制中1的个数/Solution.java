package 二进制中1的个数;

/**
 * @Author Zhaolq
 * @Date: 2019/9/1 16:40
 * @Version 1.0
 */

import java.util.ArrayList;
import java.util.Stack;

/**
 * 题目描述
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 * 将一个整数转化为二进制形式，并保存，统计其中1的个数
 * 判断是否为负数
 * 负数， 将其最高位置0
 */
public class Solution {

    public static int NumberOf1(int n) {
//        if (n >= 0)
        int count = 0;
        Stack<Integer> num = new Stack<>();
        if (n < 0) {
            n = n & 0x7FFFFFFF;
            count++;
        }

        while (n >= 2) {
            num.push(n % 2);
            System.out.println("入栈" + n % 2);
            n = n / 2;
        }
        num.push(n);
        while (!num.isEmpty()) {
            if (num.pop() == 1) {
                count++;
            }
        }

        return count;
    }


    public static void main(String[] args) {

        System.out.println(NumberOf1(1111));
    }

}
