/**
 * 合并两个有序链表（简单类别下第7题，全部类别下第21题）
 * 描述:
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */

/**
 * 这道题我也没什么思路，借鉴别人的
 * 关于js链表相关的知识接触得比较少，以后加强！
 * 代码执行时间为80ms，超过97.34%的js提交
 */


var mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(-1);
  let c3 = l3;
    while(l1 !== null && l2 !== null) {
    if(l1.val <= l2.val) {
      c3.next = l1;
      l1 = l1.next;
    } else {
      c3.next = l2;
      l2 = l2.next;
    }
    c3 = c3.next;
  }
  c3.next = (l1===null) ? l2 : l1;
  return l3.next;
};