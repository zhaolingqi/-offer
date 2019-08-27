package 用两个栈实现队列;

import java.util.Stack;

/**
 * @Author Zhaolq
 * @Date 2019/8/27 16:07
 * @Version 1.0
 */
/**
 * 用两个栈实现队列
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * 解题思路：push操作将数据push到stack1，当pop时，
 * 若stack2为空，将stack1中的元素pop出stack1，push到stack2，再返回stack2.pop()
 * 若stack2不为空，直接返回stack2.pop()
 */
public class Solution {
    Stack<Integer> stack1 = new Stack<Integer>();
    Stack<Integer> stack2 = new Stack<Integer>();

    public void push(int node) {
        stack1.push(node);
    }

    public int pop() {
        if (!stack2.isEmpty()) return stack2.pop();
        else if (stack2.isEmpty()){
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
            return stack2.pop();
        }
        return stack1.pop();
    }
}
