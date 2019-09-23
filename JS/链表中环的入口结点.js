/**
 * 题目描述
给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 */
// 双指针 fast low 
// fast 每次跳两个，low每次指向下一个，如果有环，则fast和low会相遇，否则fast会先到链尾
function ListNode(x){
    this.val = x;
    this.next = null;
}
function EntryNodeOfLoop(pHead) {
    if(pHead === null) return null
    var myMap = new Map()
    var cur = pHead
    while(cur !== null) {
        if(!myMap.has(cur)) {
            myMap.set(cur, 1)
            cur = cur.next
        } else {
            return cur
        }
    }
}