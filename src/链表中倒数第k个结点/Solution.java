package 链表中倒数第k个结点;

/**
 * @Author Zhaolq
 * @Date: 2019/9/2 13:54
 * @Version 1.0
 */


import 从尾到头打印链表.ListNode;

import java.util.Stack;

/**
 * 题目描述
 * 输入一个链表，输出该链表中倒数第k个结点。
 *
 */
public class Solution {
    public ListNode FindKthToTail(ListNode head, int k) {
        Stack<ListNode> st = new Stack<>();
        ListNode pop = new ListNode(0);
        if (head == null) return null;
        ListNode temp = head;
        while (temp != null) {
            st.push(temp);
            temp = temp.next;
        }
        int count = 0;
        while (!st.isEmpty()) {
            count++;
            pop = st.pop();
            if (count == k) {
                return pop;
            }
        }
        return null;
    }

}
