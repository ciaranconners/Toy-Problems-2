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
    const n1 = convertListToDigits(l1).reverse().join('');
    const n2 = convertListToDigits(l2).reverse().join('');
    const sum = parseInt(n1, 10) + parseInt(n2, 10);
    console.log(n1, n2, sum);
    return convertNumberToList(sum);
};

function convertListToDigits(list) {
    let digits = [];
    digits.push(parseInt(list.val, 10));
    if (list.next) {
        digits = digits.concat(convertListToDigits(list.next));
    }
    return digits;
}

function convertNumberToList(number) {
    const digits = number.toString().split('').reverse().map(el => parseInt(el, 10));
    const list = new ListNode(digits[0]);
    if (digits.length > 1) {
        let currentNode = list;
        for (let i = 1; i < digits.length; i++) {
            const newNode = new ListNode(digits[i]);
            currentNode.next = newNode;
            currentNode = newNode;
        }
    }
    return list;
}


/* a previous, less modular solution to this problem:
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
}; */
