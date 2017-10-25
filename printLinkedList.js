function print(head) {
  function traverse(head) {
    let result = [];
    if (head) {
      result.push(head.value);
      if (head.next) {
        result = result.concat(traverse(head.next));
      }
    }
    return result;
  }
  let values = traverse(head);
  for (let i = 0; i < values.length; i++) {
    let current = values[i];
    if (i === values.length - 1) {
      console.log(current);
    } else {
      console.log(current + '\n');
    }
  }
}
