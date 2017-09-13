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
    console.log(values);
    for (let i = 0; i < values.length; i++) {
      let current = values[i];
      if (i === values.length - 1) {
        console.log(current);
      } else {
        console.log(current + '\n');
      }
    }
}

// let head = {value: 1, next: {value: 2, next: {value: 3, next: null}}};

// print(head); // => '1 \n 2 \n 3'



