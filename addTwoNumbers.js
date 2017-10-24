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
    }
    const sum = +getDigits(l1) + +getDigits(l2), reverseSum = sum.toString().split('').reverse().join('');
    const resultList = new ListNode(+reverseSum[0]);
    resultList.next = new ListNode(+reverseSum[1]);
    let i = 2;
    while (reverseSum[i]) {
        resultList.next.next = new ListNode(reverseSum[i]);
        i++;
    }
    return JSON.stringify(resultList); // in order to better see the result; to simply return resultList would otherwise suffice
};