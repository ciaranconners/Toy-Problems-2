/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const addTwoNumbers = (l1, l2) => {
    const getDigits = (l) => {
        let result = [];
        if (l && l.val) {
            result.push(l.val);
        }
        if (l.next) {
            result = result.concat(getDigits(l.next));
        }
        return result.join('');
    };
    let sum = +getDigits(l1) + +getDigits(l2);
    sum = sum.toString().split('');
    const resultList = new ListNode(+sum[0]);
    resultList.next = new ListNode(+sum[1]);
    let i = 2;
    while (sum[i]) {
        resultList.next.next = new ListNode(+sum[i]);
        i++;
    }
    return resultList;
};