package 调整数组顺序使奇数位于偶数前面;

/**
 * @Author Zhaolq
 * @Date: 2019/9/1 19:48
 * @Version 1.0
 */

/**
 * 题目描述
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * 解题思路：
 * 用两个指针i,j指向数组，当i指向偶数，j指向奇数时，将i到j之间的数向后移动一位，再将array[i] = array[j]
 */
public class Solution {
    public static void reOrderArray(int[] array) {
        int N = array.length;
        for (int i = 0, j = 1; i < N && j < N;) {
            if (array[i] % 2 != 0) {
                i++;
                j++;
            } else {
                if (array[j] % 2 != 0) {
                    int temp = array[j];
                    for (int k = j; k > i; k--) {
                        array[k] = array[k - 1];
                    }
                    array[i] = temp;
                } else {
                    j++;
                }
            }
        }

        for (int i :
                array) {
            System.out.println(i);
        }
    }

    public static void main(String[] args) {
        int[] array = {5,2,3,4,5};
        reOrderArray(array);
    }
}
