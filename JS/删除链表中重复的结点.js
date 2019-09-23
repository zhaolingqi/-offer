/**
 * 题目描述
在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 */
function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead) {
    if(pHead === null) return null
    if(pHead.next === null) return pHead
    var pre = pHead
    var cur = pHead
    while(cur !== null && cur.next !== null) {
        if(cur.val !== cur.next.val) {
            pre = cur
            cur = cur.next
        } else {
            var newHead = cur
            while(newHead.next !== null && newHead.val === newHead.next.val) {
                newHead = newHead.next
            }
            if(newHead.next === null) {
                if(cur === pre) return null
                pre.next = null
                return pHead
            } else {
                if(cur === pre) {
                    pHead = newHead.next
                    cur = pHead
                    pre = pHead
                    continue
                }
                pre.next = newHead.next
                cur = pre.next
            }
        }
    }
    // while(pHead !== null && pHead.next !== null) {
    //     if(pHead.val !== pHead.next.val) {
    //         pre = pHead
    //         pHead = pHead.next
    //     } else {
    //         var newHead = pHead
    //         while(newHead.next !== null && newHead.val === newHead.next.val) {
    //             newHead = newHead.next
    //         }
    //         if(newHead.next === null) {
    //             if(pre === pHead) return null
    //             pre.next = null
    //             return pre
    //         } else {
    //             if(pre === pHead) {
    //                 pHead = newHead.next
    //                 head = pHead
    //                 continue
    //             }
    //             newHead = newHead.next
    //             pre.next = newHead
    //             pHead = pre.next
    //             continue
    //         }
    //     }
    // }
    return pHead
}
var x = new ListNode(1)
x.next = new ListNode(1)
x.next.next = new ListNode(2)
x.next.next.next = new ListNode(2)
console.log(deleteDuplication(x))