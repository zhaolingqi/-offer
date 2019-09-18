/*
 * @Author: Zhaolq 
 * @Date: 2019-09-17 18:02:33 
 * @Last Modified by: Zhaolq
 * @Last Modified time: 2019-09-18 09:41:37
 */

 /**
  * 题目描述
输入两个链表，找出它们的第一个公共结点。
  */

function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindFirstCommonNode(pHead1, pHead2) {
  var arr1 = []
  var arr2 = []
  if (pHead1 === pHead2) return pHead1
  while(pHead1 !== null) {
    arr1.push(pHead1)
    pHead1 = pHead1.next
  }
  while(pHead2 !== null) {
    arr2.push(pHead2)
    pHead2 = pHead2.next
  }
  var node1Pre = null
  var node2Pre = null
  while(arr1.length !== 0 && arr2.length !== 0) {
    let temp1 = arr1.pop()
    let temp2 = arr2.pop()
    if(temp1 !== temp2) return node1Pre
    node1Pre = temp1
    node2Pre = temp2
  }
  return node1Pre
}

var a = new ListNode(2)
var b = new ListNode(2)
var c = new ListNode(3)
a.next = c
b.next = c
console.log(a.next === b.next)