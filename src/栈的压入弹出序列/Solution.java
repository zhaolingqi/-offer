package 栈的压入弹出序列;

/**
 * @Author Zhaolq
 * @Date: 2019/9/5 14:54
 * @Version 1.0
 */

import java.time.chrono.IsoChronology;
import java.util.Stack;

/**
 * 题目描述
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。
 * 例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
 */
public class Solution {
    public static boolean IsPopOrder(int[] pushA, int[] popA) {
        int N = pushA.length;
        if (N == 0) return false;
        Stack<Integer> st = new Stack<>();
        int i = 0;
        int j = 0;
        st.push(pushA[i++]);
        while (i <= N && j < N) {
            if (st.peek() != popA[j]) {
                if (i == N) {
                    i++;
                    break;
                }
                st.push(pushA[i]);
                i++;
                continue;
            }
            else if (st.peek() == popA[j]) {
                st.pop();
                j++;
                continue;
            }
        }
        if (i == N) return true;
        return false;
    }

    public static void main(String[] args) {
        int[] pushA = {1,2,3,4,5};
        int[] popA = {4,5,3,2,1};
        System.out.println(IsPopOrder(pushA, popA));
    }
}
