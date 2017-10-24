describe('addTwoNumbers', () => {

  it('it should return a linked list representing the sum of the two input integers each represented as a linked list', () => {


    const list1 = new ListNode(1);
    list1.next = new ListNode(1);
    list1.next.next = new ListNode(1);

    const list2 = new ListNode(1);
    list2.next = new ListNode(1);
    list2.next.next = new ListNode(1);

    const expected = JSON.parse('{"val":2,"next":{"val":2,"next":{"val":2,"next":null}}}');

    expect(addTwoNumbers(list1, list2)).to.eql(expected);
  });
});