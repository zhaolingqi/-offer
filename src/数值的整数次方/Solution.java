package 数值的整数次方;

/**
 * @Author Zhaolq
 * @Date: 2019/9/1 18:58
 * @Version 1.0
 */

/**
 * 题目描述
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 * 保证base和exponent不同时为0
 */
public class Solution {
    public static double Power(double base, int exponent) {
        if (base == 0) return 0;
        if (exponent == 0) return 1;
        double result = 0.0;
        if (exponent < 0) {
            exponent = - exponent;
            base = 1 / base;
            for (int i = 0; i < exponent; i++) {
                if (result == 0) {
                    result = base;
                } else result *= base;
            }
        } else {
            for (int i = 0; i < exponent; i++) {
                if (result == 0) {
                    result = base;
                } else result *= base;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(Power(-2,3));
    }
}
