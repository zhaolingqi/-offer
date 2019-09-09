package 复杂链表的复制;

/**
 * @Author Zhaolq
 * @Date: 2019/9/9 14:43
 * @Version 1.0
 */

/**
 * 题目描述
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
 * 返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */
public class Solution {
    public  RandomListNode Clone(RandomListNode pHead) {
        if (pHead == null) return null;
        RandomListNode newHead = new RandomListNode(pHead.label);
        RandomListNode newHeadtemp = newHead;
        if (pHead.random != null){
            newHeadtemp.random = new RandomListNode(pHead.random.label);
        }
        while (pHead.next != null) {
            pHead = pHead.next;
            newHeadtemp.next = new RandomListNode(pHead.label);
            newHeadtemp = newHeadtemp.next;
            if (pHead.random != null){
                newHeadtemp.random = new RandomListNode(pHead.random.label);
            }
        }
        return newHead;
    }

//    public static void main(String[] args) {
//        RandomListNode x = new RandomListNode(1);
//        x.next = new RandomListNode(2);
//        x.random = new RandomListNode(454);
//        x.next.next = new RandomListNode(3);
//        x.next.random = new RandomListNode(121);
//        RandomListNode y = Clone(x);
//        y.label = 113;
//        System.out.println(y.label);
//    }

}
