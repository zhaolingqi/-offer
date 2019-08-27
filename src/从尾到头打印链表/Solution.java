package 从尾到头打印链表;

import java.util.ArrayList;
import java.util.Stack;

/**
 * @Author Zhaolq
 * @Date 2019/8/27 16:07
 * @Version 1.0
 */
/**
 * 从尾到头打印链表
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
 * 用栈存储链表遍历数据，实现从尾到头输出
 */
/**
 *    public class ListNode {
 *        int val;
 *        ListNode next = null;
 *
 *        ListNode(int val) {
 *            this.val = val;
 *        }
 *    }
 *
 */
public class Solution {
    public ArrayList<Integer> printListFromTailToHead(ListNode listNode) {
        Stack<Integer> temp = new Stack<Integer>();
        ArrayList<Integer> array = new ArrayList<Integer>();
        if(listNode == null) return array;
        while (listNode != null) {
            temp.push(listNode.val);
            listNode = listNode.next;
        }
        while (!temp.isEmpty()) {
            array.add(temp.pop());
        }
        return array;
    }
}
