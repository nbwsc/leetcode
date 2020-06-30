/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let output = new ListNode();
    let vo = output;
    let jw = 0;
    for (let i = 0; ; i++) {
        vo.val = l1.val + l2.val + jw;
        if (vo.val >= 10) {
            vo.val -= 10;
            jw = 1;
        } else {
            jw = 0;
        }
        if (!l1.next && !l2.next && !jw) {
            break;
        }
        l1 = l1.next || new ListNode();
        l2 = l2.next || new ListNode();
        vo.next = new ListNode();
        vo = vo.next;
    }
    return output;
};
