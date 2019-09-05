package 包含min函数的栈;

/**
 * @Author Zhaolq
 * @Date: 2019/9/5 14:06
 * @Version 1.0
 */


import java.util.Stack;

/**
 * 题目描述
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 * 使用两个栈，另一个为辅助栈，栈顶为最小元素
 */
public class Solution {
    private Stack<Integer> st = new Stack<>();
    private Stack<Integer> temp = new Stack<>();
    public void push(int node) {
        if (st.empty()) {
            st.push(node);
            temp.push(node);
        } else {
            if (node <= temp.peek()) {
                temp.push(node);
            }
            st.push(node);
        }
    }

    public void pop() {
        if (!st.isEmpty()) {
            int num = st.pop();
            if (num == temp.peek()) {
                temp.pop();
            }
        }
    }

    public int top() {
        return st.peek();
    }

    public int min() {
        return temp.peek();
    }
}
