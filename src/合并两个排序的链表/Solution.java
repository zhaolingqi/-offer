package 合并两个排序的链表;

/**
 * @Author Zhaolq
 * @Date: 2019/9/2 15:31
 * @Version 1.0
 */

import 从尾到头打印链表.ListNode;

/**
 * 题目描述
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */
public class Solution {
    public static ListNode Merge(ListNode list1, ListNode list2) {
        if (list1 == null) return list2;
        if (list2 == null) return list1;
        ListNode head = new ListNode(0);
        ListNode temp = head;
        while (!(list1 == null && list2 == null)) {
            if (list1 != null && list2 != null) {
                if (list1.val <= list2.val) {
                    temp.next = list1;
                    list1 = list1.next;
                    temp = temp.next;
                } else {
                    temp.next = list2;
                    list2 = list2.next;
                    temp = temp.next;
                }
            } else if (list1 != null && list2 == null) {
                temp.next = list1;
                list1 = list1.next;
                temp = temp.next;
            } else {
                temp.next = list2;
                list2 = list2.next;
                temp = temp.next;
            }
        }
//        temp.next = null;
        head = head.next;
        return head;
    }

    public static void main(String[] args) {
        ListNode list1 = new ListNode(3);
        list1.next = new ListNode(5);
        list1.next.next = null;
        ListNode list2 = new ListNode(4);
        list2.next = null;
//        ListNode head = new ListNode(0);
//        ListNode temp = head;
//        temp.next = list1;
//        list1 = list1.next;
//        temp = temp.next;
//        temp.next = list1;
//        System.out.println(head.next.next.val);
        ListNode node = Merge(list1, list2);
        System.out.println(node.next.val);
    }
}
