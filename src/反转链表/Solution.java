package 反转链表;

/**
 * @Author Zhaolq
 * @Date: 2019/9/2 14:33
 * @Version 1.0
 */

import 从尾到头打印链表.ListNode;

import java.util.Stack;

/**
 * 题目描述
 * 输入一个链表，反转链表后，输出新链表的表头。
 */
public class Solution {
    public ListNode ReverseList(ListNode head) {
        Stack<ListNode> st = new Stack<>();
        if (head == null) return null;
        ListNode temp = head;
        while (temp != null) {
            st.push(temp);
            temp = temp.next;
        }
        ListNode newHead = st.pop();
        temp = newHead;
        while (!st.isEmpty()) {
            temp.next = st.pop();
            temp = temp.next;
        }
        temp.next = null;
        return newHead;
    }
}
